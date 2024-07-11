import { getLinks } from "./Homepage";
import Icon from "./Icon";
import Navbar from "./Navbar";

const contacts = [
    {type: "phone", detail: "+886123456789"},
    {type: "email", detail: "alus410@proton.me"},
    {type: "website", detail: "www.awesomedev.com"},
    {type: "address", detail: "The promised neverland"},
];

const platforms = [
    {type: "Github", link:"https://github.com/blackbird410"},
    {type: "Linkedin", link: "https://www.linkedin.com/in/neilrigaud/"},
];

function Platform({ type, link }) {
    return (
        <a className="hover:scale-125 hover:text-primary transition ease-out duration-300" href={link} target="_blank">
            <Icon type={type}/>
        </a>
    );
}

function ContactDetail({type, detail}) {
    return (
        <div className="flex flex-col border border-gray-300 p-4">
            <span className="font-bold">{type.toUpperCase()}:</span>
            <span className="p-4">{detail}</span>
        </div>
    );
}

export default function Contact() {
    return (
        <div className="body">
            <Navbar links={getLinks("Contact")} /> 
            <div className="main flex flex-col justify-between gap-4 lg:h-screen">
                <h1 className="text-4xl text-center">Contact Me</h1>
                <h3 className="text-3xl opacity-30">If you have any project or need help. Get in touch</h3>
                <div className="flex flex-col gap-4">
                    {contacts.map(c => 
                    <ContactDetail
                        key={c.type}
                        type={c.type} 
                        detail={c.detail} 
                    />)
                }
                </div>
                
                <div>
                    <h3 className="text-3xl opacity-30">Follow me on:</h3>
                    <div className="flex flex-wrap justify-center text-3xl gap-4 p-4">
                        {platforms.map(p => 
                            <Platform key={p.type} type={p.type} link={p.link} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
