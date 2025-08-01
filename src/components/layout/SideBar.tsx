const SideBar = () => {
    return (
        <nav className="bg-[#191919] uk-padding rounded-xl h-full">
            <ul className="uk-nav uk-navbar-left !gap-2 flex-col items-center">
                <li className="uk-width h-11 uk-text-default bg-black rounded-lg">
                    <a href="#" className="uk-height-1-1 !px-4 !text-white" >Home</a>
                </li>
                <li className="uk-width h-11 uk-text-default bg-black rounded-lg">
                    <a href="#" className="uk-height-1-1 !px-4 !text-white" >Home</a>
                </li>
            </ul>
            <ul className="uk-nav uk-navbar-left !gap-2 !mt-10">
                <li className="size-11 uk-text-default bg-black rounded-lg uk-flex uk-flex-center">
                    <a uk-icon="icon: mail; ratio: 1.4" href="#" className=" !text-white"></a>
                </li>
            </ul>
        </nav>
    )
}

export default SideBar
