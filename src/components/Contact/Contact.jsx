import styles from './Contact.module.css';

const Contact = (props) => {
  return (
    <>
      <div className={styles['contact-container']}>
        <div className={styles['contact-info']}>
          <p><i className={`fa-solid fa-user ${styles['info-icon']}`}></i><span>{props.name}</span></p>
          <p><i className={`fa-solid fa-phone ${styles['info-icon']}`}></i><span>{props.number}</span></p>
        </div>
        <button className={styles['button']} onClick={() => props.onClick(props.id)}>
          <i className={`fa-solid fa-trash ${styles['delete-icon']}`}></i>
        </button>
      </div>
    </>
  );
}

export default Contact;
