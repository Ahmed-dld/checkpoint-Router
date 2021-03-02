import React ,{useState} from 'react'
import MovieCard from './MovieCard';
import AddModal from '../Action/AddMovie';
import {Card} from 'react-bootstrap';

const MovieList = ({movies ,addNewMovie}) => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
           

            <AddModal handleClose={handleClose} show={show} addNewMovie ={addNewMovie}/>
            <div className="movies_list" >
                {movies.map((el , index) =>
                    <MovieCard  movie ={el} key ={index}></MovieCard>
                )} 

                <Card style={{ width: '14rem' }} className="new_mov_card">
                    <Card.Img />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text></Card.Text>
                        <Card.Text style={{textAlign:'center',marginTop:'225px'}} >
                        <button onClick={handleShow} className="btn btn-warning btn-search">Add Movie</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default MovieList