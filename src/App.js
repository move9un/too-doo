/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [오늘할일,set오늘할일] = useState([]);
  let [오늘상세,set오늘상세] = useState([]);

  //따봉 배열 동적으로 관리
  let [따봉, set따봉] = useState([]);

  let [메모제목, set메모제목] = useState('');
  let [상세사항, set상세사항] = useState('');

  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  return (
    <div className='App'>
      <div className="black-nav">
        <h4>TOdo list</h4>
      </div>
      
      <button onClick={()=> {
        let 글정렬 = [...오늘할일];
        글정렬.sort();
        set오늘할일(글정렬)}}>가나다순 정렬</button>

      
    {
      오늘할일.map(function(a, i){
        return(
          <div className='list'>
            <h4 onClick={()=>{setModal(!modal); setTitle(i);} }>{ 오늘할일[i] }</h4>
            <h3>
              <span onClick={()=>{
                let copy = [...따봉];
                copy[i] = 따봉[i] + 1;
                set따봉(copy);
             }}> 👍 </span>{따봉[i]}
            </h3>
    
            <button onClick={()=>{
              오늘할일.splice(i, 1);
              오늘상세.splice(i, 1);
              따봉.splice(i, 1);

              set오늘할일([...오늘할일]);
              set오늘상세([...오늘상세]);
              set따봉([...따봉]);
              }}>삭제</button>
          </div>
        )
      })
    }

    <div>
        <input type='text' placeholder="메모 제목." onChange={(e)=>{set메모제목(e.target.value)}}></input>
        <p />
        <input type='text' placeholder="상세 사항." onChange={(e)=>{set상세사항(e.target.value)}}></input>
        <p />
        <button onClick={()=>{
          set오늘할일([...오늘할일, 메모제목]); // 새로운 할일이 추가
          set오늘상세([...오늘상세, 상세사항]); // 새로운 할일이 추가 될 때 상세사항 함께 입력
          set따봉([...따봉, 0]); // 새로운 할 일이 추가 될 때 따봉 배열에 0을 추가
          }}>메모 하기</button>
    </div>
    

      {
        modal == true ? <Modal title={title} props오늘할일 = {오늘할일} props오늘상세 = {오늘상세}/> : null
      }
      

    </div>
  );
}


function Modal(props){
  return(
    <div className='modal'>
      <h4>{props.props오늘할일[props.title]}</h4>
      <p>{props.props오늘상세[props.title]}</p>
    </div>
  )
}

export default App;
