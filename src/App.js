import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

function App() {
  const [drinks, setDrinks] = useState([]);
  const [drinkSelected, setDrinkSelected] = useState([]);
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

  const getProducts = async () => {
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);
    const newDrinks = json.drinks.map(drink => {
      return {...drink, price: Math.floor(Math.random() * (100 - 50 + 1)) + 50}
    })
    setDrinks(newDrinks)
  };

  useEffect(() => {
    getProducts();
  }, []);
  
  return (
    <>
      <Header 
        drinks={drinkSelected} 
        setDrinkSelected={setDrinkSelected}
      />
      <Products 
        drinks={drinks} 
        drinkSelected={drinkSelected}
        setDrinkSelected={setDrinkSelected} 
      />
      <Footer/>
    </>
  );
}

export default App;
