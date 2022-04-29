 import React from 'react'
 import { Head } from './head'
 import Navbar from './navbar'
 import './head.css';
import { Search } from './search'
 export const Header = () => {
   return (
     <div>

         <Head/>
         <Search/>
        <Navbar/>
     </div>
   )
 }
 