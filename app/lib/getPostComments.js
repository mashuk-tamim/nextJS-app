const getPostComments = async (id) => {
	const comments = await fetch(
		`https://jsonplaceholder.typicode.com/comments?postId=${id}`
	);

	return comments.json();
};

export default getPostComments;
