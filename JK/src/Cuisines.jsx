import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import img1 from './assets/dumalo.jpg'
import img2 from './assets/wazwan.jpg'
import img3 from './assets/rajma.jpg'
import img4 from './assets/kladi.jpeg'
import img5 from'./assets/patisa.jpeg'

function Cuisines() {
    const images = [{ img: img1, link:'/dumalo'},
        { img: img2, link:'/wazan'},
        { img: img3, link:'/rajma'},
        { img: img4, link:'/kladi'},
        { img: img5, link:'/patisa'},
       
    ];
    const navigate = useNavigate();
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
        return () => {
            clearInterval(interval);
        }
    }, [index]);
    return (
        <>
            <div className='flex items-center  flex-col w-screen h-screen bg-black p-5 '>
                <h1 className='text-5xl text-orange-700 font-bold mt-5' >Cuisines</h1>
                <div className='w-[900px] h-[450px] relative mt-5 shadowimag bg-black mb-5 flex items-center justify-center'>
                    <img src={images[index].img} alt="" className='w-full h-full object-cover' onClick={() => navigate(images[index].link)} />
                    
                    <button onClick={prev} className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white text-4xl px-4 py-2 rounded-full transition duration-300'>❮</button>
                    
                        <button onClick={next} className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white text-4xl px-4 py-2 rounded-full transition duration-300'>❯</button>
                </div>
                <h1 className='text-green-600 font-bold text-4xl mt-5 text-center animate-pulse'>Use Buttons To navigate <span className='text-orange-600'>And click</span> on image to see details</h1>
        </div>
        </>
    );

    
}
export default Cuisines;