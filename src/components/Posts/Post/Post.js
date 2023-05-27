import React from 'react';
import { Card, DropdownButton, Dropdown } from 'react-bootstrap';
import moment from 'moment';
import { useDispatch } from 'react-redux'
import './Post.css';
import { deletePost, likePost } from '../../../actions/posts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsUp as faThumbsUpOutlined } from '@fortawesome/free-solid-svg-icons';
import 'moment/locale/es';

const Post = ({ post, setCurrentId }) => {
  moment.locale('es');
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile'));


  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><FontAwesomeIcon icon={faThumbsUp} size="sm" />&nbsp;{post.likes.length > 2 ? `tú y ${post.likes.length - 1} más` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</>
        ) : (
          <><FontAwesomeIcon icon={faThumbsUpOutlined} size="sm" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><FontAwesomeIcon icon={faThumbsUpOutlined} size="sm" />&nbsp;Like</>;
  };

  return (
    <Card className="post-card">
      <Card.Img variant="top" src={post.selectedFile}  className="img-fluid h-100" />
      <Card.Body>
        <div className="post-details">
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.message}</Card.Text>
          <div className="post-info">
            <div className="post-info-item">
              <i className=" far fa-user " > </i>
              <Card.Text> {post.name} </Card.Text>
            </div>
            <div className="post-info-item">
              <i className="far fa-calendar-alt"></i>
              <span>{moment(post.createdAt).fromNow()}</span>
            </div>
            <div className="post-actions-container">
            {(user?.result?._id === post?.creator) && ( 
              <DropdownButton id="dropdown-basic-button" title={<i className="fas fa-ellipsis-h"></i>} size="sm" >
                <Dropdown.Item onClick={() => setCurrentId(post._id)}>Editar</Dropdown.Item>
              </DropdownButton>
            )}
            </div>
            <div className="post-info-item">
              <i className="fas fa-tag " > </i>
              <span> {post.tags.map((tag) => ` #${tag} `)}</span>
            </div>
          </div>
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="post-actions">
          <button disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>   {post.likeCount}
            <Likes />
          </button>
          <span className="action-separator"></span>
          {(user?.result?._id === post?.creator) && (
            <button onClick={() => dispatch(deletePost(post._id))}>
              <i className="fas fa-trash-alt"></i> Eliminar
            </button>
          )}
        </div>

      </Card.Footer>
    </Card>
  );
};

export default Post;
