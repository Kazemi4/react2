import React from 'react';
import Contact from './components/Contact';


const App = () => {
  return (
    <div className="App">
      <Contact image="https://randomuser.me/api/portraits/women/30.jpg" character="Derek Pantalon" online={true} />
      <Contact image="https://randomuser.me/api/portraits/women/69.jpg" character="Eric Chemise" online={false} />
      <Contact image="https://randomuser.me/api/portraits/men/53.jpg" character="Léa BrosseàDent" online={true} />
    </div>
  );
}



export default App;
