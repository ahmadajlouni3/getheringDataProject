import React from 'react';
import Card from '../../cardComponent/card'


const SingleComp = ({data , choice , setChoice}) => {
    return (
        <div style={{margin:'30px'}}  id={`div_${data.id}`} className='card' key={data.id}>
            <Card choice={choice} setChoice={setChoice} user={data}/>
        </div>
    )
} 

export default SingleComp;