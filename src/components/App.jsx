import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

// DATA DE JSON'S
import user from '../data/user.json';
import stats from '../data/statistics.json';
import transactionData from '../data/transactions.json';




export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
     <TransactionHistory items={transactionData} />
    </div>
  );
};
