import React from 'react';
import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <SideMenu />
      <main style={{ marginLeft: 240, padding: 20 }}>
        <h1>Bienvenido a Mi Proyecto Integrador</h1>
        <p>Esta es la página de presentación de mi proyecto.</p>
      </main>
    </div>
  );
}

export default App;

