import { useRef, useState } from 'react'
import voiceIcon from '/voice.svg'

function ProjectBox({description, image}) {
    const imageRef = useRef(null);
    const [boxWidth, setBoxWidth] = useState(0);
    
    const handleImageLoad = () => {
        if (imageRef.current) setBoxWidth(imageRef.current.offsetWidth);
      };
    
    return (
        <div className="h-[390px] flex flex-col justify-between overflow-hidden rounded-[12px] relative bg-background" style={{'width': boxWidth ? `${boxWidth}px` : 'unset'}}>
            <div className='h-full'>
                <img src={image} onLoad={handleImageLoad} className='h-full bg-center rounded-t-[12px]' alt={description} />
            </div>
            <div className="h-[55px] min-h-[55px] w-full border rounded-b-[12px] bg-primary-100 border-[#5E5E66] absolute bottom-0 left-0 flex justify-center items-center">
                <p>{description}</p>
                <button className="absolute font-iransans cursor-pointer right-6 flex justify-around items-center gap-1 w-fit border border-[#5E5E66] rounded-full px-5 py-1">صدا <span><img src={voiceIcon} alt="" /></span></button>
            </div>
        </div>
    )
}

export default ProjectBox