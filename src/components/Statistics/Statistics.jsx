import { StatsList, Wrapper } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <Wrapper>
      {title && <h2>{title}</h2>}
      <StatsList>
        {stats.map(({ label, percentage, id }) => (
          <li key={id}>
            <span className="label">{label} </span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </StatsList>
    </Wrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
