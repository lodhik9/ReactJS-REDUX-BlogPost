import React from 'react';

const Rainbow = (WrappedComponent) => {


    const colours = ['red','pink','green','yellow'];
    const randomColour = colours[Math.floor(Math.random() * 3)];
    //Eg: CSS Class = red-text
    const randomColorClassName = randomColour + '-text';

    return (props) => {
        return (
            <div className = {randomColorClassName}>
                <WrappedComponent {...props}/>

            </div>
        )
    }
}

export default Rainbow;