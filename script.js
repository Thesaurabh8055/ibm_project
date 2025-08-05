// Book Data - Sample collection of books
const booksData = [
    {
        id: 1,
        title: "The Midnight Library",
        author: "Matt Haig",
        genre: "Fiction",
        rating: "⭐ 4.8",
        pages: "288 pages",
        cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
        description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?",
        fullDescription: "Nora Seed finds herself faced with the possibility of changing her life for a new one, following a different career, undoing old breakups, realizing her dreams of becoming a glaciologist; she must search within herself as she travels through the Midnight Library to decide what is truly fulfilling in life, and what makes it worth living in the first place."
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-Help",
        rating: "⭐ 4.9",
        pages: "320 pages",
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
        description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones. No matter your goals, Atomic Habits offers a proven framework for improving--every day.",
        fullDescription: "James Clear draws on the most proven ideas from biology, psychology, and neuroscience to create an easy-to-understand guide for making good habits inevitable and bad habits impossible. Along the way, readers will be inspired and entertained with true stories from Olympic gold medalists, award-winning artists, business leaders, life-saving physicians, and star comedians who have used the science of small habits to master their craft and vault to the top of their field."
    },
    {
        id: 3,
        title: "Dune",
        author: "Frank Herbert",
        genre: "Sci-Fi",
        rating: "⭐ 4.7",
        pages: "688 pages",
        cover: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
        description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world.",
        fullDescription: "Here is the novel that will be forever considered a triumph of the imagination. Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, who would become the mysterious man known as Muad'Dib. He would avenge the traitorous plot against his noble family—and would bring to fruition humankind's most ancient and unattainable dream."
    },
    {
        id: 4,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        genre: "Finance",
        rating: "⭐ 4.6",
        pages: "256 pages",
        cover: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=600&fit=crop",
        description: "Timeless lessons on wealth, greed, and happiness. Doing well with money isn't necessarily about what you know. It's about how you behave.",
        fullDescription: "In the Psychology of Money, award-winning author Morgan Housel shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life's most important topics. The premise of this book is that doing well with money has little to do with how smart you are and a lot to do with how you behave."
    },
    {
        id: 5,
        title: "Educated",
        author: "Tara Westover",
        genre: "Memoir",
        rating: "⭐ 4.8",
        pages: "334 pages",
        cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
        description: "A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
        fullDescription: "Educated is an account of the struggle for self-invention. It is a tale of fierce family loyalty, and of the grief that comes from severing one's closest ties. With the acute insight that distinguishes all great writers, Westover has crafted a universal coming-of-age story that gets to the heart of what an education is and what it offers: the perspective to see one's life through new eyes, and the will to change it."
    },
    {
        id: 6,
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        genre: "Romance",
        rating: "⭐ 4.9",
        pages: "400 pages",
        cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
        description: "Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life.",
        fullDescription: "From the 1950s to the 1980s, Evelyn Hugo was Hollywood's most famous actress. Now 79 years old and living as a recluse in her Manhattan apartment, she's finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself."
    },
    {
        id: 7,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        genre: "History",
        rating: "⭐ 4.7",
        pages: "443 pages",
        cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&q=80",
        description: "A brief history of humankind. How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms?",
        fullDescription: "From a renowned historian comes a groundbreaking narrative of humanity's creation and evolution—a #1 international bestseller—that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be 'human.'"
    },
    {
        id: 8,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        genre: "Thriller",
        rating: "⭐ 4.5",
        pages: "336 pages",
        cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
        description: "A woman's act of violence against her husband and her refusal to speak sends shockwaves through London.",
        fullDescription: "Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house overlooking a park in one of London's most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word."
    }
];

// Global variables
let filteredBooks = [...booksData];
let currentTheme = 'light';

// DOM Elements
const customCursor = document.querySelector('.custom-cursor');
const searchInput = document.getElementById('search-input');
const booksGrid = document.getElementById('books-grid');
const modal = document.getElementById('book-modal');
const loadingScreen = document.getElementById('loading-screen');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize all app functionality
function initializeApp() {
    // Show loading screen initially
    showLoadingScreen();
    
    // Initialize after a delay to show loading animation
    setTimeout(() => {
        hideLoadingScreen();
        renderBooks(booksData);
        initializeEventListeners();
        initializeScrollAnimations();
        initializeCustomCursor();
        initializeDarkMode();
    }, 2000);
}

// Loading Screen Functions
function showLoadingScreen() {
    loadingScreen.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hideLoadingScreen() {
    loadingScreen.classList.add('hidden');
    document.body.style.overflow = 'auto';
    
    // Remove from DOM after animation
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
}

// Custom Cursor
function initializeCustomCursor() {
    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
    });

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .book-card, .nav-link, .social-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            customCursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            customCursor.classList.remove('hover');
        });
    });
}

// Dark Mode Toggle
function initializeDarkMode() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateDarkModeButton();
    }

    darkModeToggle.addEventListener('click', toggleDarkMode);
}

function toggleDarkMode() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateDarkModeButton();
    
    // Add a smooth transition effect
    document.body.style.transition = 'all 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

function updateDarkModeButton() {
    darkModeToggle.textContent = currentTheme === 'light' ? '🌙' : '☀️';
    darkModeToggle.setAttribute('aria-label', 
        currentTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
    );
}

