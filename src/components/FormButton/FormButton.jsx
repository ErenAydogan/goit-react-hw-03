import styles from './FormButton.module.css';

const FormButton = ( props ) =>
{
    return (
        <button type="submit" className={styles['button']} onClick={props.onClick}>{props.children}</button>
    )
}

export default FormButton;