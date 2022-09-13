import { Description, Stats } from './Profile.styled';
import PropTypes from 'prop-types';

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div>
      <Description>
        <img src={avatar} alt="User avatar" />
        <h3>{username}</h3>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>

      <Stats>
        <li>
          <span className="label ">Followers </span>
          <span className="quantity ">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </Stats>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    label: PropTypes.string,
    quantity: PropTypes.number,
  }),
};

export default Profile;
