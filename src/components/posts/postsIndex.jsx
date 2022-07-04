/* eslint-disable react/prop-types */
import React from 'react';

import './postStyle.css';

import PostCard from '../postCard/postCardIndex';

export default function Posts(props) {
  const { posts } = props;
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
