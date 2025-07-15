(async () => {
  try {
    const response = await fetch("./src/javascript/projects.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();
    jsonData;
    manipulateProjects(jsonData);
  } catch (error) {
    console.error("Error loading JSON:", error);
  }
})();

const myProjects = document.getElementById("projects");
const manipulateProjects = (projects) => {
  let projectsHTML = projects
    .map((projectItem, i) => {
      return i % 2 === 0
        ? `<div class="ProjectContainer relative flex mx-auto justify-between items-center ${
            !projectItem.image.device.toLowerCase() === "mobile"
              ? "py-0"
              : "py-10"
          }">
                <div class="ProjectImage w-[48%] relative flex justify-start ">
                    <div class="relative hover:scale-110 ease-in-out duration-200 ">
                        <img class="${projectItem.image.device.toLowerCase()} aspect-3/2 object-cover drop-shadow-[0_0px_35px_#5958dee6]" height="auto" src="${
            projectItem.image.url
          }" alt="Loading..." />
                    </div>
                </div>

                <div class="circle absolute left-1/2 -translate-x-2 top-50" style="background:${
                  projectItem.headingColor
                }">
                    <div class="white-circle"></div>
                </div>
                <div
                    class="absolute extnsn h-[1px] w-[35%] -z-20 flex items-center justify-start right-1/2" style="background:${
                      projectItem.headingColor
                    }">

                </div>

                <div class="cntnt w-[48%] min-h-64 px-[2%]">
                    <div class="heading text-4xl my-2 font-semibold handlee custom-font tracking-[2px]" style="color:${
                      projectItem.headingColor
                    }">
                        ${projectItem.title}
                    </div>
                    <div class="mini-description text-xl text-[${
                      projectItem.headingColor
                    }] mb-3 custom-font tracking-[1px] font-bold" style="color:${
            projectItem.headingColor
          }">
                          ${projectItem.subtitle}
                    </div>
                    <div class="description text-[15px] h-auto mb-4 font-light">
                          ${projectItem.description}
                    </div>
                    <ul class="techStack text-[15px] flex flex-row flex-wrap gap-y-2 gap-x-2 h-auto">
                          ${projectItem.tags
                            ?.map(
                              (tag) => `
                              <li class="tag">
                            #${tag}
                        </li>`
                            )
                            .join("")}
                       
                    </ul>
                </div>
            </div>`
        : `<div class="ProjectContainer relative flex mx-auto justify-between items-center py-10">
                <div class="cntnt w-[48%] min-h-64 px-[2%]">
                    <div class="heading text-4xl my-2 font-semibold handlee custom-font tracking-[2px]" style="color:${
                      projectItem.headingColor
                    }">
                        ${projectItem.title}
                    </div>
                    <div class="mini-description text-xl text-[${
                      projectItem.headingColor
                    }] mb-3 custom-font tracking-[1px] font-bold" style="color:${
            projectItem.headingColor
          }">
                          ${projectItem.subtitle}
                    </div>
                    <div class="description text-[15px] h-auto mb-4 font-light">
                       ${projectItem.description}
                    </div>
                    <ul class="techStack text-[15px] flex flex-row flex-wrap gap-y-2 gap-x-2 h-auto">
                         ${projectItem.tags
                           ?.map(
                             (tag) => `
                              <li class="tag">
                            #${tag}
                        </li>`
                           )
                           .join("")}
                    </ul>
                </div>


                <!-- <div class="w-[30%] flex border-2 border-black"> -->
                <div class="circle absolute left-1/2 -translate-x-2 top-50" style="background:${
                  projectItem.headingColor
                }">
                    <div class="white-circle"></div>
                </div>
                <div
                    class="absolute extnsn h-[1px] w-[35%] -z-10 flex items-center justify-start left-1/2" style="background:${
                      projectItem.headingColor
                    }">
                </div>
                <!-- </div> -->

                <div class="ProjectImage w-[48%] flex justify-end">
                    <img class="hover:scale-110 ease-in-out duration-200 ${projectItem.image.device.toLowerCase()} aspect-3/2 object-cover drop-shadow-[0_0px_35px_#5958dee6]" height="auto" src="${
            projectItem.image.url
          }"
                        alt="Loading..." />
                </div>


            </div>`;
    })
    .join("");
  myProjects.innerHTML = projectsHTML;
};

// dark mode manager
const toggle = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("darkmode-icon");
let bodyClasses = document.body.classList;
const changeToggleIcon = () => {
  if (bodyClasses.contains("darkmode")) {
    toggleIcon.setAttribute("fill", "#fff");
    toggle.setAttribute("title", "set Light Mode");
  } else {
    toggleIcon.removeAttribute("fill", "#fff");
    toggle.setAttribute("title", "set Dark Mode");
  }
};
const toggleMode = () => {
  bodyClasses.toggle("darkmode");
  document.getElementById("invertImage").classList.toggle("invert");
  document.getElementById("modelDark").classList.toggle("bg-black");
  document.getElementById("modelDark").classList.toggle("formbg");
  changeToggleIcon();
};

const automaticallyDarkinEvening = () => {
  const isEvening = new Date().getHours() >= 19;
  if (isEvening) {
    bodyClasses.add("darkmode");
    document.getElementById("invertImage").classList.add("invert");
    document.getElementById("modelDark").classList.add("bg-black");
  document.getElementById("modelDark").classList.add("formbg");
    changeToggleIcon();
  }
};

//manual darkmode
toggle.addEventListener("click", () => {
  toggleMode();
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      bodyClasses.add("darkmode");
      document.getElementById("invertImage").classList.add("invert");
      document.getElementById("modelDark").classList.add("bg-black");
      document.getElementById("modelDark").classList.remove("formbg");
    } else {
      bodyClasses.remove("darkmode");
      document.getElementById("invertImage").classList.remove("invert");
      document.getElementById("modelDark").classList.remove("bg-black");
      document.getElementById("modelDark").classList.add("formbg");
    }
    changeToggleIcon();
    automaticallyDarkinEvening();
  });
automaticallyDarkinEvening();

// about me model handler
document.getElementById("showAboutme").addEventListener("click", () => {
  console.log("clicked.");
  document.getElementById("about-me").classList.remove("hidden");
  document.getElementById("belowSections").classList.add("hidden");
});
document.getElementById("closeAboutme").addEventListener("click", () => {
  document.getElementById("about-me").classList.add("hidden");
  document.getElementById("belowSections").classList.remove("hidden");
});
