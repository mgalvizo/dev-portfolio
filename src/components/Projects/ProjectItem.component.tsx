import { ReactNode } from 'react';
import {
    StyledProjectItem,
    StyledProjectItemOverlayContainer,
    StyledProjectItemImageContainer,
    StyledProjectItemInfo,
    StyledProjectItemSkills,
    StyledProjectItemLinksContainer,
} from '../styled/Projects/ProjectItem.styled';
import ProjectSkillsList from './ProjectSkillsList.component';
import Link from '../UI/Link.component';
import { usePortfolio } from '../../hooks/usePortfolio';

export type Skill = {
    id: string;
    projectSkill: string;
};

type Project = {
    id: string;
    title: string;
    skills: Skill[];
    image: { smallSrc: string; largeSrc: string };
    href: { project: string; code: string };
};

interface ProjectItemProps {
    children?: ReactNode;
    project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
    const { isSmallScreen } = usePortfolio();

    const { title, skills, image, href } = project;

    return (
        <StyledProjectItem>
            <StyledProjectItemImageContainer>
                <picture>
                    <source
                        media="(min-width: 768px)"
                        srcSet={image.largeSrc}
                        type="image/webp"
                    />
                    <source
                        media="(min-width: 320px)"
                        srcSet={image.smallSrc}
                        type="image/webp"
                    />
                    <img
                        src={image.smallSrc}
                        alt={title}
                        width="720"
                        height="540"
                    />
                </picture>
                {!isSmallScreen && (
                    <StyledProjectItemOverlayContainer>
                        <Link href={href.project}>View Project</Link>
                        <Link href={href.code}>View Code</Link>
                    </StyledProjectItemOverlayContainer>
                )}
            </StyledProjectItemImageContainer>
            <StyledProjectItemInfo>
                <h3>{title}</h3>
                <StyledProjectItemSkills>
                    <ProjectSkillsList skills={skills} />
                </StyledProjectItemSkills>
            </StyledProjectItemInfo>
            {isSmallScreen && (
                <StyledProjectItemLinksContainer>
                    <Link href={href.project}>View Project</Link>
                    <Link href={href.code}>View Code</Link>
                </StyledProjectItemLinksContainer>
            )}
        </StyledProjectItem>
    );
};

export default ProjectItem;
