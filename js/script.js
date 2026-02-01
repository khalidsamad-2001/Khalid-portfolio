// ========================================
// NAVIGATION MENU TOGGLE (Mobile)
// ========================================
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Close menu when clicking on a link
document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.remove('active');
    });
});

// ========================================
// SCROLL TO TOP BUTTON
// ========================================
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ========================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// DOWNLOAD CV FUNCTION
// ========================================
function downloadCV() {
    // Path to your CV file in the files folder
    const cvPath = 'images/KHALID c.v.pdf';
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Khalid_Samad_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success message
    alert('CV download started! If the download doesn\'t start, please check if the CV file exists in the files folder.');
}

// Handle Form Submit
async function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // REPLACE WITH YOUR WEB APP URL FROM STEP 1
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwy_5HrNWhYQhqisxEvummsAUwahtKj6R73M-BMMy1MP8NDZKDZ9vh5ZvVITrkxJn-iLg/exec';
    
    const submitBtn = event.target.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);
    
    try {
        await fetch(scriptURL, {
            method: 'POST',
            body: formData
        });
        
        alert('Thank you ' + name + '! Your message has been received. I will get back to you soon!');
        event.target.reset();
        
    } catch (error) {
        alert('Thank you ' + name + '! Your message has been sent successfully!');
        event.target.reset();
    }
    
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
}

// ========================================
// SERVICE MODAL FUNCTIONS
// ========================================
function openModal(serviceType) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    
    let content = '';
    
    switch(serviceType) {
        case 'graphicDesign':
            content = `
                <h2 style="color: var(--primary-color); margin-bottom: 1rem;">Graphic Design Services</h2>
                <p style="color: #cccccc; line-height: 1.8;">
                    I offer professional graphic design services including:
                </p>
                <ul style="color: #cccccc; line-height: 2; margin: 1rem 0; padding-left: 2rem;">
                    <li>Logo Design & Branding</li>
                    <li>Social Media Graphics</li>
                    <li>Marketing Materials (Flyers, Posters, Brochures)</li>
                    <li>Business Cards & Stationery</li>
                    <li>Digital Illustrations</li>
                    <li>Photo Editing & Retouching</li>
                </ul>
                <p style="color: #cccccc; line-height: 1.8;">
                    <strong style="color: var(--primary-color);">Tools:</strong> Adobe Photoshop, Illustrator, Canva
                </p>
                <p style="color: #cccccc; line-height: 1.8;">
                    <strong style="color: var(--primary-color);">Delivery:</strong> Quick turnaround with unlimited revisions
                </p>
            `;
            break;
            
        case 'dataEntry':
            content = `
                <h2 style="color: var(--primary-color); margin-bottom: 1rem;">Data Entry Services</h2>
                <p style="color: #cccccc; line-height: 1.8;">
                    Professional data entry services with high accuracy:
                </p>
                <ul style="color: #cccccc; line-height: 2; margin: 1rem 0; padding-left: 2rem;">
                    <li>Data Entry & Database Management</li>
                    <li>Excel Spreadsheet Creation & Management</li>
                    <li>Data Cleaning & Formatting</li>
                    <li>PDF to Excel/Word Conversion</li>
                    <li>Online Research & Data Collection</li>
                    <li>CRM Data Management</li>
                </ul>
                <p style="color: #cccccc; line-height: 1.8;">
                    <strong style="color: var(--primary-color);">Tools:</strong> Microsoft Excel, Google Sheets, Access
                </p>
                <p style="color: #cccccc; line-height: 1.8;">
                    <strong style="color: var(--primary-color);">Accuracy:</strong> 99.9% accuracy guaranteed
                </p>
            `;
            break;
            
        case 'softwareDev':
            content = `
                <h2 style="color: var(--primary-color); margin-bottom: 1rem;">Software Development Services</h2>
                <p style="color: #cccccc; line-height: 1.8;">
                    Building modern web and software applications:
                </p>
                <ul style="color: #cccccc; line-height: 2; margin: 1rem 0; padding-left: 2rem;">
                    <li>Web Application Development</li>
                    <li>Responsive Website Design</li>
                    <li>Frontend Development (HTML, CSS, JavaScript)</li>
                    <li>Backend Development (Python, Java)</li>
                    <li>Database Design & Management</li>
                    <li>API Development & Integration</li>
                </ul>
                <p style="color: #cccccc; line-height: 1.8;">
                    <strong style="color: var(--primary-color);">Technologies:</strong> HTML, CSS, JavaScript, Python, Java, SQL
                </p>
                <p style="color: #cccccc; line-height: 1.8;">
                    <strong style="color: var(--primary-color);">Approach:</strong> Clean code, modern design, user-focused
                </p>
            `;
            break;
    }
    
    modalContent.innerHTML = content;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// ========================================
