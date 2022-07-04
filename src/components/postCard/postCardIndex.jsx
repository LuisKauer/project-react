import React from 'react';
import PropTypes from 'prop-types';

import './postCardStyle.css';

export default function PostCard(props) {
  const { post } = props;
  return (
    <div className="post">
      <img src={post.cover} alt="post.title" />
      <div key={post.id} className="postCard">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
PostCard.defaultProps = {
  post: { },
  cover: '',
  id: 0,
  title: '',
  body: '',

};
PostCard.propTypes = {
  post: PropTypes.oneOfType([PropTypes.object]),
  cover: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,

};
