//navbarstart
// Mobile Nav Close on Click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse).toggle();
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});*/
// Add this to your script.js

document.addEventListener('DOMContentLoaded', () => {
    const fixedButtons = document.querySelector('.fixed-buttons');
    const homeSection = document.getElementById('home');
    const homeHeight = homeSection.offsetHeight;

    function updateButtonVisibility() {
        const scrollPosition = window.pageYOffset;

        if (scrollPosition < homeHeight - 100) {
            fixedButtons.classList.remove('hidden');
        } else {
            fixedButtons.classList.add('hidden');
        }
    }

    window.addEventListener('scroll', updateButtonVisibility);
    window.addEventListener('resize', updateButtonVisibility);
    updateButtonVisibility(); // Initial check
});
/*document.addEventListener('DOMContentLoaded', () => {
    const fixedButtons = document.querySelector('.fixed-buttons');
    const homeSection = document.querySelector('.hero-section');

    function handleScroll() {
        const homeRect = homeSection.getBoundingClientRect();
        const isHomeVisible = homeRect.bottom > 0 && homeRect.top < window.innerHeight;

        if (isHomeVisible) {
            fixedButtons.classList.remove('hidden');
        } else {
            fixedButtons.classList.add('hidden');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
});*/
// Update active state on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-item');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            const current = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        }
    });
});

//nav-stop
/*
const designations = [
    "Data Scientist",
    "ML Engineer",
    "Python Developer",
    "Data Analyst"
];
let currentDesignation = 0;
const designationElement = document.getElementById('designation');

function updateDesignation() {
    designationElement.style.opacity = 0;
    setTimeout(() => {
        designationElement.textContent = designations[currentDesignation];
        designationElement.style.opacity = 1;
        currentDesignation = (currentDesignation + 1) % designations.length;
    }, 500);
}
setInterval(updateDesignation, 2000);*/
// Text Animation
const designations = [
    "Data Scientist",
    "ML Engineer",
    "Python Developer",
    "Data Analyst"
];
let currentDesignation = 0;
const designationElement = document.getElementById('designation');

function updateDesignation() {
    designationElement.style.opacity = 0;
    setTimeout(() => {
        designationElement.textContent = designations[currentDesignation];
        designationElement.style.opacity = 1;
        currentDesignation = (currentDesignation + 1) % designations.length;
    }, 500);
}
setInterval(updateDesignation, 2000);

// Mobile Swipe Detection
let touchStartX = 0;
let touchEndX = 0;

const handleGesture = () => {
    if (touchEndX < touchStartX - 30) {
        document.querySelector('.carousel-control-next').click();
    }
    if (touchEndX > touchStartX + 30) {
        document.querySelector('.carousel-control-prev').click();
    }
}

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
});

// Button Hover Effects for Mobile
if (window.innerWidth < 768) {
    document.querySelectorAll('.btn-custom').forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        button.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}
// Previous JavaScript remains the same

// Add this to handle button visibility on scroll
window.addEventListener('scroll', function() {
    const heroSection = document.getElementById('home');
    const buttons = document.querySelector('.hero-buttons');
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

    if (window.pageYOffset > heroBottom) {
        buttons.style.opacity = '0';
        buttons.style.pointerEvents = 'none';
    } else {
        buttons.style.opacity = '1';
        buttons.style.pointerEvents = 'all';
    }
});
//skill section
const skills = [{
    name: "Python",
    angle: -48,
    distance: 250,
    color: 'color-accent-1'
}, {
    name: "SQL",
    angle: -135,
    distance: 260,
    color: 'color-accent-3'
}, {
    name: "Statistics",
    angle: 135,
    distance: 250,
    color: 'color-accent-3'
}, {
    name: "Machine Learning",
    angle: 45,
    distance: 250,
    color: 'color-accent-1'
}, {
    name: "Deep Learning",
    angle: 0,
    distance: 350,
    color: 'color-accent-2'
}, {
    name: "NLP",
    angle: 182,
    distance: 350,
    color: 'color-accent-2'
}, {
    name: "Data Visulaization",
    angle: 268,
    distance: 350,
    color: 'color-accent-2'
}];

