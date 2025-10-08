import left from '/left.svg';
import right from '/right.svg';

function QuoteBanner() {
    return (
        <div className='h-[260px] flex justify-center md:justify-between items-center'>
            <img src={left} alt="" className='w-[30%] hidden md:block' />
            <div className='flex flex-col items-center'>
                <h1>با تخصص ما</h1>
                <h2 className='text-[#5E5E66]'>برند شما میدرخشد</h2>
            </div>
            <img src={right} alt="" className='w-[30%] hidden md:block' />
        </div>
    )
}

export default QuoteBanner