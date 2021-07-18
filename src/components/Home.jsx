import React, {Component} from 'react';
import  {Link} from 'react-router-dom';
import LodhiPic from "../qtmtdjepiormwgd3p4tq.png"
import {connect} from 'react-redux';

class Home extends  Component {
 render() {
     console.log(this.props);

     const listOfPosts = this.props.propProperty.length ? (
         this.props.propProperty.map(temp => {
             return (
                 <div className="post card" key = {temp.id}>
                    {/* <img src= {LodhiPic} alt="A Lodhi Logo" /> */}
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

const mapStateToProps = (state) => {
    return {
        propProperty: state.posts
    }

}

export default connect(mapStateToProps)(Home);