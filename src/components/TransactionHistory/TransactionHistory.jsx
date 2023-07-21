import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
  width: 250px;
  margin-left: 10px;
  border-collapse: collapse;
  margin-bottom: 15px;
  background-color: beige;
`;

const Td = styled.td`
padding: 8px;
border: 1px solid gray;
`;
const Th = styled.th`
  padding: 8px;
  border: 1px solid gray;
  font-weight: bold;
  color: whitesmoke;
  text-transform: uppercase;
  background-color: cyan;
`;

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </thead>


      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <Td>{item.type}</Td>
            <Td>{item.amount}</Td>
            <Td>{item.currency}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;