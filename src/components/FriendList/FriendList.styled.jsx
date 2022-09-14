import styled from '@emotion/styled';

export const Friends = styled.ul`
  list-style: none;
  width: 400px;
  margin: 0 auto 20px auto;
  padding: 0;

  justify-content: space-around;
  align-item: center;
  text-align: center;

  color: #011f3b;
  font-size: 18px;
  font-weight: 500;

  & > span {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: ${props => (props.online === true ? 'green' : 'red')};
  }
`;
