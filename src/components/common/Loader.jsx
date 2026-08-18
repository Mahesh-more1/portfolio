import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LoaderSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid rgba(102, 126, 234, 0.3);
  border-top: 3px solid #667eea;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 1rem;
`;

const LoaderText = styled.div`
  color: #667eea;
  font-size: 1.2rem;
  font-weight: 500;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderSpinner />
      <LoaderText>Loading Portfolio...</LoaderText>
    </LoaderContainer>
  );
};

export default Loader;
