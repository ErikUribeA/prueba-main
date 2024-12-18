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
                console.error('Error fetching posts:', error);
                setError('Failed to fetch posts');
            });
    }, []);

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`https://api-posts.codiﬁcando.xyz/posts/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-user-email': 'prueba222@gmail.com', // Asegúrate de usar el email correcto si es necesario
                }
            });
            setPosts(posts.filter(post => post.id !== id)); // Actualiza la lista de posts
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Error deleting post:', error.response?.data || error.message);
            } else {
                console.error('Unexpected error:', error);
            }
            setError('Failed to delete post');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-yellow-200">Posts</h1>
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map(post => (
                    <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                        <p className="text-gray-700">{post.body}</p>
                        <br />
                        <p className="text-gray-700">Creation Date: {new Date(post.creationDate).toLocaleDateString()}</p>
                        <p className="text-gray-700">Publication Date: {new Date(post.estimatedPublicationDate).toLocaleDateString()}</p>
                        <p className="text-gray-700">Platform: {post.platform}</p>
                        <p className="text-gray-700">Approval Percentage: {post.approvalPercentage}</p>
                        <br />
                        <div className='flex justify-around'>
                            <button 
                                type="button" 
                                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                // Implementa la funcionalidad de edición aquí
                            >
                                Edit
                            </button>
                            <button 
                                type="button" 
                                onClick={() => handleDelete(post.id)} // Llamar a handleDelete con el id del post
                                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
