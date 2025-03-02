import { useEffect, useState } from 'react';
import img1 from '../assets/Bawa1.jpg';
import img2 from '../assets/Bawa2.jpg';

function Rpage3() {
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
            <h1 className='text-4xl text-orange-800'>🔱 Bawa Wali Mata</h1>
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
                <h1 className="text-4xl font-bold text-orange-600">The Guardian Goddess of Jammu</h1>

                {/* Introduction & Yatra Section */}
                <h2 className="text-2xl font-bold text-green-600">Introduction</h2>
                <div className="w-[80%] shadow-lg p-5 rounded-lg bg-gray-900">
                    <div className="max-w-3xl mx-auto space-y-6">
                    <p className="text-lg leading-loose">
                    Bawa Wali Mata is revered in the Jammu region as a benevolent and protective deity. Considered a guardian and nurturer, she is worshipped by locals and pilgrims alike, who seek her blessings for health, prosperity, and spiritual guidance. Her shrine stands as a testament to her divine grace and the deep-rooted cultural heritage of Jammu.
</p>

                        <h2 className="text-2xl font-bold text-green-600">The Legend of Bawa Wali Mat</h2>
                        <p className="text-lg leading-loose">
                        Local folklore tells of a time when the people of Jammu faced great hardships and uncertainty. In response, Bawa Wali Mata is believed to have emerged as a divine protector, guiding communities through difficult times. According to the legend, her compassionate presence and unwavering strength not only safeguarded her devotees but also instilled hope and resilience in the hearts of those who worship her. Over time, her miraculous deeds have become part of the region’s rich tapestry of faith and tradition.
</p>

                    </div>
                </div>

                {/* Pilgrimage Information */}
                <div className="w-[80%] space-y-6">
                    <h1 className="text-3xl font-bold text-green-600"> 📜 Pilgrimage Information</h1>

                    {/* Essential Details */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h2 className="text-3xl font-semibold text-orange-500 mb-3">Essential Details</h2>
                        <ul className="text-lg leading-relaxed list-inside space-y-2 list-none">
                          <li> <strong> 📍Nearest Town:</strong>Jammu</li>
                          <li> <strong>Rituals:</strong> Devotees engage in daily prayers, aartis, and bhajans at the shrine, seeking her blessings for personal well-being and communal prosperit </li>
                        </ul>
                    </div>

                    {/* Travel Options */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h2 className="text-3xl font-semibold text-orange-500 mb-3"> 🛤️ Travel Options</h2>
                        <ul className="text-lg leading-relaxed list-inside space-y-2  list-none">
                          <li> <strong> 🛣️ Transport</strong> Jammu is accessible by rail and road, with local transit options available for reaching the shrine.</li>
                            <li>
                                <strong>Best Time to Visit: </strong>
                                While the shrine welcomes visitors year-round, special festivals and local celebrations—often held during auspicious times—make for a particularly enriching pilgrimage experience.
                         </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rpage3;
