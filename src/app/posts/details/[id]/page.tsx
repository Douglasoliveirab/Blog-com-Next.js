'use client';

import Link from "next/link";
import { useDetailsViewModel } from "./detailsViewModel";

export const Details: React.FC = () => {
    const {
        detailsPost
    } = useDetailsViewModel();

    return (
        <div>
            <Link href={'../../'}
                className='flex items-start p-4 text-white font-bold'>
                Voltar
            </Link>
            <div className="flex w-full  justify-center">

                <div className="flex-col w-[80%] max-w-[500px] mt-[50px] rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">

                    <div className="p-6">
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {detailsPost?.title}
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            {detailsPost?.content}
                        </p>
                    </div>

                    <div className="p-6 flex flex-col gap-4">
                        <p>Author: {detailsPost?.author}</p>
                        <p>Publicado em: {detailsPost?.date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
