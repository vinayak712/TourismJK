import { useEffect, useState } from 'react';
import img1 from '../assets/vaishnoDevi.jpeg';
import img2 from '../assets/vD2.jpeg';

function Rpage1() {
    const images = [img1, img2];
    const [index, setI] = useState(0);

    function next() {
        setI((i) => (i === images.length - 1 ? 0 : i + 1));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen w-screen flex flex-col justify-center items-center p-5 bg-black text-white">
            {/* Image Slider */}
            <h1 className='text-4xl text-orange-800'>Mata Vaishno Devi</h1>
            <div className="flex flex-col items-center justify-center p-10 mt-5">
                <div className="w-[800px] h-[420px] flex justify-center shadow-box">
                    <img 
                        className="h-full w-full object-cover transition-all duration-500 ease-in-out" 
                        src={images[index]} 
                        alt="Mata Vaishno Devi" 
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col items-center w-full h-full p-5 text-center space-y-10">
                <h1 className="text-4xl font-bold text-orange-600">Mata Vaishno Devi: The Divine Goddess of Strength and Devotion</h1>

                {/* Introduction & Yatra Section */}
                <div className="w-[80%] shadow-lg p-5 rounded-lg bg-gray-900">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <h2 className="text-2xl font-bold text-green-600">Introduction</h2>
                        <p className="text-lg leading-relaxed">
                            Mata Vaishno Devi is one of the most revered Hindu deities, worshipped as a manifestation of Goddess Durga. 
                            Her sacred shrine, located in the Trikuta Mountains of Jammu and Kashmir, is a major pilgrimage site, 
                            attracting millions of devotees from across the world. The journey to her holy cave, known as the Vaishno Devi Yatra, 
                            is considered a deeply spiritual experience.
                        </p>

                        <h2 className="text-2xl font-bold text-green-600">The Holy Cave and the Yatra</h2>
                        <p className="text-lg leading-relaxed">
                            The sacred Vaishno Devi Temple is situated at an altitude of 5,200 feet, inside a cave where the Goddess is worshipped 
                            in the form of three natural rock formations called Pindis, representing Mahakali, Mahalakshmi, and Mahasaraswati.
                        </p>
                    </div>
                </div>

                {/* Pilgrimage Information */}
                <div className="w-[80%] space-y-6">
                    <h1 className="text-3xl font-bold text-green-600">Pilgrimage Information</h1>

                    {/* Essential Details */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h2 className="text-3xl font-semibold text-orange-500 mb-3">Essential Details</h2>
                        <ul className="text-lg leading-relaxed list-disc list-inside space-y-2">
                            <li><strong>Nearest town:</strong> Katra, J&K</li>
                            <li><strong>Distance:</strong> 12 Km trek</li>
                        </ul>
                    </div>

                    {/* Travel Options */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h2 className="text-3xl font-semibold text-orange-500 mb-3">Travel Options</h2>
                        <ul className="text-lg leading-relaxed list-disc list-inside space-y-2">
                            <li><strong>Transport:</strong> Rail, road, ponies, helicopter</li>
                            <li><strong>Best time:</strong> March–October</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rpage1;
