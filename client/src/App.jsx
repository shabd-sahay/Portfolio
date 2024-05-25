import Header from './components/Header'
import Home from './components/Home'
import Skills from './components/Skills'
import Works from './components/works';
import Contact from './components/Contact';

function App() {
  const cards = [
    {
      id: 1,
      title: 'Front-End Web Development',
      description: 'Proficient in HTML5, CSS3, Javascript, Bootstrap, Tailwind, Vite + Reactjs, Nextjs.'
    },
    {
      id: 2,
      title: 'Back-End Web Development',
      description: 'MySQL and I am proficient in Python Framework - Flask and Django. '
    },
    {
      id: 3,
      title: 'Languages-known',
      description: 'Proficient in C, C++, Python, JavaScript, Java'
    },
    {
      id: 4,
      title: 'Plateform-To-Code',
      description: 'Visual Studio Code, PYCharm, Thonny, Sublime, IDLE'
    },
    {
      id: 5,
      title: 'Subjects Proficiency',
      description: 'proficiency in DSA, DBMS, Computer Networks and Mathematics'
    }
  ];
  
  
  

  return (
    <div className="App" style={{overflow: "hidden"}}>
      <Header />
      <Home />
      <Skills cards={cards}/>
      <Works />
      <Contact />
    </div>
  )
}

export default App
