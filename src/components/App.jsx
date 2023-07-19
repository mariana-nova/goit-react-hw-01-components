// COMPONENTES
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import FriendList from "./FriendList/FriendList";

// DATA DE JSON'S
import user from '../data/user.json';
import stats from '../data/statistics.json';
import friends from '../data/friends.json';
import transactionData from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        src={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactionData} />
    </div>
  );
};
