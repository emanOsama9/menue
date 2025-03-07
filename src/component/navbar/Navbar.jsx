import { Button } from "bootstrap/dist/js/bootstrap.min";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebse/fire";
import "./nav.css"

export function Navbar(props){
    let navigate=useNavigate()
async function v(){
    await signOut(auth)
      navigate("/sign")
      console.log("k")
 }
    
    return<>
     <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">
    <img src='/images (4).jfif' className="nav-img"/>
     
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

{props.user?  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
    <li class="nav-item">
         <Link class="nav-link" to="home">Home</Link>
       </li>
       <li class="nav-item">
         <Link class="nav-link" to="details">Details</Link>
       </li>
        
        
     </ul>: ""}


     {props.user?
     <li class="nav-item">
     <Link class="nav-link"><button  className="d border-none"onClick={props.logout}>Logout</button></Link>
   </li>
      
     
     
     
     
     
     
     :<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
     <li class="nav-item">
       <Link class="nav-link active" aria-current="page" to="register">Register</Link>
     </li>
     <li class="nav-item">
       <Link class="nav-link" to="sign">Sign</Link>
     </li>
     
      
      
   </ul>}
      
    </div>
  </div>
</nav>
    
    </>
    
    
    
    
    
    
    
    }