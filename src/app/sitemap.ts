import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "/", lastModified: new Date().toISOString() },
    { url: "/about", lastModified: new Date().toISOString() },
    { url: "/blogs", lastModified: new Date().toISOString() },
    { url: "/careers", lastModified: new Date().toISOString() },
    { url: "/privacy-policy", lastModified: new Date().toISOString() },
    { url: "/dashboard", lastModified: new Date().toISOString() },
    { url: "/dashboard/orders", lastModified: new Date().toISOString() },
    { url: "/blogs/:blogSlug", lastModified: new Date().toISOString() },
    {
      url: "/dashboard/orders/:orderId",
      lastModified: new Date().toISOString(),
    },
    {
      url: "/dashboard/booster/:boosterUsername",
      lastModified: new Date().toISOString(),
    },
    { url: "/:gameName", lastModified: new Date().toISOString() },
    { url: "/:gameName/boosting", lastModified: new Date().toISOString() },
    { url: "/:gameName/rank-boost", lastModified: new Date().toISOString() },
    { url: "/:gameName/win-boost", lastModified: new Date().toISOString() },
    { url: "/:gameName/unrated-boost", lastModified: new Date().toISOString() },
    {
      url: "/:gameName/placement-boost",
      lastModified: new Date().toISOString(),
    },
  ];
}
