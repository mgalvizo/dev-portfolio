import { ReactNode } from 'react';
import StyledProjectSkillItem from '../styled/Projects/ProjectSkillItem.styled';
import { Skill } from './ProjectItem.component';

interface ProjectSkillItemProps {
    children?: ReactNode;
    skill: Skill;
}

const ProjectSkillItem = ({ skill }: ProjectSkillItemProps) => {
    const { projectSkill } = skill;

    return <StyledProjectSkillItem>{projectSkill}</StyledProjectSkillItem>;
};

export default ProjectSkillItem;
