import React  from 'react';
import './card.css';
import MultiCards from './typecards/multi';
import SingleCards from './typecards/single';


const Card = ({user , setData , choice , setChoice}) =>{

    return (
        choice ? 
        <SingleCards user={user} choice={choice} setChoice={setChoice}/> 
        :
        <MultiCards user={user} setData={setData}/>
    )
}

export default Card;