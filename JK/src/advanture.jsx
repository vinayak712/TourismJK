import React, { useState } from 'react'
import img1 from './assets/Bike.jpeg';
import img2 from './assets/Boat.jpeg';
// import img3 from './assets/Horse.jpeg';
import img4 from './assets/Rafting.jpeg';
import img5 from './assets/Trekking .jpeg'
import img6 from './assets/Yoga.jpeg';
const images = [img1, img2, img4, img5, img6];
function Advanture() {
    const [currentI, setI] = useState(0); 
    function next() {
        setI((p) => (p === images.length - 1 ? 0 : p + 1));
    };
    function prev() {
        setI((p) => (p === 0 ? images.length - 1 : p - 1));
    };
    return (
      <>
    
        <h1 className='text-center text-4xl  bg-black  font-bold  text-orange-500 w-screen'>Adventure <span className='text-white'>To Do In</span> <span className='text-green-500'> Jammu and Kashmir</span></h1>
      <div className='w-screen bg-black flex items-center justify-center pt-0 h-screen'>
            <img src={images[currentI]} className=' min-w-[700px] max-h-[600px] object-cover ' alt="" />
           
            <button onClick={prev} className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white text-4xl px-4 py-2 rounded-full transition duration-300'>❮</button>
                    
                    <button onClick={next} className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white text-4xl px-4 py-2 rounded-full transition duration-300'>❯</button>
           </div>

        
      </>

    );

}
export default Advanture;