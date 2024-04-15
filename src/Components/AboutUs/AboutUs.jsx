const AboutUs = () => {
    const textStyle = {
        WebkitTextStroke: "2px black",
        WebkitTextFillColor: "white",
        fontFamily: "'Knewave', system-ui",
    };

    return (
        <div>
            <div className="relative">
                <img className="opacity-50 w-full h-80 object-cover" src="/aboutus.jpg" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 style={textStyle} className="text-black text-3xl uppercase font-black">
                        About Us
                    </h1>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="py-10 md:py-20 mx-2 md:mx-4 xl:mx-0">
                    <div>
                        <h1 className="animate__animated animate__heartBeat text-center text-2xl md:text-6xl mb-10 md:mb-16">
                            The premier destination <br className="hidden sm:block" /> for luxury estates
                        </h1>
                        <p className="text-center sm:text-xl mb-10">
                            Step into a realm of unparalleled luxury, where opulence <br className="hidden sm:block" /> meets sophistication in every lavish estate.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 border rounded-2xl border-[#54595f] p-12 shadow-2xl">
                            <img className="w-24 h-24" src="/RoyalResidence.png" />
                            <div>
                                <h1 className="text-xl mb-5 font-bold">Royal Residence</h1>
                                <p className="font-thin">Royal Residence: A pinnacle of luxury living, boasting regal opulence, exquisite design, and unparalleled elegance in every detail.</p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 border rounded-2xl border-[#54595f] p-12 shadow-2xl">
                            <img className="w-24 h-24" src="/HeritageHouse.png" />
                            <div>
                                <h1 className="text-xl mb-5 font-bold">Heritage House</h1>
                                <p className="font-thin">Heritage House: A timeless masterpiece, blending historic charm with modern luxury, offering an unparalleled living experience of distinction.</p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 border rounded-2xl border-[#54595f] p-12 shadow-2xl">
                            <img className="w-24 h-24" src="/SerenityMansion.png" />
                            <div>
                                <h1 className="text-xl mb-5 font-bold">Serenity Mansion</h1>
                                <p className="font-thin">Serenity Mansion: An oasis of tranquility and luxury, offering unparalleled elegance, breathtaking views, and a serene retreat for refined living.</p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 border rounded-2xl border-[#54595f] p-12 shadow-2xl">
                            <img className="w-24 h-24" src="/MajesticVilla.png" />
                            <div>
                                <h1 className="text-xl mb-5 font-bold">Majestic Villa</h1>
                                <p className="font-thin">Majestic Villa: A symbol of grandeur and luxury, offering opulent living spaces, stunning vistas, and unrivaled elegance in every detail.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
