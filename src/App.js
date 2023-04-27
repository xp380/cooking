import React from 'react'
import { Tabs } from 'antd'
import './App.css'

import Header from './Components/Header'
import Footer from './Components/Footer'
import ListData from './Container/ListData'

const App = () => {
  const items = [
  {
    key: '1',
    label: 'Cooking List',
    children: <ListData />,
  },
];
 
  return(
    <>
    <Header />
    <h1 className='title'>Cooking Code</h1>
    <Tabs items={items}/>
    <Footer />
    </>
  )
}

export default App;
