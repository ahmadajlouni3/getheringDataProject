import React , {useState} from 'react';
import CardList from './cardlist';
import './App.css';


function App() {
  const [data , setData] = useState(null);
  const [isRun , setIsRun] = useState(false);
  const [text , setText] = useState("Show Data Now")


  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      setData(data)
      isRun ? setText("Show Data Now"): setText("Hide Data Now");
      isRun ? setIsRun(false) : setIsRun(true);
    })
  }



  return (
    <>
      <button onClick={getData} style={{
      margin:'0' ,
      padding : '20px 0px',
      font : 'normal small-caps bold 16px/1.2 arial',
      backgroundColor : 'tomato' , 
      color: 'white' ,
      width : '100%'
      }}>{text}</button>

      {isRun && <CardList dataList={data} />}
    </>

  );
}

export default App;
