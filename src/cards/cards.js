import React from 'react'
import './cards.css'


const Cards = ({name, description, image, price}) => {
  return (
    <>
    <div className="card mb-3 mt-3 col-sm-8 col-xs-8" style={{maxWidth: '540px'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="image img-fluid mt-4 ms-2" alt="..."/>
        </div>
        <div className="col-md-8 col-sm-8 col-xs-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">{price}</p>
          </div>
        </div>
      </div>
        <button className='d-flex align-items-end flex-column ms-auto me-2 mb-2'><i class="bi bi-cart-plus"></i></button>
    </div>
    </>
  )
}
export default Cards