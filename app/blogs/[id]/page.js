import { notFound } from 'next/navigation';
import React from 'react';
import uqidev from '@/public/images/uqidev.jpg'
import Image from 'next/image';

const BlogPage = ({params}) => {
    const { id } = params;
    if (id > "4") {
        notFound();
    }
    return (
		<div className="mt-6">
			The blog ID is {id}
			<Image src={uqidev} alt='uqidev' placeholder='blur' className='rounded-md'></Image>
		</div>
	);
};

export default BlogPage;