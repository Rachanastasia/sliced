import React, { useContext } from 'react';
import { RiKnifeLine } from 'react-icons/ri'


function Header() {

    return (
        <header>
                <h1>
                    <div aria-label='Sliced'>
                        <span>S</span><RiKnifeLine /><span>iced</span>
                    </div>
                </h1>
        </header >
    )

}

export default Header;
