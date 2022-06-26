import React from 'react';
import styled from 'styled-components';

interface Props {
  onSearch: React.MouseEventHandler<HTMLButtonElement>;
  searchText: string;
  handleChange: React.FormEventHandler<HTMLInputElement>;
}
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: #264653;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
  align-items: center;
`;
const SearchBarContainer = styled.div`
  display: flex;
  max-width: 840px;
  width: 90%;
  height: 32px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: inset 0 2px 2px 0 rgba(0, 0, 0, 0.35);
  padding-left: 10px;
`;
const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 140px;
  height: 24px;
  border-radius: 15px;
  height: 22px;
  background-color: #307373;
  font-size: 14px;
  letter-spacing: 0.1px;
  line-height: 22px;
  text-align: center;
  color: #f1f9f9;
  cursor: pointer;
  border-radius: 30px;
  font-size: 12px;
  border: none;
`;
const SearchInput = styled.input`
  width: 67%;
  max-width: 537px;
  color: black;
  font-size: 14px;
  letter-spacing: 0.26px;
  line-height: 22px;
  background: transparent;
  border: none;
  :focus {
    outline: none;
  }
`;

const SearchBtnWrapper = styled.div`
  display: flex;
  width: 30%;
  max-width: 140px;
  height: 32px;
  margin-left: auto;
  align-items: center;
  justify-content: flex-end;
  margin-right: 4px;
`;

export const Search = (props: Props) => {
  return (
    <Container>
      <SearchContainer>
        <SearchBarContainer>
          <SearchInput
            type="input"
            value={props.searchText}
            onInput={(e) => props.handleChange(e)}
            placeholder="Search by Title or Authors"
          />

          <SearchBtnWrapper>
            <SearchBtn onClick={props.onSearch} type="submit">
              SEARCH
            </SearchBtn>
          </SearchBtnWrapper>
        </SearchBarContainer>
      </SearchContainer>
    </Container>
  );
};
