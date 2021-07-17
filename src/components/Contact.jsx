// We have to redirect to user after 2 seconds to the about page
import React from 'react';

const  Contact = (props) => {
   // console.log(props);
   // This is programmetic redirect: 2000ms = 2sec
   setTimeout(() => {
       props.history.push('/about');}, 2000
   )

    return (
        <div className = "container">
            <h4 className = "center"> Contact</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut natus architecto quibusdam error hic commodi eveniet repellat placeat maiores deserunt reprehenderit quas, ullam explicabo eligendi modi, sit, voluptatum iure quasi?</p>
        </div>
    )
}

export default  Contact;