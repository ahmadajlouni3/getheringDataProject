import React from 'react';
import './cardlist.css';
import SingleComp from './functionalty/singlecomp';
import MultiComp from './functionalty/multicomp';



const CardList = ({dataList}) => {
    let data = dataList.slice();
    const [get , setGet] = React.useState({});
    const [choice , setChoice] = React.useState(false);


    //######################################################
    //Getting Values about single user
    const getValues = (id)  => {
        data = data.filter(user => {
            return user.id === id
        })
        setGet(data[0])
        setChoice(true)
    }
    //######################################################
    
    return get.id && choice ? 
    <SingleComp choice={choice} data={get} setChoice={setChoice}/> 
    :<MultiComp choice={choice} data={data} getValues={getValues}/> 
}

export default CardList;