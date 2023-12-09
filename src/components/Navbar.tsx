import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div style={{ height: "10vh" }} className="bg-navFooter flex items-center justify-center">
            <div className="flex flex-row justify-around w-full max-w-screen-md">
                <a href="/">Home</a>
                <a href="/photo">Photo</a>
            </div>
        </div>
    );
}

export default Navbar;


		  