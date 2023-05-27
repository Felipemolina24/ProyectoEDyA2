import React from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import './Posts.css';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  if (!posts.length) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" role="status" variant="primary">
          <span className="sr-only">Cargando...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <Card key={post._id} className="mb-4">
          <Post post={post} setCurrentId={setCurrentId} />
        </Card>
      ))}
    </div>
  );
};

export default Posts;
