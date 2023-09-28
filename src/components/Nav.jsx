import React from 'react'
import './Nav.css';


function Nav() {
    return (
        <>
            <nav>
                <div className='nav-style'>

                    <div className='logo'>Jobfind</div>

                    <div className='list-content'>
                        <input type="checkbox" id="check" />
                        <label for="check" class="checkbtn"><i class="fa-solid fa-bars"></i></label>

                        <ul className='nav-links'>
                            <li className='active'><a href="./#">Home</a></li>
                            <li><a href="./#">About</a></li>
                            <li><a href="./#">Contact</a></li>
                            <li><a href="./#">Blog</a></li>
                        </ul>
                    </div>
                   
                </div>
            </nav>
        </>
    )
}

export default Nav