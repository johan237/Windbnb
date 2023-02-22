import { useState, useEffect } from 'react'
import './index.css'
import DivComponent from './assets/components/DivComponent'
import StaysContainer from './assets/components/StaysContainer'
import ButtonComponent from './assets/components/ButtonComponent'
import Header from './assets/components/Header'
import stays from  './stays.json'

function App() {

const [actualStays, setActualStays] = useState(stays)

  const [activeComponent, setActive] = useState({activeState: false, activeNumber: -1})
  const [filterConditions, setFilterConditions] = useState({})


  function click(id=-1){
    console.log("clicked")
    setActive({activeNumber:id, activeState:true})
  }

  function deActivateHeader(){
    setActive({activeState:false})
  }

  function setCondition(condition){
    console.log("condition max guest is", condition.maxGuests)
    setFilterConditions(condition)

    const staysWithCondition = stays.filter(stay=>
      {
        
          if(condition.city == 'All locations'){
            return  stay.country ==condition.country &&
            stay.maxGuests >= (condition.maxGuests || 0)    
          }else{
            return  stay.city == condition.city &&
             stay.country ==condition.country &&
            stay.maxGuests >= (condition.maxGuests || 0)    
          }
        
         
      })
      setActualStays(staysWithCondition)
      // console.log('actual stays based on condition are')
      // console.log(actualStays)
      console.log(staysWithCondition.length +" locations meetx   requirement")
  }

  return (
    <div className="App">
      <Header handleClick = {click} activeComponent ={activeComponent} filterCondition = {setCondition} deActivateHeader = {deActivateHeader} />
      <StaysContainer conditions = {filterConditions} actualStays = {actualStays} deActivateHeader = {deActivateHeader}  />
    </div>
  )
}

export default App
