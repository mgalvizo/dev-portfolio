import StyledSkillsList from '../styled/Skills/SkillsList.styled';
import SkillItem from './SkillItem.component';
import { SKILLS } from '../../helpers/constants';

const SkillsList = () => {
    const renderedSkills = SKILLS.map(skill => {
        const { id } = skill;
        return <SkillItem key={id} skill={skill} />;
    });

    return <StyledSkillsList>{renderedSkills}</StyledSkillsList>;
};

export default SkillsList;
