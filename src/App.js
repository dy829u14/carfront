import './App.css';
import { useEffect, useState } from 'react';
import CarFront from './components/CarFront';


function App() {
  const [isAuthenticated, setAuth] = useState(false);
  const loginAuth = () => {
    setAuth(true)
  }
  const logoutAuth = () => {
    setAuth(false);
    //jwt토큰 삭제 
    sessionStorage.removeItem("jwt")
  }
  //마운트 될때 자동실행
  useEffect(()=>{
    if(sessionStorage.getItem("jwt")){
      setAuth(true);
    }
  },[])
  return (
    <div className="App">
      <CarFront loginAuth={loginAuth} isAuthenticated={isAuthenticated} logoutAuth={logoutAuth}/>
    </div>
  );
}

export default App;
