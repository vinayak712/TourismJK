import imgW from '../assets/wazwan.jpg'
function Wazan() {
    return (
        <>
            <div className='flex items-center flex-col  bg-black w-screen min-h-screen p-4'>
                <h1 className='text-orange-600 p-4 text-4xl font-bold'>Wazan</h1>
                <div className='w-[800px] h-[400px] shadowimag'>
                    <img src={imgW} alt="" className='w-full h-full object-cover'  />
                </div>
                <div className='text-white flex items-center flex-col w-[900px] shadowContent p-4 m-4 '>
                    <h1 className='text-2xl p-4 text-green-600 font-semibold'>Wazwan: The Culinary Crown Jewel of Kashmir</h1>
                    <p className='text-center leading-relaxed text-lg tracking-wide'>Wazwan is a traditional Kashmiri feast renowned for its rich, complex flavors and its role as a cornerstone of Kashmiri cuisine. This elaborate and ceremonial spread represents the epitome of Kashmiri hospitality and culinary artistry, showcasing a diverse array of dishes that reflect the region's cultural heritage and culinary sophistication.</p>
                    <h1 className='text-2xl p-4 text-green-600 font-semibold mt-4'>The Essence of Wazwan</h1>
                    <p className='text-center leading-relaxed text-lg'>Wazwan is a multi-course meal typically served during special occasions such as weddings, religious festivals, and major celebrations. The term "Wazwan" is derived from the Persian word "waz," which means "chef" or "cook." The term reflects the significant role of the skilled chefs, or "wazas," who are dedicated to crafting these intricate and flavorful dishes.</p>
               </div>
                </div>
        </>
    );
}
export default Wazan;