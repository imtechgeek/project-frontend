import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #f1f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: 100vw;
`;
const LogoWrapper = styled.div`
  display: flex;
  max-width: 340px;
  color: #307373;
  width: 90%;
  justify-content: flex-start;
  align-items: flex-start;
  height: 74px;
  text-transform: uppercase;
`;
const TopHeaderContainer = styled.div`
  display: flex;
  max-width: 840px;
  width: 90%;
  justify-content: flex-start;
  align-items: flex-start;
  height: 74px;
`;

const BottomHeaderSeperator = styled.div`
  background-color: #307373;
  width: 100%;
  height: 9px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <TopHeaderContainer>
        <LogoWrapper>
          <h2>Lookup Publications</h2>
        </LogoWrapper>
      </TopHeaderContainer>
      <BottomHeaderSeperator />
    </StyledHeader>
  );
};

export default Header;
