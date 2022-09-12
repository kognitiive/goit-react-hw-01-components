import { StatsList, Wrapper } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>

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

export default Statistics;
