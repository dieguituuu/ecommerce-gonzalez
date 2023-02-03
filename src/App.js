import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={"Lo sentimos, todavía no hay productos disponibles."} />
    </>
  );
}

export default App;