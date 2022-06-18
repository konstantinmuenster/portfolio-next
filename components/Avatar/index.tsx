import Image from 'next/image';

import { styled } from '@config/stitches.config';
import AvatarImage from '../../public/images/avatar.jpg';

const StyledAvatar = styled('div', {
  display: 'flex',
  img: { borderRadius: '$round' },
});

type AvatarProps = {
  size?: number;
};

export const Avatar: React.FC<AvatarProps> = props => {
  return (
    <StyledAvatar>
      <Image
        src={AvatarImage}
        alt="Konstantin Münster Avatar"
        placeholder="blur"
        height={props.size ?? 40}
        width={props.size ?? 40}
      />
    </StyledAvatar>
  );
};
