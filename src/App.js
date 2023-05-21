//import logo from './logo.svg';
import './App.css';
import Multi from './component/Multi/Multi';
import Sub from './component/Sub/Sub';
import Add from './component/Add/Add';
import { useState } from 'react';

function App() {

  const [inputvalue, setInputvalue]=useState(0);
  const printvalue = () => {
    console.log('UpdatedValue = ',inputvalue);
  }

  return (
    <div className='div1'>
    <h1>This Is My Third commit </h1>
    <p>Hello if you want more information so click below button</p>
    <button>click here</button>
    <form>
      <span>Registration Form</span>
      <br></br>
      <label>First Name</label><br></br>
      <input type='text' name='Pranav' placeholder='Enter First Name'></input>
      <br></br>
      <label>Last Name</label><br></br>
      <input type='text' name='Borkar' placeholder='Enter Last Name'></input>
    </form>

    <Add  a="10" b = "30"/>
    <Sub c="30" d="10" />
    <Multi e="10" f="10"/>

    <div>

      <input
        value={inputvalue} 
        onChange={(e)=>{
        setInputvalue(e.target.value)
        console.log('inputvalue = ', inputvalue)
      }}
      type='number' placeholder='Enter the number'/>

      <button onClick={printvalue}>Print</button>
      
    </div>

    </div>
    
  );
}

export default App;
