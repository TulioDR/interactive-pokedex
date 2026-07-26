import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   reactCompiler: true,
   allowedDevOrigins: [
      "172.18.0.2",
      '192.168.0.104',
      "192.168.0.102",
      "172.29.240.1",
      "192.168.1.4",
   ],
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "raw.githubusercontent.com",
            pathname: "/PokeAPI/sprites/master/sprites/pokemon/**",
         },
      ],
      unoptimized: true,
   },
};

export default nextConfig;