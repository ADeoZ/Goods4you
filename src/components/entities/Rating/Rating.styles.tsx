import StarSvg from "@assets/svg/star.svg";
import styled from "styled-components";

export const StyledRatingStar = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 4px;
  background-image: url("${StarSvg}");
  background-repeat: no-repeat;
  background-position: center;
`;

export const RatingTextVisuallyHidden = styled.span`
  border: 0;
  padding: 0;
  margin: 0;
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`;
