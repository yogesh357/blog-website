import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../components'
import appwriteServices from "../appwrite/config"
import { Navigate, useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPosts] = useState(null)
    const { slug } = useParams()
    const nevigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteServices.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            Navigate("/")
        }
    }, [slug, Navigate])

    return (post ?
        (<div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>

        </div>) : null
    )
}

export default EditPost
