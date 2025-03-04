import React, {useState} from 'react'
import Header from '../Components/Header'
import ImageGaDa from '../Data/ImageGaDa'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'





const ImageGallary = () => {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=' py-[50px] lg:py-[100px]'>
      {/* header section  */}
      <Header stylex={"text-black "}>Our clients love working with us</Header>
      {/* main container  */}
      <div className='py-10 lg:py-20'>
        <div className='w-[95%] relative mx-auto py-5 flex-wrap flex items-center justify-between gap-6'>
            {ImageGaDa.map((item, index)=>(
                <div className='w-[calc(18%-2px)]' key={index} onClick={()=>{setPhotoIndex(index); setIsOpen(true);}}>
                    <img src={item.image} alt="" className='w-full' />
                </div>
            ))}
            {isOpen && (
        <Lightbox
          mainSrc={ImageGaDa[photoIndex].image}
          nextSrc={ImageGaDa[(photoIndex + 1) % ImageGaDa.length].image}
          prevSrc={ImageGaDa[(photoIndex + ImageGaDa.length - 1) % ImageGaDa.length].image}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + ImageGaDa.length - 1) % ImageGaDa.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % ImageGaDa.length)}
        />
      )}
        </div>
      </div>
    </div>
  )
}

export default ImageGallary
