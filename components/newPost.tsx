'use client'

import React, { useState } from 'react';
import axios from 'axios';
import { Post, Platform, Status, Corrections } from '../models/user.models';

const NewPost: React.FC = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [creator, setCreator] = useState('');
    const [estimatedPublicationDate, setEstimatedPublicationDate] = useState('');
    const [platform, setPlatform] = useState<Platform>(Platform.Facebook);
    const [approvalPercentage, setApprovalPercentage] = useState<number>(0);
    const [postUrl, setPostUrl] = useState('');
    const [multimediaUrl, setMultimediaUrl] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validar que no haya palabras prohibidas
        const forbiddenWords = ['fuck', 'shit']; // Lista de palabras prohibidas
        const containsForbiddenWords = forbiddenWords.some((word) => title.includes(word) || body.includes(word));

        if (containsForbiddenWords) {
            alert('Your post contains forbidden words. Please remove them.');
            return;
        }

        // Convertir fechas a objetos Date
        const creationDate = new Date(); // Fecha actual
        const estimatedPublicationDateObj = new Date(estimatedPublicationDate); // Convertir la fecha ingresada en formato Date

        // Construir el objeto de datos según la interfaz
        const postData: Omit<Post, 'id' | 'deletedAt'> = {
            title,
            body,
            creator,
            creationDate,
            estimatedPublicationDate: estimatedPublicationDateObj,
            status: Status.Pending,
            approvalPercentage,
            corrections: Corrections.Ninguna, // Usar valor por defecto si no hay correcciones
            platform,
            postUrl,
            multimediaUrl,
        };

        try {
            const response = await axios.post('https://api-posts.codiﬁcando.xyz/posts', postData, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-user-email': 'prueba222@gmail.com' // Encabezado esperado por la API
                }
            });
            console.log('Post created:', response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // AxiosError específico
                console.error('Error creating post:', error.response?.data || error.message);
            } else {
                // Otros tipos de errores
                console.error('Unexpected error:', error);
            }
        }
    };

    return (
        <div
            className="min-h-screen flex justify-center bg-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
        >
            <div className="absolute bg-black opacity-60 inset-0 -z-10"></div>
            <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg -z-5">
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-8 grid-cols-1">
                        <div className="flex flex-col">
                            <div className="flex flex-col sm:flex-row items-center">
                                <h2 className="font-semibold text-lg mr-auto">Create a new post</h2>
                                <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                            </div>
                            <div className="mt-5">
                                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                                    <div className="mb-3 space-y-2 w-full text-xs">
                                        <label className="font-semibold text-gray-600 py-2">
                                            Title: <abbr title="required">*</abbr>
                                        </label>
                                        <input
                                            placeholder="example"
                                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                                            value={title} onChange={(e) => setTitle(e.target.value)}
                                            required
                                            type="text"
                                            name="title"
                                            id="title"
                                        />
                                        <p className="text-red text-xs hidden">Please fill out this field.</p>
                                    </div>
                                    <div className="mb-3 space-y-2 w-full text-xs">
                                        <label className="font-semibold text-gray-600 py-2">
                                            Creator: <abbr title="required">*</abbr>
                                        </label>
                                        <input
                                            placeholder="Email ID"
                                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                                            value={creator} 
                                            onChange={(e) => setCreator(e.target.value)}
                                            required
                                            type="text"
                                            name="creator"
                                            id="creator"
                                        />
                                        <p className="text-red text-xs hidden">Please fill out this field.</p>
                                    </div>
                                </div>
                                <div className="flex-auto w-full mb-1 text-xs space-y-2">
                                    <label className="font-semibold text-gray-600 py-2">Text of the Post: </label>
                                    <textarea
                                        required
                                        value={body} onChange={(e) => setBody(e.target.value)}
                                        name="message"
                                        className="min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-4 px-4"
                                        placeholder="Write here whatever you want"
                                        spellCheck="false"
                                    ></textarea>
                                    <p className="text-xs text-gray-400 text-left my-3">You inserted 0 characters</p>
                                </div>
                                <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                                </div>
                                <div className="mb-3 space-y-2 w-full text-xs">
                                    <label className="font-semibold text-gray-600 py-2">
                                        Estimated Publication Date: <abbr title="required">*</abbr>
                                    </label>
                                    <input
                                        placeholder="yyyy-mm-dd"
                                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                                        value={estimatedPublicationDate} onChange={(e) => setEstimatedPublicationDate(e.target.value)}
                                        required
                                        type="date"
                                        name="estimatedPublicationDate"
                                        id="estimatedPublicationDate"
                                    />
                                    <p className="text-red text-xs hidden">Please fill out this field.</p>
                                </div>
                                <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                                    <div className="w-full flex flex-col mb-3">
                                        <label className="font-semibold text-gray-600 py-2">Approval Percentage: </label>
                                        <input
                                            placeholder="76"
                                            value={approvalPercentage}
                                            onChange={(e) => setApprovalPercentage(parseFloat(e.target.value) || 0)}
                                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                                            type="number"
                                            name="approvalPercentage"
                                            id="approvalPercentage"
                                        />
                                    </div>
                                    <div className="w-full flex flex-col mb-3">
                                        <label className="font-semibold text-gray-600 py-2">
                                            Platform: <abbr title="required">*</abbr>
                                        </label>
                                        <select
                                            className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full"
                                            value={platform} onChange={(e) => setPlatform(e.target.value as Platform)}
                                            required
                                            name="platform"
                                            id="platform"
                                        >
                                            <option value={Platform.Facebook}>{Platform.Facebook}</option>
                                            <option value={Platform.Instagram}>{Platform.Instagram}</option>
                                            <option value={Platform.X}>{Platform.X}</option>
                                        </select>
                                        <p className="text-sm text-red-500 hidden mt-3" id="error">
                                            Please fill out this field.
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-3 space-y-2 w-full text-xs">
                                    <label className="font-semibold text-gray-600 py-2">Post URL: </label>
                                    <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                                        <div className="flex">
                                            <span className="flex leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark w-12 h-10 bg-blue-300 justify-center items-center text-xl rounded-lg text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            value={postUrl} onChange={(e) => setPostUrl(e.target.value)}
                                            className="flex-shrink flex-grow leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                                            placeholder="https://"
                                            name="postUrl"
                                            id="postUrl"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 space-y-2 w-full text-xs">
                                    <label className="font-semibold text-gray-600 py-2">Multimedia URL: </label>
                                    <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                                        <div className="flex">
                                            <span className="flex leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark w-12 h-10 bg-blue-300 justify-center items-center text-xl rounded-lg text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            value={multimediaUrl} onChange={(e) => setMultimediaUrl(e.target.value)}
                                            className="flex-shrink flex-grow leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                                            placeholder="https://"
                                        />
                                    </div>
                                </div>
                                <p className="text-xs text-red-500 text-right my-3">
                                    Required fields are marked with an asterisk <abbr title="Required field">*</abbr>
                                </p>
                                <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                                    <button type="button" className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                                        Cancel
                                    </button>
                                    <button type="submit" className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewPost;
