import React from 'react';
import {Navbar, Nav, FormControl, Form,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

const Filter = ({filterRate,setFilterRate ,search}) => {
    const onStarClick = (nextValue) => {
        setFilterRate(nextValue);
      }
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                    <img
                        src="https://thumbs.dreamstime.com/b/ic-ne-ou-logo-de-film-dans-la-ligne-style-moderne-83853196.jpg"
                        width="50"
                        height="40"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                    </Navbar.Brand> 
                    <Nav className="mr-auto" >
                    <Link style={{color:'#FFB400'}} to="/" >Home&nbsp;|</Link>
                    <Link style={{color:'#FFB400'}} to="/"> &nbsp;TV Show</Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" className="form-control rounded"
                    placeholder ="search for a movie..."
                    onChange={(e) =>search(e.target.value)} 
                    />
                    <div className ="stars">
                    <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={filterRate}
                    onStarClick={onStarClick}
                    emptyStarColor={"white"}
                    />
                </div>
                    </Form>
                </Navbar>
                
            </div>
        )}
export default Filter;