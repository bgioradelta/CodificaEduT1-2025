import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const Box = styled.div`
  background: #eee;
  background-image: linear-gradient(
    90deg,
    #eee 0px,
    #f5f5f5 40px,
    #eee 80px
  );
  background-size: 200px 100%;
  animation: ${shimmer} 1.2s infinite linear;
  border-radius: ${({ theme }) => theme.radius};
`;

export default function Skeleton() {
  return <Box style={{ height: "200px", width: "100%" }} />;
}
