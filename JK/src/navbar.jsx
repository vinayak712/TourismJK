
import { Link } from'react-router-dom'
function Navbar() {
    return (
        <>
            <div className="bg-black  ">
                <nav className="   top-0 left-0 w-screen  bg-black   z-20">
                    <div className=" 
                    max-h-[80px]  flex justify-between  p-4 w-full">
                      
                    <h1 className="text-orange-600 text-2xl font-bold ">JAMMU <span className="text-white">& </span><span className="text-green-600">KASHMIR</span></h1>
               
                    <ul className="flex justify-end gap-6 text-lg text-white  p-4 ">
                            <li>
                                <Link to="/" className="relative px-4 py-2 transition duration-300 hover:text-orange-500">
                                <button>Home</button></Link>
                        </li>
                            <li>
                            <Link to="/" className="relative px-4 py-2 transition duration-300 hover:text-orange-500">
                            <button>Explore</button></Link>
                        </li>
                            <li>
                                <Link to="/about" className="relative px-4 py-2 transition duration-300 hover:text-orange-500">
                                <button>About</button>
                                </Link>
                        </li>
                            <li>
                                <Link to="/advanture" className="relative px-4 py-2 transition duration-300 hover:text-orange-500">
                                    <button>
                                    Activites
                                </button>
                                </Link>
                        </li>
                        </ul>
                        </div>
                </nav>
                
             
            </div>
           
        </>
    );
}
export default Navbar;