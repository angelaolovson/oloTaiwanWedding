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
        <div className='flex items-center justify-center text-center mb-5 md:p-2 md:text-xl cursor-pointer' >
            <div className='relative w-full max-w-[100vw] overflow-hidden' onClick={handleOpenModal}>
                <img src={mainImage} alt="" className="my-image w-full h-auto md:w-[40vw] md:h-[35vh] object-cover" style={{ objectPosition: 'center 20%' }}/>
                <div className="absolute bottom-7 left-0 w-full bg-white bg-opacity-50 text-center" >
                    <p className='hover:text-gray-700 inline-block py-2'>{title}</p>
                </div>
            </div>
            
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 z-50 overflow-y-auto">
                    <div className="bg-white p-6 border border-gray-300 rounded-md shadow-lg">
                        <span className="text-4xl font-bold text-gray-700 cursor-pointer float-right" onClick={handleCloseModal}>&times;</span>
                        <div>
                            {modalImages.map((image, index) => (
                                <img key={index} src={image} alt="" className="my-1" />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PhotoGrid;



