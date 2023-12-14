import DatesCount from './components/DatesCount'
import DatesList from './components/DatesList'
import DatesAction from './components/DatesAction'
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount />
        <DatesList />
        <DatesAction />
      </Container>
    </div>
  );
}

export default App;
