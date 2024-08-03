"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchPosts, mutatePosts } from "@/utils";
import PostLists from "@/components/post-list";

export default function Home() {
  const queryClient = useQueryClient();
  const { data, isPending, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const { data: addData } = useMutation({
    mutationFn: mutatePosts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* {data?.map((post: any) => (
        <>
          {" "}
          <h1 key={post.id}>{post.id}</h1>
          <h2>{post.posts.title}</h2>
        </>
      ))} */}
      <PostLists />
    </main>
  );
}
