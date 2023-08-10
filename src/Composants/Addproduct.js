import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAction } from '../Config/actions';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';


export default function AddProduct() {
  const count = useSelector((data) => data.produits.length);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [pic, setPic] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = () => {
    dispatch(addProductAction({ id: count + 1, title, price, pic }));
    navigate('/');
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPic(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="d-flex justify-content-center" >
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>Title:</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formPrice">
          <Form.Label>Price:</Form.Label>
          <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formImage">
          <Form.Label>Image:</Form.Label>
          <div>
            <Form.Control type="file" onChange={handleImageUpload} accept="image/*" />
            {pic && <img src={pic} alt="" />}
          </div>
        </Form.Group>
        <div className="d-flex justify-content-center" style={{margin :'15px'}}>
          <Button variant="primary" onClick={handleSave}>
            Add Produit
          </Button>
        </div>
      </Form>
    </div>
  );
}
