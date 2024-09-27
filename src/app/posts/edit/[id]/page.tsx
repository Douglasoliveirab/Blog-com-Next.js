'use client';

import Link from "next/link";
import { useEditViewModel } from "./editViewModel";

const PostPage: React.FC = () => {
    const {
        form,
        loading,
        error,
        handleSubmit,
        handleChangeInput
    } = useEditViewModel();

    if (loading) return <p>Carregando...</p>;

    if (error) return <p>Erro: {error}</p>;

    return (
        <div className="w-full justify-center">
            <Link href={'../../'}
                className='flex items-start p-4 text-white font-bold'>
                Voltar
            </Link>

            <div className='flex flex-col items-center mt-[50px]'>
                <h4 className='text-white mb-6'>Criar nova postagem </h4>
                <form onSubmit={(e) => handleSubmit(e)} className="space-y-4 w-[90%] max-w-[600px] border border-white p-4 rounded-md">
                    <input
                        name="title"
                        type="text"
                        value={form.title}
                        onChange={(e) => handleChangeInput(e)}
                        placeholder="Title"
                        className="border p-2 w-full "
                    />
                    <input
                        name="author"
                        type="text"
                        value={form.author}
                        onChange={(e) => handleChangeInput(e)}
                        placeholder="Author"
                        className="border p-2 w-full"
                    />
                    <textarea
                        name="content"
                        value={form.content}
                        onChange={(e) => handleChangeInput(e)}
                        placeholder="Content"
                        className="border p-2 w-full"
                    />
                    <input
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={(e) => handleChangeInput(e)}
                        className="border p-2 w-full"
                    />
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">
                        Salvar mudanças
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PostPage;
