import { storiesOf } from '@storybook/react';
import React from 'react';
import Dashboard from './pages/Dashboard';
 // Sample Data
 const data = {
   "&id": "123456",
   "executionDetails": {
     "buySellIndicator": "Buy",
     "orderStatus": "Completed"
   },
   "bestExecutionData": {
     "orderVolume": {
       "GBP": 100,
       "USD": 200,
       "JPY": 300,
       "EUR": 400
     }
   }
 };
  storiesOf('Dashboard', module)
   .add('Default', () => <Dashboard />)
   .add('With Data', () => <Dashboard data={data} />);