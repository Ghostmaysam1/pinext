function AudienceTabs({tabs, onClick, selectedTab}) {

    // console.log(selectedTab)

    function cls(tabName) {
        return selectedTab == tabName ? 'bg-secondary-200 rounded-full border' : '';
    }

    console.log(cls('برای همه'))
    return (
        <div className="h-full flex flex-col gap-5 px-1 py-2 items-center">
            {
                tabs.map((tab)=>(
                    <div onClick={()=>onClick(tab.name)} key={tab.name} className={'px-6 py-2 cursor-pointer ' + cls(tab.name)}>
                        {tab.name}
                    </div>
                ))
            }
        </div>
    )
}

export default AudienceTabs