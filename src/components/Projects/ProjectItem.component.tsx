import { ReactNode } from 'react';
import StyledProjectItem from '../styled/Projects/ProjectItem.styled';
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
            <div className="image__container">
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
                    <img src={image.smallSrc} alt={title} />
                </picture>
                {!isSmallScreen && (
                    <div className="overlay__container">
                        <Link href={href.project}>View Project</Link>
                        <Link href={href.code}>View Code</Link>
                    </div>
                )}
            </div>
            <div className="project__info">
                <h3>{title}</h3>
                <div className="project__skills">
                    <ProjectSkillsList skills={skills} />
                </div>
            </div>
            {isSmallScreen && (
                <div className="links__container">
                    <Link href={href.project}>View Project</Link>
                    <Link href={href.code}>View Code</Link>
                </div>
            )}
        </StyledProjectItem>
    );
};

export default ProjectItem;
