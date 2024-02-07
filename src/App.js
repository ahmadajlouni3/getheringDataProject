import React , {useState} from 'react';
import CardList from './component/cardlist';
import './App.css';


function App() {
  const [data , setData] = useState([]);
  const [isRun , setIsRun] = useState(false);
  const [text , setText] = useState("Show Data Now");


  const getData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        setData(data)
        isRun ? setText("Show Data Now"): setText("Hide Data Now");
        isRun ? setIsRun(false) : setIsRun(true);
      })  
  }

  const display = () => {
    const ele = [ document.getElementsByClassName("popupMsg")[0]
    , document.getElementsByClassName("opacityBg")[0]];
    ele[0].style.display = 'none';
    ele[1].style.display = 'none';
  }


  return (
    <>
    <div className='opacityBg'></div>
    <div className="popupMsg">
      <h2>Note : </h2>
      <p>
        this program can do : <br/>
        <ul>
          <li>show information about client</li>
          <li>delete any client you want</li>
          <li>know more information about client</li>
        </ul>
        <button onClick={display}>Ok</button>
      </p>
    </div>
      <button onClick={getData} style={{
      margin:'0' ,
      padding : '20px 0px',
      font : 'normal small-caps bold 16px/1.2 arial', 
      color: 'gray' ,
      width : '100%'
      }}>{text}</button>


      {isRun && <CardList dataList={data}/>}
    </>

  );
}

export default App;
