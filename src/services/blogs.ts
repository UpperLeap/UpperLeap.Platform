import { BASE_URL } from "@/constants/api";
import { Blog } from "@/types/blog";

export async function getBlogs() {
  const response = await fetch(`${BASE_URL}/blogs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch blogs", {
      cause: data,
    });
  }

  return data as Blog[];
}

export async function getBlogBySlug(slug: string) {
  const response = await fetch(`${BASE_URL}/blogs/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return null;
  }

  const data = await response?.json();

  return data as Blog;
}
