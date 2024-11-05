import UserAvatar from "@/components/ui/UserAvatar";
import { Blog } from "@/types/blog";
import { formatDate } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="p-5 backdrop-blur-3xl bg-gray-200/40 dark:bg-[#1A1B20]/40 rounded-lg w-full block"
    >
      <p className="text-lg font-bold text-foreground mb-2">{blog.title}</p>
      <Image
        src={blog.coverUrl}
        draggable={false}
        alt={blog.title}
        width={300}
        height={300}
        className="w-full rounded-lg h-52 object-cover"
      />
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        {blog.content.slice(0, 200)}
      </p>
      <div className="flex justify-between items-center my-5">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {formatDate(blog.createdDate, "en-US")}
        </p>
        <UserAvatar
          src={blog?.author?.imageUrl}
          width={32}
          height={32}
          username={blog?.author?.userName}
          className="w-8 h-8"
        />
      </div>
      <div className="flex items-center flex-wrap gap-2 border-t-1 border-foreground-secondary/20 pt-2 mt-5">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-lg bg-foreground-secondary/10"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default BlogCard;
