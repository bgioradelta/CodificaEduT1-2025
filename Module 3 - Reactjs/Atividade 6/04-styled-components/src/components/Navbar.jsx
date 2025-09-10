import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.cardBg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0 1rem;
`;

const Button = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

export default function Navbar({ toggleTheme }) {
  return (
    <Nav>
      <strong>Mini Loja</strong>
      <Button onClick={toggleTheme}>🌙/☀️</Button>
    </Nav>
  );
}
