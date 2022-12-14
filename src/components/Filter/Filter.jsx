import { filterContact } from 'redux/contactsSlice/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';

const Filter = () => {
    const filter = useSelector((state) => state.contactsData.filter);

    const dispatch = useDispatch();
    const onChangeFilter = e => {
        dispatch(filterContact(e.target.value))
    };

    return (
        <div >
            <label className={css.filterBox}>
                <p className={css.title}>Find contacts by name</p>
                <input
                    className={css.inputPaper}
                    type="text"
                    name="filter"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    onChange={onChangeFilter}
                    value={filter}
                    placeholder='Write name'
                    required
                />
            </label>
        </div>
    )
};

export default Filter;