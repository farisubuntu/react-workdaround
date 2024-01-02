import "./App.css";
import { ListGroup, ListItem } from "./ListGroup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World - React</h1>
      </header>
      <div class="lists">
        <ListGroup badge={22}>
          <ListItem>This item has badge 5</ListItem>
          <ListItem special={100}>This item has badge 5</ListItem>
          <ListItem>This item has badge 5</ListItem>
          <ListItem>This item has badge 5</ListItem>
        </ListGroup>
      </div>
      <div className="lists">
      <ListGroup badge={500}>
          <ListItem>This item has badge 5</ListItem>
          <ListItem>This item has badge 5</ListItem>
          <ListItem>This item has badge 5</ListItem>
          <ListItem>This item has badge 5</ListItem>
        </ListGroup>
      </div>
    </div>
  );
}

export default App;
