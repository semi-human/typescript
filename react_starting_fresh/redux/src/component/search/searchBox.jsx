import React from 'react'
import {useSelector , useDispatch } from 'react-redux';
import * as ACTIONS from '../../store/actions/actions';
import { BsSearch} from "react-icons/bs";
import './search.css';
function SearchBox({placeholder}) {
  const searchField = useSelector((state)=> state.searchField);
  const dispatch = useDispatch();

  const handleChange = e =>{
    console.log(e.target.value);
    dispatch(ACTIONS.setSearchText(e.target.value));
  }
  return (
    <div className='search-item'>
        <label htmlFor="search" className='search-icon'>
          <BsSearch size="1.4rem"/>
        </label>
        <input 
            className='search'
            id="search"
            type="search"
            placeholder={placeholder}
            value={searchField}
            onChange={handleChange}
        /> 
    </div>
  )
}

export default SearchBox;