import { ReactNode } from 'react';
import StyledSkillItem from '../styled/Skills/SkillItem.styled';

type Skill = {
    id: string;
    skill: string;
    experience: string;
};

interface SkillItemProps {
    children?: ReactNode;
    skill: Skill;
}

const SkillItem = ({ skill }: SkillItemProps) => {
    const { skill: skillTitle, experience } = skill;

    return (
        <StyledSkillItem>
            <h3>{skillTitle}</h3>
            <p>{experience}</p>
        </StyledSkillItem>
    );
};

export default SkillItem;
