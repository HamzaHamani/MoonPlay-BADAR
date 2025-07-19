import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MoonPlay - Premium IPTV Service",
    short_name: "MoonPlay",
    description:
      "Stream 3000+ live TV channels, sports, movies & series with MoonPlay IPTV. HD/4K quality, worldwide content, multi-device support.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/placeholder-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/placeholder-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
