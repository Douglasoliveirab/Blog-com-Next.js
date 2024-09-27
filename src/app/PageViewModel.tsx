"use client";
import { useEffect, useState } from "react";
import { Post } from "./dtos/post.dtos"; // Verifique se o caminho está correto

export const usePostListViewModel = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:4000/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (post: Post): Promise<void> => {
    console.log('deletePost', post)
    try {
      const response = await fetch(`http://localhost:4000/posts/${post.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to update post');
      }
      fetchPosts();
    } catch (err) {
      setError((err as Error).message);
    }
  }

  return {
    posts,
    loading,
    error,
    deletePost
  };
};
