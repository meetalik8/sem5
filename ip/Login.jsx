import { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      password: "",
      isLogged: false,
      showPopup: false,
    };
  }

  handleName = (event) => {
    const input = event.target.value;
    this.setState({ name: input });
  };
  handlePass = (event) => {
    const input = event.target.value;
    this.setState({ password: input });
  };
  handleSubmit = (event) =>{
    event.preventDefault();

    if(this.state.name === "admin" && this.state.password === "admin"){
        this.setState({isLogged :true});
    }
  }

  render(){
    if(this.state.isLogged === true){
        return <div>Welcome {this.state.name}!</div>
    } else {
        return (
        <form >
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleName} required/>
            <br />
             <label htmlFor="pass">Password:</label>
            <input type="text" name="pass" id="pass" value={this.state.password} onChange={this.handlePass} required/>
            <br />
            <button type="submit" onClick={this.handleSubmit}>Submit</button>
            <button type="reset">Reset</button>
        </form>
    )}
  }
}
