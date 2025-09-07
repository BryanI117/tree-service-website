document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    // Before-and-after image toggle button for masonry
    const masonryToggle = document.getElementById('masonry-toggle');

    if (masonryToggle) {
        const toggleButton = masonryToggle.querySelector('.image-toggle-button');
        
        toggleButton.addEventListener('click', () => {
            masonryToggle.classList.toggle('show-after');
            const textSpans = toggleButton.querySelectorAll('.toggle-text');
            textSpans.forEach(span => span.classList.toggle('active'));
        });
    }

    // --- UPDATE: Project Showcase Logic ---
    const projectShowcase = document.getElementById('process');
    if (projectShowcase) {
        const stepImage = document.getElementById('project-step-image');
        const stepDescription = document.getElementById('project-step-description');
        const stepNav = document.getElementById('project-step-nav');

        // --- CRUCIAL! DON'T FORGET THIS IS NOT YOUR NORMAL HTML: Customize these descriptions for each step ---
        const showcaseData = [
            {
                image: 'images/project-step-1.jpg',
                description: 'Step 1: The project begins with the removal of the tree to ensure safety and prepare for the new landscape design.'
            },
            {
                image: 'images/project-step-2.jpg',
                description: 'Step 2: Our team carefully prepares the site, including clearing land and removing any hazardous or unwanted trees.'
            },
            {
                image: 'images/project-step-3.jpg',
                description: 'Step 3: The landscape design is being carefully implemented as workers begin to shape and install the new features.'
            },
            {
                image: 'images/project-step-4.jpg',
                description: 'Step 4: New sod, grass, and leveled terrain are added to create a lush, green outdoor space to complement the new design.'
            },
            {
                image: 'images/project-step-5.jpg',
                description: 'Step 5: The final result is a stunning, fully transformed outdoor space that is both beautiful and functional for the homeowners to enjoy with added new features which included the tree removal, fence installation, grading, and sod installation.'
            }
        ];

        const updateShowcase = (stepIndex) => {
            if (!showcaseData[stepIndex]) return;

            // Update image and description
            stepImage.src = showcaseData[stepIndex].image;
            stepDescription.textContent = showcaseData[stepIndex].description;

            // Update active button state
            const buttons = stepNav.querySelectorAll('.step-btn');
            buttons.forEach((btn, index) => {
                if (index === stepIndex) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        };

        stepNav.addEventListener('click', (e) => {
            if (e.target.matches('.step-btn')) {
                const step = parseInt(e.target.dataset.step, 10);
                updateShowcase(step - 1);
            }
        });

        updateShowcase(0);
    }
});

