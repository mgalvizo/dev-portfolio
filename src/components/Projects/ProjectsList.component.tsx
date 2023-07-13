import StyledProjectsList from '../styled/Projects/ProjectsList.styled';
import ProjectItem from './ProjectItem.component';
import { PROJECTS } from '../../helpers/constants';

const ProjectsList = () => {
    const renderedPrjects = PROJECTS.map(project => {
        const { id } = project;
        return <ProjectItem key={id} project={project} />;
    });

    return <StyledProjectsList>{renderedPrjects}</StyledProjectsList>;
};

export default ProjectsList;
