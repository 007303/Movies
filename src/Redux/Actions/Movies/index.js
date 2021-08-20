import axios from 'axios'
export const Movie=()=>{
    return(dispatch)=>{
        axios.get( "https://wookie.codesubmit.io/movies",{
            headers:{
                Authorization:" Bearer Wookie2019"
            }
        })
       
        .then((response)=>{
            dispatch(MovieData(response.data))
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }
}
export const MovieData=(data)=>{
    return({
        type:"MOVIE_DATA",
        payload:data
    })
}