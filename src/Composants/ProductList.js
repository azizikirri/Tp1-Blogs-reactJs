import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {deleteProductAction} from "../Config/actions"
import { Card, Button } from 'react-bootstrap';
import "./ProductList.css"
export default function ProductList() {
  const produits = useSelector((data) => data.produits);
  const dispatch=useDispatch()
  const handleDelete=(id)=>{
    dispatch(deleteProductAction(id))
  }
  return (
    <div>
      <Link to="/add-product">
        <Button>Add product</Button>
      </Link>

      <div className="card-container d-flex flex-wrap">
        {produits.map((produit, index) => (
          <Card key={index} className="mx-2 my-2 flex-grow-1" style={{ width: '200px' ,flex: '0 0 200px' }}>
            <Card.Img
              variant="top"
              src={`${process.env.PUBLIC_URL}/pictures/${produit.pic}`}
              alt={produit.title}
              style={{ width: '200px', height: '200px' }}
            />
            <Card.Body>
              <Card.Title>{produit.title}</Card.Title>
              <Card.Text>
           
                Price: {produit.price}
              </Card.Text>
              <Link to={`/update-product/${produit.id}`}>
                <Button className='btnEdit'>Edit</Button>
              </Link>
              <Button onClick={()=>handleDelete(produit.id)} className='btndelete'>Delete</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
