import React from 'react';
import './card.css';
import person from './person.png'



const CardList = ({dataList}) => {
    

    return (
        <div className='container'>
            {dataList.map(user => {
                return (
                    <div id="card" key={user.id}>
                        <div className="imgDiv">
                            <img alt="person_photo" src={person}  />
                        </div>
                        <div>
                            <h2>{user.name}</h2>
                            <p>{user.email}<br/>{user.phone}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardList;