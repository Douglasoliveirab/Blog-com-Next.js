"use client";

import Link from 'next/link';
import { usePostListViewModel } from './PageViewModel';

const Home: React.FC = () => {
  const {
    posts,
    deletePost
  } = usePostListViewModel()

  return (
    <div className="container mx-auto p-4">
      <div className='flex w-full justify-between items-center'>
        <p className="text-2xl font-bold text-white mt-4">Blog com Next.js</p>
        <Link href="/posts/create">
          <button className="mt-4 border border-blue-500 text-white py-2 px-4 rounded">Criar post</button>
        </Link>

      </div>
      <ul className="mt-8 text-white">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 mb-6">
            <div className='flex items-center justify-between mb-4'>
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <Link href={`/posts/details/${post.id}`}>
                Detalhes
              </Link>
            </div>
            <div className='flex gap-4'>
              <Link href={`/posts/edit/${post.id}`}>
                <button className="mt-2 border border-green-500 text-white py-1 px-3 rounded">Editar</button>
              </Link>

              <button onClick={() => deletePost(post)}
                className="mt-2 border border-red-500 text-white py-1 px-3 rounded">
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
