import Backgroundimg from './assets/reB.jpeg';
import { Link } from 'react-router-dom';

function Religion() {
    return (
        <div className="relative h-screen w-screen">
            {/* Background Image */}
            <div className="absolute inset-0  bg-slate-800">
                <img 
                    className="w-full h-full object-cover "
                    src={Backgroundimg} 
                    alt="Background"
                />
                <div className="absolute inset-0  bg-slate-950"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
                <h1 className="text-5xl font-extrabold mb-10 drop-shadow-lg  animate-pulse text-orange-900">
                   🕉️ Hindu Pilgrimage Sites🕉️ 
                </h1>
                <ul className="flex justify-between gap-20 mt-10">
                    <li>
                        <Link to="/rpage1">
                            <button className="px-6 py-3 text-lg font-semibold bg-white text-black rounded-lg shadow-md hover:bg-orange-600 transition">
                                Vaishno Devi
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/rpage2">
                            <button className="px-6 py-3 text-lg font-semibold bg-white text-black rounded-lg shadow-md hover:bg-orange-600 transition">
                                Amarnath
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/rpage3">
                            <button className="px-6 py-3 text-lg font-semibold bg-white text-black rounded-lg shadow-md  hover:bg-orange-600 transition">
                                Bawa Wali Mata
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Religion;
