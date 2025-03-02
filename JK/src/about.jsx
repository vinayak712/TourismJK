import img1 from './assets/about.jpg';
import img2 from './assets/about1.jpg';
import img3 from './assets/about2.jpg';
import img4 from './assets/about3.jpg';
import img5 from './assets/about4.jpeg';
import img6 from './assets/about5.jpeg';
import { useState, useEffect } from 'react';

function About() {
    const images = [img1, img2, img3, img4, img5, img6];
    const [index, setI] = useState(0);

    function next() {
        setI((p) => (p === images.length - 1 ? 0 : p + 1));
    }

    function prev() {
        setI((p) => (p === 0 ? images.length - 1 : p - 1));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 5000);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <>
            <div className='w-screen min-h-screen flex flex-col items-center justify-center bg-black p-5'>
            <div className='w-full flex flex-col items-center justify-center text-center text-white   mt-5 mb-10'>
                    <h1 className='text-3xl mb-1 text-orange-600 font-bold p-4'>About Jammu & Kashmir</h1>
                    <p className='leading-relaxed text-lg'>Nestled in northern India, Jammu & Kashmir is a breathtaking destination surrounded by the majestic Himalayas and the Pir Panjal range. This region is renowned for its scenic beauty, rich cultural heritage, and exciting adventure tourism opportunities. Whether you seek serene landscapes, spiritual experiences, or thrilling adventures, J&K offers something for every traveler.</p>
                </div>
                <div className='flex items-center flex-col justify-center p-10 shadowimag mb-5'>
                    <div className='w-[800px] h-[420px] relative'>
                        <img src={images[index]} alt="" className='w-full h-full object-cover' />
                        <button onClick={prev} className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white text-4xl px-4 py-2 rounded-full transition duration-300'>❮</button>
                        <button onClick={next} className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white text-4xl px-4 py-2 rounded-full transition duration-300'>❯</button>
                    </div>
                </div>
             
                <div className='w-[900px] flex flex-col items-center justify-center text-center text-white shadowContent mt-5 '>
                    <h1 className='text-3xl mb-4  text-orange-600 font-bold'>Regional Highlights</h1>
                    <div className='mb-4'>
                        <h2 className='text-3xl mb-2  text-green-600 font-semibold'>Kashmir Valley</h2>
                        <p className='text-lg'>Famous for its pristine Dal Lake, the world-class ski resort of Gulmarg, the serene valleys of Pahalgam, and the stunning landscapes of Sonmarg. The valley offers a perfect blend of natural beauty and cultural experience.</p>
                    </div>
                    <div>
                        <h2 className='text-3xl mb-2 text-green-600 font-semibold'>Jammu</h2>
                        <p className='text-lg'>Known as the 'City of Temples', Jammu is home to numerous historical and spiritual sites, with the Vaishno Devi temple being one of the most significant pilgrim destinations in India.</p>
                    </div>
                </div>
                <div className='w-full flex flex-col items-center justify-center text-center text-white shadowC  pt-5 mt-5'>
                    <h1 className='text-3xl mb-4  text-orange-600 font-bold'>Visitor Information</h1>
                    <div className='mb-4'>
                        <h2 className='text-3xl mb-2  text-green-600 font-semibold'>Best Time to Visit:</h2>
                        <ul className="text-lg text-gray-300 list-disc list-inside mt-2">
                        <li>🌸 Spring & Summer (March - June): Perfect for general sightseeing and outdoor activities.</li>
                        <li>🍂 Autumn (September - November): Ideal for witnessing the golden Chinar trees.</li>
                        <li>❄️ Winter (December - February): Best for snow activities and winter sports.</li>
                       </ul>
                    </div>
                    <div>
                        <h2 className='text-3xl mb-2 text-green-600  font-semibold '>How to Reach:</h2>
                        <ul className="text-lg text-gray-300 list-disc list-inside mt-2">
                        <li>✈️ By Air: Direct flights to Srinagar, Jammu, and Leh airports.</li>
                        <li>🚆 By Train: Connect through Jammu Tawi railway station.</li>
                        <li>🚗 By Road: Well-connected national highways from major cities.</li>
                       </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;

