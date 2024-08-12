import React from 'react';
import { TodoProvider } from '../TodoContext/Index';
import { AppUi } from './AppUi';

function App() {
  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  );
}


export default App;
