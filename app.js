document.addEventListener('DOMContentLoaded', function() {
    // Dashboard Preview Animation in Hero Section
    initDashboardPreview();
    
    // Dashboard Demo in Dashboard Section
    initDashboardDemo();
    
    // Testimonial Carousel
    initTestimonialCarousel();
});

// Dashboard Preview Animation
function initDashboardPreview() {
    const dashboardPreview = document.getElementById('dashboard-preview');
    if (!dashboardPreview) return;
    
    const svgContent = `
        <svg viewBox="0 0 800 400" width="100%" height="100%">
            <defs>
                <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#2c3e50" />
                    <stop offset="100%" stop-color="#1a252f" />
                </linearGradient>
                <linearGradient id="chartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stop-color="#1abc9c" stop-opacity="0.2" />
                    <stop offset="100%" stop-color="#1abc9c" stop-opacity="0.7" />
                </linearGradient>
            </defs>
            
            <!-- Dashboard Background -->
            <rect x="0" y="0" width="800" height="400" fill="#f8f9fa" rx="10" ry="10" />
            
            <!-- Header -->
            <rect x="0" y="0" width="800" height="60" fill="url(#headerGrad)" rx="10" ry="10" />
            
            <!-- Sidebar -->
            <rect x="0" y="0" width="180" height="400" fill="#2c3e50" opacity="0.9" rx="10" ry="10" />
            
            <!-- Sidebar Menu Items -->
            <rect x="20" y="80" width="140" height="10" fill="#ffffff" opacity="0.7" rx="2" ry="2" />
            <rect x="20" y="100" width="100" height="10" fill="#ffffff" opacity="0.5" rx="2" ry="2" />
            <rect x="20" y="130" width="140" height="10" fill="#ffffff" opacity="0.7" rx="2" ry="2" />
            <rect x="20" y="150" width="100" height="10" fill="#ffffff" opacity="0.5" rx="2" ry="2" />
            <rect x="20" y="180" width="140" height="10" fill="#ffffff" opacity="0.7" rx="2" ry="2" />
            <rect x="20" y="200" width="100" height="10" fill="#ffffff" opacity="0.5" rx="2" ry="2" />
            <rect x="20" y="230" width="140" height="10" fill="#ffffff" opacity="0.7" rx="2" ry="2" />
            <rect x="20" y="250" width="100" height="10" fill="#ffffff" opacity="0.5" rx="2" ry="2" />
            
            <!-- Main Content Area -->
            <!-- Card 1 -->
            <rect x="200" y="80" width="180" height="100" fill="#ffffff" rx="5" ry="5" class="dashboard-card" />
            <rect x="220" y="100" width="140" height="10" fill="#2c3e50" opacity="0.2" rx="2" ry="2" />
            <rect x="220" y="120" width="80" height="20" fill="#1abc9c" opacity="0.8" rx="2" ry="2" />
            <text x="230" y="135" font-family="Arial" font-size="12" fill="#ffffff" font-weight="bold">75%</text>
            
            <!-- Card 2 -->
            <rect x="400" y="80" width="180" height="100" fill="#ffffff" rx="5" ry="5" class="dashboard-card" />
            <rect x="420" y="100" width="140" height="10" fill="#2c3e50" opacity="0.2" rx="2" ry="2" />
            <rect x="420" y="120" width="120" height="20" fill="#2980b9" opacity="0.8" rx="2" ry="2" />
            <text x="430" y="135" font-family="Arial" font-size="12" fill="#ffffff" font-weight="bold">93%</text>
            
            <!-- Card 3 -->
            <rect x="600" y="80" width="180" height="100" fill="#ffffff" rx="5" ry="5" class="dashboard-card" />
            <rect x="620" y="100" width="140" height="10" fill="#2c3e50" opacity="0.2" rx="2" ry="2" />
            <rect x="620" y="120" width="100" height="20" fill="#e74c3c" opacity="0.8" rx="2" ry="2" />
            <text x="630" y="135" font-family="Arial" font-size="12" fill="#ffffff" font-weight="bold">65%</text>
            
            <!-- Chart Area -->
            <rect x="200" y="200" width="580" height="180" fill="#ffffff" rx="5" ry="5" />
            <rect x="220" y="220" width="140" height="15" fill="#2c3e50" opacity="0.2" rx="2" ry="2" />
            
            <!-- Chart -->
            <polyline points="220,340 280,290 340,310 400,260 460,240 520,290 580,270 640,220 700,240 760,200" 
                    fill="none" stroke="#1abc9c" stroke-width="3" />
            <path d="M220,340 L280,290 L340,310 L400,260 L460,240 L520,290 L580,270 L640,220 L700,240 L760,200 L760,360 L220,360 Z" 
                  fill="url(#chartGrad)" />
                  
            <!-- Data Points -->
            <circle cx="220" cy="340" r="5" fill="#1abc9c" class="data-point" />
            <circle cx="280" cy="290" r="5" fill="#1abc9c" class="data-point" />
            <circle cx="340" cy="310" r="5" fill="#1abc9c" class="data-point" />
            <circle cx="400" cy="260" r="5" fill="#1abc9c" class="data-point" />
            <circle cx="460" cy="240" r="5" fill="#1abc9c" class="data-point" />
            <circle cx="520" cy="290" r="5" fill="#1abc9c" class="data-point" />
            <circle cx="580" cy="270" r="5" fill="#1abc9c" class="data-point" />
            <circle cx="640" cy="220" r="5" fill="#1abc9c" class="data-point" />
            <circle cx="700" cy="240" r="5" fill="#1abc9c" class="data-point" />
            <circle cx="760" cy="200" r="5" fill="#1abc9c" class="data-point" />
        </svg>
    `;
    
    dashboardPreview.innerHTML = svgContent;
    
    // Add animations
    const cards = document.querySelectorAll('.dashboard-card');
    const dataPoints = document.querySelectorAll('.data-point');
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'translateY(5px)';
            setTimeout(() => {
                card.style.transform = 'translateY(0)';
            }, 300);
        }, index * 200);
    });
    
    dataPoints.forEach((point, index) => {
        setTimeout(() => {
            point.setAttribute('r', '8');
            setTimeout(() => {
                point.setAttribute('r', '5');
            }, 300);
        }, 1000 + index * 100);
    });
}

