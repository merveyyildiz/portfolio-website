import HeroSection from "../app/components/HeroSection";
import "./HeroSection.css";

export default {
    title: "HeroSection",
    component: HeroSection,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {},
}

export const Default = {
    args: {
        heroData: {
            data: {
                desc: "This is a description.",
                title: [ "Full Name", 1000, "Title", 1000, "Job", 1000]
            }
        }
    }
}
