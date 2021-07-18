export const deletePostFunction = (id) => {
    return {
        type: "DELETE_POST",
        payLoad:  id
    }

}