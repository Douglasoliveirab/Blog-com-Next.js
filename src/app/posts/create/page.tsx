"use client"; // Importante para componentes que utilizam hooks

import Link from 'next/link';
import { useCreatePostViewModel } from './CreateViewModel';

const CreatePostPage: React.FC = () => {

    const {
        title,
        author,
        content,
        date,
        setTitle,
        setAuthor,
        setContent,
        setDate,
        handleSubmit,
    } = useCreatePostViewModel();
    return (
        <div className="w-full justify-center">
            <Link href={'../../'}
                className='flex items-start p-4 text-white font-bold'>
                Voltar
            </Link>

            <div className='flex flex-col items-center mt-[%5]'>
                <h4 className='text-white mb-6'>Criar nova postagem </h4>
                <form onSubmit={(e) => handleSubmit(e)} className="space-y-4 w-[90%] max-w-[600px] border border-white p-4 rounded-md">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                        className="border p-2 w-full"
                        required
                    />
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Author"
                        className="border p-2 w-full"
                        required
                    />
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Content"
                        className="border p-2 w-full"
                        required
                    />
                    <input
                        type="hidden"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="border p-2 w-full"
                        required
                    />
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">
                        Criar novo Post
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreatePostPage;
