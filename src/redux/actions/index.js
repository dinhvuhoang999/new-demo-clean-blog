export const FETCH_POST_BEGIN = 'FETCH_POST_BEGIN';
export const FETCH_POST_SUCCESS  = 'FETCH_POST_SUSSCESS';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';
export const FIND_POST = 'FIND_POST';
export const FETCH_PAG = 'FETCH_PAG';

export const fetchPostsBegin = () =>({
    type: FETCH_POST_BEGIN
});

export const fetchPostsSuccess = (posts) => ({
    type: FETCH_POST_SUCCESS,
    payload: {posts}
});


export const fetchPostsError = (error) => ({
    type: FETCH_POST_ERROR,
    payload: {error}
	});


export const findPosts = (postId) =>({
    type: FIND_POST,
    payload: postId
});

export const fetchPagination = (posts) =>({
	type: FETCH_PAG,
	payload: posts
});