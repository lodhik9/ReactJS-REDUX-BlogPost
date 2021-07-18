import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deletePost, deletePostFunction} from '../actions/postActions';

class Post extends Component {

    handleClick = () => {
        //  dispatch({type: 'DELETE_POST', payLoad: id}) action has been sent to route_reducer
        this.props.deletePost(this.props.propOfPost.id);
        //console.log(this.props.propOfPost.id);
        // After deleting the post redirect to home page
        this.props.history.push('/');
    }

    render() { 
        console.log(this.props);
        const post = this.props.propOfPost? (
            <div className="post">
                <h4 className = "center">{this.props.propOfPost.title}</h4>
                <p>{this.props.propOfPost.body}</p>
                <div className="center">
                    <button className="btn grey" onClick = {this.handleClick}>
                        Delete Post
                    </button>
                </div>
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

const mapStateToProps = (stateOfStore, previousPropOfPost) => {
    let id = previousPropOfPost.match.params.post_id;
    return {
        propOfPost: stateOfStore.posts.find((temp) => {
          return   (temp.id === id)
        }) 
    }
} 

// For deleting the data in Redux Store from the compoenent(Post)
// We map dispacther to props
// dispatch paramter is same as store.dispatch({type: , payLoad: })
const mapDispatchToProps = (dispatch) => {
    return  {
        deletePost: (id) => {
            dispatch(deletePostFunction(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post);