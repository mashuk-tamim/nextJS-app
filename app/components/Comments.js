import React from 'react';

const Comments = async({ commentsPromise }) => {
    const comments = await commentsPromise;
    // console.log(comments);
    return (
		<div>
			<div>
				<p className="mt-6 mb-2 text-xl">Comments:</p>
				{comments.map((comment) => (
					<div className="mb-2" key={comment.id}>
						<h1>
							{comment.id}. {comment.name}
						</h1>
						<p className="text-gray-500">{comment.body}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Comments;