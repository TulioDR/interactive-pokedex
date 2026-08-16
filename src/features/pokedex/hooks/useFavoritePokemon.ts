"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "favorite_pokemon";

export default function useFavoritePokemon(pokemonId: number) {
  const [favorites, setFavorites] = useState<number[]>([]);

  // 1. Cargar favoritos al montar el componente
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (err) {
        console.error("Error parsing favorites from localStorage", err);
      }
    }
  }, []);

  // 2. Comprobar si el Pokémon actual está guardado
  const isSaved = favorites.includes(pokemonId);

  // 3. Función para agregar/quitar un Pokémon por su ID
  const toggleFavorite = (id: number) => {
    setFavorites((prevFavorites) => {
      let updatedFavorites: number[];

      if (prevFavorites.includes(id)) {
        // Si ya está, lo eliminamos
        updatedFavorites = prevFavorites.filter((favId) => favId !== id);
      } else {
        // Si no está, lo agregamos
        updatedFavorites = [...prevFavorites, id];
      }

      // Persistimos en localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return {
    isSaved,
    favorites,
    toggleFavorite: () => pokemonId !== undefined && toggleFavorite(pokemonId),
  };
}
