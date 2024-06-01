import '../App.css'
import React from "react";
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaLaptopCode } from 'react-icons/fa'
import { FaSearchengin } from 'react-icons/fa'
import { FaWordpress } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { FaJs } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { SiFirebase } from "react-icons/si";
import { FaPython } from 'react-icons/fa'

import Card from "./card";
import Project from './projectbox'
import Header from './header'
import Footer from './footer';


import first from '../images/first.png'
import webdev from '../images/webdev.jpg'
import dm from '../images/dm.jpg'
import wp from '../images/wordpress.webp'
import weatherp from '../images/weather_project.png'
import tt from '../images/timetable.png'
import { Link } from 'react-router-dom';




export default function Home() {
    return (
        <>

            <Header />
            <div class="area" >
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>


                <div className="myname">
                    <h1>Satyam</h1>
                    <p>React Developer | Wordpress Developer | Digital Marketer</p>
                    <div className='icons'>
                        <a href='https://github.com/Satyam020905'><FaGithub style={{ paddingRight: '1rem' }} /></a>
                        <a href=''><FaInstagram style={{ paddingRight: '1rem' }} /></a>
                        <a href=''><FaLinkedin style={{ paddingRight: '1rem' }} /></a>
                    </div>
                    <a href='satyam_resume.pdf'><div className='button'><button>Download Resume</button></div></a>
                </div></div >


            <div className='expertise' id='expertise'>
                <h2>Expertise</h2>
                <div className='cards'>
                    <Card icon={<FaLaptopCode />} title="Website Development" content="As an experienced React Developer with advanced CSS and JS skills, 
        I thrive on exploring the latest trends in website development and design. Passionate about innovation, I enjoy experimenting with new 
        techniques to create captivating digital experiences." image={webdev} />

                    <Card icon={<FaSearchengin />} title="Digital Marketing" content="I'm a digital marketing enthusiast with a knack for driving online success. From SEO and social media 
        to email campaigns, I excel in crafting strategies that captivate audiences and deliver measurable results." image={dm} />

                    <Card icon={<FaWordpress />} title="Wordpress Development" content="I'm a skilled WordPress Developer, driven by my passion for website 
        development and design. With a deep understanding of WordPress's capabilities, I enjoy exploring the latest trends in the industry to
         create captivating digital experiences." image={wp} />
                </div>
            </div>

            <div className="about-me" id='about'>
                <h2>About Me</h2>
                <div className="about-box">
                    <img src={first}></img>
                    <p>Hey, I'm Satyam, a versatile professional with a passion for web development and digital marketing.
                        With expertise in React, CSS, and JavaScript, I love staying up-to-date with the latest trends in website development and design.
                        Additionally, my proficiency in digital marketing allows me to create comprehensive strategies that drive engagement
                        and conversions. Committed to delivering impactful results, I thrive on crafting immersive digital experiences that
                        leave a lasting impression.</p>
                    
                </div>
            </div>



            <div className="devskills" id='skills'>
                <h2>Development Skills</h2>
                <div className="devicons">
                    <FaHtml5 style={{ paddingLeft: "2.5rem" }} title='HTML5' />
                    <FaCss3 style={{ paddingLeft: "2.5rem" }} title='CSS' />
                    <FaJs style={{ paddingLeft: "2.5rem" }} title='JS' />
                    <FaReact style={{ paddingLeft: "2.5rem" }} title='React' />
                    <FaWordpress style={{ paddingLeft: "2.5rem" }} title='Wordpress' />
                    <SiFirebase style={{ paddingLeft: "2.5rem" }} title='Firebase' />
                    <FaGithub style={{ paddingLeft: "2.5rem" }} title='Github' />
                    <FaPython style={{ paddingLeft: "2.5rem" }} title='Python' />
                </div>
            </div>
            
            <div className="projects" id='projects'>

                <h2>Projects</h2>
                <div className="p_cards">
                    <Project Link="/weather" source="https://github.com/Satyam020905/weather" p_image={weatherp} p_name="Weather App" p_desc="This project tells about the weather of different countries " />
                    <Project Link="/timetable" source="https://github.com/Satyam020905/Time-table" p_image={tt} p_name="TimeTable Builder" p_desc="This can help you create your own custom time table. " />
                    <Project />
                </div>
                
            </div>
            
            <Footer />
        </>
    )
}