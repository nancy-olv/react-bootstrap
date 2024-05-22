import React from 'react';


export default function Card({id, title,image, instructor, url}) {
  return (
    <div className='card text-center bg-dark'>
      <img src={image} alt='...' />
      <div className='card-body text-light'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>
          Instructor: {instructor}
        </p>
        <a href='#!' className='btn btn-outline-primary rounded-4'>
          ir al sitio web
          </a> 
      </div>
    </div>
  );
}