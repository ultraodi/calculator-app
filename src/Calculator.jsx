import React, {useState} from "react";
import { evaluate } from "mathjs";


function Calculator(){
  
  const [input, setInput] = useState('');
  const [isEvaluated, setIsEvaluated] = useState(false);
  const [previousAnswer, setPreviousAnswer] = useState(null);

  function handleButtonClick(value){
    setInput(prev => prev + value);
  };
  
  function handleACButton(){
    setInput('');
    setIsEvaluated(false);
  };

  function handleClearButton(){
    if (!isEvaluated){
      setInput(prev => prev.slice(0, -1));
    }
  };

  function handleEvaluate() {
    try {
      const result = evaluate(input); // Use evaluate from math.js
      setInput(result.toString());
      setIsEvaluated(true);
      setPreviousAnswer(result);
    } catch (error) {
      setInput('Error');
      setIsEvaluated(true);
    }
  }


  return(
    
    <div className="all-elements">
      <textarea type="text" 
                value={input} 
                rows="1" 
                readOnly/>
      
      <div className="all-buttons">
        
        <div>
          <button onClick={() => handleACButton()}>AC</button>
          <button onClick={() => handleClearButton()}>C</button>
          <button onClick={() => handleButtonClick('%')}>%</button>

          <button className="funcs" onClick={() => handleButtonClick('/')}>÷</button><br/>

          <button className="numbers" onClick={() => handleButtonClick('(')}>(</button>
          <button className="numbers" onClick={() => handleButtonClick(')')}>)</button>
          <button className="numbers" onClick={() => handleButtonClick('^')}>^</button>

          <button className="funcs" onClick={() => handleButtonClick('*')}>*</button><br/>

          <button className="numbers" onClick={() => handleButtonClick('7')}>7</button>
          <button className="numbers" onClick={() => handleButtonClick('8')}>8</button>
          <button className="numbers" onClick={() => handleButtonClick('9')}>9</button>

          <button className="funcs" onClick={() => handleButtonClick('-')}>-</button><br/>

          <button className="numbers" onClick={() => handleButtonClick('4')}>4</button>
          <button className="numbers" onClick={() => handleButtonClick('5')}>5</button>
          <button className="numbers" onClick={() => handleButtonClick('6')}>6</button>
          
          <button className="funcs"onClick={() => handleButtonClick('+')}>+</button><br/>

          <button className="numbers" onClick={() => handleButtonClick('1')}>1</button>
          <button className="numbers" onClick={() => handleButtonClick('2')}>2</button>
          <button className="numbers" onClick={() => handleButtonClick('3')}>3</button>

          <button className="funcs" onClick={handleEvaluate}>=</button><br/>

          <button className="numbers long" onClick={() => handleButtonClick('0')}>0</button>
          <button className="numbers" onClick={() => handleButtonClick('.')}>.</button>

          <button className="numbers" onClick={() => previousAnswer !== null ? handleButtonClick(`${previousAnswer}`) : ''}>Ans</button>
        </div>

      </div>
    </div>
      )
}

export default Calculator