import Comments from '@/app/components/Comments';
import getAllPosts from '@/app/lib/getAllPosts';
import getPost from '@/app/lib/getPost';
import getPostComments from '@/app/lib/getPostComments';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react';

export const generateMetadata = async ({ params }) => {
    const { id } = params;
    const post = await getPost(id);

    return {
        title: post.title,
        description: post.body
    }
}

const PostPage = async({ params }) => {
    const { id } = params;
    if (id > 10) {
        notFound();
    }
    // const intId = parseInt(id);
    // const posts = await getAllPosts();
    // console.log("posts are here:", posts);
    
    // const selectedPost = posts.find(post => post.id === intId)
    // console.log("selectedPost", selectedPost);

    const postPromise = getPost(id);
    const commentsPromise = getPostComments(id);

    // const [post, comments] = await Promise.all([postPromise, commentsPromise]);

    const post = await postPromise;

    return (
		<main className='mt-6'>
			<div className="font-bold text-xl">
				{post.id}. {post.title}
			</div>
            <div className="px-2 mb-6 text-gray-400">{post.body}</div>
            <hr></hr>
            <Suspense fallback="<h1>Loading comments...</h1>">
                <Comments commentsPromise={commentsPromise}></Comments>
            </Suspense>
		</main>
	);
};
export const generateStaticParams = async() => {
    const posts = await getAllPosts();

    return posts.map(post => ({id: post.id.toString()}))
}
export default PostPage;