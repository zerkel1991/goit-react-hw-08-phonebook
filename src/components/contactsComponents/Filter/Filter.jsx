import style from './Filter.module.css'
import { useSelector,useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filter';
const pattern = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const title = '"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore'



const Filter = () =>{
  const value = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  return(
    <label> Find contacts by name
      <input className={style.input} type="text" name="filter" title={title} value = {value} pattern = {pattern} onChange={(e)=>  dispatch(setFilter(e.target.value))}/>
    </label>

    )
}




export default Filter

