import { useQuery, useMutation, useQueryClient } from 'react-query';

const fetchOrders = async () => {
  // Mimic fetching data from an API
  return [
    // Sample data
    { id: 1, customer_id: '123', invoice_no: 'INV-001', invoice_date: '2023-05-01' },
  ];
};

export const useOrders = () => {
  return useQuery('orders', fetchOrders);
};

export const useCreateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (newOrder) => {
      // Mimic creating a new order
      return newOrder;
    },
    {
      onSuccess: () => {
        // Invalidate and refetch orders
        queryClient.invalidateQueries('orders');
      },
    }
  );
};
