import styled from 'styled-components';

export const NavContent = styled.nav`
  width: 100%;
  & ul {
    display: flex;
    list-style: none;
  }
`;

export const NavItem = styled.li`
  padding-left: 20px;
  & a {
    text-decoration: none;
  }
`;