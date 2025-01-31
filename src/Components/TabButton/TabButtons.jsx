import TabButton from "./TabButton";
import { CORE_CONCEPTS as buttons } from "../../data.js";
import "./TabButton.css";
// Curried Function

function TabButtons({ handleSelectedTopic, selectedTopic }) {
  return (
    <menu>
      {buttons.map((button) => (
        <TabButton
          key={button.title}
          isSelected={selectedTopic === button.title.toLocaleLowerCase()}
          onClick={handleSelectedTopic(button.title)}
        >
          {button.title}
        </TabButton>
      ))}
    </menu>
  );
}

export default TabButtons;
