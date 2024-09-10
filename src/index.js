import "./styles.scss";
import _ from "lodash";
import toolsData from "./data/tools.json";

function renderTools(tools) {
  const content = document.getElementById("content");
  content.innerHTML = _.map(
    tools,
    (tool) => `<p><strong>${tool.name}</strong>: ${tool.description}</p>`
  ).join("");
}

renderTools(toolsData);
