// import { useTranslations } from "next-intl";
import React from "react";
import NewsLater from "./components/NewsLater";
import { Blog } from "@/types/blog";
import { getBlogs } from "@/services/blogs";
import RequestError from "@/components/shared/RequestError";
import { getTranslations } from "next-intl/server";
import BlogCard from "./components/BlogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Discover our latest blogs and articles.",
};

export default async function BlogsPage() {
  const t = await getTranslations();
  let blogs: Blog[] | undefined;

  try {
    blogs = await getBlogs();
  } catch (error) {
    return (
      <section className="min-h-[63vh] relative z-[1] max-w-medium mx-auto px-5 py-10 flex items-center justify-center">
        <RequestError />
      </section>
    );
  }

  if (blogs) {
    return (
      <section className="min-h-[63vh] relative z-[1] max-w-wide mx-auto px-5 py-10">
        <div className="w-fit mx-auto text-center mt-20">
          <h1 className="text-5xl font-bold text-foreground">
            {t("cms.blogs")}
          </h1>
          <p className="max-w-4xl mt-2">{t("cms.blogsDescription")}</p>
        </div>
        <div className="mt-20 grid grid-cols-3 gap-5 mobile:grid-cols-1 mobile:gap-x-0 mobile:gap-5">
          <div className="col-span-2 grid grid-cols-2 gap-5 mobile:grid-cols-1">
            {blogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          <div className="col-span-1">
            <NewsLater />
          </div>
        </div>
      </section>
    );
  }
}
