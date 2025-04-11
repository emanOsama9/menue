

import { useDispatch, useSelector } from 'react-redux';
import './home.css' ;
import { useEffect, useState } from 'react';
import { fetchMenue } from '../../redux/slicemenue';
import { Link } from 'react-router-dom';
import { Navbar } from '../navbar/Navbar';
export function Home(){

    let {loading,error,menue}=useSelector (function(state){return state.menue})
    console.log(menue) ;
   let disbatch= useDispatch();

let [value,setvalue]=useState("")

 useEffect(function(){
    disbatch(fetchMenue())
 },[])




 let newmwnue=menue.filter(function(rec){return rec.name.toLowerCase().includes(value.toLocaleLowerCase())})

 return<>
 
 <section className='firstsection'>
          <div className='container'>

               <input className='form-control w-25 m-auto 'placeholder='search'onChange={function(e){setvalue(e.target.value)}}/>
             <div className='row py-5'>
  
                        {newmwnue? newmwnue.map(function(rec){
                             return<>
                               <div className='col-md-3 f'>
                               <Link to={`/details/${rec.id}`}>

                                <div className='imgdiv'>
                                <img src={rec.image} className='w-100'/>

                                </div>
                                    <h3 className='text-center py-5 text-dark'>{rec.name}</h3>
                                    </Link>

                            </div>
                              
                              </> 
                        }):""}
                 </div>
          </div>
 
 </section>
</>







}