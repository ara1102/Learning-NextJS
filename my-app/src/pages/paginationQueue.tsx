import { useInfiniteQuery } from 'react-query';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Header from '@/component/Header';

interface Post {
    id: number;
    https: string
    alt_description: string
    description: string
    urls: any
    regular: string
    username: string
    user: any
}

const BASE_URL = 'https://api.unsplash.com/photos';
// const QUERY_KEY = 'https://api.unsplash.com/photos/?client_id=qcJpiLbkMpBzcLrDDO4Y53MNjqBFIseVBUem8l8Ivt0';
const QUERY_KEY = 'client_id=qcJpiLbkMpBzcLrDDO4Y53MNjqBFIseVBUem8l8Ivt0';

const fetchPosts = async (pageParam?: number) => {
    const response = await fetch(`${BASE_URL}?page=${pageParam ?? 1}&${QUERY_KEY}`);
    const data = await response.json();
    return data as Post[];
};


const Posts = () => {

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery(
        `${BASE_URL}/?${QUERY_KEY}`,
        ({ pageParam }) => fetchPosts(pageParam),
        {
            getNextPageParam: (lastPage, allPages) =>
                lastPage.length === 0 ? undefined : allPages.length + 1,
        }
    );


    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'error') return <div>Error</div>;


    return (
        <>
            <Header/>
            <main className='bg-gradient-to-r from-sky-500 to-indigo-500 pt-36'>
                <div className='px-14'>
                    <ul className='text-black 2xl:columns-4 lg:columns-3 sm:columns-1 md:columns-2 gap-8'>
                        {data?.pages.map((page, index) => (
                            <React.Fragment key={index}>
                                {page.map((post) => (
                                    <li key={post.id}>
                                        <div className='break-inside-avoid-column flex flex-col p-4 bg-gray-200 rounded-sm mb-8 shadow-md'>

                                            <Image src={post.urls.small} alt={post.alt_description} width={400} height={400} className="w-full"/>
                                            
                                            <div className=''>
                                                <p className=''>{post.description}</p>
                                                <p>Credit: {post.user.username}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}


                            </React.Fragment>

                        ))}
                    </ul>
                </div>
            </main>


            <button
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
            >
                {isFetchingNextPage ? 'Loading more...' : 'Load more'}
            </button>
        </>
    );
};

export default Posts;