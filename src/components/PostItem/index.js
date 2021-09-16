import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function PostItem({ name, url }) {
  return (
    <div>
      <div className="post-preview">
        <Link to={`/SamplePost/${name}`}>
          <h2 className="post-title">{name}</h2>
        </Link>
        <p className="post-meta">
          <a href="#!"> {url}</a>
        </p>
      </div>
    </div>
  );
}

export default PostItem;

PostItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};
