import Icon from "./Icon";
import Navbar from "./Navbar";

const links = [
    { title: "Home", href: "/", isSelected: false, },
    { title: "Projects", href: "/Projects", isSelected: false, },
    { title: "Contact", href: "/contact", isSelected: false, },
];

const serviceList = [
    {
        title: "Web Development",
        icon: "Command-line",
        services: [
            "Website Development",
            "Web Application Development",
            "eCommerce Solutions Development",
            "Cybersecurity - Consulting - Publishing - Maintenance - Support",
        ],
    },
    {
        title: "UI/UX Design",
        icon: "Cube",
        services: [
            "Landing Pages",
            "Mobile App Design",
            "User Flow",
        ],
    }
];

function Service({icon, title, services}) {
    return (
        <>
            <div className="flex justify-start items-center gap-2">
                <Icon type={icon}/>
                <h1 className="text-2xl font-bold">{title}</h1>
            </div>

            <ul>
                {services.map(s => 
                    <li 
                        key={s} 
                        className="ml-4 font-mono"
                    >{s}</li>)}
            </ul>
        </>
    );
}

export function getLinks(page) {
    let currLinks = [];
    links.forEach(l => 
        currLinks.push(
            {...l, isSelected: (l.title === page)}
        )
    );

    return currLinks;
}

export default function Homepage() {

    return (
        <div className="body">
            <Navbar links={getLinks("Home")} />
            
            <div className="main flex flex-col justify-between items-start gap-8 lg:h-screen">
                <div className="flex flex-col gap-y-3 items-start">
                    <div>
                        <h1 className="text-gray-400 text-3xl font-semibold">Hello! I'm</h1>
                        <h1 className="text-gray-700 text-4xl font-semibold">Neil Taison Rigaud</h1>
                    </div>
                    <div className="text-xl">Computer Science student at NDHU and Web Developper.</div>
                    <a className="text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white flex p-2 gap-3 rounded transition ease-out duration-500 cursor-pointer">
                        <span className="font-semibold">Get Resume</span>
                        <Icon type={"Download"}/>
                    </a>

                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="text-3xl font-bold">My Services</h1>
                    <span className="text-2xl font-thin">Service Provided For My Clients.</span>
                    <div className="flex flex-col bg-gray-200 p-3 mt-4 gap-4">
                        {serviceList.map(s => 
                            <Service 
                                key={s.title}
                                title={s.title} 
                                icon={s.icon} 
                                services={s.services} />
                        )}
                    </div>
                </div>
                </div>


        </div>
    );
};
