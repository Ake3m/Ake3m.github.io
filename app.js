const projects = [
    {
        name: "NDHU Smart Park",
        description: "Created as a university graduation project, NDHU Smart Park is a smart parking solution that makes use of various technologies and machine learning in order to provide accurate real time parking lot updates.",
        imageURL: "https://user-images.githubusercontent.com/25711110/184541676-4995be97-b415-47d6-90a3-60ae2853f5c8.png",
        stack: ["Python", "Flutter/Dart", "OpenCV", "YoloV3", "Firebase"],
        githubLink: "https://github.com/Ake3m/NDHU-Smart-Park"
    },
    {
        name: "NDHU Elearning Assignment Assistant",
        description: " A Google Chrome Extension for the National Dong Hwa University (NDHU) Elearning website that helps manage assignments and provides notifications regarding upcoming assignment due dates.",
        imageURL: "./assets/elearn-assist-logo.png",
        stack: ["Javascript", "HTML", "CSS"],
        githubLink: "https://github.com/Ake3m/Elearn-Assist"
    },
    {
        name: "Taiwan Earthquake Analysis System (TEAS)",
        description: "Taiwan Earthquake Analysis System (TEAS) is a python based webcrawling app that utilizes Selenium, Pandas, Matplotlib and Tkinter in order to display and plot Taiwan earthquake information.",
        imageURL: "./assets/TEAS.png",
        stack: ["Python", "Pandas", "Matplotlib", "Tkinter", "Pillow", "Selenium", "Beautifulsoup", "Numpy"],
        githubLink: "https://github.com/Ake3m/Earthquake-Analyzer"

    },
    {
        name: "Color Launch",
        description: "Created as a final project submission for  CSIEB0340-Introduction to Virtual Reality course. Developed using C# and Unity, Color Launch is puzzle platformer using color manipulation to complete the stage. ",
        imageURL: "./assets/color-launch.png",
        stack: ["C#", "Unity"],
        githubLink: "https://github.com/Ake3m/Color-Launch",
    },
    {
        name: "Techy",
        description:"A Discord bot created to aid the NDHU Tech Club's Discord Server. Primarily performs role assignments.",
        imageURL: "./assets/Techy.png",
        stack: ["Javascript"],
        githubLink: "https://github.com/Ake3m/Techy",
    },
    {
        name: "Brave Heart Clinic",
        description: "Created as a final project submission for CSIEB0290-Database Systems course. It's a clinic appointment booking system using XAMPP, MYSQL, PHP and HTML/CSS.",
        imageURL: "./assets/brave-heart.png",
        stack: ["HTML", "CSS", "Javascript", "PHP", "SQL", ],
        githubLink: "https://github.com/Ake3m/Database-Project",
    },
    // {
    //     name: "One Piece Grabber",
    //     description: "A script that allows a user to scrape, download and read One Piece chapters in PDF format.",
    //     imageURL: "./assets/one-piece.png",
    //     stack: ["Python","Beautifulsoup", "Pillow", "Regular Expressions"],
    //     githubLink: "https://github.com/Ake3m/One-Piece-Grabber",
    // }
    // {
    //     name: "",
    //     description: "",
    //     imageURL: "",
    //     stack: [],
    //     githubLink: "",
    // },
    
];

let projectContainer=document.querySelector(".projects_container");


for (let project of projects)
{
    let {name, description, imageURL, stack, githubLink} = project
    console.log(name)

    //creating HTML elements to be inserted
    let projectCard=document.createElement("div");
    let projectCardImg=document.createElement("img");
    let projectCardTitle=document.createElement("p");
    let projectCardDescription=document.createElement("p");
    let projectCardLink=document.createElement("a");
    let projectCardStack=document.createElement("ul");
    let githubIcon=document.createElement("i")

    //add content to the elements
    projectCardImg.src=imageURL;
    projectCardImg.alt=`project logo for ${name}`;
    projectCardImg.title=`${name} logo`;

    projectCardTitle.textContent=name;
    projectCardDescription.textContent=description
    projectCardDescription.style.textAlign="justify";
    projectCardDescription.style.color="#898989"

    projectCardLink.href=githubLink
    projectCardLink.target="_blank"
    projectCardLink.textContent="Repository";
    projectCardLink.title=`Repository link for ${name}`

    projectCardLink.appendChild(githubIcon)

    for(let skill of stack)
    {
        let stackLi = document.createElement("li");
        stackLi.textContent=skill;
        projectCardStack.appendChild(stackLi)
    }



    //add details to card
    projectCard.appendChild(projectCardImg)
    projectCard.appendChild(projectCardTitle)
    projectCard.appendChild(projectCardDescription)
    projectCard.appendChild(projectCardStack)
    projectCard.appendChild(projectCardLink)


    //style elements
    projectCard.classList.add("project_card")
    projectCardTitle.classList.add("project_card-title")
    projectCardStack.classList.add("project_card-stack")
    githubIcon.classList.add("fa-brands", "fa-github")
    projectCardLink.classList.add("repository_btn")

    //add card to container
    projectContainer.append(projectCard)

}