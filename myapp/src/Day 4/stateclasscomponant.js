import React, { Component } from "react";
class StateClassCom extends Component
{
    state={
        color:"Blue"
    }
    handleChange=()=>{this.setState({color:"Red"})}
    render()
    {
        return(
            <div>
            <h1>The color i have selected is {this.state.color}</h1>
            <button onClick={this.handleChange}>clickme</button>
            </div>
        )
    }
}
export default StateClassCom;