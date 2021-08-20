import React,{useEffect} from 'react'
import {Card, CardBody,CardLink,CardTitle} from 'reactstrap';
import Aos from 'aos'
import "aos/dist/aos.css"
const CardLayout=(props)=>{
    const {ele,handleModal}=props
    useEffect(()=>{
      Aos.init({duration:1000})
  },[])
    return(
        <div class="col-lg-4 col-md-4 col-9" >
        <div class="card-deck mt-3 "  >
        <Card data-aos="slide-left">
        <CardBody>
          <CardTitle tag="h6">{ele.title}</CardTitle>
        </CardBody>
        <img src={ele.poster}  class="poster" alt="Card image cap" />
        <CardBody>
        <p class="rating">IMDB Rating:{ele.imdb_rating}</p>
        <p class="runTime">Run Time:{ele.length}</p>
        <p  class="view_details"><CardLink style={{color:"red"}}onClick={()=>{handleModal(ele)}}>View Details</CardLink></p>
         
        
        </CardBody>
      </Card>
     </div>
     </div>
    )
}
export default CardLayout