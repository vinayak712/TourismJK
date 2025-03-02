import imgP from '../assets/patisa.jpeg'
function Pitsa() {
    return (
        <>
            <div className='flex items-center flex-col  bg-black w-screen min-h-screen p-4'>
                <h1 className='text-orange-600 p-4 text-4xl font-bold'>Patisa</h1>
                <div className='w-[800px] h-[400px] shadowimag'>
                    <img src={imgP} alt="" className='w-full h-full object-cover'  />
                </div>
                <div className='text-white flex items-center flex-col w-[900px] shadowContent p-4 m-4 '>
                <h1 className='text-2xl p-4 text-green-600 font-semibold'>Patisa: The Iconic Sweet of Jammu</h1>
<p className='text-center leading-relaxed text-lg tracking-wide'>
    Patisa, a beloved traditional sweet of Jammu, is known for its delicate, flaky texture and rich, buttery taste. This melt-in-the-mouth delicacy is crafted using gram flour, ghee, and sugar, resulting in a crisp yet soft texture that makes it irresistible. Popular across the region, Patisa holds a special place in festive celebrations, religious offerings, and as a cherished gift for loved ones.
</p>
<h1 className='text-2xl p-4 text-green-600 font-semibold mt-4'>The Essence of Patisa</h1>
<p className='text-center leading-relaxed text-lg'>
    The making of Patisa requires precision and patience, as the sugar syrup and besan (gram flour) mixture must be cooked to the perfect consistency. The use of pure desi ghee enhances its aroma and flavor, while nuts like almonds and pistachios add a delightful crunch. Originating from the kitchens of Jammu, Patisa continues to be a symbol of the region’s rich culinary heritage, enjoyed by generations.
</p>

               </div>
                </div>
        </>
    );
}
export default Pitsa;