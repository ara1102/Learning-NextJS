import { useQuery} from 'react-query';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react'
import Image from 'next/image'
import Header from '@/component/Header'



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

interface QueryError {
    message: string;
}

const QUERY_KEY = 'https://api.unsplash.com/photos/?client_id=qcJpiLbkMpBzcLrDDO4Y53MNjqBFIseVBUem8l8Ivt0';


const Posts: NextPage = () => {
    const { isLoading, error, data } = useQuery<Post[]>(QUERY_KEY, async () => {
      const response = await fetch(QUERY_KEY);
      return response.json();
    });

    if (isLoading) return <div>Loading...</div>;
    

    if (error) {
        const queryError = error as QueryError;
        return <div>Error: {queryError.message}</div>;
    }
    
  
    return (
        <>
      
            <Head>
                <title>React Query</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>
            <main className='bg-gradient-to-r from-sky-500 to-indigo-500 pt-36'>
                <div className='flex flex-col items-center px-14'>
                  {/* <h1 className='text-white font-bold text-4xl'>Phlog</h1> */}
                      <ul className='text-black lg:columns-3 sm:columns-1 md:columns-2  gap-8'>
                          {data?.map((item) => (
                          <li key={item.id}>
                              <div className='break-inside-avoid-column flex flex-col p-2 bg-gray-200 rounded-sm mb-8'>
                                
                                <div className=''>
                                  <Image className="" src={item.urls.regular} alt={item.alt_description} width={400} height={400}  />
                                </div>
                                <div className='font-bold p-1 text-xl'>
                                   <p>{item.description}</p>
                                </div>
                                <div>
                                  {item.alt_description}
                                </div>
                                <div>
                                  {item.user.username}
                                </div>
                              </div>
                          </li>
                          ))}
                      </ul>
                </div>
            </main>
       
    </>
    );
  };
  
  export default Posts;
