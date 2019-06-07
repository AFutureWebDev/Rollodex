import React from 'react';

function UserCard (props) {
  let data;
if (!props.hide) {
   data = (
    <div>
      <h3>{props.firstName + " " + props.lastName}</h3>
      <p>{props.phone}</p>
    </div>
  )
} else data = null;

let buttonText;
if (props.hide) {
  buttonText = "Show Details"
} else buttonText = "Hide Details";


  return (
    <div>
      <img src={props.picture}/>
      {data}
      <button onClick = {props.onClick}>{buttonText}</button>
    </div>
  )
}

export default UserCard;