import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {Movie} from '../Redux/Actions/Movies/index'
import CardLayout from './CardLayout'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styling/Movies.css'
import Modaal from './Modaal'
import Search from  '../pictures/Search.svg'
import { Input } from 'reactstrap';
import Aos from 'aos'
import "aos/dist/aos.css"
const MoviePage=(props)=>{
    const dispatch=useDispatch()
    let data={}
    const [search,setSearch]=useState("")
    const [readMore,setReadMore]=useState()
    const [movieData,setMovieData]=useState()
    const [modalData,setModalData]=useState()
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    useEffect(()=>{
        dispatch(Movie())
    },[])
    const movies=useSelector((state)=>{
        return state.Movies.movies
    })
    useEffect(()=>{
        setMovieData(movies)
        console.log(movieData)  
    },[movies])
    data.genre1=movieData &&  movieData.filter((ele)=>{
      if(ele.genres.includes("Action")){
          return(ele)
      }
    })
    data.genre2=movieData &&  movieData.filter((ele)=>{
        if(ele.genres.includes("Animation")){
            return(ele)
        }
      })
    data.genre3=movieData &&  movieData.filter((ele)=>{
    if(ele.genres.includes("Biography")){
        return(ele)
    }
    })
    data.genre4=movieData &&  movieData.filter((ele)=>{
        if(ele.genres.includes("Sci-Fi")){
            return(ele)
        }
        })
    data.genre5=movieData &&  movieData.filter((ele)=>{
            if(ele.genres.includes("Adventure")){
                return(ele)
            }
            })
        
    const handleModal=(data)=>{
        setModalData(data)
        setReadMore(!readMore)
    }
    const handleToggle=(ele)=>{
        setReadMore(!readMore)
    }
    const handleSearch=(e)=>{
        setSearch(e.target.value)
        const filtetredData= movies.filter((ele)=>{
            return(ele.title.toLowerCase().includes(e.target.value.toLowerCase()))
        })
        setMovieData(filtetredData)
        if(e.target.value=""){
            setMovieData(movies)
        }
    }
    return(
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-8 mt-5">
                <h1>WOOKIE<br/>MOVIES</h1>
                </div>
                <div class="col-md-4 col-4 mt-5">
                <img src={Search} class="search" /><Input type="text" value={search} placeholder="Search" onChange={handleSearch}/>
                </div>
            </div>

            <hr/>

            <div class="row" style={{width: '70rem'}}>
                {data.genre1 && <h3 style={{marginTop:"1rem"}} data-aos="zoom-out">Genre:Action</h3>}
                { data.genre1 &&  data.genre1.map((ele)=>{
                        return(
                        <CardLayout ele={ele} handleModal={handleModal} />
                        )
                    
                    })}   
             </div>

             {data.genre2 && <h3 style={{marginTop:"1rem"}} data-aos="zoom-out">Genre:Animation</h3>}
             <div class="row" style={{width: '70rem'}}>
             { data.genre2 &&  data.genre2.map((ele)=>{
                return(
                   <CardLayout ele={ele} handleModal={handleModal}/>
                )
            
            })}

            {data.genre3 &&  <h3 style={{marginTop:"1rem"}} data-aos="zoom-out">Genre:Biography</h3>}
                 </div>
                 <div class="row" style={{width: '70rem'}}>
             { data.genre3 &&  data.genre3.map((ele)=>{
                return(
                   <CardLayout ele={ele} handleModal={handleModal}/>
                )
            
            })}
            </div>

            {data.genre4 && <h3 style={{marginTop:"1rem"}} data-aos="zoom-out">Genre:Adventure</h3>}
            <div class="row" style={{width: '70rem'}}>
             { data.genre4 &&  data.genre4.map((ele)=>{
                return(
                   <CardLayout ele={ele} handleModal={handleModal}/>
                )
            
            })}
            </div>

            {data.genre5 && <h3 style={{marginTop:"1rem"}} data-aos="zoom-out"> Genre:Action</h3>}
            <div class="row" style={{width: '70rem'}}>
             { data.genre5 &&  data.genre5.map((ele)=>{
                return(
                   <CardLayout ele={ele} handleModal={handleModal}/>
                )
            
            })}
            </div>
            
             <Modaal readMore={readMore} handleToggle={handleToggle} modalData={modalData}/>
                  </div>
    )
}
export default MoviePage