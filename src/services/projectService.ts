import { Project } from "@/components/ProjectCard";

import LearnDataStructureImg from '@/assets/img/projects.jpg'
import PlanarWebsiteImg from '@/assets/img/planar_website.png'
import EnterpriseImg from '@/assets/img/enterprise_landing_page.png'

let projects: Array<Project> = [
    {
        link: '#',
        image: {
            src: LearnDataStructureImg,
            alt: 'Learn data structure website'
        },
        title: 'Learn data structure',
        text: 'I created an interactive website to teach data structures in computing, making learning lists, stacks, queues and trees more accessible and engaging.',
        favorite: true
    },
    {
        link: 'https://planar-website.web.app/',
        image: {
            src: PlanarWebsiteImg,
            alt: 'Planar Engineering website'
        },
        title: 'Planar website',
        text: 'I developed the website for a company specializing in electrical engineering and crop spraying with drones, providing a solid and informative online presence.',
        favorite: true
    },
    {
        link: 'https://enterprisecorporate.com/',
        image: {
            src: EnterpriseImg,
            alt: 'Enterprise programming and IT agency landing page'
        },
        title: 'Enterprise landing page',
        text: 'I developed the landing page for a programming and IT agency, highlighting its services and expertise in technology and software, attracting potential customers.',
        favorite: true
    }
]

export default projects