import Header from './components/Header'
import Home from './components/Home'
import Skills from './components/Skills'
import Works from './components/works';
import Contact from './components/Connect';

function App() {
  const cards = [
    {
      id: 1,
      title: 'Front-End Web Development',
      description: 'Proficient in HTML, CSS, Javascript, Bootstrap, Tailwind, Vite + Reactjs.'
    },
    {
      id: 2,
      title: 'Back-End Web Development',
      description: 'MySQL and I am proficient in Python Framework - Flask. '
    },
    {
      id: 3,
      title: 'Languages-known',
      description: 'Proficient in C, C++, Python, JavaScript, Java'
    },
    {
      id: 4,
      title: 'App-Development',
      description: ''
    },
    {
      id: 5,
      title: 'Machine-Learning',
      description: ''
    },
    {
      id: 6,
      title: 'Plateform-To-Code',
      description: 'Visual Studio Code, PYCharm, Thonny, Sublime, IDLE'
    }
  ];
  
  
  

  return (
    <div className="App">
      <Header />
      <Home />
      <Skills cards={cards}/>
      <Works />
      <Contact />
    </div>
  )
}

export default App
