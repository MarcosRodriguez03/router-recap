import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const HomePageComponent = () => {
    //use navigate is react-router-doms method of chaining urls
    const navigate = useNavigate();
    const handlePagechange = () => {
        navigate('/jacoozi')
    }

    return (
        <div className='d-flex justify-content-center'>
            <h1>This is our home page</h1>

            <Button variant="dark" onClick={handlePagechange}>Dark</Button>
        </div>
    )
}

export default HomePageComponent
