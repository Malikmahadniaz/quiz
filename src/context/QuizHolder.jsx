import React, { createContext, useState } from 'react';

const QuizContext = createContext();

const quizzes = [
  {
     "question": "What is the scientific name of butterfly?",
     "a": "Apis",
     "b": "Cleopetra",
     "c": "Formicidae",
     "d": "Rhopalocera",
     "correct": "d"
  },
  {
     "question": "How hot is the surface of sun?",
     "a": "1,233 K",
     "b": "5,778 K",
     "c": "12,130 K",
     "d": "101,300 K",
     "correct": "b"
  },
  {
     "question": "Who are the actors in Internship?",
     "a": "Ben stilller, Jonah Hill",
     "b": "Courteny Cox, Matt LeBlanc",
     "c": "Kaley cuoco, Jim Parsons",
     "d": "Vince Vaughn, Owen Wilson",
     "correct": "d"
  },
  {
     "question": "What is the scientific name of butterfly?",
     "a": "Apis",
     "b": "Cleopetra",
     "c": "Formicidae",
     "d": "Rhopalocera",
     "correct": "d"
  },
  {
     "question": "What is the scientific name of butterfly?",
     "a": "Apis",
     "b": "Cleopetra",
     "c": "Formicidae",
     "d": "Rhopalocera",
     "correct": "d"
  },
  {
     "question": "What is the scientific name of butterfly?",
     "a": "Apis",
     "b": "Cleopetra",
     "c": "Formicidae",
     "d": "Rhopalocera",
     "correct": "d"
  },
  {
     "question": "What is the scientific name of butterfly?",
     "a": "Apis",
     "b": "Cleopetra",
     "c": "Formicidae",
     "d": "Rhopalocera",
     "correct": "d"
  },
  {
     "question": "What is the scientific name of butterfly?",
     "a": "Apis",
     "b": "Cleopetra",
     "c": "Formicidae",
     "d": "Rhopalocera",
     "correct": "d"
  },
  {
     "question": "What is the scientific name of butterfly?",
     "a": "Apis",
     "b": "Cleopetra",
     "c": "Formicidae",
     "d": "Rhopalocera",
     "correct": "d"
  },
  {
     "question": "What is the scientific name of butterfly?",
     "a": "Apis",
     "b": "Cleopetra",
     "c": "Formicidae",
     "d": "Rhopalocera",
     "correct": "d"
  }
]

export default function QuizHolder(props) {
  const [start, setStart] = useState(false);
  const [exit, setExit] = useState(false);
  const [correct,setCorrect] = useState(0);
  return (
    <QuizContext.Provider value={{
      start, exit, setStart, setExit, quizzes, correct, setCorrect
    }}>
        {props.children}
    </QuizContext.Provider>
  )
}

export { QuizContext };