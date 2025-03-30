import React from 'react'
import CreatePost from './CreatePost'
import { Tabs, TabsContent, TabsTrigger, TabsList } from './ui/tabs';
import { Card, CardContent } from './ui/card';
// import useAuth from './hooks/useAuth';
import PostComponent from './post';
import { posts } from '../../data/post';
import { FileText, PlusCircle, User } from 'lucide-react';
import Navbar from './Navbar';
// import {posts} from '../../data/post.ts'
const Dashboard = () =>
{
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <Navbar/>
            <div className="container mx-auto py-16 px-4">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-800">
                    Patient Health Portal
                </h1>
                <Card className="border-none shadow-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                        <Tabs defaultValue="create" className="">
                            <TabsList className="grid w-full grid-cols-2 mb-8">
                                <TabsTrigger
                                    value="create"
                                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                                >
                                    <PlusCircle className="mr-2 h-4 w-4" />
                                    Create Health Issue
                                </TabsTrigger>
                                <TabsTrigger
                                    value="manage"
                                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                                >
                                    <FileText className="mr-2 h-4 w-4" />
                                    Manage Your Issues
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="create" className="space-y-6">
                                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
                                    <h2 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
                                        <User className="mr-2 h-5 w-5" />
                                        Share Your Health Concerns
                                    </h2>
                                    <p className="text-gray-600">
                                        Describe your health issue in detail to get help from qualified medical professionals.
                                        The more information you provide, the better doctors can understand your situation.
                                    </p>
                                </div>

                                <CreatePost />
                            </TabsContent>

                            <TabsContent value="manage">
                                {posts.length > 0 ? (
                                    <div className="space-y-4">
                                        <PostComponent posts={posts} />
                                    </div>
                                ) : (
                                    <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                                        <FileText className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                                        <h3 className="text-lg font-medium text-gray-700 mb-1">No health issues posted yet</h3>
                                        <p className="text-gray-500 mb-4">
                                            When you post a health issue, it will appear here for tracking
                                        </p>
                                        <Button
                                            variant="outline"
                                            onClick={() => document.querySelector('[data-state="inactive"][value="create"]')?.click()}
                                        >
                                            Create Your First Health Issue
                                        </Button>
                                    </div>
                                )}
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Dashboard