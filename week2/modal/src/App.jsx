import { useState } from 'react'

import './App.css'
import Modal from './components/modal'


function App() {
  const [ modal,setModal]= useState(false);
  
const handleOpenModal = () => {
  setModal(true);
  console.log('모달이 켜짐');
}

const handlecloseModal = () =>{
  setModal(false);
  console.log('모달이 꺼짐');
}

  return (
    <>
    
      <h1>안녕하세요!</h1>
      <h4>내용내용내용</h4>
      <button onClick={handleOpenModal}>버튼 열기</button>
      {modal && <Modal close={handlecloseModal}/>}


    </>
  )
}

export default App
