const projects = [
    {
        name: "NDHU Smart Park",
        description: "Created as a university graduation project, NDHU Smart Park is a smart parking solution that makes use of various platforms and machine learning in order to provide accurate real time parking lot updates. A python program is the heart of the application which makes use of image processing techniques and the YOLO algorithm in order to detect the presence of a vehicle. Once detected, it would trigger an update event to the Firestore database to be consumed and updated on a mobile application, developed using Flutter and Dart. For more information, check out the Github Repo.",
        imageURL: "https://user-images.githubusercontent.com/25711110/184541676-4995be97-b415-47d6-90a3-60ae2853f5c8.png",
        stack: ["Python", "Flutter/Dart", "OpenCV", "YoloV3", "Firebase"],
        githubLink: "https://github.com/Ake3m/NDHU-Smart-Park",
        tileColor: "#12a460"
    },
    {
        name: "NDHU Elearning Assignment Assistant",
        description: " A Google Chrome Extension for the National Dong Hwa University (NDHU) Elearning website that helps manage assignments and provides notifications regarding upcoming assignment due dates.",
        imageURL: "./assets/elearn-assist-logo.png",
        stack: ["Javascript", "HTML", "CSS"],
        githubLink: "https://github.com/Ake3m/Elearn-Assist",
        tileColor: "#017149"
    },
    {
        name: "Taiwan Earthquake Analysis System (TEAS)",
        description: "Taiwan Earthquake Analysis System(TEAS) is a python based webcrawling app that utilizes Selenium, Pandas, Matplotlib and Tkinter in order to display and plot Taiwan earthquake information.",
        imageURL: "./assets/TEAS.png",
        stack: ["Python", "Pandas", "Matplotlib", "Tkinter", "Pillow", "Selenium", "Beautifulsoup", "Numpy"],
        githubLink: "https://github.com/Ake3m/Earthquake-Analyzer",
        tileColor: "#017149"
    },
    // {
    //     name: "",
    //     description: "",
    //     imageURL: "",
    //     stack: [],
    //     githubLink: "",
    //     tileColor: ""
    // },
    // {
    //     name: "",
    //     description: "",
    //     imageURL: "",
    //     stack: [],
    //     githubLink: "",
    //     tileColor: ""
    // },
    // {
    //     name: "",
    //     description: "",
    //     imageURL: "",
    //     stack: [],
    //     githubLink: "",
    //     tileColor: ""
    // },
    // {
    //     name: "",
    //     description: "",
    //     imageURL: "",
    //     stack: [],
    //     githubLink: "",
    //     tileColor: ""
    // },
    // {
    //     name: "",
    //     description: "",
    //     imageURL: "",
    //     stack: [],
    //     githubLink: "",
    //     tileColor: ""
    // },
    // {
    //     name: "",
    //     description: "",
    //     imageURL: "",
    //     stack: [],
    //     githubLink: "",
    //     tileColor: ""
    // },
    // {
    //     name: "",
    //     description: "",
    //     imageURL: "",
    //     stack: [],
    //     githubLink: "",
    //     tileColor: ""
    // },
    // {
    //     name: "",
    //     description: "",
    //     imageURL: "",
    //     stack: [],
    //     githubLink: "",
    //     tileColor: ""
    // },
];

let projectContainer=document.querySelector(".projects_container");


for (let project of projects)
{
    let {name, description, imageURL, stack, githubLink, tileColor} = project
    console.log(name)

    //creating HTML elements to be inserted
    let projectCard=document.createElement("div");
    let projectCardImg=document.createElement("img")
    let projecCardTtitle=document.createElement("p");
    let projectCardDescription=document.createElement("p")
    let projectCardLink=document.createElement("a")

    //add content to the elements
    projectCardImg.src=imageURL;
    projectCardImg.alt=`project logo for ${name}`;
    projectCardImg.title=`${name} logo`;

    projectCard.appendChild(projectCardImg)

    projectContainer.append(projectCard)

}