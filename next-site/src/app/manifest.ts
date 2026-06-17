import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Breasts-Implants.com",
    short_name: "Implant Guide",
    description:
      "Independent breast implant patient education and decision support.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7faf9",
    theme_color: "#123d4a",
  };
}
