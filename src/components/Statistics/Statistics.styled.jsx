import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 0 0 0;
  text-align: center;
  background-color: #0e6bc2;
`;

export const StatsList = styled.ul`
  list-style: none;
  width: 400px;
  margin: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: space-around;
  align-item: center;
  text-align: center;

  background-color: #011f3b;

  & > li {
    border: 1px solid white;
    width: 100%;
    padding: 10px 20px;

    & > .label {
      color: #909090;
    }

    & > .percentage {
      color: white;
      font-size: 18px;
      font-weight: 500;
    }
  }
`;
