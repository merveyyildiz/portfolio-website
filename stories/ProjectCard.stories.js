import ProjectCard from '@/app/components/Project/ProjectCard';

export default {
    title: 'ProjectCard',
    component: ProjectCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {},
};

export const DefaultCard = {
    args: {
        id: 1,
        title: "Project Name",
        imgUrl: "/images/about-image.png",
        tags: ["Tag 1", "Tag 2", "Tag3"],
        gitUrl: "https://google.com/",
        previewUrl: "https://google.com/"
    },
};
