import React from 'react';
import PropTypes from 'prop-types';

const Post = function ({ author, body }) {
  return (
    <div>
      <div>
        Author:
        {' '}
        {' '}
        {author}
      </div>
      <div>
        Body:
        {' '}
        {' '}
        {body}
      </div>
    </div>
  );
};

Post.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
