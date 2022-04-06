import React from 'react'
import {useSelector , useDispatch } from 'react-redux';
import * as ACTIONS from '../../store/actions/actions';
import './search.css';
function SearchBox({placeholder}) {
  const searchField = useSelector((state)=> state.searchField);
  const dispatch = useDispatch();

  const handleChange = e =>{
    console.log(e.target.value);
    dispatch(ACTIONS.setSearchText(e.target.value));
  }
  return (
    <div>
        <input 
            className='search'
            type="search"
            placeholder={placeholder}
            value={searchField}
            onChange={handleChange}
        /> 
    </div>
  )
}

export default SearchBox;