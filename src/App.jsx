import React from 'react';
import Empty from './components/Empty';
import FirstWidget from './components/widgets/firstWidget';
import SecondWidget from './components/widgets/SecondWidget';

function App() {
  return (
    <div className='flex gap-[57px]'>
      <Empty />
      <div>
         <FirstWidget />
         <hr />
         <SecondWidget/>
         <hr />
      </div>
    </div>
  )
}

export default App