<<<<<<< HEAD
import "./App.css";

function App() {
  return (
  <>
   <h2>
    hello - useContext -2
  </h2>
  </>
  )
=======
import Heading from "./Heading";
import Section from "./Section";
import LevelContext from "./LevelContext";

import "./App.css";

function Page() {
  return (
    <Section>
      <Heading level={1}>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section level={4}>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

function App() {
  return (
    <>
     
        <Page />
  
    </>
  );
>>>>>>> context-1
}
export default App;
