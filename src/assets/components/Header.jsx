import React, {useState} from 'react';

import DivComponent from './DivComponent'
import ButtonComponent from './ButtonComponent'
export default function Header(props){

    (
        ()=>{
            const els = Array.from(document.querySelectorAll('div.filter--point'))

            els.forEach(el=>{
                console.log(el.nextSibling)
                console.log("hello sibling")
            })
        }            
            
    )()
    const [location, setLocation] = useState('All locations, Finland')

    function handleButtonClick(){

        let result  = {
            city:location.split(',')[0].trim(),
            country:location.split(',')[1].trim(),
            maxGuests :   adultValue +childValue 
        }
        // console.l
        props.filterCondition(result)
        props.deActivateHeader()
        console.log(result)
        return result
    }

    // function deActivateHeader(){
    //     document.querySelector('header').classList.remove('active')
    // }

    function listClick(e){
        e.stopPropagation()
        const listElements  = Array.from(e.target.parentNode.children)
        listElements.forEach(li=>{
            if(li.classList.contains('active')){
                li.classList.remove('active')
            }
        })

        e.target.classList.toggle('active')

        let list  = e.target.textContent.split(" ")
        console.log(list)
        let c = ""
        list.forEach((el,index)=>{
            if(index != 0 && index != 1){
                c += ' '+ el
            }
        })
            setLocation(c.trim())
        // list
        console.log(c)
    }
   
    const [adultValue, setAdultValue] = useState(0)
    const [childValue, setChildValue] = useState(0)
   
    function changeValue(adult,increase){
        if(adult == true){
            if(increase == true ){
                setAdultValue(adultValue+1)
            }else if(adultValue !=0){
                setAdultValue(adultValue-1)
            }
        }else{
            if(increase == true ){
                setChildValue(childValue+1)
            }else if(childValue !=0){
                setChildValue(childValue-1)
            }
        }
    }

    if(props.activeComponent.activeState){
        return (
        <header className="header active flex container ">
        <div className="logo--container">
          <img src="./src/assets/logo.png" alt="" srcSet="" />
        </div>
        <div className="edit--search flex">
            <h1>Edit your search</h1>
            <span onClick={props.deActivateHeader} class="material-symbols-outlined icon--close">
                close
            </span>
            
        </div>
        <div className="filter flex" >
          <div onClick={()=>props.handleClick(0)} className="filter--location" >
          <DivComponent  active = {props.activeComponent.activeNumber ==0} type="location" value="Add Location" newValue = {location}   />

            <ul className="filter--option location--list">
            <li className='flex' onClick={(e)=>listClick(e)}>
                <span class="material-symbols-outlined location-icon">
                location_on
                </span> &nbsp;
                All Locations, Finland
              </li>

              <li className='flex' onClick={(e)=>listClick(e)}>
                <span class="material-symbols-outlined location-icon">
                location_on
                </span> &nbsp;
                Helsinki, Finland
              </li>
              <li  className='flex' onClick={(e)=>listClick(e)}>
              <span class="material-symbols-outlined location-icon">
                location_on
                </span> &nbsp;
                Turku, Finland</li>
              <li className='flex' onClick={(e)=>listClick(e)}>
              <span class="material-symbols-outlined location-icon">
                location_on
                </span> &nbsp;
                Oulu, Finland</li>
              <li className='flex' onClick={(e)=>listClick(e)}>
              <span class="material-symbols-outlined location-icon">
                location_on
                </span> &nbsp;
                Vaasa, Finland</li>
            </ul>
          </div>
          <div className="filter--guest" onClick={()=> props.handleClick(1)}>
            <DivComponent  active = {props.activeComponent.activeNumber ==1} type="guests" value="add guests" newValue = {eval(adultValue + childValue)  + ` guest${eval(adultValue+childValue) > 1?'s':''}` }  />

            <div className="filter--option">
                <div className='filter--option-one'>
                    <h2  className='person--type'>Adults</h2>
                    <p className='age--range'>Age 13 or above </p>
                    <div className='range--age flex'>
                        <span onClick={()=>changeValue(true, false)} className='range--vary'>-</span>
                        <span className='filter-option-two-value'>{adultValue}</span>
                        <span onClick={()=>changeValue(true, true)} className='range--vary'>+</span>
                    </div>
                </div>
                <div className='filter--option-two'>
                    <h2 className='person--type'>Children</h2>
                    <p className='age--range'>Age 2-12 </p>
                    <div className='range--age flex'>
                        <span onClick={()=>changeValue(false, false)} className='range--vary'>-</span>
                        <span className='filter-option-two-value'>{childValue}</span>
                        <span onClick={()=>changeValue(false, true)} className='range--vary'>+</span>
                    </div>
                </div>
            </div>
          </div>
          <div className="filter--search">
            <ButtonComponent buttonClick = {handleButtonClick} />        
          </div>
        </div>
      </header>
        )
    }else{
 
        return (
      
            <header className="header flex container">
                <div className="logo--container">
                  <img src="./src/assets/logo.png" alt="" srcset="" />
                </div>
                <div className="filter flex">
                  <div onClick={()=>props.handleClick(0)} className="filter--location">
                  <DivComponent simple active type="location" value="douala, cameroon"   />
        
                  </div>
                  <div onClick={()=>props.handleClick(1)} className="filter--guest">
                  <DivComponent simple active type="guests" value="add guests"   />
                  </div>
                  <div className="filter--icon">
                    
                  <span className="material-symbols-outlined search--icon">
                  search
                  </span>
        
                  </div>
                </div>
              </header>
         )       
    }
 
}