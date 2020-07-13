import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const openMenu = () =>{
      document.querySelector(".sidebar").classList.add("open");
    }
    const closeMenu = () =>{
      document.querySelector(".sidebar").classList.remove("open");
    }
    return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
        </button>
          <a href="index.html">Caveira Rock</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Categorias</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li>
            <a href="index.html">Camisetas</a>
          </li>
          <li>
            <a href="index.html">Chaveiros</a>
          </li>
          <li>
            <a href="index.html">Quadros</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img className="product-image" src="/images/acdc.jpg" alt="product 1"></img>
                  <div className="product-name">
                    <a href="product.html">AC/DC T-shirt</a>
                  </div>
                  <div className="product-brand">Volt</div>
                  <div className="product-price">R$ 65,00</div>
                  <div className="product-rating">4.5 Stars (50 Reviews)</div>
              </div>
            </li>
              <li>
                <div className="product">
                  <img className="product-image" src="/images/gunsnroses.jpg" alt="product 2"></img>
                    <div className="product-name">
                      <a href="product.html">Gun´s T-shirt</a>
                    </div>
                    <div className="product-brand">Volt</div>
                    <div className="product-price">R$ 65,00</div>
                    <div className="product-rating">4.5 Stars (50 Reviews)</div>
             </div>
           </li>
                <li>
                  <div className="product">
                    <img className="product-image" src="/images/ironMaiden.webp" alt="product 3"></img>
                      <div className="product-name">
                        <a href="product.html">Iron Maiden T-shirt</a>
                      </div>
                      <div className="product-brand">Volt</div>
                      <div className="product-price">R$ 65,00</div>
                      <div className="product-rating">4.5 Stars (50 Reviews)</div>
             </div>
           </li>
                  <li>
                    <div className="product">
                      <img className="product-image" src="/images/metalica.jpg" alt="product 4"></img>
                        <div className="product-name">
                          <a href="product.html">Metalica T-shirt</a>
                        </div>
                        <div className="product-brand">Volt</div>
                        <div className="product-price">R$ 65,00</div>
                        <div className="product-rating">4.5 Stars (50 Reviews)</div>
             </div>
           </li>
                    <li>
                      <div className="product">
                        <img className="product-image" src="/images/nirvana.jpg" alt="product 5"></img>
                          <div className="product-name">
                            <a href="product.html">Nirvana shirt</a>
                          </div>
                          <div className="product-brand">Volt</div>
                          <div className="product-price">R$ 65,00</div>
                          <div className="product-rating">4.5 Stars (50 Reviews)</div>
             </div>
           </li>
                      <li>
                        <div className="product">
                          <img className="product-image" src="/images/offspring.jpg" alt="product 6"></img>
                            <div className="product-name">
                              <a href="product.html">Offspring shirt</a>
                            </div>
                            <div className="product-brand">Volt</div>
                            <div className="product-price">R$ 65,00</div>
                            <div className="product-rating">4.5 Stars (50 Reviews)</div>
             </div>
           </li>
        </ul>
      </div>
    </main>
                  <footer className="footer">
                    All right reserved.
      phdev
    </footer>
  </div>
  );
}

export default App;
