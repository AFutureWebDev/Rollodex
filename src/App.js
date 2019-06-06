import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function UserCard (props) {
  let emailInfo = (
  <div>
    <span>{props.user.email}</span>
  </div>
  );

  let buttonText;

  if (hide) {
    buttonText = 'Show Details'
  } else {
    buttonText = 'Hide Details'
  }

  return (
  <div>
    <img className="pic" src={props.user.picture.thumbnail}/>
    <div>
      <div>
        <span>{props.user.name.first}</span>
        {' '}
        <span>{props.user.name.last}</span>
      </div>
      {props.hide === false ? emailInfo: emailInfo}
    </div>
    <button onClick = {props.onClick}>Show Details</button>
  </div>
  )}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isHidden: true
    }
  }
  componentDidMount() {
    fetch("https://randomuser.me/api?results=25")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      this.setState({
        results: json.results
      })
    })
  }

  onClick = (event) => {
    this.setState({
      isHidden: false
    })
  };

    render() {
    return (
      <div className="App">
        {this.state.results.map((user, index) => 
        <UserCard 
          key = {index} 
          user={user} 
          onClick = {this.onClick} 
          hide ={this.state.isHidden}/>
        )}
      </div>
    );
  }
}

export default App;
