import React from 'react';

import Image from 'next/image';

const Practice: React.FC = () => {
    return (
        <div
            className="min-h-screen flex justify-center bg-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
        >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
                <div className="grid gap-8 grid-cols-1">
                    <div className="flex flex-col">
                        <div className="flex flex-col sm:flex-row items-center">
                            <h2 className="font-semibold text-lg mr-auto">Create a new post</h2>
                            <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                        </div>
                        <div className="mt-5">
                            <div className="form">
                                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                                    <div className="mb-3 space-y-2 w-full text-xs">
                                        <label className="font-semibold text-gray-600 py-2">
                                            Title: <abbr title="required">*</abbr>
                                        </label>
                                        <input
                                            placeholder="example"
                                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                                            required
                                            type="text"
                                            name="integration[shop_name]"
                                            id="integration_shop_name"
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
                                            required
                                            type="text"
                                            name="integration[shop_email]"
                                            id="integration_shop_email"
                                        />
                                        <p className="text-red text-xs hidden">Please fill out this field.</p>
                                    </div>
                                </div>
                                <div className="flex-auto w-full mb-1 text-xs space-y-2">
                                    <label className="font-semibold text-gray-600 py-2">Text of the Post: </label>
                                    <textarea
                                        required
                                        name="message"
                                        className="min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-4 px-4"
                                        placeholder="Write here whatever you want"
                                        spellCheck="false"
                                    ></textarea>
                                    <p className="text-xs text-gray-400 text-left my-3">You inserted 0 characters</p>
                                </div>
                                <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                                <div className="mb-3 space-y-2 w-full text-xs">
                                    <label className="font-semibold text-gray-600 py-2">
                                        Publication Date: <abbr title="required">*</abbr>
                                    </label>
                                    <input
                                        placeholder="Email ID"
                                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                                        required
                                        type="date"
                                        name="integration[shop_email]"
                                        id="integration_shop_email"
                                    />
                                    <p className="text-red text-xs hidden">Please fill out this field.</p>
                                </div>
                                <div className="mb-3 space-y-2 w-full text-xs">
                                    <label className="font-semibold text-gray-600 py-2">
                                        Estimated Publication Date: <abbr title="required">*</abbr>
                                    </label>
                                    <input
                                        placeholder="Email ID"
                                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                                        required
                                        type="date"
                                        name="integration[shop_email]"
                                        id="integration_shop_email"
                                    />
                                    <p className="text-red text-xs hidden">Please fill out this field.</p>
                                </div>
                                </div>
                                <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                                    <div className="w-full flex flex-col mb-3">
                                        <label className="font-semibold text-gray-600 py-2">Approval Percentage: </label>
                                        <input
                                            placeholder="76"
                                            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                                            type="number"
                                            name="integration[street_address]"
                                            id="integration_street_address"
                                        />
                                    </div>
                                    <div className="w-full flex flex-col mb-3">
                                        <label className="font-semibold text-gray-600 py-2">
                                            Plataform: <abbr title="required">*</abbr>
                                        </label>
                                        <select
                                            className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full"
                                            required
                                            name="integration[city_id]"
                                            id="integration_city_id"
                                        >
                                            <option value="">X </option>
                                            <option value="">Instagram </option>
                                            <option value="">Facebook </option>
                                        </select>
                                        <p className="text-sm text-red-500 hidden mt-3" id="error">
                                            Please fill out this field.
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-3 space-y-2 w-full text-xs">
                                    <label className="font-semibold text-gray-600 py-2">Company </label>
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
                                            className="flex-shrink flex-grow leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                                            placeholder="https://"
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
                                            className="flex-shrink flex-grow leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                                            placeholder="https://"
                                        />
                                    </div>
                                </div>
                                <p className="text-xs text-red-500 text-right my-3">
                                    Required fields are marked with an asterisk <abbr title="Required field">*</abbr>
                                </p>
                                <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                                    <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                                        Cancel
                                    </button>
                                    <button className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Practice;
