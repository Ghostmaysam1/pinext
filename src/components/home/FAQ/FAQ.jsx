import Screen from './components/screen/Screen'

function FAQ() {

    return (
        <div className="h-[1200px]">
            <div className="laptop-frame relative max-w-[1000px] m-auto aspect-video bg-[url('/laptop.svg')] bg-contain bg-center bg-no-repeat">
                <div className="absolute left-[13%] top-[4.8%] w-[74%] h-[82.4%]">
                    <Screen />
                </div>
            </div>
        </div>
    )
}

export default FAQ
