import styled from "styled-components";

function Avatar({ imageUrl, imageSize, name, ...props }) {
  return (
    <StyledAvatar
      src={imageUrl}
      alt={name ? `${name}'s avatar` : "Avatar"}
      width={imageSize}
      height={imageSize}
      {...props}
    />
  );
}

const StyledAvatar = styled.img`
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

export default Avatar;
