import React from 'react';
import './products.css';

const Products = ({ drinks, drinkSelected, setDrinkSelected }) => {

  const addCar = (drinkSelect) => {
    const idDrinkSelected = [];
    drinkSelected.forEach(drink => idDrinkSelected.push(drink.idDrink));
    console.log(idDrinkSelected);

    if(idDrinkSelected.includes(drinkSelect.idDrink)) {
      const newDrink = drinkSelected.map(drink => {
        if (drink?.idDrink == drinkSelect.idDrink) 
          return { ...drink, quantity: drink.quantity + 1 }
        else 
          return { ...drink};
      })
      setDrinkSelected(newDrink)

    } else {
      setDrinkSelected([...drinkSelected, {...drinkSelect, quantity: 1} ])
    }

    
  };

  return (
    <main className='main'>
      <h1 className='main__title'>Bebidas Disponibles</h1>
      <section className='main__cards'>
        {drinks?.length > 0 ? (drinks?.map((drink) => (
          <article className="main__card" key={drink.idDrink}>
            <div>
              <img src={drink.strDrinkThumb} alt="" />
            </div>
            <div className="main__card__content">
              <h2>{drink.strDrink}</h2>
              <span >S/{drink.price}</span>
            </div>
            <button className='main__btn' onClick={() => addCar(drink)}>AGREGAR AL CARRITO</button>
          </article>
          ))
        ): (
          <>No ahi bebidas</>
        )}
        
      </section>
    </main>
  )
}

export default Products