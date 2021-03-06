import React, { useState, useEffect } from 'react';
import Post from './Post';

// airtable configuration
const Airtable = require('airtable');

const airtableConfig = {
  apiKey: process.env.REACT_APP_AIRTABLE_USER_KEY,
  baseKey: process.env.REACT_APP_AIRTABLE_BASE_KEY,
};

const base = new Airtable({ apiKey: airtableConfig.apiKey })
  .base(airtableConfig.baseKey);

const PostsDisplay = function () {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    base('Posts').select({ view: 'Grid view' }).all()
      .then((records) => {
        setPosts(records);
      });
  };

  useEffect(() => {
    getPosts();
  });

  return posts.map((post) => (
    <Post
      key={post.id}
      author={post.fields.Author}
      body={post.fields.Body}
    />
  ));
};

export default PostsDisplay;
