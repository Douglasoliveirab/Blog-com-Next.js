"use client"; // Indica que este é um componente cliente

import { Post } from "@/app/dtos/post.dtos";
import { useState } from "react";

export const useCreatePostViewModel = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newPost: Post = {
            id: Date.now(),
            title,
            author,
            content,
            date,
        };

        await fetch('http://localhost:4000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        });

    };

    return {
        title,
        author,
        content,
        date,
        setTitle,
        setAuthor,
        setContent,
        setDate,
        handleSubmit,
    };
};
