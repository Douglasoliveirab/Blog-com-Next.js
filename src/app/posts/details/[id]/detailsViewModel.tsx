'use client'
import { Post } from "@/app/dtos/post.dtos"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export const useDetailsViewModel = () => {
    const { id } = useParams()
    const [detailsPost, setDetailsPost] = useState<Post>()

    useEffect(() => {
        const featchPost = async () => {
            const response = await fetch(`http://localhost:4000/posts/${id}`);
            const data = await response.json();
            setDetailsPost(data)
        }
        featchPost()
    }, [id])

    return {
        detailsPost
    }
}