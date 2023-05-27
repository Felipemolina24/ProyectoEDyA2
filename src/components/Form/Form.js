import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import FileBase from 'react-file-base64';
import './Form.css';
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'


const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({  title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile'));
  
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.email}));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.email }));
      clear();
    }
  };

  const clear = () => {
    setCurrentId(null)
    setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  }

  return (
    <Card className="form-container">

      <form autoComplete="off" noValidate className="form" onSubmit={handleSubmit}>
        <h6 className='text-center'>{currentId ? 'Editando publicación...' : 'Realiza una publicación' } </h6>
        <input className="form-field" name="title" type="text" placeholder="Título" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <input className="form-field" name="message" as="textarea" rows={4} placeholder="Mensaje" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <input className="form-field" name="tags" type="text" placeholder="# " value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className="file-input"><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className="form-submit-button" variant="primary" type="submit" block> <i class="fas fa-paper-plane"></i>  Subir </Button>
        <Button className="form-clear-button" variant="secondary" onClick={clear} block style={{ backgroundColor: 'red' }}> <i class="fas fa-eraser"></i> Limpiar </Button>
      </form>

    </Card>
  );
};

export default Form