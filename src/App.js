import React from 'react';
import './App.css';
import {Button, Input} from "reactstrap";
import SearchPage from './SearchPage';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
                  userName : "",
                  password : "",
                  history : this.props.history,
                  flag : true
                };
  }


  authenticateUser = () => {
    let name = this.state.userName;
    let password = this.state.password;

    fetch("https://swapi.co/api/people/")
    .then(result => result.json()).then(data => {
        // console.log(user.results[0].name);
        let users = data.results;
        let user = users.filter(val => (name === val.name))[0];

        if(user.birth_year === password){

          // let history = this.props.history;
          // console.log("a ra hai", this.props.history);
          this.setState({flag : false});
          // history.push("/searchPage");
        }
    })
  }

  updateName = (e) => {
    this.setState({userName : e.target.value});
  }

  updatePassword = (e) => {
    this.setState({password : e.target.value});
  }

  render(){
    return (
      <div className="App">
        {this.state.flag ? <form className="App-header">
          <div className = "box">
            <h3>Login Form</h3>
            <Input type = "text"
                   placeholder = "username"
                   className = "email"
                   onChange = {(e) => {this.updateName(e)}}
            />
            <Input type = "password"
                   placeholder = "password"
                   className = "password"
                   onChange = {(e) => {this.updatePassword(e)}}
            />
            <Button className = "btn"
                    onClick = {() => {this.authenticateUser()}}>
                    Log In
            </Button>
          </div>
        </form> :
        <SearchPage />
      }
      </div>
    );
  }
}

export default App;
