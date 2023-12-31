import { Card } from 'react-bootstrap';
import './About.css'
import Cat from './MeWithCat'
import resume from '../files/mary_clay_resume.pdf'
import { useState } from 'react';
const handleDownload = () => {
    const pdfurl = resume;
    const link = document.createElement("a");
    link.href = pdfurl;
    link.download = "mary_clay_resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


const Experience = () => {
    return (
        <div className='contents'>
        <Card className='card' border='0'>
        <Card.Header  className='greetings' >My experience.</Card.Header>
            <Card.Body>
            <button onClick={handleDownload} className='resume'>click to download my resume</button>
            </Card.Body>
            <Card.Body>
                The most intensive project I've been part of is a progressive web application titled Study Buddy, which
                combines the benefits of gamification and personal development to enhance the study experience. 
                The application allows users to take care of a virtual pet, which serves as a study companion and motivator. 
                Users can set daily or weekly goals, set reminders, track their progress, and connect with their Canvas (LMS) account to track assignments.
            </Card.Body>
            <Card.Body>
                <a href='https://studybuddy.life/' target='_blank' className='resume'>go to study buddy</a>
            </Card.Body>
            <Card.Body>
                Other valuable experience I have comes from being a TA for 3 semesters for the software security course at Temple. This course aims to familiarize students with common vulnerabilities, like those in the OWASP Top 10 and SANS Top 25, and 
                teach them how to detect and avoid them. In this role, I graded assignments and provided support for students, and learned a lot about the cybersecurity sphere, too.
            </Card.Body>
            </Card>
        <Cat/>
        </div>
    )
}

export default Experience