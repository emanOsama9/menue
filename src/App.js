import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './component/home/Home';
import { Sign } from './component/sign/Sign';
import { Register } from './component/register/Register';
import { Navbar } from './component/navbar/Navbar';
 import { Details } from './component/details/Details';
import { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebse/fire';
import { Navigate } from 'react-router-dom';

function App() {

  let[currentuser,setcurrentuser]=useState(null)

function getuser(){
 let Usertoken=JSON.parse(localStorage.getItem('tkn'))
 
 setcurrentuser(Usertoken)




}





let navigate=useNavigate()

async function logout( ){


localStorage.clear()
setcurrentuser("")
  await signOut(auth)
      navigate("/sign")
 
  
}
function user_render(){
  if(localStorage.getItem("tkn")!=null){

             getuser()
  }

}
useEffect(function(){

user_render()







},[])


function Protectedroute(props){
if(currentuser!=null){

  return<>
  { props.children}
  </>
}


else {
  return <>
  
  
  
  
  <Navigate   to="/sign"/>

   
  
  
  
  
  
  
  
  </>
}




}








  return<>

 













   <Navbar    user={currentuser}   logout={logout} />

     
   <Routes>


  <Route path='' element={<Home/>}/>
   <Route path='home' element={<Protectedroute><Home/></Protectedroute> }/>

 
     <Route path='sign'element={ <Sign sign={getuser}/>}/>
      
    <Route path='register' element={<Register/>}/>
     <Route path='details' element={<Protectedroute><Details/></Protectedroute> }>
     
 
     <Route path=':id' element= { <Details/> }/>

     
     
     
     
     </Route>

    <Route path='*' element={<h1 className='text-center'>Error 404</h1>}/>

  </Routes>
  
  
  
  
  
  
  
  </> 
   
 }

export default App;