const container = document.querySelector('.tree-container');
let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
                    width: ${Math.random() * 4}px;
                    height: ${Math.random() * 4}px;
                    left: ${Math.random() * 100}%;
                    animation-duration: ${Math.random() * 5 + 2}s;
                    animation-delay: ${Math.random() * 4}s;
                `;
        particlesContainer.appendChild(particle);
    }
}

function createSkillTree() {
    skills.forEach((skill, index) => {
        const angle = (skill.angle * Math.PI) / 180;
        const x = centerX + Math.cos(angle) * skill.distance;
        const y = centerY + Math.sin(angle) * skill.distance;

        // Create root path
        const path = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        path.classList.add('skill-root');
        path.setAttribute("width", "100%");
        path.setAttribute("height", "100%");

        const pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const curveIntensity = Math.random() * 50 + 30;
        pathEl.setAttribute("d", `
                    M ${centerX} ${centerY}
                    C ${centerX + curveIntensity} ${centerY - curveIntensity},
                      ${x - curveIntensity} ${y + curveIntensity},
                      ${x} ${y}
                `);
        path.appendChild(pathEl);
        container.appendChild(path);

        // Create skill node
        const node = document.createElement('div');
        node.classList.add('skill-node', skill.color);
        node.textContent = skill.name;
        node.style.left = `${x}px`;
        node.style.top = `${y}px`;
        node.style.animationDelay = `${index * 0.1}s`;
        container.appendChild(node);

        // Add interactions
        node.addEventListener('mouseover', () => {
            pathEl.style.strokeWidth = '3';
            pathEl.style.filter = 'drop-shadow(0 0 8px currentColor)';
        });

        node.addEventListener('mouseout', () => {
            pathEl.style.strokeWidth = '2';
            pathEl.style.filter = 'none';
        });

        node.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            ripple.style.left = `${e.clientX}px`;
            ripple.style.top = `${e.clientY}px`;
            document.body.appendChild(ripple);
            setTimeout(() => ripple.remove(), 1000);
        });
    });
}



// Update positions on load and resize

function updatePositions() {
    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;
    container.querySelectorAll('.skill-node, .skill-root').forEach(el => el.remove());
    createSkillTree();
}

window.addEventListener('resize', () => {
    updatePositions();
});

// Initialize
createParticles();
createSkillTree();
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    loadSkills();
    initAnimations();
    initSmoothScroll();
});


// Initialize 3D background when page loads

const projects = [
    // Data Analysis Projects
    {
        title: "LOAN PREDICTION ANALYSIS ",
        category: "data-analysis",
        image: "images/loan.png",
        description: "This project  aims to optimize risk assessment while ensuring equitable lending practices through data-driven decision-making frameworks.",
        tech: ["Python", "Pandas", "numpy", "matplotlib", "seaborn"],
        links: {
            code: "#",
            docs: "#",

        }
    },
    {
        title: "HEART FAILURE PREDICTION ANALYSIS",
        category: "data-analysis",
        image: "images/heart.webp",
        description: "This project leverages the heart failure reasons,enabling early intervention through data driven insights",
        tech: ["Python", "pandas", "NUmpy", "Matplotlib", "Seaborn"],
        links: {
            code: "#",
            docs: "#"
        }
    },
    {
        title: "HR  ANALYSIS ",
        category: "data-analysis",
        image: "images/hr.webp",
        description: "This project analyzes employee performance metrics, tenure, and organizational dynamics to identify promotion patterns and biases, enabling fairer talent management",
        tech: ["Python", "pandas", "numpy", "Matplotlib", "Seaborn"],
        links: {
            code: "#",
            docs: "#"
        }
    },

    //Machine Learning Projects
    {
        title: "ONLINE  FOOD DELIVERY PLATFORM FEEDBACK APP",
        category: "ml",
        image: "images/food.jpg",
        description: "Extracted various patterns/insights from the data.Developed a ml model for classification of feedback and achieved 84% accuracy.It enables businesses to address concerns swiftly, improve services, and tailor strategies to boost customer retention and satisfaction.",

        tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "matplotlib", "seaborn"],
        links: {
            code: "https://github.com/venkatesh1378/resume-projects/blob/main/ML/online%20food%20feedback.ipynb",
            docs: "https://github.com/venkatesh1378/resume-projects/blob/main/ML/ONLINE%20FOOD%20DELIVERY%20PLATFORMS%20FEEDBACK%20APP.pdf",
            app: "https://www.linkedin.com/posts/sura-venkatesh_successfully-completed-streamlit-application-activity-7180563716017414144-aUd8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmJPoYBd3Oymdw31DduVeMgh_4jxm1_SYY"

        }
    },
    {
        title: "HOUSE PRICE PREDICTION",
        category: "ml",
        image: "images/house_price.jpeg",
        description: "Implemented a Regression model and this model estimates property values by analyzing features like square footage, bedrooms, and location. It applies a linear equation to historical data, minimizing prediction errors to forecast prices accurately.",

        tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "matplotlib", "seaborn"],
        links: {
            code: "https://github.com/venkatesh1378/REGRESSION/blob/main/houseprice_prediction.ipynb",

        }
    },

    {
        title: "CLUSTER ANALYSIS ON CUSTOMER  DATA  IN MALLS",
        category: "ml",
        image: "images/cluster.jpg",
        description: "Performed clustering analysis to uncover behaviour patterns It enables targeted marketing, personalized promotions, and optimized store layouts to enhance customer experience and drive revenue.",
        tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
        links: {
            code: "https://github.com/venkatesh1378/CLUSTERING/blob/main/%20cluster%20analysis%20on%20customer%20data%20in%20malls.ipynb",

        }
    },
    //dl projets

    {
        title: "FASHION ARTICLE CLASSIFICATION SYSTEM USING ARTIFICAL NEURAL NETWORK (ANN)",
        category: "dl",
        image: "images/ann.png",
        description: "Developed a deep learning model using ANN architecture to classify 10 categories of fashion products from the Fashion MNIST dataset.Implemented  neural network design with hidden layers, and  achieved 90% accuracy.",
        tech: ["Python", "pandas", "numpy", "matplotlib", 'tensorflow', 'keras'],
        links: {
            code: "https://github.com/venkatesh1378/ANN/blob/main/Deeplearning_Project_Fashion_dataset.ipynb",

        }
    },

    {
        title: "CIFAR-10 IMAGE CLASSIFICATION  SYSTEM  USING CONVOLUTION NEURAL NETWORK(CNN)",
        category: "dl",
        image: "images/cifar.png",
        description: " Built a Convolutional Neural Network using TensorFlow to classify 10 object categories,and Achieved 80% accuracy",
        tech: ["Python", "pandas", "numpy", "matplotlib", 'tensorflow', 'keras'],

        links: {
            code: "https://github.com/venkatesh1378/CNN/blob/main/CIFAR10%20CNN.ipynb",

        }
    },

    {
        title: "Image Classification Analysis Using Pretrained Models: ResNet50 and  MobileNet,VGG16",
        category: "dl",
        image: "images/tarnsfer-learning.jpg",
        description: "Implemented transfer learning on various images and  analyzing accuracy, computational efficiency, and inference speed for real-world deployment scenarios",
        tech: ["Python", "pandas", "numpy", "matplotlib", 'tensorflow', 'keras'],
        links: {
            code: "https://github.com/venkatesh1378/CNN/blob/main/CIFAR10%20CNN.ipynb",

        }
    },
    {
        title: "Customer movement Analysis in malls using YOLOV8",
        category: "dl",
        image: "images/yolo.jpeg",
        description: "Implemented object detection and tracking system using yolov8 model for monitoring the customers behaviour in malls.",
        tech: ["Python", "open-cv", "yolov8"],
        links: {
            code: "https://www.linkedin.com/posts/sura-venkatesh_yolov8-activity-7180572611234430977-_S6D?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmJPoYBd3Oymdw31DduVeMgh_4jxm1_SYY",
            app: "https://www.linkedin.com/posts/sura-venkatesh_successfully-completed-streamlit-application-activity-7180897499405066240-flOD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmJPoYBd3Oymdw31DduVeMgh_4jxm1_SYY"

        }
    },


    // NLP Projects
    {
        title: "SOCIAL MEDIA SENTIMENTAL ANALYSIS",
        category: "nlp",
        image: "images/sentiment.png",
        description: "Developed a sentiment analysis tool to evaluate public opinion from Twitter data using NLP and machine learning, enabling real-time classification of tweets into positive/negative/neutral sentiments",
        tech: ["Python", "numpy", "pandas", "matplotlib", "seaborn", "NLTK"],
        links: {
            code: "https://github.com/venkatesh1378/NLP/blob/main/SENTIMENT%20ANALYSIS.ipynb",

        }
    }, {
        title: "IMDB MOVIE REVIEWS SENTIMENTAL ANALYSIS",
        category: "nlp",
        image: "images/IMDB.jpg",
        description: "Developed a sentiment classifier  to categorize IMDB movie reviews as positive/negative, achieving 90% accuracy",
        tech: ["Python", "pandas", "transformers", " Scikit-learn"],
        links: {
            code: 'https://github.com/venkatesh1378/NLP/blob/main/IMDB%20DATASET.ipynb',

        },
    }, {
        title: "SMS SPAM DETECTION WITH BERT TRANSFORMERS",
        category: "nlp",
        image: "images/bert.jpeg",
        description: "A  NLP system for identifying spam messages.and BERT's contextual embeddings for state-of-the-art text classification accuracy.",
        tech: ["Python", "pandas", "transformers", " Scikit-learn"],
        links: {
            code: 'https://github.com/venkatesh1378/BERT/blob/main/BERT%20MODEL/Custom_Sentiment_Analysis.ipynb',

        }
    },
    // Gen-AI Projects
    {
        title: "DOCUMNET Q/A USING GEMINI AI  ",
        category: "gen-ai",
        image: "images/gemini.jpg",
        description: "Developed  a Document based question and answer search system using Gemini AI model embeddings ",
        tech: ["Python", "numpy", "pandas", "Gen-ai", "gemini-1.0.pro"],
        links: {
            code: "https://github.com/venkatesh1378/Generative-AI/blob/main/gemini_completed.ipynb",

        }
    },
];

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    initFilterButtons();
});

function loadProjects(filter = 'all') {
    const container = document.querySelector('.projects-container');
    container.innerHTML = '';

    const filteredProjects = filter === 'all' ?
        projects :
        projects.filter(project => project.category === filter);

    filteredProjects.forEach(project => {
                const card = document.createElement('div');
                card.className = 'project-card';
                card.innerHTML = `
            <img src="${project.image}" class="project-image" alt="${project.title}">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                
                <div class="tech-stack">
                    ${project.tech.map(tech => `
                        <span class="tech-item">${tech}</span>
                    `).join('')}
                </div>

                <div class="project-links">
                    ${project.links.code ? `
                        <a href="${project.links.code}" class="project-link link-code">
                            <i class="fas fa-code"></i> Code
                        </a>
                    ` : ''}
                    
                    ${project.links.docs ? `
                        <a href="${project.links.docs}" class="project-link link-docs">
                            <i class="fas fa-file-alt"></i> Docs
                        </a>
                    ` : ''}
                    
                    ${project.links.app ? `
                        <a href="${project.links.app}" class="project-link link-app">
                            <i class="fas fa-external-link-alt"></i> App
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function initFilterButtons() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadProjects(this.dataset.filter);
        });
    });
}
function initMap() {
    const map = L.map('map').setView([17.3850, 78.4867], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([17.3850, 78.4867]).addTo(map)
        .bindPopup('My Location')
        .openPopup();
}

// Enhanced Form Validation
document.addEventListener('DOMContentLoaded', function() {
    initMap();

    // Real-time validation
    document.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('input', function() {
            if (this.checkValidity()) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            } else {
                this.classList.remove('is-valid');
                this.classList.add('is-invalid');
            }
        });
    });

    // Form Submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('button[type="submit"]');
        const spinner = btn.querySelector('.spinner-border');
        const submitText = btn.querySelector('.submit-text');

        if (this.checkValidity()) {
            submitText.textContent = 'Sending...';
            spinner.classList.remove('d-none');

            // Simulate API call
            setTimeout(() => {
                spinner.classList.add('d-none');
                submitText.textContent = 'Message Sent!';
                document.getElementById('successMessage').classList.remove('d-none');
                document.getElementById('successMessage').textContent = '🎉 Message sent successfully! I\'ll respond within 24 hours.';
                this.reset();
                setTimeout(() => {
                    submitText.textContent = 'Send Message';
                }, 2000);
            }, 1500);
        }
    }, false);
});
// JavaScript
// JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const textarea = form.querySelector('textarea');
    const charCount = document.querySelector('.char-count span');
    const submitBtn = form.querySelector('.submit-btn');
    const clearBtn = form.querySelector('.clear-btn');
    const spinner = submitBtn.querySelector('.spinner-border');
    const submitText = submitBtn.querySelector('.submit-text');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Character count
    textarea.addEventListener('input', () => {
        const currentLength = textarea.value.length;
        charCount.textContent = currentLength;
    });

    // Clear form
    clearBtn.addEventListener('click', () => {
        form.reset();
        errorMessage.classList.add('d-none');
        successMessage.classList.add('d-none');
        charCount.textContent = '0';
        form.querySelectorAll('.input-field').forEach(input => {
            input.classList.remove('is-invalid');
        });
    });

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        errorMessage.classList.add('d-none');
        
        if (!form.checkValidity()) {
            errorMessage.textContent = 'Please enter all required details';
            errorMessage.classList.remove('d-none');
            form.querySelectorAll('.input-field:invalid').forEach(input => {
                input.classList.add('is-invalid');
            });
            return;
        }

        submitText.textContent = 'Sending...';
        spinner.classList.remove('d-none');
        submitBtn.disabled = true;
        clearBtn.disabled = true;

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            successMessage.textContent = 'Message sent successfully!';
            successMessage.classList.remove('d-none');
            form.reset();
            charCount.textContent = '0';
        } catch (error) {
            errorMessage.textContent = 'Error sending message. Please try again.';
            errorMessage.classList.remove('d-none');
        } finally {
            submitText.textContent = 'Send Message';
            spinner.classList.add('d-none');
            submitBtn.disabled = false;
            clearBtn.disabled = false;
        }
    });

    // Input validation
    form.querySelectorAll('.input-field').forEach(input => {
        input.addEventListener('input', () => {
            if (input.checkValidity()) {
                input.classList.remove('is-invalid');
            }
        });
    });
});