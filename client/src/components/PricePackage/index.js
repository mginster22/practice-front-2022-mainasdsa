import React, { useState } from 'react';
import styles from './PricePackage.module.scss';
import data from './pricePackage.json';
import PricePackageCard from './PricePackageCard';
const { title, categories } = data;

const PricePackage = () => {
  const [isActive, setIsActive] = useState(null);

  const isActiveBox = (id) => {
    if (isActive === id) {
      return setIsActive(null);
    }
    return setIsActive(id);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.card_wrapper}>
          {categories.map((categories, i) => (
            <PricePackageCard
              isActive={isActive}
              isActiveBox={isActiveBox}
              categories={categories}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricePackage;
