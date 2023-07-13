import { ReactNode, FunctionComponent } from 'react';
import StyledSocialMediaItem from '../styled/SocialMedia/SocialMediaItem.styled';

type SocialMediaItem = {
    id: string;
    svg: FunctionComponent;
    href?: string;
};

interface SocialMediaItemProps {
    children?: ReactNode;
    item: SocialMediaItem;
}

const SocialMediaItem = ({ item }: SocialMediaItemProps) => {
    const { svg, href } = item;

    return (
        <StyledSocialMediaItem>
            {href && (
                <a href={href} target="__blank" rel="noreferrer">
                    {svg({})}
                </a>
            )}
            {!href && <span>{svg({})}</span>}
        </StyledSocialMediaItem>
    );
};

export default SocialMediaItem;
