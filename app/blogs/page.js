import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blogs = () => {

    const blogs = [
        {
            id: 1,
			title: "Blog 1",
			description: "This is blog 1 description",
		},
		{
            id: 2,
			title: "Blog 2",
			description: "This is blog 2 description",
		},
		{
            id: 3,
			title: "Blog 3",
			description: "This is blog 3 description",
		},
	];
    
    return (
		<main className='mt-10'>
            <ul>
                {blogs.map((blog, idx) =><><li className='mb-5' key={idx}><Link href={`blogs/${blog.id}`}>{blog.title}</Link></li></>)}
            </ul>
            
            
		</main>
	);
};

export default Blogs;