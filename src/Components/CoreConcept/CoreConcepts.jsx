import { CORE_CONCEPTS } from "../../../src/data.js";
import CoreConcept from "./CoreConcept";
import "./CoreConcepts.css";

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcepts;
