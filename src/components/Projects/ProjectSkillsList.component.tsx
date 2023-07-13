import { ReactNode } from 'react';
import { Skill } from './ProjectItem.component';
import StyledProjectSkillsList from '../styled/Projects/ProjectSkillsList.styled';
import ProjectSkillItem from './ProjectSkillItem.component';

interface ProjectSkillsListProps {
    children?: ReactNode;
    skills: Skill[];
}

const ProjectSkillsList = ({ skills }: ProjectSkillsListProps) => {
    const renderedSkills = skills.map(skill => {
        const { id } = skill;
        return <ProjectSkillItem key={id} skill={skill} />;
    });

    return <StyledProjectSkillsList>{renderedSkills}</StyledProjectSkillsList>;
};

export default ProjectSkillsList;
