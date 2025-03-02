
import imag1 from './assets/BahuFort.jpeg'
import imag2 from './assets/Akhnor-Fort.jpg'
import imag3 from './assets/Fort.jpeg'
function Historical() {
    return (
        <>
             
            <div className=' bg-slate-900 p-4 w-screen'>
                <h1 className=' text-5xl text-orange-600 text-center p-4'>Culture &  <span className='text-white'>Heritage </span>  <span className='text-green-600'>of J&K</span> </h1>
            <div className="flex  items-center justify-center p-4 ">
           
           <div className="   bg-black   p-6  w-5xl h-auto shadow-box">
               
               <h1 className="text-center text-4xl text-orange-600  mb-4 ">Amar Mahal Palace</h1>

               <div className=" flex text-center  flex-col md:flex-row md:items-start md:text-left">
               <p className="text-white leading-relaxed p-4 pt-4 text-lg  ">
           Amar Mahal Palace is the architectural gem located on the National Highway towards Srinagar. Built like a French Chateau on a hill overlooking the river Tawi, is a beautiful palace of red sand stone which stands amidst most picturesque horizons of Jammu. Once the residential palace of Raja Amar Singh, the palace has been converted into a museum and is looked after by Hari-Tara Charitable Trust. The museum has the golden throne on which Maharaja used to sit, which is made up of 120 kg pure gold. The museum has a gallery of paintings and a library in which about 25,000 books on various subjects and disciplines have been presente
           </p>
           <img className="h-[300px] min-w-[400px]" src={imag1} alt="image" />
           </div>
           </div>
       </div>

        <div className="flex  items-center justify-center p-4 ">
           <div className="   bg-black   p-6  w-5xl h-auto  shadow-box">
               
               <h1 className="text-center text-4xl text-orange-600  mb-4 ">Akhnoor Fort</h1>

               <div className=" flex text-center  flex-col md:flex-row md:text-left md:items-start">
               <p className="text-white leading-relaxed p-4 pt-4 text-lg overflow-hidden">
               The Fort was built during the early 19th century and commands a towering view along the right bank of the Chenab. The present fort was probably started in 1762 AD at the behest of Raja Tegh Singh, as an autonomous principle state. A devastating famine is said to have broken in the country during this time. In order to provide work to his famishing people Raj Tegh Singh started the construction of Akhnoor Fort and Palace on banks of the Chenab River. He supplied food to the workers for 2 years and thus saved the principality His son Alam Singh completed the Akhnoor fort in 1802. On the eastern side, there are steps leading down to the River Chenab. Though constructed in the 18th century, most of the steps are in a good state of preservation. The ghat served as the important spot for performance of religious sites by the people of the region. The turrets or Burj are still intact is called the Kishore Singh Burj after Maharaja Gulab Singh’s father who was a close associate of Guru Gobind Singh the 10th Sikh Guru. There are traces of paintings on the walls of the rooms of the fort.
           </p>
           <img className="h-[400px] min-w-[400px] md:w-[700px]" src={imag2} alt="image" />
           </div>
           </div>
       </div>
       
       <div className="flex   items-center justify-center p-4 ">
           <div className="  bg-black  p-6  w-5xl h-auto  shadow-box">
               
               <h1 className="text-center text-4xl text-orange-600  mb-4 ">Bahu Fort</h1>

               <div className=" flex text-center  flex-col md:flex-row md:text-left md:items-start">
               <p className="text-white leading-relaxed p-4 pt-4 text-lg overflow-hidden">
               The ancient Bahu Fort in Jammu is believed to be originally built by Raja Bahu Lochan about 3,000 years ago. It was refurbished by the Dogra rulers in the 19th century. The fort is a religious place and within its precincts is a temple dedicated to the Hindu goddess Kali, the presiding deity of Jammu. The temple is known locally as the “Bawey Wali Mata temple”. Just beneath the fort is the terraced Bagh-e-Bahu Garden laid in the style of Mughal gardens which affords panoramic view of the Jammu city and underground fish aquarium
           </p>
           <img className="h-[400px] min-w-[400px] md:w-[700px]" src={imag3} alt="image" />
           </div>
           </div>
       </div>
       
         </div>
        </>
    );
}
export default Historical; 