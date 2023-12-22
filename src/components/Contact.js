import { Card } from 'react-bootstrap';
import './About.css'
import Phone from './Phone'
import { useEffect, useState } from 'react';
const Contact = () => {
    const text = 'marygclay@outlook.com'

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }
    return (
        <div className='contents'>
        <Card className='card' border='0'>
        <Card.Header  className='greetings' >Contact me.</Card.Header>
            <Card.Body>
                <a href='https://www.linkedin.com/in/mary-clay/' target='_blank' className='resume'>LinkedIn</a>
                
            </Card.Body>
            <Card.Body>
            <a href='https://github.com/mgclay' target='_blank' className='resume'> Github</a>
            </Card.Body>
            <Card.Body>
                Email: 
                    <button className='resume' onClick={handleCopy}>{text}</button>
                {/* <img src = {copy} onClick={handleCopy}></img> */}
            </Card.Body>
        </Card>
        <Phone/>
        </div>
    ) 
}

export default Contact