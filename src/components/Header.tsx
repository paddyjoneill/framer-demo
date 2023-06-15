const Header = () => {
    return (
        <div className="flex justify-center bg-slate-100" id="header">
        <div className="w-full flex justify-between h-12 items-center max-w-xl">
            <p className="font-bold text-lg">Company Name</p>
            <nav>
                <ul className="flex gap-2">
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </nav>
        </div></div>
    );
};

export default Header;