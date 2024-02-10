import React from 'react';
import Card from '../../cardComponent/card'

const MultiComp = ({choice , data , getValues}) => {
    return (
        <div className='container' >
            {data.map(data => {
                return(
                    <div id={`div_${data.id}`} className='card' key={data.id}>
                        <Card choice={choice} user={data} setData={getValues}/>
                    </div>
                )
            })}
        </div>
    )
}

export default MultiComp;