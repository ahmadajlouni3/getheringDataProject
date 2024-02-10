import React from 'react';
import person from '../person.png'
import { deleteItem , moreInfo } from '../functionalty/func';

const MultiCards = ({user , setData}) => {
    return (
        <>
        <div className="imgDiv">
            <img alt="person_photo" src={person}  />
        </div>
        <div className='userInfo'>
            <h2>{user.name}</h2>
            <p>{user.email}<br/>{user.phone}</p>
        </div>
        <div className="manage_buttons">
            <button onClick={() => moreInfo(user.id , setData)} className='info'>More Info</button> 
            <button onClick={() => deleteItem(`div_${user.id}` , user.id)} className='del'>Delete</button>
        </div>
        </>
    )
}

export default MultiCards;