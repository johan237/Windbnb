export default function Stay(props){
    return (
        <div className="stay">
        <img src={props.stay.photo} alt="Image image" srcset="" />
        <div className="stays--info flex">
             {
             props.stay.superHost 
             && 
             <span className="super--host">
                  super host
              </span>
            }
              <span className="room--type">
                  {
                  `${props.stay.type}.
                   ${props.stay.beds || " "} ${props.stay.beds == null ? '' :'bed'}${props.stay.beds > 1 ? 's' :''}  `
                  } 
              </span>    
              <span className="stays--info-rating flex">
              <span className="material-symbols-outlined">
grade
</span> {props.stay.rating}
              </span>   
       </div>
      <div className="stays--title">
                {props.stay.title}
      </div>
      </div>
    )
}