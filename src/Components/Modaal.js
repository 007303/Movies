import React from 'react'
import exit from '../pictures/exit.jpg'
import {Modal} from 'react-bootstrap'
const Modaal=(props)=>{
    const {readMore,handleToggle,modalData}=props
    return(
        <div>
        <Modal show={readMore} size="lg" >
            <img src={exit} class="exit" onClick={handleToggle}/>
            <Modal.Body style={{marginTop:"-2rem"}}>
                <div class="modal_body">
                <h4 style={{fontWeight:"bold",textAlign:"center"}}>{modalData && modalData.title}</h4>
                
                <img width="40%"  src={modalData && modalData.poster}  class="Modalposter" alt="Card image cap" />
                <p style={{textAlign:"center",paddingTop:"1rem",  fontWeight: "bold"}}>Genre:{modalData && modalData.genres.map((e)=>{
                                return(` ${e} |`)
                            })}</p>
                <p  class="cast">Cast:{modalData && modalData.cast.map((e)=>{
                                return(` ${e} |`)
                            })}</p>
                <p class="director">Director:{modalData && modalData.director}</p>
                <p class="rating">IMDB Rating:{modalData && modalData.imdb_rating}</p>
                <p class="runTime">Run Time:{modalData && modalData.length}</p>
                <p class="releasedOn">Released On:{modalData && modalData.released_on.slice(0,10)}</p>
                <h5 style={{textAlign:"center"}}>OverView:</h5>
                <p style={{textAlign:"center"}}>{modalData && modalData.overview}</p>
                </div>
            </Modal.Body>
        </Modal>
        </div>
    )
}
export default Modaal