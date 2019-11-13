import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './header.css';
import {withRouter} from 'react-router';
import Homepage from './Homepage';


class Login extends Component {
  state = {
    seenIndexes: [],
    values: {},
    creds: {},
    username: '',
    password: '',
    loginas:'',
    flag:false,

  };

  handleUsernameChange = (event) =>{
    this.setState({username: event.target.value});
 }
   handlePasswordChange= (event) =>{
   this.setState({password: event.target.value});
  }

  switchNameHandler = async() =>{
    console.log("Username: " + this.state.username);
    console.log("Password: " + this.state.password);

   const response =  await axios.post('/api/validate', {
      username: this.state.username,
      password: this.state.password
    });

    this.setState({ flag: response.data });
  }

 
  render() {
       
      if (!this.state.flag){
        return ( 
          <div id="loginpage">
            <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
            <div class="navbar-header">
                <a href="#">
                    <font class="navbar-brand"> SAMEPAGE</font>
                    <font class="navbar-subbrand">TM</font>
                </a>
            </div>
             </div>
             </nav>
          <div class="container">
          <div class="row pt-5">
              <div class="offset-md-4 col-md-4">
                  
                  <h2>Login</h2>
                  <hr></hr>
                  <div class="alert alert-danger d-none" role="alert" id="errMsg">
                          Please provide valid credentials
                  </div>
                  <form>
                      <div class="form-group">
                          <label for="">Username</label>
                          <input type="text" class="form-control" id="userName"  
                          onChange={this.handleUsernameChange}></input>
                      </div>
                      <div class="form-group">
                          <label for="">Password</label>
                          <input type="text" class="form-control" id="passWord" onChange={this.handlePasswordChange}></input>
                      </div>
                      <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Login As</label>
                              </div>
                              <select class="custom-select" id="loginAs">
                                <option selected>Choose...</option>
                                <option value="pcp">PCP</option>
                                <option value="cbo">CBO</option>
                              </select>
                            </div>
                        <div class="row pt-3">
                            <div class="col-lg-6 col-sm-6">
                               <a href="">Forgot Username </a>
                            </div>
                            <div class="col-lg-6 col-sm-6">
                               <a href="" >Forgot Password </a>
                             </div>  
                      </div>
                  </form>
              </div>
          </div>
      </div>
      <div class="container">
        <div class="row pt-3">
            <button class="col-md-3 btn btn-primary offset-md-2 " onClick={this.switchNameHandler} type="submit"> Login </button>
            <button class="col-md-3 btn btn-primary offset-md-2 "> Register </button>
        </div>
      </div>
    </div>
     );
    }  
  else{
    return <Homepage details={this.state.flag} onback={() =>{this.setState({flag:false})}}/>
    }
}
}
export default Login;

