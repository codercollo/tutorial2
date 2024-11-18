import React from 'react'
import messages from './messages'
import { useState } from 'react'

function App()  {

 const [step, setStep]= useState(1);
 const [isOpen, setIsOpen]=useState(true)
 const [test, setTest]= useState({name:''});

  function handlePrevious(){
    if(step>1){
      setStep((s)=> s-1);
    }
    
  }
  function handleNext(){
    if(step<3){
      setStep((s)=>s+1);
    }

    setTest({name:'Maina'})
  }

 
  return (
  
  <>
  {
   isOpen ?
   <button className='close' onClick={()=> setIsOpen((is) => !is)}>&times;</button> 
   :
   <button className='open' onClick={()=> setIsOpen(!isOpen)}>Open</button> 
   }
  {isOpen && (
     <div className='steps'>


     <div className="numbers">

         <div className={step >= 1 ? "active" : ""}>1</div>
         <div  className={step >= 2 ? "active" : ""}>2</div>
         <div className={step >= 3? "active" : ""}>3</div>

     </div>

     <p className="messages">Step {step}:{messages[step - 1]} Mr. {test.name}</p>
      
      <div className='buttons'>
       <button style={{backgroundColor:'#7950f2', color:'#fff' , }} onMouseEnter={(e) => (e.target.style.backgroundColor = 'blue')}  onMouseLeave={(e) => (e.target.style.backgroundColor = '#7950f2')} onClick={handlePrevious}>Previous</button>
       <button style={{backgroundColor:'#7950f2', color:'#fff'}} onClick={handleNext}>Next</button>
      </div>

   </div>
  )
  }
  </>
   
  )
}

export default App