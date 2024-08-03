import axios from "axios";

export const fetchPosts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/posts");
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const mutatePosts = async (userData: any) => {
  try {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      userData
    );
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};
