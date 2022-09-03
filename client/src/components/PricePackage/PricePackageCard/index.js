import React, { useRef } from 'react';
import useMediaQuery from '../../../hooks/useMediaQuery';
import styles from '../PricePackage.module.scss';
import cx from 'classnames';

const PricePackageCard = ({
  isActive,
  isActiveBox,
  categories: { id, heading, text, price, informations },
}) => {
  const classNamess = { 1: styles.pink, 2: styles.gold };
  const refHeight = useRef();
  const heightElem = `${refHeight.current?.scrollHeight}px`;
  const smallScreen = useMediaQuery('(max-width:760px)');

  return (
    <article className={cx(styles.card, classNamess[id])} key={id}>
      <div
        className={styles.heading_wrapper}
        onClick={smallScreen ? () => isActiveBox(id) : undefined}
      >
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.text}>{text}</p>
        <p className={styles.price}>{price}</p>
        <span className={styles.addList}>{isActive === id ? '-' : '+'}</span>
      </div>
      <div
        className={
          isActive === id
            ? cx(styles.info_box, styles.info_box_active)
            : styles.info_box
        }
        style={
          smallScreen
            ? { height: isActive === id ? heightElem : '0px' }
            : { height: '100%' }
        }
        ref={refHeight}
      >
        <ul className={styles.info_list}>
          {informations.map((item, i) => (
            <li key={i} className={styles.item}>
              {item}
            </li>
          ))}
        </ul>
        <button className={styles.btn_select}>select</button>
      </div>
    </article>
  );
};

export default PricePackageCard;
