import { Component } from "react";

export default class Form extends Component{
    constructor(props){
        super();
        this.state = {
            name: "",
            password: "",
            currentState : false        
        };
    }
    handleName = (event) =>{
        const input = event.target.value;
        this.setState({name : input});
    };
    handlePassword = (event) =>{
        const input = event.target.value;
        this.setState({password: input});
    };
    handleSubmit = (event) =>{
        event.preventDefault();
        const isValid = this.state.name === "admin" && this.state.password === "password";
        this.setState({currentState: isValid});
    };
    render(){
        return(
            <div>
                {!this.state.currentState?(
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="Name" id="Name" value={this.state.name} onChange={this.handleName} required/>
                        <br></br>
                        <label htmlFor="pass">Password: </label>
                        <input type="password" name="password" id="password" value={this.state.password} onChange={this.handlePassword} required/>
                        <br></br>
                        <button type="submit" onClick={this.state.handleSubmit}>Submit</button>
                        <button type="reset">Reset</button>
                    </form>
                ):(
                    <div>
                        <p>You logged in!</p>
                    </div>
                )}
            </div>
        );
    }
}
