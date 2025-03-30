import React from 'react'
import CreatePost from './CreatePost'
import useAuth from './hooks/useAuth';
import PostComponent from './post';
import {posts} from '../../data/post.ts'
const Dashboard = () =>
{
    const { user, loading } = useAuth();
    if (loading) return <p>Loading...</p>;
    return (
        <div className="container mx-auto py-10">
            {
                user?.role === 'patient' &&
                <>
                    <h1 className="text-2xl font-bold mb-6 text-center">Create Post</h1>
                    <CreatePost />
                </>
            }
            {
                user?.role === 'doctor' && 
                <>
                <PostComponent posts={posts} />
                </>
            }
        </div>
    )
}

export default Dashboard