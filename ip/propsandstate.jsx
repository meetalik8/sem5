import { Component } from "react";

export default class Second extends Component {
    constructor(){
        super();
        this.state = { color: "black", fontSize:"16px"};
    }
    render(){
        return(
            <div>
                <h2 style={{color: this.state.color, fontSize: this.state.fontSize}}>{this.props.time}</h2>
                <button onClick={()=>{
                    this.setState({color:"blue", fontSize:"50px"});
                }}> Click Me</button>
            </div>
        )
    }
}
