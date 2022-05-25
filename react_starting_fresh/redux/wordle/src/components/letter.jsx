import React from 'react'
import { useContext } from 'react';
import { AppContext } from './context';
const Letter = ({ letterPos , attemptNum }) => {
  const {board, correctWord , currentAttempt} = useContext(AppContext);
  const letter = board[attemptNum][letterPos];
  const correct = correctWord[letterPos] === letter;
  const almost = correctWord[letterPos] !== letter && correctWord.includes(letter);
  const letterStatus = currentAttempt.attempt > attemptNum && ( correct ? "correct" : almost ? "almost" :  "error");
  
  return (
    <div className={letterStatus === "correct" ? 'border-2 flex justify-center items-center text-xl font-bold w-16 h-16 text-white bg-green-500' : letterStatus === "almost" ? 'border-2 flex justify-center items-center text-xl font-bold w-16 h-16 text-white bg-yellow-300' : 'border-2 flex justify-center items-center text-xl font-bold w-16 h-16 text-white bg-gray-400'}>{letter}</div>
  )
}

export default Letter