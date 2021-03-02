import React from 'react';
import Iframe from 'react-iframe'
import {Card,Button} from 'react-bootstrap';

const Filter = (props) => {
  const {movies} = props;
    return (
    <div className="Filter">
          {movies.filter((el) => el.id === props.match.params.id)
          .map((Movie, i) => (  
            <div key={i} className="MovieDetail"  > 
              <Card className="text-white" style={{backgroundColor:'#282c34', textAlign:'center'}}>
                <Card.Title> <h1 style={{fontSize:'30px',color:'#E0A800'}}>{Movie.title}</h1> </Card.Title>
                <Card.Text> <p style={{fontSize:'20px',color:'#E0A800', textAlign:'left'}} >Movie : <span style={{color:'white', textAlign:'center'}}>{Movie.description}</span> </p> </Card.Text>
                <Iframe className="my_iframe"  width="560" height="315" src={Movie.trailerURL} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
              </Card>
          <Button variant="info" onClick={()=>{props.history.goBack()} } > <i class="fas fa-arrow-circle-left">&nbsp; Go Back</i></Button>
              
            </div>
          ))  
          }
    </div>
  ) 
}
export default Filter ;