import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useCreateOrder } from '../api';

const SaleOrderModal = ({ isOpen, onClose }) => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const createOrder = useCreateOrder();

  const onSubmit = (values) => {
    createOrder.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.customer_id}>
              <FormLabel>Customer ID</FormLabel>
              <Input {...register('customer_id', { required: 'Customer ID is required' })} />
              {errors.customer_id && <p>{errors.customer_id.message}</p>}
            </FormControl>
            <FormControl mt={4} isInvalid={errors.invoice_no}>
              <FormLabel>Invoice No</FormLabel>
              <Input {...register('invoice_no', { required: 'Invoice No is required' })} />
              {errors.invoice_no && <p>{errors.invoice_no.message}</p>}
            </FormControl>
            <FormControl mt={4} isInvalid={errors.invoice_date}>
              <FormLabel>Invoice Date</FormLabel>
              <Input {...register('invoice_date', { required: 'Invoice Date is required' })} type="date" />
              {errors.invoice_date && <p>{errors.invoice_date.message}</p>}
            </FormControl>
            <Button type="submit" mt={4}>Submit</Button>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderModal;
