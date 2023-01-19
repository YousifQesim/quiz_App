import React from "react";
import "./mainDes.css";
import Questions from "./Questions";
import { useState } from "react";
const Counter = () => {
  const [number, setNumber] = useState(0);
  const [True, setTrue] = useState(0);
  const [Side, Setside] = useState(true);
  let nextQuestion;
  const next = (isCorrect) => {
    if (isCorrect === true) {
      let trueansware = True + 1;
      setTrue(trueansware);
    }
    nextQuestion = number + 1;
    if (nextQuestion < Questions.length) {
      setNumber(nextQuestion);
    } else {
      Setside(false);
    }
  };

  console.log(True);
  return (
        Side?
    <div className="all  ">
        <div className="things ">
        <div className="trues ">
          <p>
            <span className="yak">{number+1}</span>

            <span className="dw">/</span>

            <span className="se">{Questions.length}</span>
          </p>
        </div>
        <div className="queAns">
          <div className="question" >{Questions[number].questionText}</div>

          <div className="answares">
          {Questions[number].answerOptions.map((e)=>(
            <button className="button-48"  onClick={()=>next(e.isCorrect)} >{e.answerText}</button>
          ))}

          </div>
        </div>
      </div>
    </div>:
    <div className="theResult">


          <div className="thetext">
        <div>True Answares</div>
        <span className="yak">{True}</span>
        <span className="dw">/</span>
        <span className="se">{Questions.length}</span>
      </div>
    </div>
  );
};











export default Counter;
