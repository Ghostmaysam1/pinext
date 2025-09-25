import Article from "./components/Article/Article"

function Articles() {
    const articlesList = [
        { name: "لورم ایپسوم", date: '1404/6/20', id: '1' },
        { name: "لورم ایپسوم", date: '1404/6/20', id: '2' },
        { name: "لورم ایپسوم", date: '1404/6/20', id: '3' },
        { name: "لورم ایپسوم", date: '1404/6/20', id: '4' }
    ]
    return (
        <div className="flex flex-col gap-2 items-center">
            <h1 className="text-[51px] font-bold">مقالات</h1>
            <span className="h-[60px] w-full block"></span>
            <div className="flex w-full gap-[15px] px-20 justify-center flex-wrap">
                {
                    articlesList.map(article => (
                        <Article name={article.name} key={article.id} id={article.id} date={article.date} />
                    ))
                }
            </div>
        </div>
    )
}

export default Articles