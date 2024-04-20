import { ReactNode } from 'react';
import StyledSkillItem from '../styled/Skills/SkillItem.styled';

type Skill = {
    id: string;
    skill: string;
    experience?: string;
};

interface SkillItemProps {
    children?: ReactNode;
    skill: Skill;
    as?: string;
}

const SkillItem = ({ skill, as }: SkillItemProps) => {
    const { skill: skillTitle, experience } = skill;

    return (
        <StyledSkillItem as={as}>
            <h3>{skillTitle}</h3>
            {experience && <p>{experience}</p>}
        </StyledSkillItem>
    );
};

export default SkillItem;
