import react from 'react';

export default function DivComponent(props){
    
    if(props.active){
        console.log(props.type)
        console.log(props.newValue == '')
    }

    let s = {
        textTransform: !props.active ? 'capitalize' : 'none'
    }

    let simpleS = {
        textTransform: 'capitalize'

    }
    let styles = {
         border: props.active? "1px solid black": "",
         borderRadius: '16px'
        } 
    if(!props.simple){
        return (
    
            <div style ={styles} className={props.active? "filter--point-active filter--point": "filter--point"}>
                 <span className='filter--type'>
                  {props.type}
                </span>
                <span className='filter--value' style={s}>
                  { props.active ? props.newValue : props.value || "Helsinki, Finland"}
                </span>
            </div>
        )
    }else{
        return (
            <div style={simpleS}>
                  {props.value || "Helsinki, Finland"}
            </div>
        )
    }
}