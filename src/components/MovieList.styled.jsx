import styled from 'styled-components';

export const ListTitle = styled.h2`
  font-size: 1.25rem;
  margin: 24px 0 12px;
`;

export const MovieItem = styled.li`
  border: 1px solid #d1d5db;
  padding: 12px;
  border-radius: 8px;
  background-color: #ffffff;
`;

export const DeleteButton = styled.button`
  margin-left: 16px;
  color: #ef4444;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
