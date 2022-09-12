import styled from '@emotion/styled';

export const Description = styled.div`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 0;
  text-align: center;
  background-color: #0e6bc2;

  & > img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    height: 200px;
    border-radius: 100%;
  }

  & > h3 {
    color: black;
  }

  & > p {
    color: #909090;
  }
`;

export const Stats = styled.ul`
  list-style: none;
  width: 400px;
  margin: 0 auto 20px auto;
  padding: 0;

  display: flex;
  justify-content: space-around;
  align-item: center;
  text-align: center;

  background-color: #011f3b;

  & > li {
    border: 1px solid white;
    width: 100%;
    padding: 10px 35px;

    & > .label {
      color: #909090;
    }

    & > .quantity {
      color: white;
      font-size: 18px;
      font-weight: 500;
    }
  }
`;
