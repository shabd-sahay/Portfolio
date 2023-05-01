import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import Connect from './Connect';

const Home = () => {
  const [text, setText] = useState('');
  const textRef = useRef('');

  useEffect(() => {
    textRef.current = 'Shabd Sahay is a basic level programmer and a front end developer, proficient in HTML, CSS, JavaScript and React.';
    const typingInterval = setInterval(() => {
      if (textRef.current.length > 0) {
        setText(prevText => prevText + textRef.current.charAt(0));
        textRef.current = textRef.current.substring(1);
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      <div className='back'>
      
        <div className='text text-white p-3 rounded'>
          <button className="btn my-custom-btn">Welcome to my Portfolio</button>
          <div className='bg-dark p-3 rounded'>
            <h1 className='fa'>HI ! I AM SHABD.</h1>
            <p>{text}</p>
          </div>
          <a onClick={<Connect />}><h3 className='fa btn'>Let's Connect <i class="fa-solid fa-arrow-right" /></h3></a>
        </div>
      </div>
    </>
  )
}

export default Home;
