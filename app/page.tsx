"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/utils";

export default function Home() {
  const { data, isPending, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data?.map((post: any) => (
        <>
          {" "}
          <h1 key={post.id}>{post.id}</h1>
          <h2>{post.title}</h2>
        </>
      ))}
    </main>
  );
}
