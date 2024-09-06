import Calculator from './Calculator.jsx';
import React, {useEffect} from 'react';


function App() {

  useEffect(() => {document.title = "My Calculator App"}, []);

  return(
    <>
      <Calculator></Calculator>
    </>
  )
}

export default App
