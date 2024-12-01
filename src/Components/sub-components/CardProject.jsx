import React from 'react';

// import { Container } from './styles';

function CardProject({text, title, img, url}) {

    function redirect() {
        window.open(url, '_blank');
    }

  return (
    <>
       <div className='card-project' onClick={redirect}>
            <img height={'220px'} className='card-image' src={img} alt={title} />
            <div>
                <h5 style={{textAlign:'left', margin:'0px'}}>{title}</h5>
                <p>{text}</p>
            </div>
       </div>
    </>
  );
}


export default CardProject;