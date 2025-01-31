import CoreConcepts from "../src/Components/CoreConcept/CoreConcepts.jsx";
import Header from "../src/Components/Header/Header.jsx";
import TabButtons from "./Components/TabButton/TabButtons";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  const handleSelectedTopic = (title) => {
    return () => setSelectedTopic(title.toLowerCase());
  };

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <section id="examples">
          <h2>Examples</h2>
          <TabButtons
            handleSelectedTopic={handleSelectedTopic}
            selectedTopic={selectedTopic}
          />
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
