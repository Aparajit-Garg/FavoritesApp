import React, { useContext } from 'react';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import { ProductsContext } from '../context/products-context';
import classes from './Products.module.css';

const Favorites = props => {
  const favoriteProducts = useContext(ProductsContext).products.filter(p => p.isFavorite);
  let content = <p className={classes.placeholder}>Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className={classes.productsList}>
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;