// Event Listeners
function initializeEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Modal close events
    const closeModal = document.querySelector('.close-modal');
    closeModal.addEventListener('click', hideModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            hideModal();
        }
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Search Functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredBooks = [...booksData];
    } else {
        filteredBooks = booksData.filter(book => 
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.genre.toLowerCase().includes(searchTerm) ||
            book.description.toLowerCase().includes(searchTerm)
        );
    }
    
    renderBooks(filteredBooks);
    
    // Add animation to search results
    setTimeout(() => {
        const bookCards = document.querySelectorAll('.book-card');
        bookCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'all 0.3s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 50);
}

// Render Books
function renderBooks(books) {
    if (books.length === 0) {
        booksGrid.innerHTML = `
            <div class="no-results">
                <h3>No books found</h3>
                <p>Try searching with different keywords</p>
            </div>
        `;
        return;
    }
    
    booksGrid.innerHTML = books.map(book => `
        <div class="book-card fade-in" data-book-id="${book.id}" onclick="showBookModal(${book.id})">
            <img src="${book.cover}" alt="${book.title}" class="book-cover" loading="lazy">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">by ${book.author}</p>
            <p class="book-description">${book.description}</p>
            <div class="book-meta">
                <span class="book-genre">${book.genre}</span>
                <span class="book-rating">${book.rating}</span>
            </div>
        </div>
    `).join('');
    
    // Add hover effect to new book cards
    const newBookCards = document.querySelectorAll('.book-card');
    newBookCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            customCursor.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', () => {
            customCursor.classList.remove('hover');
        });
    });
    
    // Trigger scroll animations for new elements
    observeElements();
}

// Modal Functions
function showBookModal(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;
    
    // Populate modal content
    document.getElementById('modal-cover').src = book.cover;
    document.getElementById('modal-title').textContent = book.title;
    document.getElementById('modal-author').textContent = `by ${book.author}`;
    document.getElementById('modal-genre').textContent = book.genre;
    document.getElementById('modal-pages').textContent = book.pages;
    document.getElementById('modal-rating').textContent = book.rating;
    document.getElementById('modal-description').textContent = book.fullDescription || book.description;
    
    // Show modal with animation
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    const closeButton = document.querySelector('.close-modal');
    closeButton.focus();
}

function hideModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
    
    // Return focus to the book card that opened the modal
    setTimeout(() => {
        searchInput.focus();
    }, 300);
}

// Smooth Scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = section.offsetTop - navHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all elements with animation classes
    observeElements(observer);
}

function observeElements(observer = null) {
    if (!observer) {
        // Create new observer if not provided
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
    }
    
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = currentTheme === 'light' 
            ? 'rgba(255, 255, 255, 0.98)' 
            : 'rgba(26, 32, 44, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = currentTheme === 'light' 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(26, 32, 44, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Performance optimization: Debounce search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to search
const debouncedSearch = debounce(handleSearch, 300);
searchInput.addEventListener('input', debouncedSearch);

// Error handling for images
function handleImageError(img) {
    img.src = 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop';
    img.alt = 'Book cover not available';
}

// Add error handling to all book cover images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.book-cover, #modal-cover');
    images.forEach(img => {
        img.addEventListener('error', () => handleImageError(img));
    });
});

// Keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    // Navigate book cards with arrow keys
    if (e.target.classList.contains('book-card')) {
        const cards = Array.from(document.querySelectorAll('.book-card'));
        const currentIndex = cards.indexOf(e.target);
        let nextIndex;
        
        switch(e.key) {
            case 'ArrowRight':
                nextIndex = (currentIndex + 1) % cards.length;
                cards[nextIndex].focus();
                e.preventDefault();
                break;
            case 'ArrowLeft':
                nextIndex = (currentIndex - 1 + cards.length) % cards.length;
                cards[nextIndex].focus();
                e.preventDefault();
                break;
            case 'Enter':
            case ' ':
                e.target.click();
                e.preventDefault();
                break;
        }
    }
});

// Make book cards focusable for keyboard navigation
function makeBookCardsFocusable() {
    const bookCards = document.querySelectorAll('.book-card');
    bookCards.forEach((card, index) => {
        card.setAttribute('tabindex', index === 0 ? '0' : '-1');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `View details for ${card.querySelector('.book-title').textContent}`);
    });
}

// Newsletter subscription (placeholder functionality)
document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.querySelector('.newsletter');
    if (newsletterForm) {
        const input = newsletterForm.querySelector('input');
        const button = newsletterForm.querySelector('button');
        
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const email = input.value.trim();
            
            if (email && isValidEmail(email)) {
                // Simulate subscription
                button.textContent = 'Subscribed!';
                button.style.background = 'var(--success-gradient)';
                input.value = '';
                
                setTimeout(() => {
                    button.textContent = 'Subscribe';
                    button.style.background = 'var(--secondary-gradient)';
                }, 3000);
            } else {
                // Show error
                input.style.borderColor = '#ef4444';
                setTimeout(() => {
                    input.style.borderColor = '';
                }, 3000);
            }
        });
    }
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add CSS for no-results styling
const style = document.createElement('style');
style.textContent = `
    .no-results {
        grid-column: 1 / -1;
        text-align: center;
        padding: 4rem 2rem;
        color: var(--text-muted);
    }
    
    .no-results h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: var(--text-secondary);
    }
    
    .no-results p {
        font-size: 1.1rem;
    }
    
    .book-card {
        transition: all 0.3s ease;
    }
    
    .book-card:focus {
        outline: 3px solid #667eea;
        outline-offset: 2px;
    }
`;
document.head.appendChild(style);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Ensure all initialization happens
    setTimeout(() => {
        makeBookCardsFocusable();
    }, 100);
});

// Add some fun Easter eggs
let clickCount = 0;
document.querySelector('.nav-logo').addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
            clickCount = 0;
        }, 2000);
    }
});

// Add rainbow animation
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        25% { filter: hue-rotate(90deg); }
        50% { filter: hue-rotate(180deg); }
        75% { filter: hue-rotate(270deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);