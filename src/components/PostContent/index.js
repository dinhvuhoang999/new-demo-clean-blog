import React from 'react';
import PropTypes from 'prop-types';

function PostContent({ post }) {
  return (
    <>
      <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            {post.map(function (item) {
              return (
                <>
                  <div className="col-md-10 col-lg-8 col-xl-7">
                    <p>{item.name}</p>
                    <p>
                      Placeholder text by
                      <a href={item.url}>{item.url} </a>
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </article>
    </>
  );
}

export default PostContent;

PostContent.propTypes = {
  post: PropTypes.array,
};
