import styles from './ServiceCard.module.css';

const ServiceCard = ({ icon, title, description }) => (
  <div className={styles.serviceCard}>
    <div className={styles.serviceIcon}>{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default ServiceCard;
    