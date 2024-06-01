import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import ActiveOrders from '../components/ActiveOrders';
import CompletedOrders from '../components/CompletedOrders'; // Ensure this matches the actual file name exactly

const Dashboard = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Active Orders</Tab>
        <Tab>Completed Orders</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <ActiveOrders />
        </TabPanel>
        <TabPanel>
          <CompletedOrders />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Dashboard;
