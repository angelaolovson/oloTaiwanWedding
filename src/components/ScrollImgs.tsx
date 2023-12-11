import React from "react";

const ScrollImgs: React.FC = () => {
    return (
        <div className="overflow-auto whitespace-nowrap w-full h-[20vh] mb-24 md:h-[60vh] md:mb-44">
            <img src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1693585236/bfe_img/home/6c2877ba906246962e3428ba9507c572_ivivpm.jpg" alt="" className="inline-block h-full object-contain" />
            <img src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1693585236/bfe_img/home/6c2877ba906246962e3428ba9507c572_ivivpm.jpg" alt="" className="inline-block h-full object-contain" />
            <img src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1693585236/bfe_img/home/6c2877ba906246962e3428ba9507c572_ivivpm.jpg" alt="" className="inline-block h-full object-contain" />
            <img src="https://res.cloudinary.com/dlxrcak5o/image/upload/v1693585236/bfe_img/home/6c2877ba906246962e3428ba9507c572_ivivpm.jpg" alt="" className="inline-block h-full object-contain" />
        </div>
    );
}
export default ScrollImgs;