import React from 'react';
import styles from './Manage.module.scss';
import data from './manage.json';
import CONSTANTS from '../../constants';
const Manage = () => {
  return (
    <div className={styles.container}>
      <h2>Managed Contests</h2>
      <h3>A Naming Agency Experience (minus the Agency-level price tag)</h3>
      <h4>
        Our hybrid-solution partners you with a trained Squadhelp branding
        consultant who will guide your crowdsourcing process step-by-step to get
        the best results possible.
      </h4>
      <div className={styles.wrapper_card}>
        {data.map(({ id, alt, img, heading, content }) => (
          <div className={styles.card} id={id}>
            <div className={styles.heading}>
              <img
                src={`${CONSTANTS.STATIC_IMAGES_PATH}${img}`}
                alt={alt}
                style={{ width: '30px' }}
              />
              <h6>{heading}</h6>
            </div>
            <p>{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manage;
