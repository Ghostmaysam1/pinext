import User from "./components/user/User"

function Sidebar() {
    return (
        <div className="h-full rounded-[8px] bg-primary-700 flex flex-col gap-4 px-2.5 py-4">
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
        </div>
    )
}

export default Sidebar
