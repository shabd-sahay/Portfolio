import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import Contact from './Contact';
import shabdsahay from '../assets/Shabdsahay.jpeg';

const Home = () => {
  const [text, setText] = useState('');
  const textRef = useRef('I am a Full Stack Developer proficient in React.js, Flask, and Django, building dynamic web applications. Passionate about open-source and leadership, I create user-friendly solutions and lead technical initiatives. Connect with me to explore my projects.');
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (textRef.current.length > 0) {
        setText(prevText => prevText + textRef.current.charAt(0));
        textRef.current = textRef.current.substring(1);
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, [textRef]); // Only re-run on textRef changes

  const handleConnectClick = () => {
    // Scroll to the Contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='back'>
        <div className='text text-white p-3 rounded'>
          <button className="btn my-custom-btn">Welcome to my Portfolio</button>
          <div className='bg-dark p-3 rounded'>
            <h1 className='fa'>HI ! I AM SHABD.</h1>
            <p>{text}</p>
          </div>
          <button className='fa btn' onClick={handleConnectClick}>
            Let's Connect <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
        <div className='image-container'>
          <img src={shabdsahay} alt="Shabd Sahay" className='profile'/>
        </div>
      </div>
      {showContactModal && (
        <Contact /> 
      )}
    </>
  );
};

export default Home;
