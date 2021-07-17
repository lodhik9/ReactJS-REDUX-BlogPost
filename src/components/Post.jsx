import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    state = { 
        post: null
     }

   // Data to be grapped from by Axios :
componentDidMount() {
    let id = this.props.match.params.post_id;;
    axios.get('https://jsonplaceholder.typicode.com/posts/'+ id)
    // get method returns promise cuz data needs some time to get here
    .then(response => {
       // console.log(response);
       this.setState({
           post: response.data
       })
     
    })
}

    render() { 
        const post = this.state.post ? (
            <div className="post">
                <h4 className = "center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="center">Post is loading...</div>
        )


        return ( 
            <div className="container">
                <h4> {post} </h4>
            </div>
         );
    }
}
 
export default Post;