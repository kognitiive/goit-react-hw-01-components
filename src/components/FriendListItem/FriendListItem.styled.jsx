import styled from '@emotion/styled';

export const FriendsItem = styled.li`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 5px solid #011f3b;
  border-radius: 5px;
  width: 100%;
  padding: 10px 35px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  & img {
    margin: 0 10px;
  }
  & span {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: ${props => (props.online === true ? 'green' : 'red')};
  }
`;
