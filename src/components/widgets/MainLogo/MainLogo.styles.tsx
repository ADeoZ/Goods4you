import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLogo = styled(Link)`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.light};

  &:hover {
    color: ${({ theme }) => theme.colors.text.light};
  }
`;
