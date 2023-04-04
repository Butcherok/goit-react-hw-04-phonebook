import styled from '@emotion/styled';

export const NewContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  padding: 12px;
  width: 100%;

  border: 2px solid lightblue;
  
  border-radius: 5px;
  background-color: #ececec;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const NameLabel = styled.label`
  font-size: 18px;
`;

export const NameInput = styled.input`
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;
  border: 1px solid lightblue;
`;

export const NumberLabel = styled.label`
  font-size: 18px;
`;

export const NumberInput = styled.input`
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;
  border: 1px solid lightblue;
`;

export const AddContactBtn = styled.button`
  padding: 8px;
  background-color: lightblue;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    scale: 1.05;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  &:active {
    background-color: lightgreen;
    transform: scale(0.95);
    transition: all 0.1s ease-in-out;
  }
  &:disabled {
    background-color: lightcoral;
  }
`;
