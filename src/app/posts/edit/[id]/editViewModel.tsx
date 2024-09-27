import { Post } from "@/app/dtos/post.dtos";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export function useEditViewModel() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [form, setForm] = useState<Post>({
        id: "",
        title: "",
        author: "",
        content: "",
        date: "",
    });

    useEffect(() => {
        const fetchPost = async () => {
            if (id) {
                try {
                    const response = await fetch(`http://localhost:4000/posts/${id}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch post');
                    }
                    const data = await response.json();
                    setForm(data);
                } catch (err) {
                    setError((err as Error).message);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchPost();
    }, [id]);

    function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    }

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();

        const updatedPost: Post = {
            ...form,
        };

        try {
            const response = await fetch(`http://localhost:4000/posts/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPost),
            });

            if (!response.ok) {
                throw new Error('Failed to update post');
            }

        } catch (err) {
            setError((err as Error).message);
        }
    };

    return {
        form,
        loading,
        error,
        handleChangeInput,
        handleSubmit,
    };
}
