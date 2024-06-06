import styled from "styled-components";

export const StyledIntro = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.width.max};
  position: relative;
  padding: 101px 0 93px;

  @media (max-width: 600px) {
    padding: 50px 0 30px;
  }
`;

export const StyledIntroLogo = styled.div`
  padding: 34px 29px 0 0;
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  font-size: clamp(1rem, -5rem + 20vw, 20rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.light};
  opacity: 12%;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const StyledIntroContent = styled.div`
  max-width: 580px;
  position: relative;
  color: ${({ theme }) => theme.colors.text.light};
`;

export const StyledIntroContentTitle = styled.p`
  margin-bottom: 19px;
  font-size: 3.6rem;
  line-height: 1.4;

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;

export const StyledIntroContentDescription = styled.p`
  margin-bottom: 38px;
  max-width: 330px;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.4;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;
