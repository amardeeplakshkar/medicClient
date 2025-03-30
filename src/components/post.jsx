import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FileText, CheckCircle, Clock, User, Calendar, MapPin, Activity } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNavigation } from "../components/ui/carousel";


// Doctor
export default function PostComponent ()
{

    const [ posts, setPosts ] = useState([]);
    const location = useLocation();


    // const handleVerify = (postId) =>
    // {
    //     setVerifiedPosts(prev =>
    //     {
    //         const newSet = new Set(prev);
    //         newSet.add(postId);
    //         return newSet;
    //     });
    // };


    const data = location.state;
    console.log("From Dashboard Post: ", data.user);

    useEffect(() =>
    {
        const fetchPosts = async () =>
        {
            try
            {
                const response = await fetch("http://localhost:3000/api/patient/posts", {
                    method: "GET",
                    headers: { Authorization: `Bearer ${data.token}` },
                });

                if (!response.ok)
                {
                    throw new Error("Failed to fetch posts");
                }

                const postData = await response.json();
                console.log("Posts: ", postData);
                // console.log("Posts: ", postData.posts);
                setPosts(postData.posts);
                console.log(posts);
            } catch (error)
            {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
        
    }, [posts]);




    return (
        <div className="min-h-screen bg-gray-50">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* {userRole === 'patient' && (
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
                        <CreatePost />
                    </div>
                )} */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <h1 className="text-2xl font-bold mb-6 text-center">Posts</h1>
                </div>
            </main>
        </div>
    );
}