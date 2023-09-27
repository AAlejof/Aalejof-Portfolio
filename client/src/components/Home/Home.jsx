import style from './Home.module.css';
import { Link } from 'react-router-dom';
import Projects from '../Projects/Projects';
import React from 'react';

const Home = () => {
    return (
        <>
            <div className={style.mainDiv}>
                <h2>About me</h2>
                <div>
                    <img src="" alt="" />
                </div>
                <div className={style.mainP}>
                    <p>
                       Hi, my name is Alejo Fariña. I'm a Full Stack Developer based in Buenos Aires, Argentina, with knowledge in JavaScript(ES6), React, Redux, Advanced DOM and CSS, SASS, LESS, Tailwind CSS, Node JS, Express, Jest, postgreSQL, MongoDB and Git.  I've worked in individual and group projects as freelancer.
                    </p>
                    <p>
                        Also, I'm certified as English C2 Proficient (EF set certificate), intermediate in French and native in Spanish.
                    </p>
                    <p>
                        Currently, besides being a freelance dev, I'm also working  in the Visual Arts Department of the National University of the Arts as Head of the Office of Council and Commissions, having staff in charge and coordinating the sessions of the co-governance body as well as writing its opinions and resolutions. At the same time, I have my own legal practice as lawyer with all that it entails: dealing with clients, drafting and presentation of pleadings and lawsuits, procedures with public and private entities.
                    </p>
                    <p>
                        I believe that my experiences have given me a great contribution in teamwork, and also in team direction, and in the importance of managing time and meeting deadlines. As well in the practice of constant training and knowledge updating.
                    </p>
                    <p>Check out my <a href="https://www.linkedin.com/in/aalejof/" target="_blank"><b>LinkedIn</b></a> and <a href="https://github.com/AAlejof" target="_blank"><b>Github</b></a> profiles!</p>
                </div>
            </div>
            <Projects/>
        </>
    )
}

export default Home;