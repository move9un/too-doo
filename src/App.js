/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목,set글제목] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, set따봉] = useState([0, 0, 0]);
  let [입력값, 입력값변경] = useState('');

  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  return (
    <div className='App'>
      <div className="black-nav">
        <h4>nuka99 개발 블로그</h4>
      </div>
      
      <button onClick={()=> {
        let 글정렬 = [...글제목];
        글정렬.sort();
        set글제목(글정렬)}}>가나다순 정렬</button>

      
    {
      글제목.map(function(a, i){
        return(
          <div className='list'>
            <h4 onClick={()=>{setModal(!modal); setTitle(i);} }>{ 글제목[i] }</h4>
            <h3><span onClick={()=>{
                let copy = [...따봉];
                copy[i] = 따봉[i]+1;
                set따봉(copy);
             }}> 👍 </span>{따봉[i]}</h3>
            <p>240924 발행</p>
            <button onClick={()=>{
              글제목.splice(i, 1);
              set글제목([...글제목]);
              }}>삭제</button>
          </div>
        )
      })
    }

    
    <input type='text' onChange={(e)=>{입력값변경(e.target.value)}}></input>
    <button onClick={()=>{set글제목([...글제목, 입력값])}}>글발행</button>

      {
        modal == true ? <Modal title={title} props글제목 = {글제목}/> : null
      }
      

    </div>
  );
}


// function Modal(props){
//   return(
//     <div className='modal'>
//       <h4>{props.props글제목[props.title]}</h4>
//       <p>날짜</p>
//       <p>상세내용</p>
//     </div>
//   )
// }

export default App;
