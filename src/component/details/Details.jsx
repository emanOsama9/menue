 
import { useDispatch, useSelector } from 'react-redux';
 import { useEffect } from 'react';
import { fetchMenue } from '../../redux/slicemenue';
import { useParams } from 'react-router-dom';
import './details.css'
 export function Details(){

    let {loading,error,menue}=useSelector (function(state){return state.menue})
    console.log(menue) ;
   let disbatch= useDispatch();


   let {id}=useParams()


  useEffect(function(){
    disbatch(fetchMenue())
 },[])


 




 return<>
 
                      <section className='detailssection'>

          <div className='container'>

                         <h1 className='text-center text-white'>Recipes Details <hr className='w-25 m-auto py-4'/></h1>
            <div className='row'>
            {menue? menue.map(function(rec){
                             return<>
                                {rec.id==id?
                                
                                
                                      <div className='d-flex  py-5 align-items-center'>



                                            <div className='col-md-6 '>
 
                                                 <div>

                                                           
                                                  <img src={rec.image} className='img'/>
                                                       <br/>
                                                <div class="dropdown m-auto my-5">
                                        <button class="btn btn-secondary dropdown-toggle px-5 py-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                 Ingredients
                                       </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                         {rec.ingredients.map(function(rec){return<h4>{rec}</h4>})}
                                            </ul>
                                                  </div> 




                                                                </div>
                                                     </div>
 
                               
                                
                                                    <div className='col-md-3 '>
                                <div className='imgdiv'>
 
                                
                                          <br/>
                                          <br/>

                                       <div className='card px-3'>
          <h3 className='text-center text-danger instruction-h3'>instructions</h3>
   {rec.instructions.map(function(rec){return<h4>{rec}</h4>})}
 
                                        </div>
                                       <div className='card px-3 my-3'>
   <h5 > prepTimeMinutes: {rec.prepTimeMinutes}</h5>
   <h5 > cookTimeMinutes : {rec.cookTimeMinutes }</h5>
   <h5 >  servings : {rec. servings}</h5>
   <h5 >  servings : {rec. servings}</h5>
   <h5 >  difficulty : {rec.difficulty }</h5>


                                       </div>
                                  <h5  className='calories'>   caloriesPerServing : {rec. caloriesPerServing }</h5>
                                  <h5  className='rating'>    rating : {rec.rating }</h5>

                                 </div>
                                 
  
                                                    </div>
                              
                                
                                 
                                 

                                         </div>
                              
                                
                                
                                
                                :""}
                                 </> 
                        }):""}
   
              </div>
        </div>


                         </section>

 </>







}