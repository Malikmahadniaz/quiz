import React, { useContext, useState } from 'react'
import { QuizContext } from '../context/QuizHolder';

export default function Quiz() {
  const [current,setCurrent] = useState(0);
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <Box current={current} next={setCurrent} />
    </div>
  )
}

const Box = ({ current, next }) => {
  const { quizzes,correct,setCorrect,setExit } = useContext(QuizContext);
  const [ans,setAns] = useState("");
  const saveHandler = () => {
      if(quizzes[current].correct === ans){
          setCorrect(correct + 1);
  }
  setAns("");
  if((current+1) === quizzes.length){
      setExit(true);
  }else{
    next(current + 1);
  }
}
  return(
    <div className='w-[60%] border shadow-lg rounded-md overflow-hidden'>
       <div className='p-2 text-2xl'>{current+1}) {quizzes[current].question}</div>
       <div className='grid grid-cols-2 mt-3'>
          <div className={`p-3 border ${ans === "a" ? "bg-blue-400 text-white" : "" } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("a")}>{quizzes[current].a}</div>
          <div className={`p-3 border ${ans === "b" ? "bg-blue-400 text-white" : "" } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("b")}>{quizzes[current].b}</div>
          <div className={`p-3 border ${ans === "c" ? "bg-blue-400 text-white" : "" } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("c")}>{quizzes[current].c}</div>
          <div className={`p-3 border ${ans === "d" ? "bg-blue-400 text-white" : "" } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns("d")}>{quizzes[current].d}</div>
       </div>
       <div className="flex justify-between">
        <div className='h-[30px] bg-orange-700 px-3 text-white' onClick={() => setAns("")}>Reset</div>
        <div className='h-[30px] bg-green-700 px-3 text-white' onClick={saveHandler}>Save & Next</div>
        <div className='h-[30px] bg-red-700 px-3 text-white'
        onClick={() => setExit(true)}>Exit</div>
       </div>
    </div>
  )
}