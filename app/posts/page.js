import React from 'react';
import getAllPosts from "@/app/lib/getAllPosts";
import Link from 'next/link';

const Posts = async () => {
    const posts = await getAllPosts();
    // console.log(posts)
    return (
		<main className="mt-10">
			<ul>
				{posts.map((post) => (
					<div className="mb-5" key={post.id}>
						<Link href={`posts/${post.id}`}>
							<div>
								<div className="font-bold text-xl">
									{post.id}. {post.title}
								</div>
								<div className="px-2 text-gray-400">
									{post.body}
								</div>
							</div>
						</Link>
					</div>
				))}
			</ul>
		</main>
	);
};

export default Posts;