import { Blog } from "@/types/blog";
import UserAvatar from "@/components/ui/UserAvatar";

const BlogAuthor = ({ blog }: { blog: Blog }) => {
  return (
    <div className="flex items-center gap-3 mt-5">
      <UserAvatar
        src={blog?.author?.imageUrl}
        username={blog?.author?.userName}
        width={50}
        height={50}
        className="rounded-full w-10 h-10"
      />
      <div>
        <p className="text-base font-medium text-foreground">
          {blog.author.userName}
        </p>
        {/* <p className="text-xs text-foreground-secondary">
          #{blog.author.id.slice(0, 12)}
        </p> */}
      </div>
    </div>
  );
};

export default BlogAuthor;
