// import imagR from './assets/religion.webp'
import { Link } from "react-router-dom"; 
import imagR from'./assets/jkl.jpg'
import imagA from './assets/advanture.jpg'
import imagH from'./assets/historical.png'
function Place() {
    return (
        <div className="bg-black min-w-screen p-4 border-t-5 border-white ">
            <h1 className="text-6xl text-center text-orange-500 font-bold p-7">Places <span className="text-white ">To</span> <span className="text-green-400">Visit</span></h1>
            <div>
                <div className='flex
            justify-center items-center p-5'>
                    
                    <div className='p-5 w-[500px] items-center text-center Shadow ' >

                    <Link to="/religion">
                        <button className='max-w-[300px] '><img src={imagR} alt="" /></button>
                        </Link>

                        <p className='text-white text-lg font-bold text-center'>Hinduism in Jammu and Kashmir is defined by sacred temples like Vaishno Devi and Amarnath. Festivals like Navratri and Mahashivratri showcase its rich spiritual heritage.</p>
                   </div>
                   <div className='p-4 w-[500px] items-center text-center Shadow ' >
                        <Link to="/culture">
                        <button className='max-w-[300px] '><img src={imagH} alt="" /></button>
                        </Link>
                        <p className='text-white text-lg font-bold text-center'>Jammu and Kashmir boasts historical sites like the ancient Mughal Gardens and the iconic Jama Masjid in Srinagar. Explore the ancient city of Poonch and the historic Bahu Fort in Jammu.</p>
                   </div>
                    <div className='p-4 w-[500px] items-center text-center Shadow ' >
                        <Link to="/advanture">
                        <button className='max-w-[300px] '><img src={imagA} alt="" /></button>
                        </Link>
                        <p className='text-white text-lg font-bold text-center'>Jammu and Kashmir offers trekking, skiing, and scenic views at Dal Lake and Mughal Gardens. Explore local culture through cuisine and historical sites.</p>
                   </div>
                   
                </div>
          </div>
        </div>
    ); 
}
export default Place;