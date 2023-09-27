import style from './Projects.module.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import image1 from '../../assets/img/home/homeImg.png';
// import image2 from '../../assets/img/home/homeImg2.png';
// import image3 from '../../assets/img/home/homeImg3.png';
// import Card from './Card/Card';

const Projects = () => {
    const [selectedTitle, setSelectedTitle] = useState("WWII Comfort Women");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // const images = [image1, image2, image3];

    const textData = [
        {
            title: "WWII Comfort Women",
            summary: (
                <>
                    <p>
                        "Mujeres de confort" (Comfort Women) for the Manyoung Foundation (Arg.) is an SPA using PERN stack. It is an informational website about the Korean comfort women in the WWII.
                    </p>
                    <p>WIP</p>
                    <p><a href="https://github.com/AAlejof/WWII-ComfortWomen" target="_blank">REPOSITORY</a></p>
                </>
            ),
            img: (
                <>
                    <p>Las víctimas pertenecieron a las colonias japonesas y a todos los territorios ocupados por Japón en el marco de la guerra. Se aplicaron diferentes mecanismos de rapto. Muchas víctimas fueron reclutadas con falsas promesas de trabajo, especialmente en el caso de las mujeres de las colonias japonesas. En algunos pocos casos fueron entregadas por vecinos o familiares. En la medida que la guerra avanzaba, muchas mujeres fueron directamente raptadas delante de sus familiares, conocidos, amigos o compañeros. Entre las víctimas japonesas se han descubierto casos de prostitutas derivabas a los sitios de esclavización sexual. Las “mujeres de confort” eran jóvenes. La mayoría eran vírgenes al momento del rapto. Se estima que las víctimas tenían entre 11 y 27 años. En todos los casos fueron sometidas a un control total de sus cuerpos mediante el uso de la violencia física y psicológica.</p>
                </>)
        },
        {
            title: "Wedding RSVP app",
            summary: (
                <>
                    <p>This is an SPA using MERN stack. It Allows guest to RSVP for a wedding and to the admin to have control of those attending and their menu or allergies needs</p>
                </>
            ),
            img: (
                <>
                    <p>Las mujeres esclavizadas sexualmente pertenecieron a los distintos territorios ocupados por Japón durante la guerra. Además, de mujeres de sus dos colonias: Taiwán y Corea, mujeres de su propio país, y mujeres holandesas, hijas de los colonos en de las Indias Orientales Neerlandesas. Es decir, hubo víctimas coreanas, chinas, japonesas, filipinas, vietnamitas, camboyanas, laosianas, birmanas, malayas, indonesias, holandesas, tailandesas, timorenses, papú neoguineanos.</p>
                    <p>Se calcula que entre 200.000 y 400.000 mujeres fueron llevadas en contra de su voluntad a las “estaciones de confort”. Este sistema de trata de personas es el más grande que haya existido en el marco de un conflicto armado contemporáneo. </p>
                </>)
        },
        {
            title: "Complex gym",
            summary: (
                <>
                    <p>A partir de la invasión de Manchuria en 1931, el Imperio japonés inicia una etapa de avance militar en Asia que finalizará con el discurso de rendición del emperador de japón, Hirohito, el 14 de agosto de 1945.</p>
                    <p>(...)</p>
                    <p>Se han encontrado diversos documentos que prueban la existencia de este sistema de esclavización sexual. </p>
                </>
            ),
            img: (
                <>
                    <p>A partir de la invasión de Manchuria en 1931, el Imperio japonés inicia una etapa de avance militar en Asia que finalizará con el discurso de rendición del emperador de japón, Hirohito, el 14 de agosto de 1945. Al iniciarse el conflicto armado, la Armada Imperial observa que los soldados contraían enfermedades de trasmisión sexual. La Armada consideró que estas enfermedades era el producto de las violaciones masivas de mujeres y la concurrencia de los soldados a prostíbulos de la zona. Para prevenir las enfermedades de trasmisión sexual y controlar la salud de los soldados, decide establecer el sistema de las “mujeres de confort”. Este sistema le permitía controlar la salud de los soldados y de las mujeres esclavizadas sexualmente.</p>
                    <p>Otro de los motivos por los cuales se establece este sistema fue mejorar la moral de los soldados. Frente a las continuas batallas y el estrés de la guerra, creían que expandir los lugares de “entretenimiento sexual” sería fundamental para mejorar la salud mental de soldados. Además, este sistema permitiría evitar los raptos masivos de mujeres que no sólo ponían en peligro la salud de los soldados, sino que también aumentaba el sentimiento antijaponés en los territorios ocupados. Desde esta perspectiva patriarcal, las mujeres fueron consideradas un objeto sexual de confort, consuelo y bienestar de los hombres de la Armada Imperial.</p>
                    <p>Se han encontrado diversos documentos que prueban la existencia de este sistema de esclavización sexual. Entre las diversas fuentes existentes se destacan un escrito publicado en julio de 1938 en el periódico de guerra de la Novena Brigada Terrestre en el cual se solicitan más estaciones de confort para mejorar el ánimo de los soldados. Se han encontrado menciones a las “mujeres de confort” en certificados de viaje y otros documentos oficiales de la Armada Imperial. También hay varios testimonios de testigos locales y de soldados y médicos arrepentidos que corroboran la existencia de esta de red de trata. Como las investigaciones continúan, siguen apareciendo documentos e imágenes de archivo probatorias.</p>
                </>)
        },

    ];

    // const nextImage = () => {
    //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    // };

    // useEffect(() => {
    //     const interval = setInterval(nextImage, 5000);

    //     return () => clearInterval(interval);
    // }, []);

    // const prevImage = () => {
    //     setCurrentImageIndex((prevIndex) =>
    //         prevIndex === 0 ? images.length - 1 : prevIndex - 1
    //     );
    // };

    // const nextManualImage = () => {
    //     nextImage();
    // };

    // const prevManualImage = () => {
    //     prevImage();
    // };

                        {/* <div className={style.carouselContainer}>
                        <div className={style.carouselButtons}>
                            <button onClick={prevManualImage} className={style.chevron}>&#8249;</button>
                            <button onClick={nextManualImage} className={style.chevron}>&#8250;</button>
                        </div>
                        <img className={style.descImg} src={images[currentImageIndex]} alt="Mujeres de confort" />
                    </div> */}

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
                    {
                        (selectedTitle === "Testimonios") ?
                            <div className={style.contentDiv}><Card /><Card /><Card /></div> :

                            <div className={style.contentDiv}>
                                <div className={style.summaryDiv}>
                                    {textData.find(item => item.title === selectedTitle)?.summary}
                                </div>
                                <div className={style.textDiv}>
                                    {textData.find(item => item.title === selectedTitle)?.img}
                                </div>
                            </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Projects;