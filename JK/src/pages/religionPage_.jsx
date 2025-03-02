import { useEffect, useState } from 'react';
import img1 from '../assets/Shiv1.jpeg';
import img2 from '../assets/Shiv2.jpeg';

function Rpage2() {
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
            <h1 className='text-4xl text-orange-800'>🔱 Amarnath</h1>
            <div className="flex flex-col items-center justify-center p-10 mt-5">
                <div className="w-[800px] h-[420px] flex justify-center">
                    <img 
                        className="h-full w-full object-cover   shadow-box" 
                        src={images[index]} 
                        alt="" 
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col items-center w-full h-full p-5 text-center space-y-10">
                <h1 className="text-4xl font-bold text-orange-600">The Sacred Cave of Lord Shiva</h1>

                {/* Introduction & Yatra Section */}
                <div className="w-[80%] shadow-lg p-5 rounded-lg bg-gray-900">
                    <div className="max-w-3xl mx-auto space-y-6">
                    <p className="text-lg leading-loose">
    <strong>Amarnath</strong> is one of the holiest pilgrimage sites in Hinduism, dedicated to 
    <strong>Lord Shiva</strong>. Located in the <strong>Himalayan mountains</strong> of Jammu and Kashmir, 
    the Amarnath Cave is famous for its <strong>naturally forming Ice Shiva Lingam</strong>, which waxes and wanes 
    with the moon cycles.
</p>

                        <p className="text-lg leading-relaxed">
Every year, thousands of devotees undertake the Amarnath Yatra, a spiritually enriching and physically demanding journey through snow-covered peaks and breathtaking landscapes.
                        </p>

                        <h2 className="text-2xl font-bold text-green-600">🏔️ The Holy Cave & Ice Lingam Formation</h2>
                        <ul className="text-lg leading-relaxed list-disc list-inside space-y-2">
                            <li>The Ice Lingam, a naturally occurring ice stalagmite, forms inside the cave due to water droplets freezing in sub-zero temperatures</li>
                            <li>The Lingam grows during the summer months (Shravana, July–August) and shrinks as temperatures rise.</li>
                            <li>Alongside the Shiva Lingam, two smaller ice formations are believed to represent Maa Parvati and Lord Ganesha.</li>
                        </ul>
                    </div>
                </div>

                {/* Pilgrimage Information */}
                <div className="w-[80%] space-y-6">
                    <h1 className="text-3xl font-bold text-green-600"> 📜 Pilgrimage Information</h1>

                    {/* Essential Details */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h2 className="text-3xl font-semibold text-orange-500 mb-3">Essential Details</h2>
                        <ul className="text-lg leading-relaxed list-inside space-y-2 list-none">
                          <li> <strong> 📍Nearest Town:</strong>Pahalgam / Baltal, J&K </li>
                          <li> <strong>📏 Distance:</strong>14–48 km trek (depending on route) </li>
                          <li> <strong>🕉️ Best Time to Visit:</strong>July–August (Shravan month) </li>
                          <li> <strong>🌡️ Altitude</strong>3,888 meters (12,756 feet) </li>
                        </ul>
                    </div>

                    {/* Travel Options */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h2 className="text-3xl font-semibold text-orange-500 mb-3"> 🛤️ Travel Options</h2>
                        <ul className="text-lg leading-relaxed list-inside space-y-2  list-none">
                          <li> <strong>🛩️ Nearest Airport</strong>  Srinagar International Airport</li>
                          <li> <strong>🚂 Nearest Railway Station:</strong> Jammu Tawi (265 km from Pahalgam)</li>
                            <li> <strong>🚕 Transport Options:</strong>
                            </li>
                            <ul className="ml-5 list-none">
        <li>Trekking 🚶</li>
        <li>Ponies 🐎</li>
        <li>Palkis (carried palanquins)</li>
        <li>Helicopter services 🚁 (from Baltal & Pahalgam)</li>
    </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rpage2;
