const initState = {
    posts: [
        {id: '1', title: 'eggs',  body: 'hello there I am lodhi'},
        {id: '2', title: 'bread', body: 'eat me'},
        {id: '3', title: 'milk', body: 'drink me'}
    ]
}

const rootReducer = (state = initState, action) => {
    // onClick delete Handler action comes here
   // console.log(action);  
   // 1st: CHECK the action type if it is delete, then delete
   // filter() puts the element if the cond is true otherwise delete element
   // action.payLoad ==== id to be deleted
   if(action.type === 'DELETE_POST')
   {
       let newArr = state.posts.filter(tempElement => {
           return action.payLoad !== tempElement.id
    });
    //console.log(newArr);
    //alert(action.payLoad);
    return{
        ...state,
        posts: newArr
    }
   }
    return state;
}

export default rootReducer;