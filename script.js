document.addEventListener("DOMContentLoaded", function () {
    // Projects Section
    const container = document.getElementById("projects-container");

    const projects = [
        {
            image: "https://i.postimg.cc/T1wxrNGP/net.jpg", 
            title: "Netflix Clone",
            description: "A Netflix clone with user authentication, real-time database, and video streaming capabilities.",
            technologies: ["React", "Firebase", "TMDB API"],
            codeLink: "",
            liveDemoLink: ""
        },
        {
            image: "https://i.postimg.cc/NfZtHxng/Capture-d-cran-2025-03-01-103424.png",
            title: "To-Do List",
            description: "A simple and efficient task management tool. Add, edit, and delete tasks with ease.",
            technologies: ["JavaScript", "HTML", "CSS"],
            codeLink: "https://github.dev/MoemenTurkmani1/todo-list",
            liveDemoLink: "https://soft-pixie-0f4977.netlify.app/"
        },
        {
            image: "https://i.postimg.cc/rsdbVBM5/1446-09-01-11-25-13-52c89aeb.jpg",
            title: "Portfolio",
            description: "A professional portfolio showcasing my skills, projects, and experience.",
            technologies: ["JavaScript", "HTML", "CSS"],
            codeLink: "",
            liveDemoLink: ""
        }
    ];

    const projectElements = projects.map(project => {
        return `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="technologies">
                    ${project.technologies.map(tech => `<span class="tech">${tech}</span>`).join(" ")}
                </div>
                <div class="link-container">
                    <a href="${project.codeLink}" target="_blank" class="code-link"><i class="fa-brands fa-github"></i> Code</a>
                    <a href="${project.liveDemoLink}" target="_blank" class="live-demo-link"><i class="fa-solid fa-up-right-from-square"></i> Live Demo</a>
                </div>
            </div>
        `;
    }).join("");

    container.innerHTML = projectElements;

  
    let testimony = document.getElementById("testimony");

    let comments = [
        {   
            img: "https://via.placeholder.com/150",
            name: "John Doe",
            description: "Lorem ipsum dolor sit.",
            commit: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, sint repudiandae ratione exercitationem saepe distinctio cumque quaerat nostrum laborum? Rem adipisci natus eos nemo reprehenderit, cumque nostrum enim commodi."
        }
    ];

    const peoples = comments.map(people => {
        return `
            <div class="testimony">
            <div class="people">
                <img src="${people.img}" alt="${people.name}">
                <h3>${people.name}</h3>
                <p>${people.description}</p>
            </div>
                <div class="comment">
                    <p class="commit">${people.commit}</p>
                </div>
            </div>
        `;
    }).join("");

    testimony.innerHTML = peoples;
});
