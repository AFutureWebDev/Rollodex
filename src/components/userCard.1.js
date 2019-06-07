import React from 'react';

function UserCard (props) {
    // let emailInfo = (
    // <div>
    //   <span>{props.user.email}</span>
    // </div>
    // );
  
    // let buttonText;
  
    // if (hide) {
    //   buttonText = 'Show Details'
    // } else 
    //   buttonText = 'Hide Details'
    // }
  
    return (
    <div>
      <h1>{props.name}</h1>
      <button onClick = {props.onClick}>Show Details</button>
    </div>
    )

    export default UserCard;
  
  

    // <img className="pic" src={props.user.picture.thumbnail}/>
    //   <div>
    //     <div>
    //       <span>{props.user.name.first}</span>
    //       {' '}
    //       <span>{props.user.name.last}</span>
    //     </div>
    //     {props.hide === false ? emailInfo: emailInfo}
    //   </div>