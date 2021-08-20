const initialState=[]
const MovieReducer=(state=initialState,action)=>{
switch (action.type){
    case "MOVIE_DATA":{
        return action.payload
    }
    default:{
        return state  
      }
}
}
export default MovieReducer