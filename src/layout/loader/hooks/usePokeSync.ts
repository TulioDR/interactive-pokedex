import { useState, useEffect } from "react";

export function usePokeSync() {
   const [syncedData, setSyncedData] = useState<any[]>([]);
   const [syncProgress, setSyncProgress] = useState(0);
   const [isSyncing, setIsSyncing] = useState(false);

   useEffect(() => {
      async function syncDatabase() {
         // 1. Check if we already did this heavy lifting in a previous session
         const cached = localStorage.getItem("poke_sandbox_db");
         if (cached) {
            setSyncedData(JSON.parse(cached));
            return;
         }

         // 2. If no cache exists, begin the one-time master synchronization
         setIsSyncing(true);
         try {
            // Fetch the lean master list containing the total count (up to Generation 9)
            const res = await fetch(
               "https://pokeapi.co/api/v2/pokemon?limit=1025",
            );
            const masterList = await res.json();

            const fullDatabase: any[] = [];
            const batchSize = 50; // Fetch 50 at a time so we don't trip the API rate-limits

            for (let i = 0; i < masterList.results.length; i += batchSize) {
               const chunk = masterList.results.slice(i, i + batchSize);

               // Download this specific batch in parallel
               const chunkDetails = await Promise.all(
                  chunk.map(async (item: any) => {
                     try {
                        // Fetch Core Data (Image, Types, ID)
                        const dRes = await fetch(item.url);
                        const d = await dRes.json();

                        // Fetch Species Data (Original Japanese Name)
                        const speciesRes = await fetch(d.species.url);
                        const speciesData = await speciesRes.json();

                        const jaNameObj = speciesData.names.find(
                           (n: any) => n.language.name === "ja-hrkt",
                        );

                        // Construct our clean, ultra-light local object representation
                        return {
                           id: d.id,
                           name: d.name,
                           original_name: jaNameObj ? jaNameObj.name : "",
                           image: d.sprites.other["official-artwork"]
                              .front_default,
                           types: d.types.map((t: any) => t.type.name),
                        };
                     } catch (e) {
                        return null; // Safeguard if a single network request fails
                     }
                  }),
               );

               // Append successfully fetched data to our database array
               fullDatabase.push(...chunkDetails.filter(Boolean));

               // Update the UI progress bar percentage
               const progress = Math.round(
                  (fullDatabase.length / masterList.results.length) * 100,
               );
               setSyncProgress(progress);
            }

            // 3. Save the full database to LocalStorage for instant future loads
            localStorage.setItem(
               "poke_sandbox_db",
               JSON.stringify(fullDatabase),
            );
            setSyncedData(fullDatabase);
         } catch (error) {
            console.error("Local database sync crashed:", error);
         } finally {
            setIsSyncing(false);
         }
      }

      syncDatabase();
   }, []);

   return { syncedData, syncProgress, isSyncing };
}
