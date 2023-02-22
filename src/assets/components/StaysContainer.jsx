import React from "react";
    import Stay from './Stay'
export default function StaysContainer(props){

const stays  = props.actualStays;

const staysDivs = stays.map(stay => {
    let random = Math.floor(Math.random() * 100000)
    return (
      <Stay key={random} stay = {stay} />
   )
});


 return(
        <div className="staysContainer container" onClick={props.deActivateHeader}>
            <div className="stays--header flex">
                <h1>Stays in Finland</h1>
                <p>{stays.length - 1}+ stays</p>
            </div>
            <div className="stays">
                {staysDivs}
            </div>
        </div>
    )
}