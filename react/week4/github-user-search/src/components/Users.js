import React, {Component} from "react";
import * as API from "../api";
import "./Users.css";

class Users extends Component{
    state={
        userName: undefined,
        users : undefined,
        loading : true
    };


async getFetchData(){
const users = await API.getUsers(this.state.userName);
this.setState({users});
console.log(users);
}

handleInputChange = event =>{
    this.setState({[event.target.name]:event.target.value},()=>this.getFetchData());
    // const data = handleInputChange.json();
    // this.setState({userName: data.results[0]})
};


async componentDidMount(){
    const users = await API.getUsers(this.state.userName);
    this.setState({users});
    // console.log(users);

  
};


render(){
    return(
        <div className="formdiv">
        
           
        <input type="text" name = "userName"  placeholder="Search for user..." onChange = {this.handleInputChange}/>
        {/* <API/> */}
        

        </div>
    );
}
}
export default Users;