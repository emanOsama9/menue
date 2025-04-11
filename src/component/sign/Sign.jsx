
import {  onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebse/fire"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
 export function Sign(props){
    let navigate=useNavigate()

      let[email,setemail]=useState("");
         let[password,setpassword]=useState("");
         let[user,setuser]=useState(null);
     let[error,seterror]=useState("")
      
     
     
     async function submit (e){
         try{
             e.preventDefault()
             let y=  await signInWithEmailAndPassword(auth,
                email,
                 password
              );
              navigate("/home")
              let user=y._tokenResponse
              localStorage.setItem("tkn",JSON.stringify(user));
              props.sign()
          }

         catch(error){
             seterror(error.message)
             console.log(error.message)
     
             
         }
     
           
       console.log("fghj")
     }
      
      
         useEffect(function(){
     
         onAuthStateChanged(auth,(currentuser)=>{
     
     
      
             setuser(currentuser)}
         
         
         )
         
     
     },[])
     
         return<>
        <div className="register-section text-white">

                <div className="container py-5">
                       <div className="row">
                         <h1 className="text-white text-center">Login</h1>
     
     
                         <div className="col-md-6 w-75 m-auto">
                         {error? <div className="alert alert-danger">
     
                                              <h2 className="alret alert-danger">{error}</h2>
     
                                              </div> :" "}                
                             <div>
     
                                    <form>
                                     
     
                                   <label htmlFor="email"className="text-white py-2">Email</label>
                                   <input className="form-control "id="email"type="email" onChange={function(e){setemail(e.target.value)}}/>
     
                                  
                                   <label htmlFor="password"className="text-white py-2">Password</label>
                                   <input className="form-control "id="password" type="password" onChange={function(e){setpassword(e.target.value)}}/>
                                   <button className="btn btn-info text-white py-2 my-3 px-4" onClick={submit}> Login</button>
                                   {user ? <p className="text-white">Hello {user.email}</p> : <p>لم يتم تسجيل الدخول</p>}
                                           
                                     </form>
                          </div>
     
                         </div>
                       </div>
                 
                 
                 </div>    
         </div>
         </>
         
         
         
         
         
         
         
     
     
    
    
    
    
    
    
    }