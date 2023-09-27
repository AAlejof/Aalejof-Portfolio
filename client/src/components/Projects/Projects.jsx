import style from './Projects.module.css';
import React, { useState, useEffect } from 'react';
import image1 from '../../assets/img/imgHeliki1.png';
import image2 from '../../assets/img/imgHeliki2.png';
import image3 from '../../assets/img/imgHeliki3.png';
import image4 from '../../assets/img/imgHeliki4.png';
import image5 from '../../assets/img/imgHeliki5.png';
import img1 from '../../assets/img/imgCW1.png';
import img2 from '../../assets/img/imgCW2.png';
import img3 from '../../assets/img/imgCW3.png';
import img4 from '../../assets/img/imgCW4.png';
import img5 from '../../assets/img/imgCW5.png';
import imgC1 from '../../assets/img/imgComplex1.png';
import imgC2 from '../../assets/img/imgComplex2.png';
import imgC3 from '../../assets/img/imgComplex3.png';
import imgC4 from '../../assets/img/imgComplex4.png';
import imgC5 from '../../assets/img/imgComplex5.png';


const Projects = () => {
    const [selectedTitle, setSelectedTitle] = useState("WWII Comfort Women");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const imgWedApp = [image1, image2, image3, image4, image5];
    const imgCWApp = [img1, img2, img3, img4, img5];
    const imgComplex = [imgC1, imgC2, imgC3, imgC4, imgC5];

    const textData = [
        {
            title: "WWII Comfort Women",
            summary: (
                <>
                    <p>
                        "Mujeres de confort" (Comfort Women) for the Manyoung Foundation (Arg.) is an SPA using PERN stack. It is an informational website about the Korean comfort women in the WWII.
                        WIP
                    </p>
                    <p><a href="https://github.com/AAlejof/WWII-ComfortWomen" target="_blank">REPOSITORY</a></p>
                </>
            ),
            img: (
                <>
                    <div className={style.carouselContainer}>
                        <img className={style.descImg} src={imgCWApp[currentImageIndex]} alt="ComfortWomen app img" />
                    </div>
                </>
            )
        },
        {
            title: "Wedding RSVP app",
            summary: (
                <>
                    <p>This is an SPA using MERN stack. It Allows guest to RSVP for a wedding and access important info about the ceremony, party and city hosting it. Also the admin have control of those attending and their menu or allergies needs</p>
                    <p><a href="https://github.com/AAlejof/HeliKi" target="_blank">REPOSITORY</a></p>
                    <p><a href="http://helen.ricardokim.com.ar/" target="_blank">DEPLOY</a></p>

                </>
            ),
            img: (
                <>
                    <div className={style.carouselContainer}>
                        <img className={style.descImg} src={imgWedApp[currentImageIndex]} alt="Wedding app img" />
                    </div>
                </>
            )
        },
        {
            title: "Complex gym",
            summary: (
                <>
                    <p>Fully responsive SPA made with PERN stack, Auth0, Redux, Sequelize, Tailwind, MercadoPago among others. It allows users to suscribe to the gym, choose plans and make payments. Also, the gym owner can fully manage all the functions from the admin dashboard and have control of clients, payments, blogs, posts and activities</p>
                    <p><a href="https://github.com/AAlejof/PF-Complex-Gym-JS" target="_blank">REPOSITORY</a></p>
                    <p><a href="https://www.youtube.com/watch?v=_ncVIXZZmH0&ab_channel=ComplexGym" target="_blank">VIDEO</a></p>
                </>
            ),
            img: (
                <>
                    <>
                        <div className={style.carouselContainer}>
                            <img className={style.descImg} src={imgComplex[currentImageIndex]} alt="Complex app img" />
                        </div>
                    </>
                </>
            )
        },

    ];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (imgCWApp, length || imgWedApp.length || imgComplex.length));
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 5000);

        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <div>
                <div className={style.infoDiv}>
                    <div className={style.mainDiv}>
                        <div className={style.descDiv}>
                            <h2 className={style.descH2}>Projects</h2>
                        </div>

                    </div>
                    <div className={style.titleDiv}>
                        {textData.map(item => (
                            <>
                                <button
                                    key={item.title}
                                    className={selectedTitle === item.title ? style.selectedTitle : style.titleButton}
                                    onClick={() => setSelectedTitle(item.title)}
                                >
                                    <div className={style.titleText}>{item.title}</div>

                                </button>
                                <div className={style.selectorDiv}>
                                    <div className={selectedTitle === item.title ? style.selectorOn : style.selectorOff}></div>
                                </div>
                            </>
                        ))}
                    </div>
                    <div className={style.contentDiv}>
                        <div className={style.summaryDiv}>
                            {textData.find(item => item.title === selectedTitle)?.summary}
                        </div>
                        <div className={style.textDiv}>
                            {textData.find(item => item.title === selectedTitle)?.img}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;