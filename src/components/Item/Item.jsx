import React from 'react';
import './Item.css'

const Item = (props) => {

  return (
<div className="card espacio" style={{ width: "18rem" }}>
  <img className="card-img-top" src="https://cdn.mobilesyrup.com/wp-content/uploads/2020/09/ps5-digital-edition-1-scaled.jpg" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">
      {props.description}
    </p>
    <p className='card-precio'>
      {props.precio}
    </p>
    <p className='card-sku'>
      {props.sku}
    </p>
    <p className='card-stock'>
      {props.stock}
    </p>
    <a href="#" className="btn btn-primary">
      ¡HAZ CLICK AQUI!
    </a>
  </div>
</div>

  );
}

export default Item;
