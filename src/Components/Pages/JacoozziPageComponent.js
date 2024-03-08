import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


const JacoozziPageComponent = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }

    return (
        <div className='d-flex justify-content-end'>
            <h1 className='text-center'>this is jacobs page</h1>
            <Button variant="danger" onClick={handleClick}>Link</Button>
        </div>
    )
}

export default JacoozziPageComponent
