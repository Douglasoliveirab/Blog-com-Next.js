'use client';

import { Post } from '@/app/dtos/post.dtos';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const PostPage: React.FC = () => {
    const { id } = useParams();
    const [post, setPost] = useState<Post>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            if (id) {
                try {
                    const response = await fetch(`http://localhost:4000/posts/${id}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch post');
                    }
                    const data = await response.json();
                    setPost(data);
                } catch (err) {
                    setError((err as Error).message);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchPost();
    }, [id]);


    if (loading) return <p>Carregando...</p>;

    if (error) return <p>Erro: {error}</p>;

    return (
        <div>
            <p>Teste: {id}</p>
            <p>Dados do Post: {post ? post.author : 'Nenhum dado disponível'}</p>
        </div>
    );
};

export default PostPage;
