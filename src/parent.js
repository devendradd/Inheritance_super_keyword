import React, { Component } from 'react';

class Label extends React.Component{
    constructor(props){
      super(props);
      this.className='plain-label';
      this.state = {name:"john"};
    }

    callLabelTest(){
        alert("here");
    }

    componentDidMount(){
        console.log("calling component did mount..........");
    }

     render(){
       return (
                <span className={this.className}>
                {this.props.children} 
                </span>
       )
     }
  }
  

  
class SuccessLabelWithIcon extends Label{
    constructor(props){
        super(props);
        this.className = this.className + ' success-label';
        this.callLabelParent = this.callLabelParent.bind(this);
    }

    callLabelParent(){
        super.componentDidMount(); // we can call parents react lifecycle methods using super keyword
        super.setState({name: "Devendra"}); //we can call a method with super as well as setState with super keyword
        super.callLabelTest(); // call parent method using super keyword
    }

    render(){
        return(
            <div onClick={this.callLabelParent}>
                <h1> name in the state is : {this.state.name}</h1>
                {super.render()}<span>&#9650;</span>            
            </div> 
        )
    }
}
  

  
  
export default  class Main extends React.Component{

      render(){
          return(
                <div>
                    <Label> Plain Label </Label>
                    <hr/>                    
                    <SuccessLabelWithIcon> Success Label with Icon </SuccessLabelWithIcon>
                </div>
          )  
    }
  
  }