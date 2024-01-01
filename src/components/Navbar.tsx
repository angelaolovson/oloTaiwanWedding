import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [isOpenState, setIsOpenState] = useState(false);

    //add the active class
    const toggleNavbar = () => {
        setIsOpenState(!isOpenState);
    }

      //clean up function to remove the active class
    const removeActive = () => {
        setIsOpenState(false)
    }
    return (
        <nav>
            <div>
                Kyle & Angela
            </div>

            <div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/photo/">Photo</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;


		  