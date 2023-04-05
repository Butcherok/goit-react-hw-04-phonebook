import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 100%;
  border: 2px solid lightblue;
  border-radius: 5px;
  background-color: #ececec;
  -webkit-filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const ContactsItem = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 12px;
  background-color: white;
  border: 1px solid lightblue;
  border-radius: 5px;
  &:nth-of-type(2n) {
    background-color: lightblue;
  }
  &:nth-of-type(2n-1) {
    background-color: #cbf0fd;
  }
`;

export const ContactDeleteBtn = styled.button`
  margin-left: auto;
  padding: 4px 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ffb8b8;

  &:hover {
    background-color: lightcoral;
    scale: 1.05;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
