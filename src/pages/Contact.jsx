import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1>Contact Us</h1>

      <div className={styles.contactInfo}>
        <h2>ACE Microelectronics Pvt. Ltd.</h2>

        <div className={styles.office}>
          <h3>Corporate Office – Delhi</h3>
          <p>
            Devika Tower 6, Flat No 713, Nehru Place,<br />
            South Delhi, 110019
          </p>
        </div>

        <div className={styles.office}>
          <h3>West Bengal Office</h3>
          <p>
            Godrej Genesis, 121, 11th Floor,<br />
            Salt Lake, Sector 5, Kolkata, 700091
          </p>
        </div>

        <div className={styles.office}>
          <h3>Jodhpur Office</h3>
          <p>
            F32-33 Agro Food Park, Boranada,<br />
            Jodhpur, 342013
          </p>
        </div>

        <div className={styles.contactDetails}>
          <p><strong>Phone:</strong> <a href="tel:7300088126">7300088126</a></p>
          <p><strong>Email:</strong> <a href="mailto:sales@acemicro.in">sales@acemicro.in</a></p>
          <p><strong>Website:</strong> <a href="https://acemicro.in" target="_blank" rel="noopener noreferrer">acemicro.in</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
