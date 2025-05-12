// Certification data
const certificates = {
    python: [
        { title: "Python Programming", image: "certifications/python.jpg" },
        { title: "Data science", image: "certifications/Edureka ds.jpg" },
        { title: "Data science fundamentals", image: "certifications/scalar Ds.jpg" },

    ],
    data_analysis: [
        { title: "data analysis", image: "certifications/cognitive-ai.jpg" },
        { title: "data analysis", image: "certifications/cisco-data-analysis.jpg" }
    ],
    ml: [
        { title: "ml", image: "certifications/ml.jpg" },
        { title: "ml", image: "certifications/ML-1.jpg" }
    ],

    dl: [
        { title: "Dl", image: "certifications/deep learning-1.jpg" },
        { title: "dl", image: "certifications/DL.jpg" }
    ],
    others: [
        { title: "TCS", image: "certifications/TCS.jpg" },
        { title: "Accenture", image: "certifications/Accenture.jpg" },
        { title: "hakkerrank", image: "certifications/hackerrank.jpg" },
        { title: "codechef", image: "certifications/codechef.jpg" },
        { title: "NIT", image: "certifications/NIT.jpeg" },

    ]
};

// Load certificates
function loadCertificates(filter = 'all') {
    const container = document.querySelector('.certificates-container');
    container.innerHTML = '';

    const certs = filter === 'all' ?
        Object.values(certificates).flat() :
        certificates[filter] || [];

    certs.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'certificate-card';
        card.innerHTML = `
            <img src="${cert.image}" class="certificate-image" alt="${cert.title}">
            
        `;
        container.appendChild(card);
    });
}

// Initialize filter buttons
document.querySelectorAll('.cert-filter').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.cert-filter').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        loadCertificates(this.dataset.filter);
    });
});

// Initial load
document.addEventListener('DOMContentLoaded', () => loadCertificates());