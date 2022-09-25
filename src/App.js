import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
      setAlert({
        msg:message,
        type:type
      })
      setTimeout( () => {
        setAlert(null);
      },3000  
      );
  }
  const removeBodyClasses = () => {
       document.body.classList.remove('bg-light');
       document.body.classList.remove('bg-dark');
       document.body.classList.remove('bg-danger');
       document.body.classList.remove('bg-warning');
       document.body.classList.remove('bg-success');
       document.body.classList.remove('bg-primary');
  }
  const toggleMode = (cls) =>{
    //removeBodyClasses();
    //document.body.classList.add('bg-'+cls);
    if (cls==='light')
    {
      setMode('light');
      document.body.style.backgroundColor= 'white';
      document.body.style.color= 'Black';
      showAlert("dark mode enabled", "success")
      setInterval(() => {
        document.title= "hello";
      }, 2000)
    }
    else if (cls==='dark'){
      setMode('dark')
      document.body.style.backgroundColor= 'grey';
      document.body.style.color= 'white';
      showAlert("light mode enabled", "warning")
    }
    else if (cls=== 'danger'){
      setMode('danger');
      document.body.style.backgroundColor= 'salmon';
      document.body.style.color= 'red';
    }
    else if (cls==='success'){
      setMode('success');
      document.body.style.backgroundColor= 'LightGreen';
      document.body.style.color= 'DarkGreen';
    }
    else if (cls==='warning'){
      setMode('warning');
      document.body.style.backgroundColor= 'LightYellow';
      document.body.style.color= 'Brown';
    }
    else{
      setMode('primary');
      document.body.style.backgroundColor= 'LightBlue';
      document.body.style.color= 'navy';
    }
  }
  const toggleModeRed = () => {
    if ( mode=== 'light' || mode==='dark')
    {
      setMode('danger');
      document.body.style.backgroundColor= 'salmon';
      document.body.style.color= 'red';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      document.body.style.color= 'black';
    }
  }
   return (
    <div className="App">
      <BrowserRouter>
       <NavBar title= "TextChanger" abouttext="About Us" mode={mode} toggleMode={toggleMode} toggleModeRed={toggleModeRed}/>
       <Alert alert={alert}></Alert>
       <div className="container"> 
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert}  />} />
        <Route exact path="/about" element={<About mode={mode}/>} />
      </Routes>
       </div> 
      </BrowserRouter>    
    </div>
  );
}

export default App;
