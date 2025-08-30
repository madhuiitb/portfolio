
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
            "title": "E-commerce Dashboard",
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