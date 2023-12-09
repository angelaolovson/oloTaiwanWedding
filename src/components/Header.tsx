import React from 'react';

interface HeaderProps {
    content?: string; // Define the type of the content prop
}

const Header: React.FC<HeaderProps> = ({ content }) => {
    return (
        <div className="Header h-[10vh] flex items-center justify-center">
            <div>{content || ""}</div>
        </div>
    );
}

export default Header;
