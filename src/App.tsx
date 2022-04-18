import React from 'react';

import Home from './pages/Home';
import AppProvider from './context';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
};

export default App;
