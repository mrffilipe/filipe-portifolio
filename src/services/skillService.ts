import { Skill } from "@/components/SkillCard"

import CSharpIcon from '@/assets/svg/csharp.svg'
import DotnetIcon from '@/assets/svg/dotnet.svg'
import TypescriptIcon from '@/assets/svg/typescript.svg'
import JavascriptIcon from '@/assets/svg/javascript.svg'
import NextjsIcon from '@/assets/svg/nextjs.svg'
import ReactIcon from '@/assets/svg/react.svg'
import HtmlIcon from '@/assets/svg/html.svg'
import CssIcon from '@/assets/svg/css.svg'
import CIcon from '@/assets/svg/c.svg'
import CPlusPlusIcon from '@/assets/svg/cplusplus.svg'
import MysqlIcon from '@/assets/svg/mysql.svg'
import PostgreesqlIcon from '@/assets/svg/postgreesql.svg'
import MongodbIcon from '@/assets/svg/mongodb.svg'
import FirebaseIcon from '@/assets/svg/firebase.svg'
import DockerIcon from '@/assets/svg/docker.svg'
import GithubIcon from '@/assets/svg/github_black.svg'
import RabbitmqIcon from '@/assets/svg/rabbitmq.svg'

let skills: Array<Skill> = [
    {
        title: 'C# | .NET',
        text: 'Specialized in development with C# and .NET, delivering robust solutions for applications.',
        icons: [
            {
                src: CSharpIcon,
                alt: 'C Sharp Icons8'
            },
            {
                src: DotnetIcon,
                alt: 'Dotnet Icons8'
            }
        ]
    },
    {
        title: 'TypeScript | JS',
        text: 'Proficient in TypeScript and JavaScript, creating interactive and dynamic web experiences.',
        icons: [
            {
                src: TypescriptIcon,
                alt: 'Typescript Icons8'
            },
            {
                src: JavascriptIcon,
                alt: 'Javascript Icons8'
            }
        ]
    },
    {
        title: 'Next.js | React',
        text: 'Experienced in development with Next.js and React, building modern and efficient web applications.',
        icons: [
            {
                src: NextjsIcon,
                alt: 'Nextjs IconDuck'
            },
            {
                src: ReactIcon,
                alt: 'React Icons8'
            }
        ]
    },
    {
        title: 'HTML | CSS',
        text: 'Skilled in HTML and CSS, creating attractive and responsive interfaces.',
        icons: [
            {
                src: HtmlIcon,
                alt: 'Html Icons8'
            },
            {
                src: CssIcon,
                alt: 'Css Icons8'
            }
        ]
    },
    {
        title: 'C | C++',
        text: 'Solid knowledge in C and C++, acquired in college and in Arduino projects.',
        icons: [
            {
                src: CIcon,
                alt: 'C Icons8'
            },
            {
                src: CPlusPlusIcon,
                alt: 'CPlusPlus Icons8'
            }
        ]
    },
    {
        title: 'MySQL | PostgreSQL',
        text: 'Experienced in MySQL and PostgreSQL databases, ensuring efficiency and data security.',
        icons: [
            {
                src: MysqlIcon,
                alt: 'Mysql Icons8'
            },
            {
                src: PostgreesqlIcon,
                alt: 'Postgreesql Icons8'
            }
        ]
    },
    {
        title: 'MongoDB',
        text: 'Proficiency in MongoDB, enabling effective management of non-relational data.',
        icons: [
            {
                src: MongodbIcon,
                alt: 'Mongodb Icons8'
            }
        ]
    },
    {
        title: 'Firebase',
        text: 'Firebase skills for integration and development of agile and effective mobile and web applications.',
        icons: [
            {
                src: FirebaseIcon,
                alt: 'Firebase Icons8'
            }
        ]
    },
    {
        title: 'DevOps (Docker | GitHub | Consul)',
        text: 'Proficiency in DevOps, uniting Docker, GitHub and Consul for continuous integration and efficient deliveries.',
        icons: [
            {
                src: DockerIcon,
                alt: 'Docker Icons8'
            },
            {
                src: GithubIcon,
                alt: 'Github Icons8'
            }
        ]
    },
    {
        title: 'Messaging (RabbitMQ)',
        text: 'Experienced in messaging systems, with emphasis on RabbitMQ, allowing efficient and scalable communication between software components.',
        icons: [
            {
                src: RabbitmqIcon,
                alt: 'Rabbitmq IconScout'
            }
        ]
    }
]

export default skills