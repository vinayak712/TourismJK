import image from './assets/jammu.jpg'
console.log(image);
function Hero() {
    return (
    
        <div className='w-screen h-[800px] relative
            '>
            <div className='w-full h-full bg-cover bg-center ' style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute inset-0 flex justify-center items-center  bg-opacity-50" >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center animate-pulse">
                    Welcome to <span className="text-orange-600">JAMMU</span> & <span className="text-green-600">KASHMIR</span>
                </h1>
            </div>
            </div>
     </div>
            
    );
}
export default Hero;