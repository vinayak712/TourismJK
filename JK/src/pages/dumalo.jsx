import imgD from '../assets/dumalo.jpg'
function Dumalo() {
    return (
        <>
            <div className='flex items-center flex-col  bg-black w-screen min-h-screen p-4 '>
                <h1 className='text-orange-600 p-4 text-4xl font-bold'>Dum Allo</h1>
                <div className='w-[800px] h-[400px] shadowimag'>
                    <img src={imgD} alt="" className='w-full h-full object-cover'  />
                </div>
                <div className='text-white flex items-center flex-col w-[900px] shadowContent p-4 m-4 '>
                <h1 className='text-2xl p-4 text-green-600 font-semibold'>Dum Aloo: The Flavorsome Delight of Jammu</h1>
<p className='text-center leading-relaxed text-lg tracking-wide'>
    Dum Aloo is a beloved dish from Jammu, known for its rich, aromatic gravy and tender potatoes. This flavorful delicacy is a staple of Dogra cuisine, featuring deep-fried baby potatoes simmered in a luscious, spice-infused yogurt-based curry. With its perfect blend of warmth and spice, Dum Aloo is a true representation of Jammu’s vibrant culinary traditions.
</p>
<h1 className='text-2xl p-4 text-green-600 font-semibold mt-4'>The Essence of Dum Aloo</h1>
<p className='text-center leading-relaxed text-lg'>
    Dum Aloo holds a special place in the hearts of food lovers across Jammu and beyond. The dish is traditionally cooked using the slow-cooking (dum) method, which allows the potatoes to absorb the rich flavors of the gravy. The use of locally sourced spices like fennel, dry ginger, and Kashmiri red chili powder gives Dum Aloo its distinctive taste and vibrant color.
</p>

               </div>
                </div>
        </>
    );
}
export default Dumalo;