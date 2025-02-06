import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TransactionList from './components/TransactionList';
import styled from 'styled-components';
import { MainLayout } from './styles/Layouts';
import Orb from './components/Orb';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navigation from './components/Navigation';
import React, { useMemo, useState } from 'react';
import Dashboard from './components/Dashboard';
import Income from './components/Income';
import Expenses from './components/Expenses';
import { useGlobalContext } from './context/globalContext';


function App() {

  const [active, setActive] = useState(1)

  const global = useGlobalContext();

  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])

  const displayData = () => {
    switch(active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4:
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  return (
    <AppStyled>
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
