// Assessment Questions and Logic
const assessmentQuestions = [
    {
        id: 1,
        question: "What excites you most about acquiring a business?",
        options: [
            { text: "Building efficient systems and improving operations", value: "A" },
            { text: "Quickly scaling revenue and finding growth opportunities", value: "B" },
            { text: "Creating strategic partnerships and long-term value", value: "C" }
        ]
    },
    {
        id: 2,
        question: "Your ideal timeline for business transformation is:",
        options: [
            { text: "2-5 years of steady, systematic improvement", value: "A" },
            { text: "6-18 months of rapid growth and optimization", value: "B" },
            { text: "3-7 years building toward a strategic exit", value: "C" }
        ]
    },
    {
        id: 3,
        question: "When evaluating a potential acquisition, you focus on:",
        options: [
            { text: "Operational inefficiencies you can fix", value: "A" },
            { text: "Untapped market potential and scalability", value: "B" },
            { text: "Strategic fit with other portfolio companies", value: "C" }
        ]
    },
    {
        id: 4,
        question: "Your management style tends to be:",
        options: [
            { text: "Hands-on with detailed process improvement", value: "A" },
            { text: "Results-focused with aggressive growth targets", value: "B" },
            { text: "Collaborative with emphasis on team alignment", value: "C" }
        ]
    },
    {
        id: 5,
        question: "Post-acquisition, your priority is:",
        options: [
            { text: "Implementing better systems and controls", value: "A" },
            { text: "Expanding market reach and revenue streams", value: "B" },
            { text: "Building relationships with key stakeholders", value: "C" }
        ]
    },
    {
        id: 6,
        question: "You prefer businesses that are:",
        options: [
            { text: "Underperforming but fundamentally sound", value: "A" },
            { text: "Growing but need capital and expertise", value: "B" },
            { text: "Stable with potential for strategic synergies", value: "C" }
        ]
    },
    {
        id: 7,
        question: "Your exit strategy typically involves:",
        options: [
            { text: "Long-term ownership with steady cash flow", value: "A" },
            { text: "Quick value creation and profitable sale", value: "B" },
            { text: "Strategic sale to industry consolidators", value: "C" }
        ]
    },
    {
        id: 8,
        question: "You measure success primarily by:",
        options: [
            { text: "Operational efficiency and predictable returns", value: "A" },
            { text: "Revenue growth and profit margins", value: "B" },
            { text: "Strategic value and partnership opportunities", value: "C" }
        ]
    }
];

// Archetype Definitions
const archetypes = {
    A: {
        name: "Operator",
        title: "You're a System Builder & Optimizer",
        icon: "⚙️",
        subtitle: "You excel in debugging systems, managing neural networks, and creating predictable algorithms.",
        description: {
            overview: "As an Operator, you excel at infiltrating underperforming corporate systems and transforming them through systematic code optimization. You're the hands-on architect who detects vulnerabilities in broken networks and has the persistence to rebuild them with superior algorithms.",
            strengths: [
                "System debugging and operational efficiency protocols",
                "Neural network management and organizational restructuring", 
                "Financial firewall controls and performance analytics",
                "Long-term value creation through systematic code improvements",
                "Risk assessment algorithms and predictable data flow generation"
            ],
            idealTargets: [
                "Corporations with operational system failures",
                "Companies with solid infrastructure but corrupted execution protocols",
                "Legacy businesses ready for digital transformation",
                "Service networks with scalable automation potential"
            ],
            nextSteps: [
                "Target businesses with identifiable system vulnerabilities",
                "Develop your diagnostic toolkit for operational assessment",
                "Build connections with corporate intelligence brokers",
                "Create templates for post-acquisition system integration"
            ]
        }
    },
    B: {
        name: "Flipper",
        title: "You're a High-Velocity Data Mover",
        icon: "⚡",
        subtitle: "You focus on rapid value extraction through growth hacking and market arbitrage.",
        description: {
            overview: "As a Flipper, you're the velocity catalyst who identifies undervalued data assets and rapidly scales them for maximum profit extraction. You thrive on speed, leverage algorithms, and maximizing returns in compressed execution cycles.",
            strengths: [
                "Rapid revenue acceleration and market penetration protocols",
                "Creative financing algorithms and deal optimization",
                "Growth hacking and customer acquisition automation",
                "Lightning-fast decision processing and execution",
                "Value extraction through strategic market positioning"
            ],
            idealTargets: [
                "Growing networks requiring capital injection protocols",
                "Companies with untapped algorithmic potential",
                "Businesses in consolidating digital ecosystems",
                "Tech companies with exponentially scalable models"
            ],
            nextSteps: [
                "Develop connections with velocity-focused capital sources",
                "Build expertise in digital growth hacking and automation",
                "Create a network of potential strategic acquisition targets",
                "Master creative deal structures and financing algorithms"
            ]
        }
    },
    C: {
        name: "Exit Partner",
        title: "You're a Strategic Network Architect",
        icon: "🔮",
        subtitle: "You excel in neural partnerships, synchronized exits, and legacy protocol alignment.",
        description: {
            overview: "As an Exit Partner, you're the strategic network architect who builds value through neural connections and long-term algorithmic vision. You excel at creating synchronized scenarios where all network nodes benefit from carefully orchestrated exit protocols.",
            strengths: [
                "Strategic partnership network development",
                "Long-term value creation and predictive planning",
                "Stakeholder synchronization and relationship algorithms",
                "Industry consolidation and network roll-up strategies",
                "Legacy preservation and cultural integration protocols"
            ],
            idealTargets: [
                "Businesses with strong strategic network value",
                "Companies that integrate into larger consolidation matrices",
                "Legacy businesses seeking digital transformation preservation",
                "Companies with valuable partnerships or dominant market positioning"
            ],
            nextSteps: [
                "Build connections with strategic network acquirers in target sectors",
                "Develop expertise in roll-up and consolidation algorithms",
                "Create frameworks for stakeholder synchronization",
                "Focus on businesses with strong strategic defensive protocols"
            ]
        }
    }
};

