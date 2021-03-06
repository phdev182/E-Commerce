import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function ProductScreen(props) {
  console.log(props.match.params.id);
  const product = data.products.find(x => x._id === props.match.params.id);
  return <div>
    <div className="voltarAoInicio">
      <Link to="/">Voltar para o inicio</Link>
    </div>
    <div className="details">
      <div className="details-image">
        <img src={product.image} alt="product" />
      </div>
      <div className="details-info">
        <ul>
          <h4>{product.name}</h4>
          <li>
            {product.rating} Stars ({product.numReviews} Reviews)
        </li>
          <li>
          Price: <b>R${product.price}</b>
          </li>
          <li>
            Descrição:
          <div>
              {product.description}
            </div>
          </li>
        </ul>
      </div>
      <div className="details-action">
        <ul>
          <li>
            Price:{product.price}
          </li>
          <li>
            Status:{product.status}
          </li>
          <li>
            Quantidade: <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </li>
          <li>
            <button className="button">Comprar</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
}
export default ProductScreen;