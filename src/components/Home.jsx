import React, {Component} from 'react';
import axios from 'axios';
import  {Link} from 'react-router-dom';
import LodhiPic from "../qtmtdjepiormwgd3p4tq.png"

class Home extends  Component {
    state = {
        arrOfPosts : [ ]
}
    // Data to be grapped from by Axios :
componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    // get method returns promise cuz data needs some time to get here
    .then(response => {
       // console.log(response);
       this.setState({
           arrOfPosts: response.data.slice(0,10)
       })
    })
}

 render() {
     const listOfPosts = this.state.arrOfPosts.length ? (
         this.state.arrOfPosts.map(temp => {
             return (
                 <div className="post card" key = {temp.id}>
                     <img src= {LodhiPic} alt="A Lodhi Logo" />
                     <div className="card-content">
                         <Link to= {"/" + temp.id}>
                         <span className="card-title red-text">{temp.title}</span>
                         </Link>
                         <p>{temp.body}</p>
                     </div>

                 </div>
             )
         })
     ) : (
         <div className="center"></div>
     )
    return (
        <div className = "container home">
            <h4 className = "center">Home</h4>
            {listOfPosts}
        </div>
    )
 }
}

export default Home;