// Application State
let currentQuestion = 0;
let answers = [];
let userResults = null;

// DOM Elements
const screens = {
    landing: document.getElementById('landing-screen'),
    assessment: document.getElementById('assessment-screen'),
    results: document.getElementById('results-screen'),
    thankyou: document.getElementById('thankyou-screen')
};

const elements = {
    startBtn: document.getElementById('start-assessment'),
    questionContent: document.getElementById('question-content'),
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-text'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    finishBtn: document.getElementById('finish-btn'),
    archetypeIcon: document.getElementById('archetype-icon'),
    archetypeTitle: document.getElementById('archetype-title'),
    archetypeSubtitle: document.getElementById('archetype-subtitle'),
    archetypeDescription: document.getElementById('archetype-description'),
    scoreDetails: document.getElementById('score-details'),
    emailForm: document.getElementById('email-form'),
    retakeBtn: document.getElementById('retake-assessment'),
    shareBtn: document.getElementById('share-results'),
    backToStartBtn: document.getElementById('back-to-start')
};

// Utility Functions
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
    screens[screenName].classList.add('fade-in');
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;
    elements.progressFill.style.width = `${progress}%`;
    elements.progressText.textContent = `Question ${currentQuestion + 1} of ${assessmentQuestions.length}`;
}

function renderQuestion() {
    const question = assessmentQuestions[currentQuestion];
    
    elements.questionContent.innerHTML = `
        <h3>${question.question}</h3>
        <div class="options">
            ${question.options.map((option, index) => `
                <div class="option" data-value="${option.value}" data-index="${index}">
                    ${option.text}
                </div>
            `).join('')}
        </div>
    `;

    // Add click handlers to options
    const optionElements = elements.questionContent.querySelectorAll('.option');
    optionElements.forEach(option => {
        option.addEventListener('click', () => selectOption(option));
    });

    // Restore previous selection if exists
    if (answers[currentQuestion]) {
        const selectedOption = elements.questionContent.querySelector(`[data-value="${answers[currentQuestion]}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
            elements.nextBtn.disabled = false;
        }
    } else {
        elements.nextBtn.disabled = true;
    }

    // Update navigation buttons
    elements.prevBtn.style.display = currentQuestion > 0 ? 'block' : 'none';
    
    if (currentQuestion === assessmentQuestions.length - 1) {
        elements.nextBtn.style.display = 'none';
        elements.finishBtn.style.display = 'block';
        elements.finishBtn.disabled = !answers[currentQuestion];
    } else {
        elements.nextBtn.style.display = 'block';
        elements.finishBtn.style.display = 'none';
    }

    updateProgress();
}

function selectOption(selectedElement) {
    // Remove previous selection
    elements.questionContent.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });

    // Add selection to clicked option
    selectedElement.classList.add('selected');
    
    // Store answer
    answers[currentQuestion] = selectedElement.dataset.value;
    
    // Enable next button
    elements.nextBtn.disabled = false;
    if (currentQuestion === assessmentQuestions.length - 1) {
        elements.finishBtn.disabled = false;
    }
}

function calculateResults() {
    const scores = { A: 0, B: 0, C: 0 };
    
    answers.forEach(answer => {
        if (answer) scores[answer]++;
    });

    // Determine primary archetype (highest score)
    let primaryArchetype = 'A'; // Default to Operator
    let maxScore = scores.A;
    
    if (scores.B > maxScore) {
        primaryArchetype = 'B';
        maxScore = scores.B;
    }
    if (scores.C > maxScore) {
        primaryArchetype = 'C';
        maxScore = scores.C;
    }
    
    // Handle ties with priority: Operator > Exit Partner > Flipper
    if (scores.A === scores.C && scores.A > scores.B) {
        primaryArchetype = 'A';
    } else if (scores.A === scores.B && scores.A > scores.C) {
        primaryArchetype = 'A';
    } else if (scores.B === scores.C && scores.B > scores.A) {
        primaryArchetype = 'C';
    }

    return {
        primary: primaryArchetype,
        scores: scores,
        total: assessmentQuestions.length
    };
}

function displayResults() {
    userResults = calculateResults();
    const archetype = archetypes[userResults.primary];
    
    // Update result elements
    elements.archetypeIcon.textContent = archetype.icon;
    elements.archetypeTitle.textContent = archetype.title;
    elements.archetypeSubtitle.textContent = archetype.subtitle;
    
    // Build description content
    const description = archetype.description;
    elements.archetypeDescription.innerHTML = `
        <h4>Your Archetype Overview</h4>
        <p>${description.overview}</p>
        
        <h4>Your Key Strengths</h4>
        <ul>
            ${description.strengths.map(strength => `<li>${strength}</li>`).join('')}
        </ul>
        
        <h4>Ideal Acquisition Targets</h4>
        <ul>
            ${description.idealTargets.map(target => `<li>${target}</li>`).join('')}
        </ul>
        
        <h4>Recommended Next Steps</h4>
        <ul>
            ${description.nextSteps.map(step => `<li>${step}</li>`).join('')}
        </ul>
    `;
    
    // Build score breakdown
    elements.scoreDetails.innerHTML = `
        <div class="score-item">
            <span class="score-label">⚙️ Operator (System Builder & Optimizer)</span>
            <span class="score-value">${userResults.scores.A}/${userResults.total}</span>
        </div>
        <div class="score-item">
            <span class="score-label">⚡ Flipper (High-Velocity Data Mover)</span>
            <span class="score-value">${userResults.scores.B}/${userResults.total}</span>
        </div>
        <div class="score-item">
            <span class="score-label">🔮 Exit Partner (Strategic Network Architect)</span>
            <span class="score-value">${userResults.scores.C}/${userResults.total}</span>
        </div>
    `;
    
    showScreen('results');
}

function resetAssessment() {
    currentQuestion = 0;
    answers = [];
    userResults = null;
    showScreen('landing');
}

function shareResults() {
    if (navigator.share && userResults) {
        const archetype = archetypes[userResults.primary];
        navigator.share({
            title: 'My Acquisition Archetype Results',
            text: `I just discovered I'm a ${archetype.name}: ${archetype.title}! Find out your acquisition archetype.`,
            url: window.location.href
        });
    } else {
        // Fallback for browsers without Web Share API
        const archetype = archetypes[userResults.primary];
        const shareText = `I just discovered I'm a ${archetype.name}: ${archetype.title}! Find out your acquisition archetype at ${window.location.href}`;
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareText).then(() => {
                alert('Results copied to clipboard!');
            });
        } else {
            // Final fallback
            const textArea = document.createElement('textarea');
            textArea.value = shareText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('Results copied to clipboard!');
        }
    }
}

