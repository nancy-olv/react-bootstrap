import React from 'react';
import Card from './Card';
import image1 from '../assets/image1.jpg'; 
import image2 from '../assets/image2.jpg'; 
import image3 from '../assets/image3.jpg'; 

const cards = [
{
  id:1,
  title:'Curso de java ',
  image: image1,
  instructor: 'Ramon Savala',
  url: 'http://google.com'

},
{
  id:1,
  title:'Curso de python',
  image: image2,
  instructor: 'victor de la o',
  url: 'http://wikipedia.org/wiki/'
},
{
  id:1,
  title:'Curso angular',
  image: image3,
  instructor: 'benito',
  url: 'http://yahoo.com'
}
]
export default function Cards() {
  console.log(cards)
  return (
    <div className='Conteiner d-flex justify-content-center alings-items-center h-100'>
      <div className='row'>
        {
          cards.map(c =>(
            <div className='col-md-4' key={cards.id}>
              <Card
              key={c.id}
              id={c.id}
              title={c.title}
              image={c.image}
              instructor={c.instructor}
              />
            </div>
          ))  
       }
      </div>
    </div>
  )
}