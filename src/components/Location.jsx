const Location = () => {
    return (
        <div data-aos="fade-right" className='px-2'>
            <h1 className='text-center font-black lg:text-5xl md:text-4xl text-2xl pt-8 pb-4  mb-2'>Our Location</h1>
            <iframe className="map w-full h-[70vh]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.1428366777636!2d90.25510027413996!3d23.84979208495566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebd3d3d1e68f%3A0xeb0384669f684dbe!2sSavar%20City%20Center!5e1!3m2!1sen!2sin!4v1697624935218!5m2!1sen!2sin" allowFullScreen="" loading="lazy"></iframe>
        </div>
    );
};

export default Location;