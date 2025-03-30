import React from 'react'
import { posts } from '../../data/post'
import { Card, CardContent } from './ui/card'
import { Tabs, TabsContent, TabsTrigger, TabsList } from './ui/tabs'
import { CheckCircle2, TimerIcon } from 'lucide-react'
import PostComponent from './post'
import { Button } from './ui/button'
import Navbar from './Navbar'

const Listings = () =>
{
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <Navbar/>
            <div className="container mx-auto py-16 px-4">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-800">
                    Doctor/Hospital Portal
                </h1>
                <Card className="border-none shadow-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                        <Tabs defaultValue="Verified" className="">
                            <TabsList className="grid w-full grid-cols-2 mb-8">
                                <TabsTrigger
                                    value="Verified"
                                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                                >
                                    <CheckCircle2 className="mr-2 h-4 w-4" />
                                    Verified
                                </TabsTrigger>
                                <TabsTrigger
                                    value="Pending"
                                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                                >
                                    <TimerIcon className="mr-2 h-4 w-4" />
                                    Pending
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="Verified" className="space-y-6">
                                <div className="space-y-4">
                                    <PostComponent posts={posts} verifiedPost={true} />
                                </div>
                            </TabsContent>

                            <TabsContent value="Pending">
                                {posts.length > 0 ? (
                                    <div className="space-y-4">
                                        <PostComponent posts={posts} />
                                    </div>
                                ) : (
                                    <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                                        <FileText className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                                        <h3 className="text-lg font-medium text-gray-700 mb-1">No health issues Available yet</h3>
                                        <Button
                                            variant="outline"
                                            onClick={() => document.querySelector('[data-state="inactive"][value="create"]')?.click()}
                                        >
                                            Solve Your First Health Issue
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

export default Listings