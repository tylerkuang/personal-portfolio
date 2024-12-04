import meter1 from "../assets/img/meter.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills/Proficiencies</h2>
                            <p className="top">
                                Making a late major switch to a more demanding field, I had to be a quick and hungry learner. The transition required intense focus, rapid adaption, and the ability to quickly master unfamiliar concepts. From learning the foundational principles of algorithms to tackling advanced topics like machine learning and natural language processing, every challenge was an opportunity to grow. My time as a college student has taught me resilience, adaptability, and a relentless work ethic—qualities I now bring to every new challenge before me. I'm confident that these traits will help me excel in any environment, no matter how unfamiliar.
                            </p>
                            <p className="bottom">
                                I'm always eager to learn and experiment with new technologies. Technology's limitless potential for innovation and impact is the reason I became a Computer Science major in the first place—because I wanted help people and make a more significant personal impact. Whether it's enhancing user experiences through intuitive interfaces, streamlining operations with efficient algorithms, or leveraging AI to tackle global challenges, I want my work to make a difference.
                            </p>
                            <p>
                                Below, I've listed some key competencies and technologies that will enable me to be successful in the field.
                            </p>
                            <div className="grid-container">
                                <div className="grid-item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Git/Github for Version Control</h5>
                                </div>
                                <div className="grid-item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Docker for Containerization</h5>
                                </div>
                                <div className="grid-item">
                                    <img src={meter1} alt="Image" />
                                    <h5>CI/CD Pipelines (AWS CodePipeline)</h5>
                                </div>
                                <div className="grid-item">
                                    <img src={meter1} alt="Image" />
                                    <h5>AWS Management</h5>
                                </div>
                                <div className="grid-item">
                                    <img src={meter1} alt="Image" />
                                    <h5>RESTful API Development</h5>
                                </div>
                                <div className="grid-item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Relational Database Management</h5>
                                </div>
                                <div className="grid-item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Agile Methodologies (Scrum, Kanban)</h5>
                                </div>
                                <div className="grid-item">
                                    <img src={meter1} alt="Image" />
                                    <h5>ML Frameworks (SKLearn, TensorFlow, Keras, PyTorch)</h5>
                                </div>
                                <div className="grid-item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Data Science Libraries (Pandas, Matplotlib, Seaborn)</h5>
                                </div>
                                <div className="grid-item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Supervised & Unsupervised Learning</h5>
                                </div>
                                <div className="grid-item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Neural Networks & Deep Learning</h5>
                                </div>
                                <div className="grid-item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Natural Language Processing (NLP)</h5>
                                </div>
                                <div className="grid-item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Large Language Models (LLMs)</h5>
                                </div>
                                <div className="grid-item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Data Preprocessing (Data Cleaning, Feature Engineering, Data Augmentation)</h5>
                                </div>
                                <div className="grid-item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Model Evaluation & Validation Metrics</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}