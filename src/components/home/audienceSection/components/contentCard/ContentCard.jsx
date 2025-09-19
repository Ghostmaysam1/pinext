function ContentCard({tabs, selectedTab}) {
    const text = tabs.filter(val=>{
        return val.name == selectedTab
    })[0].text
    return (
        <div dir="rtl" style={{boxShadow: '0 0 27px #00000020'}} className="w-180 p-8 text-justify h-76 rounded-xl bg-background">
            {text}
        </div>
    )
}

export default ContentCard;