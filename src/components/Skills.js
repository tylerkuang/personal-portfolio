import meter1 from "../assets/img/meter.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import React, { useState, useRef, useEffect } from 'react';


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

    const [selectedSkill, setSelectedSkill] = useState(null);
    const popupRef = useRef(null);

    const skills = [
        { title: "Git/Github for Version Control", details: "Proficient in using Git/GitHub for collaborative development and efficient version control, resolving merge conflicts, and conducting thorough code reviews to mmaintain code quality.", projects: "Projects: Wages Program Enhancement, Day Planner App, Feedback and Rating Platform for Teams, Personal Website, Skincare Product Finder"},
        { title: "Docker for Containerization", details: "Skilled in creating and managing Docker containers to ensure consistent and reliable deployment across environments. Experience in optimizing Docker images for performance and portability.", projects: "Projects: Stock Backtesting (in development)" },
        { title: "CI/CD Pipelines (AWS CodePipeline)", details: "Hands-on experience in setting up and automating CI/CD workflows to streamline the software development lifecycle. Proficient in configuring AWS CodePipeline for seamless integration and deployment.", projects: "Projects: Personal Website, Stock Backtesting (in development)" },
        { title: "AWS Management", details: "Adept at configuring and managing AWS services such as EC2, S3, and RDS. Skilled in optimizing cost, improving scalability, and maintaining secure cloud environments.", projects: "Projects: Personal Website, Stock Backtesting (in development)"},
        { title: "RESTful API Development", details: "Extensive experience in designing and deploying scalable APIs with well-documented endpoints and robust error handling. Proficient in integrating APIs with front-end and back-end systems.", projects: "Projects: Day Planner Mobile App, Feedback and Rating Platform for Teams, Personal Website, Healthcare Chatbot with Vector Database and RAG, Stock Backtesting (in development)"},
        { title: "Relational Database Management", details: "Proficient in designing normalized database schemas, writing optimized SQL queries, and maintaining data integrity. Experience in performance tuning and indexing for large datasets.", projects: "Projects: Day Planner Mobile App, Feedback and Rating Platform for Teams, Skincare Product Finder, Stock Backtesting (in development)"},
        { title: "Agile Methodologies (Scrum, Kanban)", details: "Experienced in leading and contributing to Agile teams, facilitating weekly stand-ups, and using tools to track progress and ensure delivery of sprint goals.", projects: "Projects: Wages Program Enhancement, Day Planner Mobile App, Feedback and Rating Platform for Teams"},
        { title: "ML Frameworks (SKLearn, TensorFlow, Keras, PyTorch)", details: "Proficient in implementing machine learning pipelines, from preprocessing to model training and evaluation.", projects: "Projects: Healthcare Chatbot with Vector Database and RAG, Natural Language Processing for Text Summarization, Deep Learning for Text Generation, Text Classification for Sentiment Analysis, Deep Learning for Anomaly Detection, Deep Learning for Image Colorization, Generative Adversarial Network (GAN) for Image Generation"},
        { title: "Data Science Libraries (Pandas, Matplotlib, Seaborn)", details: "Skilled in extracting actionable insights through advanced data manipulation, visualization, and exploratory data analysis with tools such as Pandas, Matplotlib, and Seaborn.", projects: "Projects: Healthcare Chatbot with Vector Database and RAG, Natural Language Processing for Text Summarization, Deep Learning for Text Generation, Text Classification for Sentiment Analysis, Deep Learning for Anomaly Detection, Deep Learning for Image Colorization, Generative Adversarial Network (GAN) for Image Generation"},
        { title: "Supervised & Unsupervised Learning", details: "Deep understanding of machine learning techniques, with hands-on experience building classification, regression, clustering, and dimensionality reduction models.", projects: "Projects: Healthcare Chatbot with Vector Database and RAG, Natural Language Processing for Text Summarization, Deep Learning for Text Generation, Text Classification for Sentiment Analysis, Deep Learning for Anomaly Detection, Deep Learning for Image Colorization, Generative Adversarial Network (GAN) for Image Generation"},
        { title: "Neural Networks & Deep Learning", details: "Extensive experience in designing and training deep neural networks for complex problem-solving, including image and text data analysis.", projects: "Projects: Natural Language Processing for Text Summarization, Deep Learning for Text Generation, Deep Learning for Anomaly Detection, Deep Learning for Image Colorization, Generative Adversarial Network (GAN) for Image Generation"},
        { title: "Natural Language Processing (NLP)", details: "Proficient in building NLP pipelines for tasks like sentiment analysis, named entity recognition, and language generation.", projects: "Projects: Healthcare Chatbot with Vector Database and RAG, Natural Language Processing for Text Summarization, Deep Learning for Text Generation, Text Classification for Sentiment Analysis"},
        { title: "Large Language Models (LLMs)", details: "Hands-on expertise in fine-tuning and deploying LLMs for real-world applications, including conversational agents and content generation.", projects: "Projects: Healthcare Chatbot with Vector Database and RAG, Natural Language Processing for Text Summarization"},
        { title: "Data Preprocessing (Data Cleaning, Feature Engineering, Data Augmentation)", details: "Experience in preparing datasets by cleaning, transforming, and engineering features to improve model accuracy and robustness.", projects: "Projects: Healthcare Chatbot with Vector Database and RAG, Natural Language Processing for Text Summarization, Deep Learning for Text Generation, Text Classification for Sentiment Analysis, Deep Learning for Anomaly Detection, Deep Learning for Image Colorization, Generative Adversarial Network (GAN) for Image Generation"},
        { title: "Model Evaluation & Validation Metrics", details: "Strong capability in assessing model performance using metrics such as accuracy, precision, recall, F1 score, and cross-validation techniques.", projects: "Projects: Healthcare Chatbot with Vector Database and RAG, Deep Learning for Text Generation, Text Classification for Sentiment Analysis, Deep Learning for Anomaly Detection, Deep Learning for Image Colorization, Generative Adversarial Network (GAN) for Image Generation"}
        
    ];

    const openPopup = (skill) => {
        setSelectedSkill(skill);
    };

    const closePopup = (skill) => {
        setSelectedSkill(null);
    };

    useEffect(() => {
        // check if the click is outside the popup content
        const handleClickOutsidePopup = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                closePopup();
            }
        };
        
        // add event listener when popup is open
        if (selectedSkill) {
            document.addEventListener('mousedown', handleClickOutsidePopup);
        }

        // cleanup event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutsidePopup);
        };
    }, [selectedSkill]);

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
                                {skills.map((skill, index) => (
                                    <div   
                                        key={index}
                                        className="grid-item"
                                        onClick={() => openPopup(skill)}
                                    >
                                        <img src={meter1} alt="Image" />
                                        <h5>{skill.title}</h5>
                                    </div>
                                ))}
                            </div>

                            {/* Popup Modal */}
                            {selectedSkill && (
                                <div className="popup-overlay">
                                    <div className="popup-content" ref={popupRef}>
                                        <button 
                                            className="popup-close"
                                            onClick={closePopup}
                                        >
                                            &times;
                                        </button>
                                        <h2>{selectedSkill.title}</h2>
                                        <p className="content">{selectedSkill.details}</p>
                                        <p><i>{selectedSkill.projects}</i></p>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}