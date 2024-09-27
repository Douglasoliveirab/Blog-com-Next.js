"use client";

import Link from 'next/link';
import { usePostListViewModel } from './PageViewModel';

const Home: React.FC = () => {
  const {
    posts,
  } = usePostListViewModel()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">Blog Posts</h1>
      <Link href="/posts/create">
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Criar Novo Post</button>
      </Link>
      <ul className="mt-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 mb-2">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p>{post.content}</p>
            <Link href={`/posts/edit/${post.id}`}>
              <button className="mt-2 bg-green-500 text-white py-1 px-3 rounded">Editar</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
