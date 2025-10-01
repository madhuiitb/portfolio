
import { FaReact, FaSquareJs, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss,SiSupabase } from "react-icons/si";

export const ICONS = {
    FaReact,
    FaSquareJs,
    RiNextjsFill,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
    SiTailwindcss,
    SiSupabase
};


export const SKILLS = [
    { name: "React.js", years: 6, percent: 95 },
    { name: "Next.js", years: 2, percent: 70 },
    { name: "React Native", years: 1, percent: 55 },
    { name: "JavaScript", years: 6, percent: 90 },
    { name: "Typescript", years: 1, percent: 20 },
    { name: "CSS / HTML", years: 6, percent: 90 },
    { name: "Node.js", years: 1, percent: 35 },
    { name: "REST API", years: 4, percent: 70 },
];

export const PROJECT_DETAILS=[
        {
            "title": "Mini-Ecommers in Next.js",
            "description": [
                "Built a responsive mini dashboard with search, filter, and sort functionality.Implemented cart persistence across sessions and theme toggle with storage."
            ],
            "tags": [
                { "name": "JavaScript", "icon": "FaSquareJs" },
                { "name": "React", "icon": "FaReact" },
                { "name": "Next.js", "icon": "RiNextjsFill" }
            ],
            "links": {
                "github": "https://github.com/madhuiitb/nextjs-mini-ecommers",
                "demo": "https://nextjs-mini-ecommers.vercel.app/"
            }
        },

     {
            "title": "Typeahead Search with Filters",
            "description": [
                "A fast, polished React demo that combines typeahead (autocomplete) search with realtime filters, smooth animations, skeleton loaders, and thoughtful UI states."
            ],
            "tags": [
                { "name": "JavaScript", "icon": "FaSquareJs" },
                { "name": "React", "icon": "FaReact" },
                { "name": "CSS Modules", "icon": "FaGithub" }
            ],
            "links": {
                "github": "https://github.com/madhuiitb/typeahead-with-filters",
                "demo": "https://typeahead-with-filters.vercel.app/"
            }
        },
        {
            "title": "Dynamic Form Builder",
            "description": [
                "Developed a full-stack form builder with dynamic fields and real-time preview.",
                "Integrated Supabase for data storage and deployed on Vercel/Netlify."
            ],
            "tags": [
                { "name": "React.js", "icon": "FaReact" },
                { "name": "TailwindCSS", "icon": "SiTailwindcss" },
                { "name": "Supabase", "icon": "SiSupabase" }
            ],
            "links": {
                "github": "https://github.com/madhuiitb/form-builder",
                "demo": "https://the-form-builder.netlify.app/"
            }
        },
        {
            "title": "School Dashboard",
            "description": [
                "Built a responsive dashboard with product search, filter, and sort functionality.",
                "Added persistent cart, dark/light mode toggle, and skeleton loaders for better UX."
            ],
            "tags": [
                { "name": "Next.js", "icon": "RiNextjsFill" },
                { "name": "React.js", "icon": "FaReact" },
                { "name": "JavaScript", "icon": "FaSquareJs" }
            ],
            "links": {
                "github": "https://github.com/madhuiitb/",
                "demo": ""
            }
        },
]