// Dashboard Demo with Chart.js
function initDashboardDemo() {
    const dashboardDemo = document.getElementById('dashboard-demo');
    if (!dashboardDemo) return;
    
    // Create dashboard structure
    dashboardDemo.innerHTML = `
        <div class="demo-dashboard">
            <div class="demo-header">
                <div class="demo-title">Tableau de bord du projet</div>
                <div class="demo-date">Juillet 2023</div>
            </div>
            <div class="demo-metrics">
                <div class="demo-metric">
                    <div class="metric-value">87%</div>
                    <div class="metric-label">Progression</div>
                </div>
                <div class="demo-metric">
                    <div class="metric-value">23</div>
                    <div class="metric-label">Tâches</div>
                </div>
                <div class="demo-metric">
                    <div class="metric-value">7</div>
                    <div class="metric-label">Jours restants</div>
                </div>
            </div>
            <div class="demo-chart-container">
                <canvas id="progressChart"></canvas>
            </div>
            <div class="demo-tasks">
                <div class="demo-task-header">
                    <div>Tâches récentes</div>
                    <div>Statut</div>
                </div>
                <div class="demo-task">
                    <div>Conception de l'interface</div>
                    <div class="task-status completed">Terminé</div>
                </div>
                <div class="demo-task">
                    <div>Développement backend</div>
                    <div class="task-status in-progress">En cours</div>
                </div>
                <div class="demo-task">
                    <div>Tests d'intégration</div>
                    <div class="task-status pending">À faire</div>
                </div>
            </div>
        </div>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .demo-dashboard {
            background-color: #fff;
            border-radius: 8px;
            overflow: hidden;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        .demo-header {
            background-color: #2c3e50;
            color: white;
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
        }
        .demo-title {
            font-weight: 600;
        }
        .demo-metrics {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            padding: 20px;
        }
        .demo-metric {
            background-color: #f8f9fa;
            border-radius: 8px;
            padding: 15px;
            text-align: center;
        }
        .metric-value {
            font-size: 1.8rem;
            font-weight: 700;
            color: #1abc9c;
        }
        .metric-label {
            font-size: 0.9rem;
            color: #6c757d;
        }
        .demo-chart-container {
            padding: 20px;
            height: 200px;
        }
        .demo-tasks {
            margin-top: auto;
            padding: 0 20px 20px;
        }
        .demo-task-header {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            font-weight: 600;
            border-bottom: 1px solid #e9ecef;
        }
        .demo-task {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #f8f9fa;
        }
        .task-status {
            font-size: 0.85rem;
            padding: 3px 8px;
            border-radius: 4px;
        }
        .completed {
            background-color: #1abc9c;
            color: white;
        }
        .in-progress {
            background-color: #f39c12;
            color: white;
        }
        .pending {
            background-color: #e9ecef;
            color: #6c757d;
        }
    `;
    document.head.appendChild(style);
    
    // Create chart
    const ctx = document.getElementById('progressChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'],
            datasets: [{
                label: 'Progression du projet',
                data: [15, 30, 45, 60, 75, 87],
                backgroundColor: 'rgba(26, 188, 156, 0.2)',
                borderColor: '#1abc9c',
                borderWidth: 3,
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

// Testimonial Carousel
function initTestimonialCarousel() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const indicators = document.querySelectorAll('.indicator');
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');
    let currentIndex = 0;
    
    if (!testimonials.length || !indicators.length) return;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        indicators[index].classList.add('active');
        currentIndex = index;
    }
    
    function nextTestimonial() {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= testimonials.length) {
            nextIndex = 0;
        }
        showTestimonial(nextIndex);
    }
    
    function prevTestimonial() {
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            prevIndex = testimonials.length - 1;
        }
        showTestimonial(prevIndex);
    }
    
    // Event listeners
    if (nextButton) {
        nextButton.addEventListener('click', nextTestimonial);
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', prevTestimonial);
    }
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showTestimonial(index);
        });
    });
    
    // Auto-advance
    setInterval(nextTestimonial, 5000);
}

// Feature card animations on scroll
window.addEventListener('scroll', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight * 0.8) {
            card.style.transform = 'translateY(-10px)';
            card.style.opacity = '1';
        }
    });
});

