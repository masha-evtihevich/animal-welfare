import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css';

export const Navbar = () => (
    <nav className='navbar'>
        <ul className='navbar__menu'>
            <li className='navbar__item'>
               <p className='navbar__text'><span className='navbar__text-letters'>We</span>lfare</p>
            </li>
             <li className='navbar__item'>
                <NavLink className='navbar__link' to='/'>Home</NavLink>
            </li>
            <li className='navbar__item'>
                <NavLink className='navbar__link' to='/catalogDog'>Choose the dog</NavLink>
            </li>
            <li className='navbar__item'>
                <NavLink className='navbar__link' to='/catalogCat'>Choose the cat</NavLink>
            </li>
            <li className='navbar__item'>
                <NavLink className='navbar__link' to='/contacts'>Contact us</NavLink>
            </li>
            <li className='navbar__item'>
                <NavLink className='navbar__link' to='/help'>Help to the center</NavLink>
            </li>
        </ul>
    </nav>
)