"use client"; // Importante para componentes que utilizam hooks

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
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="border p-2 w-full"
            />
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
                className="border p-2 w-full"
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
                className="border p-2 w-full"
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border p-2 w-full"
            />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                Create Post
            </button>
        </form>
    );
};

export default CreatePostPage;
