import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FileText, CheckCircle, Clock, User, Calendar, MapPin, Activity } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNavigation } from "../components/ui/carousel";
import { posts } from "../../data/post.ts"

export default function PostComponent ()
{

    const [vposts, setPosts] = useState([]);
    const location = useLocation();


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
                setPosts(postData);
                console.log(posts);
            } catch (error)
            {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();

    }, [vposts]);




    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map(post => (
                    <div key={post.id} className="bg-white rounded-lg shadow overflow-hidden">
                        <div className="p-6">
                            <div className="flex items-center space-x-4 mb-4">
                                <img
                                    src={post.patient.profileImage}
                                    alt={post.patient.fullName}
                                    className="h-12 w-12 rounded-full"
                                />
                                <div className="flex-grow">
                                    <div className="flex items-center space-x-2">
                                        <User size={16} className="text-gray-500" />
                                        <h3 className="text-lg font-semibold">{post.patient.fullName}</h3>
                                    </div>
                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                        <div className="flex items-center space-x-1">
                                            <Calendar size={16} />
                                            <span>{post.createdAt.toLocaleDateString()}</span>
                                        </div>
                                        {post.patient.location && (
                                            <div className="flex items-center space-x-1">
                                                <MapPin size={16} />
                                                <span>{post.patient.location}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    {post.verified ? (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                                <CheckCircle size={16} className="mr-1" /> Verified
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                                                <Clock size={16} className="mr-1" /> Pending
                                            </span>
                                        )}
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500">Patient Details</h4>
                                        <div className="mt-2 text-sm text-gray-700">
                                            <p>Age: {post.patient.age}</p>
                                            <p>Gender: {post.patient.gender}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500">Medical History</h4>
                                        <p className="mt-2 text-sm text-gray-700">{post.patient.medicalHistory}</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500 flex items-center">
                                            <Activity size={16} className="mr-1" /> Current Symptoms
                                        </h4>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {post.patient.symptoms.map((symptom, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs"
                                                >
                                                    {symptom}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-700 mb-4">{post.content}</p>

                            <Carousel>
                                <CarouselContent>
                                    {Array.isArray(post.imageUrl) ? post.imageUrl.map((img, i) => (
                                        <CarouselItem key={i}>
                                            <img src={img} alt="Medical report" className="w-full h-64 object-cover rounded-lg mb-4" />
                                        </CarouselItem>
                                    )) : (
                                        <CarouselItem>
                                            <img src={post.imageUrl} alt="Medical report" className="w-full h-64 object-cover rounded-lg mb-4" />
                                        </CarouselItem>
                                    )}
                                </CarouselContent>
                                <CarouselNavigation className="absolute -bottom-20 left-auto top-auto w-full justify-end gap-2" />
                            </Carousel>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.reportUrl.map((url, index) => (
                                    <a
                                        key={index}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                                    >
                                        <FileText size={16} className="mr-1" />
                                        Report {index + 1}
                                    </a>
                                ))}
                            </div>

                            {!post.verified && (
                                    <button
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <CheckCircle size={16} className="mr-2" />
                                        Verify Post
                                    </button>
                                )}
                        </div>

                    </div>
                ))}
                <>
                    {
                        vposts.map((post, i) =>
                            <div className="border rounded-2xl p-2" key={i}>
                                {post?.patientId && (
                                    <div className="flex items-center gap-2">
                                        <div className="">
                                            {
                                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                                    <span className="text-white font-bold">{post.patientId.fullName.slice(0, 1)}</span>
                                                </div>}
                                        </div>
                                        <div>
                                            {post.patientId.fullName}
                                        </div>
                                    </div>
                                )}
                                <div className="flex justify-between items-center gap-2">
                                    {post.content}
                                    {post.verified ?
                                        (<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                            <CheckCircle size={16} className="mr-1" /> Verified
                                        </span>
                                        ) : (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                                                <Clock size={16} className="mr-1" /> Pending
                                            </span>)
                                    }
                                </div>
                                <br />
                                {post.medicalHistory}
                                <br />
                                <Carousel>
                                    <CarouselContent>
                                        {Array.isArray(post.imageUrl) ? post.imageUrl.map((img, i) => (
                                            <CarouselItem key={i}>
                                                <img src={img} alt="Medical report" className="w-full h-64 object-cover rounded-lg mb-4" />
                                            </CarouselItem>
                                        )) : (
                                            <CarouselItem>
                                                <img src={post.imageUrl} alt="Medical report" className="w-full h-64 object-cover rounded-lg mb-4" />
                                            </CarouselItem>
                                        )}
                                    </CarouselContent>
                                    <CarouselNavigation className="absolute -bottom-20 left-auto top-auto w-full justify-end gap-2" />
                                </Carousel>
                                {post.reportUrl.map((url, index) => (
                                    <a
                                        key={index}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                                    >
                                        <FileText size={16} className="mr-1" />
                                        Report {index + 1}
                                    </a>
                                ))}
                                <br />
                                {!post.verified && (
                                    <button
                                        className="my-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <CheckCircle size={16} className="mr-2" />
                                        Verify Post
                                    </button>
                                )}
                            </div>
                        )
                    }
                </>
                {posts.map(post => (
                    <div key={post.id} className="bg-white rounded-lg shadow overflow-hidden">
                        <div className="p-6">
                            <div className="flex items-center space-x-4 mb-4">
                                <img
                                    src={post.patient.profileImage}
                                    alt={post.patient.fullName}
                                    className="h-12 w-12 rounded-full"
                                />
                                <div className="flex-grow">
                                    <div className="flex items-center space-x-2">
                                        <User size={16} className="text-gray-500" />
                                        <h3 className="text-lg font-semibold">{post.patient.fullName}</h3>
                                    </div>
                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                        <div className="flex items-center space-x-1">
                                            <Calendar size={16} />
                                            <span>{post.createdAt.toLocaleDateString()}</span>
                                        </div>
                                        {post.patient.location && (
                                            <div className="flex items-center space-x-1">
                                                <MapPin size={16} />
                                                <span>{post.patient.location}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    {post.verified ? (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                                <CheckCircle size={16} className="mr-1" /> Verified
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                                                <Clock size={16} className="mr-1" /> Pending
                                            </span>
                                        )}
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500">Patient Details</h4>
                                        <div className="mt-2 text-sm text-gray-700">
                                            <p>Age: {post.patient.age}</p>
                                            <p>Gender: {post.patient.gender}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500">Medical History</h4>
                                        <p className="mt-2 text-sm text-gray-700">{post.patient.medicalHistory}</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500 flex items-center">
                                            <Activity size={16} className="mr-1" /> Current Symptoms
                                        </h4>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {post.patient.symptoms.map((symptom, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs"
                                                >
                                                    {symptom}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-700 mb-4">{post.content}</p>

                            <Carousel>
                                <CarouselContent>
                                    {Array.isArray(post.imageUrl) ? post.imageUrl.map((img, i) => (
                                        <CarouselItem key={i}>
                                            <img src={img} alt="Medical report" className="w-full h-64 object-cover rounded-lg mb-4" />
                                        </CarouselItem>
                                    )) : (
                                        <CarouselItem>
                                            <img src={post.imageUrl} alt="Medical report" className="w-full h-64 object-cover rounded-lg mb-4" />
                                        </CarouselItem>
                                    )}
                                </CarouselContent>
                                <CarouselNavigation className="absolute -bottom-20 left-auto top-auto w-full justify-end gap-2" />
                            </Carousel>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.reportUrl.map((url, index) => (
                                    <a
                                        key={index}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                                    >
                                        <FileText size={16} className="mr-1" />
                                        Report {index + 1}
                                    </a>
                                ))}
                            </div>

                            {!post.verified && (
                                    <button
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <CheckCircle size={16} className="mr-2" />
                                        Verify Post
                                    </button>
                                )}
                        </div>
                    </div>
                ))}
                {posts.map(post => (
                    <div key={post.id} className="bg-white rounded-lg shadow overflow-hidden">
                        <div className="p-6">
                            <div className="flex items-center space-x-4 mb-4">
                                <img
                                    src={post.patient.profileImage}
                                    alt={post.patient.fullName}
                                    className="h-12 w-12 rounded-full"
                                />
                                <div className="flex-grow">
                                    <div className="flex items-center space-x-2">
                                        <User size={16} className="text-gray-500" />
                                        <h3 className="text-lg font-semibold">{post.patient.fullName}</h3>
                                    </div>
                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                        <div className="flex items-center space-x-1">
                                            <Calendar size={16} />
                                            <span>{post.createdAt.toLocaleDateString()}</span>
                                        </div>
                                        {post.patient.location && (
                                            <div className="flex items-center space-x-1">
                                                <MapPin size={16} />
                                                <span>{post.patient.location}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    {/* {verifiedPost ? (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                                <CheckCircle size={16} className="mr-1" /> Verified
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                                                <Clock size={16} className="mr-1" /> Pending
                                            </span>
                                        )} */}
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500">Patient Details</h4>
                                        <div className="mt-2 text-sm text-gray-700">
                                            <p>Age: {post.patient.age}</p>
                                            <p>Gender: {post.patient.gender}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500">Medical History</h4>
                                        <p className="mt-2 text-sm text-gray-700">{post.patient.medicalHistory}</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500 flex items-center">
                                            <Activity size={16} className="mr-1" /> Current Symptoms
                                        </h4>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {post.patient.symptoms.map((symptom, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs"
                                                >
                                                    {symptom}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-700 mb-4">{post.content}</p>

                            <Carousel>
                                <CarouselContent>
                                    {Array.isArray(post.imageUrl) ? post.imageUrl.map((img, i) => (
                                        <CarouselItem key={i}>
                                            <img src={img} alt="Medical report" className="w-full h-64 object-cover rounded-lg mb-4" />
                                        </CarouselItem>
                                    )) : (
                                        <CarouselItem>
                                            <img src={post.imageUrl} alt="Medical report" className="w-full h-64 object-cover rounded-lg mb-4" />
                                        </CarouselItem>
                                    )}
                                </CarouselContent>
                                <CarouselNavigation className="absolute -bottom-20 left-auto top-auto w-full justify-end gap-2" />
                            </Carousel>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.reportUrl.map((url, index) => (
                                    <a
                                        key={index}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                                    >
                                        <FileText size={16} className="mr-1" />
                                        Report {index + 1}
                                    </a>
                                ))}
                            </div>

                            {!post.verified && (
                                    <button
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <CheckCircle size={16} className="mr-2" />
                                        Verify Post
                                    </button>
                                )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}