// Shared navigation component for Kexin Li's personal website

document.addEventListener('DOMContentLoaded', function() {
    // Get the current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'mainPage.html';

    // Navigation HTML
    const navHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Kexin Li</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link ${currentPage === 'mainPage.html' ? 'active' : ''}" href="mainPage.html">Home</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link ${currentPage === 'Education.html' ? 'active' : ''}" href="Education.html">Education</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link ${currentPage === 'Publication.html' ? 'active' : ''}" href="Publication.html">Publication</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link ${currentPage === 'Experience.html' ? 'active' : ''}" href="Experience.html">Experience</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link ${currentPage === 'Project.html' ? 'active' : ''}" href="Project.html">Project</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="https://github.com/Kexin6" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="https://www.linkedin.com/in/kexin-li-cassie/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link ${currentPage === 'Contact.html' ? 'active' : ''}" href="Contact.html">Contact</a>
                </li>
            </ul>
        </div>
    </nav>`;

    // Insert navigation at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', navHTML);
});
