import logo from './logo.svg';
import './App.css';
import { Card } from './components/Card';
import { CardModal } from './components/CardModal';

import { MDBContainer, MDBRow, MDBCardGroup } from "mdbreact";

function App() {
  return (
    <MDBContainer fluid>
      <div className="App">
        <header className="App-header">
        <h1>Rise Charity Directory</h1>
        </header>
      </div>
      <MDBRow className="Charity-row">
        <MDBCardGroup deck>
          <Card />
          <Card />
          <Card />
          <Card />
        </MDBCardGroup>
      </MDBRow>
      <MDBRow  className="Charity-row">
        <MDBCardGroup deck>
          <Card />
          <Card />
          <Card />
          <Card />
        </MDBCardGroup>
      </MDBRow>
      <MDBRow  className="Charity-row">
        <MDBCardGroup deck>
          <Card />
          <Card />
          <Card />
          <Card />
      </MDBCardGroup>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;