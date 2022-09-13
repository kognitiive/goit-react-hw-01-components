import user from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';

import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransitionHistory from '../TransactionHistory/TransactionHistory';

import { Container } from './App.styled';
export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Stats Title" stats={data} />
      <FriendList friends={friends} />
      <TransitionHistory items={transactions} />
    </Container>
  );
};
