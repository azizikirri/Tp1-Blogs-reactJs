import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updateProductAction} from "../Config/actions"
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

 export default function Updateproduct(){
  const {id} = useParams()
  const produit = useSelector(data => data.produits.find((p)=>p.id===parseInt(id)));
  
  const [title, setTitle] = useState(produit.title);
  const [price, setPrice] = useState(produit.price);
  const [pic, setPic] = useState(produit.pic);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = () => {
    dispatch(updateProductAction({
       id: id, 
       title:title, 
       price:price, 
       pic :pic
      }));
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
   
    <Form className='formmm' method='post' encType='multipart/form-data'>  
      <Form.Group controlId="formTitle" className=' inputt'>
        <Form.Label>Title:</Form.Label >
        <Form.Control type="text"  onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formPrice" className='formpricee'>
        <Form.Label>Price: </Form.Label>
        <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formImage" >
        <Form.Label >Image:</Form.Label>
        <div className="d-flex align-items-center">
          <Form.Control type="file" onChange={handleImageUpload} accept="image/*" />
          {pic && (
            <img
              src={pic}
              alt=""
              style={{ maxWidth: '50px', maxHeight: '60px', marginLeft: '20px' }}
            />
          )}
        </div>
      </Form.Group>
      <div className="d-flex justify-content-center" style={{margin :'15px'}}>
        <Button variant="primary" onClick={handleSave}>
          Edit Produit
        </Button>
      </div>
    </Form>
  </div>

);
}

























