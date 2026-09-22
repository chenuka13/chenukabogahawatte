<html lang="en" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chenuka Bogahawatte | Featured Projects & Work</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        brand: {
                            500: '#22c55e',
                            600: '#16a34a',
                            dark: '#0d1117',
                            card: '#161b22',
                            border: '#30363d'
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        mono: ['Fira Code', 'monospace']
                    }
                }
            }
        }
    </script>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #0d1117;
            color: #c9d1d9;
        }
        .code-font {
            font-family: 'Fira Code', monospace;
        }
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #0d1117;
        }
        ::-webkit-scrollbar-thumb {
            background: #30363d;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #8b949e;
        }
        .card-hover {
            transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .card-hover:hover {
            transform: translateY(-3px);
            border-color: #22c55e;
            box-shadow: 0 10px 30px -10px rgba(34, 197, 94, 0.15);
        }
    </style>
</head>
<body class="bg-[#0d1117] text-[#c9d1d9] min-h-screen selection:bg-brand-500 selection:text-black">

    <header class="border-b border-[#30363d] bg-[#0d1117]/90 backdrop-blur-md sticky top-0 z-40">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-emerald-700 flex items-center justify-center text-black font-bold shadow-md">
                    <i class="fa-solid fa-code text-black text-sm"></i>
                </div>
                <span class="font-bold text-base text-white tracking-tight">Chenuka Bogahawatte <span class="text-xs px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 font-mono border border-brand-500/20">Projects</span></span>
            </div>
            <div class="flex items-center space-x-3">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center space-x-2 bg-[#21262d] hover:bg-[#30363d] text-white px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium border border-[#30363d] transition-colors">
                    <i class="fa-brands fa-github text-base"></i>
                    <span>GitHub Profile</span>
                </a>
            </div>
        </div>
    </header>

    <section class="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div class="max-w-2xl">
            <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium mb-4">
                <span class="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                <span>Completed Technical Portfolio & Repositories</span>
            </div>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                Featured Engineering & Software Projects
            </h1>
            <p class="text-gray-400 text-sm sm:text-base leading-relaxed">
                A curated showcase of my completed works spanning robotics, embedded firmware, IoT devices, AI models, and full-stack software development. Click any project to inspect details or visit the GitHub repository.
            </p>
        </div>
    </section>

    <section class="max-w-6xl mx-auto px-4 sm:px-6 pb-8">
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-[#30363d]">
            <!-- Category Filters -->
            <div id="filter-container" class="flex flex-wrap gap-2">
                <button data-filter="all" class="filter-btn px-3.5 py-1.5 rounded-lg text-xs font-medium bg-brand-500 text-black transition-all">All Projects</button>
                <button data-filter="robotics" class="filter-btn px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[#161b22] text-gray-300 hover:bg-[#30363d] border border-[#30363d] transition-all">Robotics</button>
                <button data-filter="embedded" class="filter-btn px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[#161b22] text-gray-300 hover:bg-[#30363d] border border-[#30363d] transition-all">Embedded & IoT</button>
                <button data-filter="ai" class="filter-btn px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[#161b22] text-gray-300 hover:bg-[#30363d] border border-[#30363d] transition-all">AI & Vision</button>
                <button data-filter="software" class="filter-btn px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[#161b22] text-gray-300 hover:bg-[#30363d] border border-[#30363d] transition-all">Software</button>
            </div>
            
            <!-- Search bar -->
            <div class="relative w-full sm:w-64">
                <i class="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
                <input type="text" id="project-search" placeholder="Filter by name or tech..." class="bg-[#161b22] border border-[#30363d] rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 w-full transition-colors">
            </div>
        </div>
    </section>

    <main class="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div id="projects-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Dynamic project cards populated via JavaScript -->
        </div>

        <!-- Empty state -->
        <div id="no-projects" class="hidden text-center py-16">
            <div class="w-12 h-12 bg-[#161b22] border border-[#30363d] rounded-full flex items-center justify-center mx-auto mb-3 text-gray-400">
                <i class="fa-solid fa-folder-open"></i>
            </div>
            <h4 class="text-sm font-medium text-white">No projects found</h4>
            <p class="text-gray-400 text-xs mt-1">Try searching for a different keyword or category.</p>
        </div>
    </main>

    <div id="project-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm hidden">
        <div class="bg-[#161b22] border border-[#30363d] rounded-xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6">
            <button id="close-modal" class="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#21262d] hover:bg-[#30363d] text-gray-400 hover:text-white flex items-center justify-center transition-colors text-xs">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div id="modal-content">
                <!-- Modal details injected here -->
            </div>
        </div>
    </div>

    <footer class="border-t border-[#30363d] bg-[#161b22]/40 py-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
            <div class="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#30363d]/60">
                <div>
                    <h3 class="text-white text-sm font-semibold mb-1">Publishing in your GitHub README</h3>
                    <p class="text-gray-400 text-xs">Host this single file on GitHub Pages and link it directly in your profile repository.</p>
                </div>
                <button id="copy-readme-btn" class="bg-[#21262d] hover:bg-[#30363d] text-gray-200 hover:text-white px-4 py-2 rounded-lg text-xs border border-[#30363d] transition-colors flex items-center space-x-2">
                    <i class="fa-regular fa-copy text-brand-500"></i>
                    <span id="copy-text">Copy README Markdown Badge</span>
                </button>
            </div>
            <div class="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
                <div>© 2026 Alex Rivera • Built for GitHub Portfolio Showcase</div>
                <div class="flex items-center space-x-4">
                    <a href="https://github.com" target="_blank" class="hover:text-brand-500 transition-colors">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" class="hover:text-brand-500 transition-colors">LinkedIn</a>
                </div>
            </div>
        </div>
    </footer>

    <script>
        const projects = [
            {
                id: 1,
                title: "Autonomous Cassava Mosaic Disease detection rover",
                category: "robotics",
                summary: "An autonomous rover built to navigate through a cassava field, identifying and informing the farmer on infected plants",
                description: "The Automated Cassava Mosaic Disease Detection Rover is an edge-AI agricultural solution designed to empower smallholder farmers through accessible field automation. Developed on a rugged, cost-effective hardware platform, this autonomous rover navigates structured cassava crops, locates individual plants, and captures high-resolution leaf imagery to identify Cassava Mosaic Virus (CMV) infections in real time. By bringing early disease detection directly to resource-constrained environments, the project bridges the gap between complex robotics and practical, low-cost precision agriculture.   
                At the core of the system is a dual-controller architecture pairing an Arduino Mega 2560 for real-time motor control and multi-sensor navigation with a Raspberry Pi 5 executing deep learning inference on the edge. Using a fine-tuned ResNet-152 CNN trained on over 14,000 leaf samples, the rover achieves an 84% validation accuracy while operating completely offline. Equipped with a custom servo-stabilized camera assembly and a lightweight local web dashboard, the rover provides actionable plant health feedback in under 11 seconds per crop—offering a scalable template for affordable AI in smart farming",
                image: "https://placehold.co/600x400/161b22/22c55e?text=OmniRover+ROS2",
                githubUrl: "https://github.com"
            },
            {
                id: 2,
                title: "NeuralEdge - TinyML Object Detection",
                category: "ai",
                summary: "Optimized YOLOv8 neural network quantized and deployed on low-power ESP32-CAM and Raspberry Pi modules.",
                description: "NeuralEdge bridges computer vision and resource-constrained edge hardware. Using INT8 post-training quantization and CMSIS-NN kernels, this project achieves 24 FPS inference on microcontroller hardware.",
                image: "https://placehold.co/600x400/161b22/3b82f6?text=NeuralEdge+TinyML",
                tags: ["PyTorch", "OpenCV", "ESP32", "C++"],
                stars: 142,
                forks: 29,
                githubUrl: "https://github.com"
            },
            {
                id: 3,
                title: "FlightMaster Drone Flight Controller",
                category: "embedded",
                summary: "Custom STM32F4-based multirotor flight controller firmware with complementary filter attitude estimation.",
                description: "A bare-metal C flight controller designed to explore sensor fusion and robust attitude estimation. Features custom SPI drivers for MPU9250 IMUs and barometric altitude hold algorithms.",
                image: "https://placehold.co/600x400/161b22/f59e0b?text=Drone+Firmware",
                tags: ["STM32", "Embedded C", "FreeRTOS", "MAVLink"],
                stars: 96,
                forks: 18,
                githubUrl: "https://github.com"
            },
            {
                id: 4,
                title: "IoT Greenhouse Telemetry Dashboard",
                category: "software",
                summary: "Real-time web dashboard built with Tailwind CSS and MQTT websockets to monitor soil moisture and sensors.",
                description: "A full-stack IoT web application connecting multiple ESP8266 sensor nodes via MQTT broker to a Node.js backend with live data visualization charts.",
                image: "https://placehold.co/600x400/161b22/a855f7?text=IoT+Dashboard",
                tags: ["JavaScript", "MQTT", "Tailwind CSS", "Node.js"],
                stars: 64,
                forks: 12,
                githubUrl: "https://github.com"
            },
            {
                id: 5,
                title: "Bionic Prosthetic Arm Interface",
                category: "robotics",
                summary: "Surface EMG signal processing pipeline and neural classifier running on Teensy 4.1 for myoelectric control.",
                description: "Captures electromyographic (EMG) muscle signals through custom differential amplifiers, filters 60Hz powerline noise, and classifies hand gestures using random forest models.",
                image: "https://placehold.co/600x400/161b22/ef4444?text=Bionic+Arm",
                tags: ["Python", "C++", "Teensy", "Signal Processing"],
                stars: 58,
                forks: 9,
                githubUrl: "https://github.com"
            },
            {
                id: 6,
                title: "DevPortfolio README Showcase",
                category: "software",
                summary: "A sleek single-file portfolio template designed for developers to showcase GitHub projects cleanly.",
                description: "A lightweight, zero-dependency HTML/JS showcase template crafted to host instantly on GitHub Pages or embed in repository readmes.",
                image: "https://placehold.co/600x400/161b22/10b981?text=README+Portfolio",
                tags: ["HTML5", "Tailwind CSS", "JavaScript"],
                stars: 112,
                forks: 34,
                githubUrl: "https://github.com"
            }
        ];

        function renderProjects(items) {
            const grid = document.getElementById('projects-grid');
            const noProjects = document.getElementById('no-projects');
            grid.innerHTML = '';

            if (items.length === 0) {
                noProjects.classList.remove('hidden');
                return;
            } else {
                noProjects.classList.add('hidden');
            }

            items.forEach(project => {
                const card = document.createElement('div');
                card.className = "bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden card-hover flex flex-col justify-between";
                
                const tagsHtml = project.tags.map(tag => `<span class="px-2 py-0.5 rounded bg-[#21262d] text-gray-300 text-[11px] font-mono border border-[#30363d]">${tag}</span>`).join('');
                
                card.innerHTML = `
                    <div>
                        <div class="relative overflow-hidden aspect-video bg-[#0d1117] border-b border-[#30363d]">
                            <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/600x400/161b22/ffffff?text=Project'">
                            <span class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-brand-400 text-[10px] font-semibold uppercase tracking-wider border border-brand-500/30">
                                ${project.category}
                            </span>
                        </div>
                        <div class="p-5">
                            <h3 class="text-base font-bold text-white mb-1.5">${project.title}</h3>
                            <p class="text-gray-400 text-xs line-clamp-2 mb-4 leading-relaxed">${project.summary}</p>
                            <div class="flex flex-wrap gap-1 mb-2">
                                ${tagsHtml}
                            </div>
                        </div>
                    </div>
                    <div class="px-5 pb-5 pt-0 flex items-center justify-between border-t border-[#30363d]/40 pt-3 mt-auto">
                        <div class="flex items-center space-x-3 text-xs text-gray-400 font-mono">
                            <span class="flex items-center space-x-1"><i class="fa-solid fa-star text-yellow-400 text-[11px]"></i><span>${project.stars}</span></span>
                            <span class="flex items-center space-x-1"><i class="fa-solid fa-code-fork text-[11px]"></i><span>${project.forks}</span></span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <button onclick="openModal(${project.id})" class="text-xs font-medium text-brand-400 hover:text-brand-300 bg-brand-500/10 hover:bg-brand-500/20 px-2.5 py-1 rounded border border-brand-500/20 transition-all">
                                Details
                            </button>
                            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="text-xs text-gray-300 hover:text-white bg-[#21262d] hover:bg-[#30363d] p-1.5 rounded border border-[#30363d] transition-all" title="View Source on GitHub">
                                <i class="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        function openModal(id) {
            const project = projects.find(p => p.id === id);
            if (!project) return;

            const modalContent = document.getElementById('modal-content');
            const tagsHtml = project.tags.map(tag => `<span class="px-2 py-0.5 rounded bg-[#21262d] text-brand-400 text-[11px] font-mono border border-[#30363d]">${tag}</span>`).join('');

            modalContent.innerHTML = `
                <div class="space-y-4">
                    <div class="flex items-center space-x-2">
                        <span class="px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 text-[10px] font-semibold uppercase tracking-wider border border-brand-500/20">
                            ${project.category}
                        </span>
                    </div>
                    <h2 class="text-xl font-bold text-white">${project.title}</h2>
                    <div class="rounded-lg overflow-hidden border border-[#30363d] aspect-video bg-[#0d1117]">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
                    </div>
                    <div>
                        <h4 class="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1">Description</h4>
                        <p class="text-gray-300 text-xs leading-relaxed">${project.description}</p>
                    </div>
                    <div>
                        <h4 class="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1">Tech Stack</h4>
                        <div class="flex flex-wrap gap-1.5">
                            ${tagsHtml}
                        </div>
                    </div>
                    <div class="pt-4 border-t border-[#30363d] flex items-center justify-end space-x-3">
                        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="bg-brand-500 hover:bg-brand-600 text-black font-semibold px-4 py-2 rounded-lg text-xs transition-all flex items-center space-x-2">
                            <i class="fa-brands fa-github text-sm"></i>
                            <span>View Repository</span>
                        </a>
                    </div>
                </div>
            `;
            document.getElementById('project-modal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        document.getElementById('close-modal').addEventListener('click', () => {
            document.getElementById('project-modal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        });

        document.getElementById('project-modal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('project-modal')) {
                document.getElementById('project-modal').classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });

        let currentFilter = 'all';
        let searchQuery = '';

        function filterAndRender() {
            let filtered = projects.filter(project => {
                const matchesCategory = currentFilter === 'all' || project.category === currentFilter;
                const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                      project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
                return matchesCategory && matchesSearch;
            });
            renderProjects(filtered);
        }

        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterBtns.forEach(b => {
                    b.classList.remove('bg-brand-500', 'text-black');
                    b.classList.add('bg-[#161b22]', 'text-gray-300', 'border', 'border-[#30363d]');
                });
                e.target.classList.remove('bg-[#161b22]', 'text-gray-300', 'border', 'border-[#30363d]');
                e.target.classList.add('bg-brand-500', 'text-black');
                
                currentFilter = e.target.getAttribute('data-filter');
                filterAndRender();
            });
        });

        document.getElementById('project-search').addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            filterAndRender();
        });

        window.onload = function() {
            renderProjects(projects);
        };
    </script>
</body>
</html>
