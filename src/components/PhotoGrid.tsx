import { useState } from 'react';

// Define a TypeScript interface for the component's props
interface PhotoGridProps {
    mainImage: string;
    title: string;
    modalImages: string[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({mainImage, title, modalImages}) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <div className='flex items-center justify-center text-center mb-5 md:p-2 md:text-xl'>
            <div >
                <img src={mainImage} alt="" className="cursor-pointer inline-block h-full object-contain" onClick={handleOpenModal}/>
                <div className=" text-gray-500 hover:text-gray-700" >{title}</div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 z-50 overflow-y-auto">
                    <div className="bg-white p-6 border border-gray-300 rounded-md shadow-lg">
                        <span className="text-4xl font-bold text-gray-700 cursor-pointer float-right" onClick={handleCloseModal}>&times;</span>
                        <div>
                            {modalImages.map((image, index) => (
                                <img key={index} src={image} alt="" className="inline-block h-full object-contain my-1" />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PhotoGrid;



