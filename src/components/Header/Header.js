import React, { useEffect, useRef, useState } from 'react';
import carrito from '../../assets/img/carrito.png';
import './header.css'
import image from '../../assets/img/cocteles.png';

const Header = ({ drinks, setDrinkSelected }) => {
  const [total, setTotal] = useState(0);
  const selectRef = useRef();

  const openCloseCar = () => {
    if (selectRef.current.classList == '') 
      selectRef.current.classList.add("vtn-carrito");
    else 
      selectRef.current.classList.remove("vtn-carrito");
  };

  const deleteDrink = (id) => {
    const drinksFilter = drinks.filter(drink => drink.idDrink != id);
    console.log(drinksFilter);
    setDrinkSelected(drinksFilter);
  };

  useEffect(() => {
    let add = 0;
    drinks.forEach(drink => {
      add += drink.price * drink?.quantity;
    });

    setTotal(add);

  }, [drinks]);
  
  return (
    <header>
      <section className="header">
        <section className="header__bar">
          <h2>Tienda Virtual</h2>
          <img src={carrito} alt="" className="header__icono" onClick={openCloseCar} />
        </section>
        <div id="header__carrito" ref={ selectRef } >
          <table className="header__carrito_table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="header__carrito_table_body">
              {drinks?.map((drink) => (
              <tr key={drink.idDrink}>
                <td><img src={drink.strDrinkThumb} alt={drink.strDrinkThumb} /></td>
                <td>{drink.strDrink}</td>
                <td>S/{drink.price}</td>
                <td>{drink.quantity}</td>
                <td><button className="header__carrito_btn-delete" onClick={() => deleteDrink(drink.idDrink)}>X</button></td>
              </tr>))}
            </tbody>
          </table>
          {drinks.length > 0 &&
          <div className='header__carrito_total'>
            <span>Total: S/</span>
            <span>{total}</span>
          </div>}
        </div>
      </section>
      <section className='header__portada'>
        <img src={image} alt="Portada" />
      </section>
    </header>
  )
}

export default Header