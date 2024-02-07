import React from 'react';
import './cardlist.css';
import Card from './card'



const CardList = ({dataList}) => {
    let data = dataList.slice();
    const [get , setGet] = React.useState({});
    const [choice , setChoice] = React.useState(false);

    
    const getValues = (id)  => {
        data = data.filter(user => {
            return user.id === id
        })
        setGet(data[0])
        console.log(choice)
        setChoice(true)
        console.log(choice)
    }



    const MultiComp = () => {
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

    const SingleComp = ({data}) => {
        return (
            <div style={{margin:'30px'}}  id={`div_${data.id}`} className='card' key={data.id}>
                <Card choice={choice} user={data}/>
            </div>
        )
    } 
    

    


    
    return get.id ? <SingleComp data={get}/> : <MultiComp setData={getValues}/> 
}

export default CardList;