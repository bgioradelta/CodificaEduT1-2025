import styled, { css } from "styled-components";

const variants = {
  solid: css`
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  `,
  ghost: css`
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.text};
  `,
};

// Usando $variant como transient prop
export const Button = styled.button`
  border-radius: ${({ theme }) => theme.radius};
  padding: 0.5rem 1rem;
  font-weight: 600;
  cursor: pointer;
  ${({ $variant }) => variants[$variant || "solid"]}
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  transition: all 0.2s ease;
`;
