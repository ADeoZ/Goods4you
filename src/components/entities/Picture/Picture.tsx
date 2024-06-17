import { StyledImg } from "./Picture.styles";
import { PictureProps } from "./Picture.types";

export const Picture = ({ src, srcSmall, alt }: PictureProps) => (
  <picture>
    {srcSmall && <source srcSet={srcSmall} media="(max-width: 400px)" />}
    <StyledImg src={src} alt={alt} />
  </picture>
);
