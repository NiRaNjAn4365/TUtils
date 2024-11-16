import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode,setmode]=useState('light');
  const [alert, setalert] = useState(null)
  function showAlert(message,tye){  
      setalert({
        msg: message,
        type: tye
    })
    dismiss_alert()
  }
  function dismiss_alert(){
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

 function toggleMode(){
  if(mode==='light'){
    setmode('dark')
    document.body.style.backgroundColor='#343a40'
    showAlert("Dark Mode Enabled","success");
  }else{
    setmode('light')
    document.body.style.backgroundColor='white'
    showAlert("Lite Mode Enabled","success");
    
  }
 }
  return (
    <>
    {/* <Router> */}
   <Navbar title="Tutils" mode={mode} togglemode={toggleMode}></Navbar>
   <Alert alert={alert} showAlert={showAlert}/>
   <TextArea mode={mode} showAlert={showAlert}></TextArea>
   {/* <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextArea mode={mode} showAlert={showAlert} />} />
        </Routes>     
        </Router> */}
    </>
  );
}

export default App;
