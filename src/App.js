import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet';
import { Student } from './Component/Student';
// import Hello from './Component/Employee';
import Message from './Component/Message';
// import Employee from './Component/Employee';
import Counter from './Component/Counter';
import Welcome from './Component/Welcome';
import UseStateDemo from './Component/UseStateDemo';
import UseEffectDemo from './Component/UseEffectDemo';
import { createContext ,useContext } from 'react';
import MainComponent from './Component/MainComponent';
import { SampleThree } from './Component/SampleThree';
import { SampleTwo } from './Component/SampleTwo';
import { UseReducer } from './Component/UseReducer';
import Hooksusememo from './Component/Hooksusememo';
import { HooksCallback } from './Component/HooksCallback';

export const LoginContext=createContext("Hello");

function App() {
  let name= "Hari"
  
  return (
    
    <div className="App">
      {/* <Welcome/> */}
       {/* <Greet name="Hari"/>
       <Greet name="Ganesh"/>
       <Student/> */}
       {/* <Hello/>
       <Employee/> */}
       {/* <Message name="Message"/> */}
       {/* <Counter/> */}
       {/* <UseStateDemo/> */}
       {/* <UseStateDemo/> */}
       {/* <UseEffectDemo/> */}

         
          {/* <LoginContext.Provider value="hello">
          <MainComponent/>
          </LoginContext.Provider> */}
          {/* <SampleThree/>
          <SampleTwo/> */}

          {/* <UseReducer/> */}

          {/* <Hooksusememo/> */}

          <HooksCallback/>

               
           
    </div>
  );
}

export default App;
