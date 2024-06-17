import CrossSvg from "@assets/svg/cross.svg?url";
import styled from "styled-components";

export const StyledFaqItem = styled.li`
  position: relative;
  padding: 30px 80px 4px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borders.white};
  color: ${({ theme }) => theme.colors.text.light};
`;

export const StyledFaqItemControlButton = styled.button<{ $expanded: boolean }>`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 27px;
  right: 0;
  background-image: url("${CrossSvg}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  will-change: transform;
  transition: transform 0.3s;

  ${({ $expanded }) => $expanded && "transform: scale(1.3) rotate(45deg)"}
`;

export const StyledFaqItemTitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

export const StyledFaqAnimationWrapper = styled.div<{ $expanded: boolean }>`
  display: grid;
  grid-template-rows: ${({ $expanded }) => ($expanded ? "1fr" : "0fr")};
  overflow: hidden;
  transition: grid-template-rows 0.4s ease;
  will-change: grid-template-rows;

  ${({ $expanded }) =>
    $expanded &&
    `& ${StyledFaqTransformWrapper} {
      transform: translateY(0);
      visibility: visible;
    }`}
`;

export const StyledFaqAnimation = styled.div`
  min-height: 0;
`;

export const StyledFaqTransformWrapper = styled.div`
  transform: translateY(-100%);
  visibility: hidden;
  transition: transform 0.4s ease, visibility 0.4s ease;
`;

export const StyledFaqItemAnswer = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 34px;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;
