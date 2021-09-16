import React from 'react';
import PostItem from "../PostItem";
import PropTypes from 'prop-types';

function PostList(props) {
    const {posts, loading, error} = props;
		if(loading === false){
        return <div>loading....</div>
    }

    if(error){
        return <div>{error}</div>
    }

    return (
        <>
         <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
            {posts && posts.map((post ,i) => <PostItem key={i} post={post} {...post} /> )}
            </div>
            </div>
        </div>
        </>
    );

}

export default PostList;

PostList.propTypes = {
	posts : PropTypes.array,
	loading : PropTypes.bool,
	error : PropTypes.string,
}