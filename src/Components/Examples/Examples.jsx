import TabButtons from "../TabButton/TabButtons";
import Section from "./Section";
import { useState } from "react";
import { EXAMPLES } from "../../data";
import Tabs from "./Tabs";

function Examples() {
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
    <Section title="Examples" id="examples">
      <Tabs buttons={<TabButtons handleSelectedTopic={handleSelectedTopic} />}>
        {tabContent}
      </Tabs>
    </Section>
  );
}

export default Examples;
