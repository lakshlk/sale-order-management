import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useOrders } from '../api';
import SaleOrderModal from './SaleOrderModal';

const ActiveOrders = () => {
  const { data: orders, isLoading } = useOrders();
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Box>
      <Button onClick={() => setIsOpen(true)}>+ Sale Order</Button>
      <SaleOrderModal isOpen={isOpen} onClose={onClose} />
      {orders.map((order) => (
        <Box key={order.id}>
          {order.invoice_no} - {order.invoice_date}
          {/* Add edit button/modal here */}
        </Box>
      ))}
    </Box>
  );
};

export default ActiveOrders;
