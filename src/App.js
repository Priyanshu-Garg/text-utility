
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const[mode,setMode]=useState('light');

  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
     setMode('dark');
     document.body.style.backgroundColor='#3875B2';
     showAlert("Dark mode enabled",'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled",'success');
    }
  }
  return (
    <>
    {/* <Router> */}
<Navbar title="Text-Utility-App" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
{/* <Routes> */}

  {/* <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>} /> */}
  <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
  {/* <Route path="/about" element={<About />} /> */}
  {/* <About /> */}
{/* </Routes> */}
{/* </Router> */}
    </>
  );
}

export default App;
