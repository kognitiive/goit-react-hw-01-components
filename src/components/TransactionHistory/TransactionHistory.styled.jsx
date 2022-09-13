import styled from '@emotion/styled';

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 5px solid #011f3b;
  border-radius: 5px;

  & thead th {
    width: 33%;
    background-color: #0e6bc2;
    color: white;
  }

  & tbody {
    text-align: center;
  }

  & th,
  & td {
    padding: 20px;
    border: 1px solid #011f3b;
  }
`;
