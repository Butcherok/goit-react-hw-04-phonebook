import styled from '@emotion/styled';

export const Filters = styled.div`
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

export const FilterLabel = styled.label`
  font-size: 18px;
`;

export const FilterInput = styled.input`
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;
  border: 1px solid lightblue;
`;
