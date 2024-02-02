import React from 'react';
import './card.css';



const CardList = ({dataList}) => {
    

    return (
        <div className='container'>
            {dataList.map(user => {
                return (
                    <div id="card" key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.email}<br/>{user.phone}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CardList;