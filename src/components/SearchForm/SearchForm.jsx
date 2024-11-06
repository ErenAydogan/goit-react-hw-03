import styles from './SearchForm.module.css';

const SearchForm = ( props ) =>
{
    const {filter, setFilter} = props;
    return (
        <>
            <form className={styles['form']}>
                <div className={styles['label-group']}>
                    <label htmlFor="name" className={styles['label-name']}>Find contacts by name</label>
                    <input type="text" id="name" name="name" className={styles['label-input']} value={filter} onChange={(event) => setFilter(event.target.value)}></input>
                </div>
            </form>
        </>
    )
}

export default SearchForm;