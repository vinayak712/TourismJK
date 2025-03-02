import imgR from '../assets/rajma.jpg'
function Rajma() {
    return (
        <>
            <div className='flex items-center flex-col  bg-black w-screen min-h-screen p-4'>
                <h1 className='text-orange-600 p-4 text-4xl font-bold'>Rajma Chawal</h1>
                <div className='w-[800px] h-[400px] shadowimag'>
                    <img src={imgR} alt="" className='w-full h-full object-cover'  />
                </div>
                <div className='text-white flex items-center flex-col w-[900px] shadowContent p-4 m-4 '>
                    <h1 className='text-2xl p-4 text-green-600 font-semibold'>Rajma Chawal in Jammu: A Culinary Delight</h1>
                    <p className='text-center leading-relaxed text-lg tracking-wide'>Rajma Chawal, a cherished dish in Indian cuisine, takes on a special significance in Jammu , where its rich flavors and comforting nature make it a beloved part of the local diet. This classic combination of kidney beans (rajma) and steamed rice (chawal) is more than just a meal—it's a cultural experience that reflects the region's deep-rooted traditions and culinary heritage</p>
                    <h1 className='text-2xl p-4 text-green-600 font-semibold mt-4'>The Essence of Rajma Chawal</h1>
                    <p className='text-center leading-relaxed text-lg'>Rajma Chawal is a simple yet incredibly satisfying dish that consists of a spicy, hearty kidney bean curry served over fluffy steamed rice. In Jammu , this dish is often prepared with a unique blend of spices and cooking techniques that highlight the region's distinctive flavors and culinary practices.</p>
               </div>
                </div>
        </>
    );
}
export default Rajma;