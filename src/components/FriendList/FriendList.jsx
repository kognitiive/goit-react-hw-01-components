import { Friends, FriendsItem } from './FriendList.styled';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsItem key={id} online={isOnline}>
          <span></span>
          <img src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </FriendsItem>
      ))}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};

export default FriendList;
