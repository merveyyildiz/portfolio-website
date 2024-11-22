import ProjectsSection from "../app/components/Project/ProjectsSection";
import * as ProjectCard from './ProjectCard.stories';

export default {
    component: ProjectsSection,
    title: 'ProjectsSection',
    decorators: [(story) => <div style={{ margin: '3rem' }}>{story()}</div>],
    tags: ['autodocs'],
   
};

export const Default = {
    args: {
        projectsData: {
            projects: [
                { ...ProjectCard.DefaultCard.args, id: '1', title: 'Project 1' },
                { ...ProjectCard.DefaultCard.args, id: '2', title: 'Project 2' },
                { ...ProjectCard.DefaultCard.args, id: '3', title: 'Project 3' },
                { ...ProjectCard.DefaultCard.args, id: '4', title: 'Project 4' },
                { ...ProjectCard.DefaultCard.args, id: '5', title: 'Project 5' },
                { ...ProjectCard.DefaultCard.args, id: '6', title: 'Project 6' },
            ]
        },
    },
};