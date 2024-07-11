import { getRepoLink, projects } from "../projects";
import { getLinks } from "./Homepage";
import Icon from "./Icon";
import Navbar from "./Navbar";


function ProjectCard({ 
    title, 
    description, 
    link, 
    ghLink, 
    picture 
}) {
    return (
        <div className="card">
            <img className="w-full h-32 sm:h-48 object-cover" src={picture} alt={title} />
            <div className="m-4">
                <div className="grid grid-cols-8">
                    <span className="font-bold col-span-6">{title}</span>
                    <a className="text-2xl" href={ghLink} target="_blank">
                        <Icon type={"Github"}/>
                    </a>
                    <a className="text-2xl" href={link} target="_blank">
                        <Icon type={"Site"}/>
                    </a>
                </div>
                <span className="block text-gray-500 text-sm">{description}</span>

            </div>
        </div>
    );
}


export default function Projects() {
    return (
        <div className="body">
            <Navbar links={getLinks("Projects")}/>
            <div className="main">
                <h1 className="text-4xl text-center">My Projects</h1>
                <div className="max-h-svh overflow-y-scroll mt-8 grid lg:grid-cols-3 border-gray-200 gap-10">
                    {
                        projects.map(p => 
                            <ProjectCard 
                                key={p.name}
                                title={p.name} 
                                link={p.link}
                                description={p.description}
                                picture={p.pictureLink}
                                ghLink={p.githubLink ? p.githubLink : getRepoLink(p)}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
}