// Event Listeners
elements.startBtn.addEventListener('click', () => {
    showScreen('assessment');
    renderQuestion();
});

elements.nextBtn.addEventListener('click', () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
        currentQuestion++;
        renderQuestion();
        elements.questionContent.classList.add('slide-in-right');
    }
});

elements.prevBtn.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
});

elements.finishBtn.addEventListener('click', () => {
    displayResults();
});

elements.retakeBtn.addEventListener('click', resetAssessment);

elements.shareBtn.addEventListener('click', shareResults);

elements.backToStartBtn.addEventListener('click', resetAssessment);

elements.emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    
    if (name && email && userResults) {
        // Simulate email capture (in real app, this would send to backend)
        console.log('Email captured:', { name, email, archetype: userResults.primary });
        
        // Show loading state
        const submitBtn = elements.emailForm.querySelector('button');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
            showScreen('thankyou');
        }, 1500);
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (screens.assessment.classList.contains('active')) {
        if (e.key === 'ArrowRight' && !elements.nextBtn.disabled) {
            elements.nextBtn.click();
        } else if (e.key === 'ArrowLeft' && currentQuestion > 0) {
            elements.prevBtn.click();
        } else if (e.key === 'Enter' && currentQuestion === assessmentQuestions.length - 1 && !elements.finishBtn.disabled) {
            elements.finishBtn.click();
        }
    }
});

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log('Acquisition Archetype Assessment App initialized');
    
    // Add smooth scrolling for better UX
    document.documentElement.style.scrollBehavior = 'smooth';
});

// Analytics tracking (placeholder for real implementation)
function trackEvent(eventName, properties = {}) {
    console.log('Analytics Event:', eventName, properties);
    // In real implementation, this would send to your analytics service
    // Example: gtag('event', eventName, properties);
}

// Track assessment completion
function trackAssessmentComplete() {
    if (userResults) {
        trackEvent('assessment_completed', {
            archetype: userResults.primary,
            scores: userResults.scores
        });
    }
}

// Add tracking to key events
elements.startBtn.addEventListener('click', () => trackEvent('assessment_started'));
elements.finishBtn.addEventListener('click', trackAssessmentComplete);
elements.emailForm.addEventListener('submit', () => trackEvent('email_captured'));