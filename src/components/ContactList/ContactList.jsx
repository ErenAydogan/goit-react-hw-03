import styles from './ContactList.module.css';

const ContactList = (props) =>
{
    return (
        <>
        <div className={styles['contactList-container']}>
            {props.children}
        </div>
        </>
    )
}

export default ContactList;