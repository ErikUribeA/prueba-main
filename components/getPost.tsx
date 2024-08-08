// pages/index.tsx

'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';
import { ResponsePost } from '@/models/user.models';


const Home = () => {
    const [posts, setPosts] = useState<ResponsePost[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get<ResponsePost[]>("https://api-posts.codiﬁcando.xyz/posts")
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
                setError('Failed to fetch posts');
            });
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map(post => (
                    <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                        <p className="text-gray-700">{post.body}</p>
                        <br />
                        <p className="text-gray-700">Creation Date: {new Date(post.creationDate).toLocaleDateString()}</p>
                        <p className="text-gray-700">Publication Date: {new Date(post.estimatedPublicationDate).toLocaleDateString()}</p>
                        <p className="text-gray-700">Plataform: {post.platform}</p>
                        <p className="text-gray-700">Approval Percentage: {post.approvalPercentage}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
