import "./styles.scss";
import lodash from "lodash";
import toolsData from "./data/tools.json";

function renderTools(tools) {
  const content = document.getElementById("content");
  content.innerHTML = lodash
    .map(
      tools,
      (tool) => `<p><strong>${tool.name}</strong>: ${tool.description}</p>`
    )
    .join("");
}

renderTools(toolsData);
