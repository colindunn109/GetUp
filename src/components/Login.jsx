import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
  }

  handleClick(event){
    console.log(this.state.username);
    console.log(this.state.password);
    this.props.history.push('/home');
  }

  render() {
    return (
      <div align="center">
        <MuiThemeProvider>

          <div>

          <AppBar
             title="Login"
           />

           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>

             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />

             <br/>

             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>

         </MuiThemeProvider>
      </div>
    );
  }
}


const style = {
  margin: 15,
};


export default Login;
