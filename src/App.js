import React, { useState } from 'react';
import DatesCount from './components/DatesCount'
import DatesList from './components/DatesList'
import DatesAction from './components/DatesAction'
import { Container } from "react-bootstrap";
import { person } from './data';

function App() {
  const [personData, setpersonData] = useState(person)
  const onDelete = () => {
    setpersonData([])
  }
  const onView = () => {
    setpersonData(person)
  }
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount person={personData} />
        <DatesList person={personData} />
        <DatesAction deleteData={onDelete} vieweData={onView} />
      </Container>
    </div>
  );
}

export default App;
