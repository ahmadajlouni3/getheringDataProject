import React  from 'react';
import './card.css';
import person from './person.png'


const Card = ({user , setData , choice}) =>{
    
    const deleteItem = (divId) => {
        document.getElementById(divId).style.display = 'none';
    }
    const moreInfo = (id) => {
        setData(id)
    }

    const MultiCards = () => {
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
                <button onClick={() => moreInfo(user.id)} className='info'>More Info</button> 
                <button onClick={() => deleteItem(`div_${user.id}` , user.id)} className='del'>Delete</button>
            </div>
            </>
        )
    }
    const SingleCards = () => {
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
                <button onClick={() => deleteItem(`div_${user.id}` , user.id)} className='del'>Delete</button>
            </div>
            </>
        )
    }

    return (
        choice ? <SingleCards /> : <MultiCards />
    )
}

export default Card;