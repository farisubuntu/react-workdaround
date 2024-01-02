import Heading from "./Heading";
import Section from "./Section";
import LevelContext from "./LevelContext";

import "./App.css";

<<<<<<< HEAD
=======
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
>>>>>>> context-2

function App() {
  return (
    <>
<<<<<<< HEAD
    <h2>hello</h2>
      <Page />
=======
     
        <Page />
  
>>>>>>> context-2
    </>
  );
}
export default App;
