import imgK from '../assets/kladi.jpeg'
function Kaladi() {
    return (
        <>
            <div className='flex items-center flex-col  bg-black w-screen min-h-screen p-4'>
                <h1 className='text-orange-600 p-4 text-4xl font-bold'>Kaladi </h1>
                <div className='w-[800px] h-[400px] shadowimag'>
                    <img src={imgK} alt="" className='w-full h-full object-cover'  />
                </div>
                <div className='text-white flex items-center flex-col w-[900px] shadowContent p-4 m-4 '>
                    <h1 className='text-2xl p-4 text-green-600 font-semibold'>Kalari or Kaladi</h1>
                    <p className='text-center leading-relaxed text-lg tracking-wide'>Kaladi is an Indian traditional ripened cheese product.This is a culinary dairy product invented by the nomadic tribal Gujjars centuries ago. It was crafted to address a specific need for the preservation of milk in a solid form during the sweltering summer months when these tribes venture into the hills with their livestock during bi-annual seasonal tribal migrations.Gujjars use this dairy food during the summer months to meet their nutritional requirements, and they sell it in markets in both divisions of Jammu and Kashmir to support their livelihood.</p>
                 
                    <p className='text-center leading-relaxed text-lg mt-4'>It is indigenous to Ramnagar in the Udhampur District of the Jammu division, within the union territory of Jammu and Kashmir, India and a cherished food snack among ethnic Dogras.It is a very dense cheese that is usually sautéd in its own fat and salted while serving. Kalaris are usually made from cow's or buffalo's milk, though kalaris made from goat's milk are also available, and have a whitish color. Traditionally Kalaris are made from raw (uncooked) full fat milk that is separated using soured milk. The solidified part is packed in donas (small bowls made of leaves) and sun dried. The excess liquid drips down from the semi-porous donas and rest of the moisture is lost by sun drying. As the ambient temperature is low and the sun is strong in the Shivalilk mountains,the Kalari becomes dry from outside yet retains moisture from inside. Some times fungus grows on this and gives it a unique flavor.</p>
               </div>
                </div>
        </>
    );
}
export default Kaladi;