let projects = [];
(async () => {
  try {
    const response = await fetch("./javascript/projects.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();
    projects = jsonData;
  } catch (error) {
    console.error("Error loading JSON:", error);
  }
})();


const project = document.getElementsByClassName("project");

projects.length > 0 ? `<div></div>` : 0;
