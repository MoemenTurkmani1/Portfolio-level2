document.addEventListener("DOMContentLoaded", function () {
    // Projects Section
    const container = document.getElementById("projects-container");

    const projects = [
        {
            image: "https://th.bing.com/th/id/OIP.NIOmQQ4lH-gX51szuBZe9gHaER?w=317&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7", 
            title: "Netflix Clone",
            description: "A Netflix clone with user authentication, real-time database, and video streaming capabilities.",
            technologies: ["React", "Firebase", "TMDB API"],
            codeLink: "",
            liveDemoLink: ""
        },
        {
            image:"https://www.onlinesolutionsgroup.de/wp-content/uploads/google-efa-2015-2-768x432.jpg",
            title:"Google",
            description:"A Google clone with user authentication, real-time database, and video streaming capabilities",
            technologies:["Java", "C++"],
            codeLink: "",
            liveDemoLink: ""
            
        },
        {
            image: "https://thumbs.dreamstime.com/z/inspiration-showing-sign-to-do-list-internet-concept-structure-usually-made-paper-containing-task-yours-businessman-254400002.jpg",
            title: "To-Do List",
            description: "A simple and efficient task management tool. Add, edit, and delete tasks with ease.",
            technologies: ["JavaScript", "HTML", "CSS"],
            codeLink: "https://github.dev/MoemenTurkmani1/todo-list",
            liveDemoLink: "https://soft-pixie-0f4977.netlify.app/"
        },
        {
            image: "https://th.bing.com/th/id/R.f233742803c46a6f3c8b79ed60463b0f?rik=QhxmppPnXbI3cw&pid=ImgRaw&r=0",
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
                    ${project.technologies.map(tech => `<span id="tech">${tech}</span>`).join(" ")}
                </div>
                <div class="link-container">
                    <a href="${project.codeLink}" target="_blank" class="code-link"><i class="fa-brands fa-github"></i> Code</a>
                    <a href="${project.liveDemoLink}" target="_blank" class="live-demo-link"><i class="fa-solid fa-up-right-from-square"></i> Live Demo</a>
                </div>
            </div>
        `;
    }).join("");

    container.innerHTML = projectElements;

  
  
        let testimonyContainer = document.getElementById("testimony");
        
        let comments = [
            {
                img: "https://th.bing.com/th/id/OIP.UInbaJDzEYhDXegm7t1qkQAAAA?rs=1&pid=ImgDetMain",
                name: "John Doe",
                description: "Marketing Director",
                commit: "\"The team exceeded our expectations with their attention to detail and quick turnaround. They understood our vision perfectly and delivered results that truly impressed our stakeholdersThe team exceeded our expectations with their attention to detail and quick turnaround. They understood our vision perfectly and delivered results that truly impressed our stakeholders\""
            },
           
        ];
        
        const peoples = comments.map(people => {
            return `
                <div class="testimony">
                    <div class="people">
                        <img src="${people.img}" alt="${people.name}">
                        <h3>${people.name}</h3>
                        <p class="description">${people.description}</p>
                    </div>
                    <div class="comment">
                        <p class="commit">${people.commit}</p>
                    </div>
                </div>
            `;
        }).join("");
        
        testimonyContainer.innerHTML = peoples;
    });



        let skills = document.getElementById("skills");
    
        const skillsData = [
            { name: "HTML", image: "https://raw.githubusercontent.com/MoemenTurkmani1/portfolio_web_level_1/refs/heads/main/images/html-logo.webp" },
            { name: "CSS", image: "https://raw.githubusercontent.com/MoemenTurkmani1/portfolio_web_level_1/refs/heads/main/images/css-logo.webp" },
            { name: "JavaScript", image: "https://raw.githubusercontent.com/MoemenTurkmani1/portfolio_web_level_1/refs/heads/main/images/javascript-logo.webp" },
            { name: "Node.js", image: "https://raw.githubusercontent.com/MoemenTurkmani1/portfolio_web_level_1/refs/heads/main/images/node-logo.webp" },
            { name: "React.js", image: "https://raw.githubusercontent.com/MoemenTurkmani1/portfolio_web_level_1/refs/heads/main/images/react-logo.webp" }
        ];
    
        const skillHTML = skillsData.map(skill => {
            return `
                
                    <div class="skill">
                        <img src="${skill.image}" class="image">
                        <span id="skillName">${skill.name}</span>
                    </div>
                
            `;
        }).join("");
    
        skills.innerHTML = skillHTML;

// Phone input initialization

    document.addEventListener('DOMContentLoaded', function() {
        const phoneInput = document.querySelector("#phone");
        if (phoneInput) {
            const iti = window.intlTelInput(phoneInput, {
                preferredCountries: ["lb", "us", "gb"], // Lebanon first
                separateDialCode: true,
                utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
            });
            
            // Add form validation to ensure the phone number is valid before submission
            const form = document.querySelector(".contact-form");
            if (form) {
                form.addEventListener('submit', function(e) {
                    if (!iti.isValidNumber()) {
                        e.preventDefault();
                        alert("Please enter a valid phone number.");
                        phoneInput.focus();
                    }
                });
            }
        }
    });



// EmailJS integration
(function() {
    
    emailjs.init("lzQe2u7K0YNTWqD6H");
    
 
    const formFields = [
        { id: "name", message: "Please enter your full name" },
        { id: "email", message: "Enter a valid email address (example@domain.com)" },
        { id: "phone", message: "Enter a valid phone number with country code" },
        { id: "message", message: "Your message (maximum 300 words)" }
    ];
    
    formFields.forEach(field => {
        const inputElement = document.querySelector(`#${field.id}`);
        if (inputElement) {
            // Create attention text element
            const attentionText = document.createElement("small");
            attentionText.className = "attention-text";
            attentionText.style.fontSize = "0.8rem";
            attentionText.style.color = "#666";
            attentionText.style.display = "block";
            attentionText.style.marginTop = "3px";
            attentionText.style.marginBottom = "10px";
            attentionText.textContent = field.message;
            
            // Insert attention text after input
            inputElement.parentNode.insertBefore(attentionText, inputElement.nextSibling);
            
            // Add validation handlers for each field
            inputElement.addEventListener("blur", function() {
                validateField(inputElement, attentionText);
            });
        }
    });
    
    // Word counter for message textarea
    const messageTextarea = document.querySelector("#message");
    if (messageTextarea) {
        // Create word counter element
        const wordCounter = document.createElement("div");
        wordCounter.className = "word-counter";
        wordCounter.style.fontSize = "0.8rem";
        wordCounter.style.fontWeight = "bold";
        wordCounter.style.marginTop = "5px";
        wordCounter.textContent = "0 / 300 words";
        
        // Insert counter after textarea and attention text
        const attentionText = messageTextarea.nextSibling;
        attentionText.parentNode.insertBefore(wordCounter, attentionText.nextSibling);
        
        // Update counter on input
        messageTextarea.addEventListener("input", function() {
            const text = messageTextarea.value.trim();
            const words = text ? text.split(/\s+/).length : 0;
            
            wordCounter.textContent = `${words} / 300 words`;
            
            // Highlight counter if over limit
            if (words > 300) {
                wordCounter.style.color = "red";
            } else if (words > 250) {
                wordCounter.style.color = "orange";
            } else {
                wordCounter.style.color = "green";
            }
        });
    }
    
    // Validate individual field
    function validateField(inputElement, attentionText) {
        let isValid = true;
        
        if (inputElement.id === "name") {
            if (inputElement.value.trim().length < 2) {
                attentionText.textContent = "Name must be at least 2 characters";
                attentionText.style.color = "red";
                isValid = false;
            } else {
                attentionText.textContent = "Please enter your full name";
                attentionText.style.color = "#666";
            }
        } else if (inputElement.id === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(inputElement.value)) {
                attentionText.textContent = "Please enter a valid email address";
                attentionText.style.color = "red";
                isValid = false;
            } else {
                attentionText.textContent = "Enter a valid email address (example@domain.com)";
                attentionText.style.color = "#666";
            }
        } else if (inputElement.id === "phone") {
            if (!phoneInput.value.trim()) {
                attentionText.textContent = "Phone number is required";
                attentionText.style.color = "red";
                isValid = false;
            } else {
                attentionText.textContent = "Enter a valid phone number with country code";
                attentionText.style.color = "#666";
            }
        } else if (inputElement.id === "message") {
            const words = inputElement.value.trim() ? inputElement.value.trim().split(/\s+/).length : 0;
            if (words > 300) {
                attentionText.textContent = "Your message exceeds 300 words limit";
                attentionText.style.color = "red";
                isValid = false;
            } else {
                attentionText.textContent = "Your message (maximum 300 words)";
                attentionText.style.color = "#666";
            }
        }
        
        return isValid;
    }
    

    const contactForm = document.querySelector(".contact-form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
 
            let isFormValid = true;
            
            formFields.forEach(field => {
                const inputElement = document.querySelector(`#${field.id}`);
                const attentionText = inputElement.nextSibling;
                
                if (!validateField(inputElement, attentionText)) {
                    isFormValid = false;
                }
            });
            
            if (!isFormValid) {
                alert("Please correct the errors in the form before submitting.");
                return;
            }
            
          
            const submitButton = contactForm.querySelector("button[type='submit']");
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = "Sending...";
            submitButton.disabled = true;
            
      
            const name = contactForm.querySelector("#name").value;
            const email = contactForm.querySelector("#email").value;
            const phone = phoneInput.value;
            const message = contactForm.querySelector("#message").value;
            
     
            const templateParams = {
                from_name: name,
                from_email: email,
                phone_number: phone,
                message: message
            };
            

            emailjs.send("service_f9xz2q3","template_aaneodo", templateParams)
                .then(function(response) {
                    console.log("SUCCESS!", response.status, response.text);
                    
       
                    contactForm.reset();
                    alert("Your message has been sent successfully!");
              
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                    
                    const wordCounter = document.querySelector(".word-counter");
                    if (wordCounter) {
                        wordCounter.textContent = "0 / 300 words";
                        wordCounter.style.color = "green";
                    }
                })
                .catch(function(error) {
                    console.error("FAILED...", error);
                    
         
                    alert("Failed to send message. Please try again later.");
      
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                });
        });
    }
})();