import React from "react";
import { getBlogBySlug } from "@/services/blogs";
import RequestError from "@/components/shared/RequestError";
import { formatDate } from "@/utils/utils";
import Image from "next/image";
import BlogAuthor from "./components/BlogAuthor";
import ShareBlog from "./components/ShareBlog";
import MdxLayout from "@/components/shared/MdxLayout";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params: { blogSlug },
}: {
  params: { blogSlug: string };
}): Promise<Metadata> {
  const blog = await getBlogBySlug(blogSlug);

  if (!blog) {
    notFound();
  }

  return {
    title: blog.title,
    description: `${blog.title} blog written by ${blog.author.userName}`,
  };
}

export default async function BlogPage({
  params,
}: {
  params: { blogSlug: string };
}) {
  const t = await getTranslations();
  const blog = await getBlogBySlug(params.blogSlug);

  if (!blog) {
    return (
      <section className="min-h-[63vh] relative z-[1] max-w-medium mx-auto px-5 py-10 flex items-center justify-center">
        <RequestError />
      </section>
    );
  }

  return (
    <section className="min-h-[63vh] relative z-[1] max-w-[1100px] mx-auto px-5 py-10">
      <Link
        href="/blogs"
        className="flex items-center w-fit gap-2 px-1 py-1 mb-5 text-sm rounded-lg hover:bg-foreground-secondary/20 duration-300 active:scale-90"
      >
        <span>
          <IoIosArrowBack />
        </span>
        <span>{t("cms.backToBlogs")}</span>
      </Link>
      <p className="px-1">{formatDate(blog.createdDate, "en-US")}</p>
      <BlogAuthor blog={blog} />
      <h1 className="text-3xl font-bold mt-7 text-foreground">{blog.title}</h1>
      {blog.coverUrl && (
        <Image
          src={blog.coverUrl}
          alt={blog.title}
          width={1060}
          height={530}
          className="w-full aspect-[16/8] rounded-lg border-1 border-foreground-secondary/20 object-cover mt-5"
        />
      )}
      <div className="flex items-center gap-2 border-y-1 border-foreground-secondary/20 py-2 mt-5">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="text-sm px-2 py-1 rounded-lg bg-foreground-secondary/10"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="my-10">
        <MdxLayout source={blog.content} />
      </div>
      <ShareBlog />
    </section>
  );
}
