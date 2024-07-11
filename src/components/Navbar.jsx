import { document } from "postcss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

function Navlink ({title, href, isSelected}) {
    const selected = "text-gray-700 font-bold border-r-4 border-primary";
    return (
        <li 
            className={`py-4 lg:hover:scale-110 hover:text-primary transition ease-out duration-300${isSelected ? selected : "py-1 border-r-4 border-white"}`}>
            <Link 
                to={href} 
                className={"px-4 flex justify-end"}
            ><span>{title}</span>
            <Icon type={title} />
            </Link>
        </li>
    );
}

export default function Navbar({ links }) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div className="md:col-span-1 md:flex md:justify-end">
            <nav className={`text-right`}>
                <div className="flex justify-between items-center">
                    <h1 className="font-bold uppercase p-4 border-b border-gray-100">Neil</h1>
                    <div id="burger" className="px-4 cursor-pointer md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
                        <Icon type={"Menu"}/>
                    </div>
                </div>
                <ul className={`text-sm mt-6 md:block ${isNavOpen ? 'hidden' : ''}`}>
                    {links.map(link => 
                        <Navlink 
                            key={link.title} 
                            title={link.title} 
                            href={link.href}
                            isSelected={link.isSelected}
                        /> )}
                </ul>

            </nav>
        </div>
    );
}