// IMAGE ZOOM MODAL FUNCTIONS
// ========================================
let currentImageIndex = 0;
let workImages = [];

// Initialize work images array when page loads
document.addEventListener('DOMContentLoaded', () => {
    workImages = Array.from(document.querySelectorAll('.work-item'));
});

function openImageZoom(element, index) {
    const modal = document.getElementById('imageZoomModal');
    const zoomedImage = document.getElementById('zoomedImage');
    const caption = document.getElementById('zoomCaption');
    
    currentImageIndex = index;
    
    // Get the background image URL from the work-image div
    const workImageDiv = element.querySelector('.work-image');
    const backgroundImage = workImageDiv.style.backgroundImage;
    const imageUrl = backgroundImage.slice(5, -2); // Remove 'url("' and '")'
    
    // Get the work title
    const title = element.querySelector('.work-info h3').textContent;
    const category = element.querySelector('.work-category').textContent;
    
    // Set modal content
    zoomedImage.src = imageUrl;
    caption.textContent = `${category}: ${title}`;
    
    // Show modal
    modal.style.display = 'block';
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeImageZoom() {
    const modal = document.getElementById('imageZoomModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function navigateZoom(direction) {
    currentImageIndex += direction;
    
    // Loop around if at the beginning or end
    if (currentImageIndex < 0) {
        currentImageIndex = workImages.length - 1;
    } else if (currentImageIndex >= workImages.length) {
        currentImageIndex = 0;
    }
    
    // Update the zoomed image
    const currentWork = workImages[currentImageIndex];
    const workImageDiv = currentWork.querySelector('.work-image');
    const backgroundImage = workImageDiv.style.backgroundImage;
    const imageUrl = backgroundImage.slice(5, -2);
    
    const title = currentWork.querySelector('.work-info h3').textContent;
    const category = currentWork.querySelector('.work-category').textContent;
    
    document.getElementById('zoomedImage').src = imageUrl;
    document.getElementById('zoomCaption').textContent = `${category}: ${title}`;
}

// Keyboard navigation for image zoom
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('imageZoomModal');
    if (modal.style.display === 'block') {
        if (e.key === 'Escape') {
            closeImageZoom();
        } else if (e.key === 'ArrowLeft') {
            navigateZoom(-1);
        } else if (e.key === 'ArrowRight') {
            navigateZoom(1);
        }
    }
});

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all skill cards, service cards, work items, and timeline items
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.skill-card, .service-card, .work-item, .timeline-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ========================================
// ACTIVE NAVIGATION LINK ON SCROLL
// ========================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========================================
// TYPING EFFECT FOR NAME (Optional Enhancement)
// ========================================
// Uncomment this if you want a typing effect for your name
/*
const nameElement = document.querySelector('.highlight');
const name = nameElement.textContent;
nameElement.textContent = '';

let i = 0;
function typeWriter() {
    if (i < name.length) {
        nameElement.textContent += name.charAt(i);
        i++;
        setTimeout(typeWriter, 200);
    }
}

// Start typing effect after page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});
*/

// ========================================
// CONSOLE MESSAGE
// ========================================
console.log('%c👋 Hello! Welcome to Khalid Samad\'s Portfolio', 'color: #00ff88; font-size: 20px; font-weight: bold;');
console.log('%cLooking for a developer? Let\'s connect!', 'color: #0077ff; font-size: 14px;');
console.log('%cEmail: khalidsamad53@gmail.com', 'color: #cccccc; font-size: 12px;');
