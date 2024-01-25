import React from "react";

const Map: React.FC = () => {
    return (
        <div className="flex flex-col w-full items-center justify-center bg-navFooter py-14">
            <div className="text-xl md:text-3xl">
                婚禮地址
            </div>
            <div className="text-lg md:text-2xl mt-1 mb-5 md:mt-7 md:mb-10 text-neutral-500">
                <a href="https://maps.app.goo.gl/ahRuWjZFq5QN2yQw5" className="text-neutral-500 hover:text-blue-800">宜慧家：屏東縣新埤鄉打鐵村東興路164號</a>
                
            </div>
            <div className="w-full h-[40vh] md:w-[70vw] md:h-[50vh] mb-5 md:mb-10">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3686.2875034046197!2d120.5394806761679!3d22.49339383586712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDI5JzM2LjIiTiAxMjDCsDMyJzMxLjQiRQ!5e0!3m2!1sen!2sus!4v1702245864954!5m2!1sen!2sus" 
                    className="w-full h-full object-cover" 
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Wedding Location Map">
                </iframe>
            </div>
            <div className="text-blue-800 text-lg md:text-2xl">
                <a href="https://maps.app.goo.gl/ahRuWjZFq5QN2yQw5" className="text-neutral-700 hover:text-blue-800">22°29'36.2"N 120°32'31.4"E</a>
            </div>
            <div className="text-sm md:text-2xl text-neutral-500">
                請用坐標定位(不然Google會導航到一家麵店lol)
            </div>
        </div>
    );
}

export default Map;