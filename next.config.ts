import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
   reactCompiler: true,
   allowedDevOrigins: ["192.168.0.105", "192.168.1.3"],
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "raw.githubusercontent.com",
            pathname: "/PokeAPI/sprites/master/sprites/pokemon/**",
         },
      ],
   },
};

export default nextConfig;
