import React from 'react'
import BannerImg from '../../assets/banner.png'

const Banner = () => {
  return (
    // <div className='md:flex py-16'>
    //     <div className='w-1/2 flex flex-col gap-4'>
    //         <h1 className='font-semibold text-xl'>New Releases This Week</h1>
    //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi fugit sapiente quisquam fuga, voluptas explicabo, quasi similique vero animi harum recusandae! Error repudiandae, voluptatum eos ipsam sint molestiae accusamus ipsum.</p>
    //         <button className='bg-primary text-white px-6 py-1 rounded-lg w-40'>
    //             Subscribe
    //         </button>
    //     </div>
    //     <div>
    //         <img src={BannerImg} alt="" />
    //     </div>
    // </div>
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12 '>
        {/* bannerImage */}
           <div  className='md:w-1/2 w-full flex items-center md:justify-end '>
            <img src={BannerImg} alt="" />
        </div>
        {/* bannerContent */}
        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>New Releases This Week</h1>
            <p className='mb-10 '>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>

            <button className='btn-primary text-white'>Subscribe</button>
        </div>
     
    </div>
  )
}

export default Banner
