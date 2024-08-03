import { fetchPosts } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const PostLists = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading</p>;
  return (
    <div>
      {data?.map((post: any) => {
        return (
          <div key={post.id}>
            <div>{post.title}</div>
            {post.posts.map((tag: any) => {
              <span key={tag.key}>{tag}</span>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default PostLists;
