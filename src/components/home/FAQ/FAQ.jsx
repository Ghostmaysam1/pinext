import Screen from './components/screen/Screen'

function FAQ() {

    return (
        <div>
            <div className="hidden md:block relative max-h-[90vh] m-auto aspect-video bg-[url('/laptop.svg')] bg-contain bg-center bg-no-repeat">
                <div className="absolute left-[13%] top-[4.8%] w-[74%] h-[82.4%]">
                    <Screen />
                </div>
            </div>
            <div className='md:hidden relative h-[80vh] m-auto aspect-[9/19.5] bg-[url("/mobile.svg")] bg-contain bg-center bg-no-repeat'>
                <div className="absolute left-[4%] top-[3.5%] w-[92.2%] h-[93%] overflow-hidden rounded-4xl">
                    <Screen />
                </div>
            </div>
        </div>
    )
}

export default FAQ
