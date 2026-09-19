<!DOCTYPE html>
<html lang="en" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alex Rivera | Robotics, AI & Software Portfolio</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#f0fdf4',
                            500: '#22c55e',
                            600: '#16a34a',
                            900: '#14532d',
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
        /* Custom scrollbar for sleek modern look */
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
        .glow-effect {
            box-shadow: 0 0 25px -5px rgba(34, 197, 94, 0.15);
        }
        .card-hover {
            transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .card-hover:hover {
            transform: translateY(-4px);
            border-color: #22c55e;
            box-shadow: 0 10px 30px -10px rgba(34, 197, 94, 0.2);
        }
    </style>
</head>
<body class="bg-[#0d1117] text-[#c9d1d9] min-h-screen selection:bg-brand-500 selection:text-black">

    <header class="sticky top-0 z-40 backdrop-blur-md bg-[#0d1117]/80 border-b border-[#30363d]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-emerald-700 flex items-center justify-center text-black font-bold shadow-lg shadow-brand-500/20">
                    <i class="fa-solid fa-terminal text-black"></i>
                </div>
                <span class="font-bold text-lg text-white tracking-tight">alex.rivera<span class="text-brand-500">.dev</span></span>
            </div>
            
            <nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
                <a href="#about" class="text-gray-300 hover:text-brand-500 transition-colors">About</a>
                <a href="#projects" class="text-gray-300 hover:text-brand-500 transition-colors">Projects</a>
                <a href="#stats" class="text-gray-300 hover:text-brand-500 transition-colors">GitHub Stats</a>
                <a href="#contact" class="text-gray-300 hover:text-brand-500 transition-colors">Contact</a>
            </nav>

            <div class="flex items-center space-x-3">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="hidden sm:inline-flex items-center space-x-2 bg-[#21262d] hover:bg-[#30363d] text-white px-3.5 py-2 rounded-lg text-sm font-medium border border-[#30363d] transition-colors">
                    <i class="fa-brands fa-github text-lg"></i>
                    <span>Follow on GitHub</span>
                </a>
                <button id="mobile-menu-btn" class="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none">
                    <i class="fa-solid fa-bars text-xl"></i>
                </button>
            </div>
        </div>
        <!-- Mobile menu dropdown -->
        <div id="mobile-menu" class="hidden md:hidden bg-[#161b22] border-b border-[#30363d] px-4 pt-2 pb-4 space-y-2">
            <a href="#about" class="block py-2 text-gray-300 hover:text-brand-500">About</a>
            <a href="#projects" class="block py-2 text-gray-300 hover:text-brand-500">Projects</a>
            <a href="#stats" class="block py-2 text-gray-300 hover:text-brand-500">GitHub Stats</a>
            <a href="#contact" class="block py-2 text-gray-300 hover:text-brand-500">Contact</a>
        </div>
    </header>

    <section class="relative overflow-hidden py-20 lg:py-28 border-b border-[#30363d]">
        <!-- Background decorative gradient glow -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
                    <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium">
                        <span class="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                        <span>Available for freelance & full-time roles</span>
                    </div>
                    
                    <h1 class="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                        Engineering at the intersection of <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-200">Hardware & AI</span>
                    </h1>
                    
                    <p class="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0">
                        Hi, I'm Alex. Robotics engineer, embedded systems developer, and open-source enthusiast building robust physical computing systems and scalable software.
                    </p>

                    <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                        <a href="#projects" class="bg-brand-500 hover:bg-brand-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg shadow-brand-500/20 transition-all flex items-center space-x-2">
                            <span>Explore Projects</span>
                            <i class="fa-solid fa-arrow-down text-sm"></i>
                        </a>
                        <a href="#contact" class="bg-[#21262d] hover:bg-[#30363d] text-white border border-[#30363d] font-medium px-6 py-3 rounded-lg transition-all">
                            Get in Touch
                        </a>
                    </div>

                    <div class="pt-6 flex items-center justify-center lg:justify-start space-x-6 text-gray-400">
                        <div class="flex items-center space-x-2">
                            <i class="fa-solid fa-location-dot text-brand-500"></i>
                            <span class="text-sm">San Francisco, CA</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <i class="fa-solid fa-code-commit text-brand-500"></i>
                            <span class="text-sm">1,400+ Contributions in 2026</span>
                        </div>
                    </div>
                </div>

                <!-- Code Terminal Card Showcase -->
                <div class="lg:col-span-5">
                    <div class="rounded-xl bg-[#161b22] border border-[#30363d] overflow-hidden shadow-2xl glow-effect">
                        <div class="bg-[#21262d] px-4 py-3 border-b border-[#30363d] flex items-center justify-between">
                            <div class="flex items-center space-x-2">
                                <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <span class="text-xs code-font text-gray-400">alex-profile.py</span>
                            <div class="w-4"></div>
                        </div>
                        <div class="p-5 code-font text-xs sm:text-sm text-gray-300 space-y-2 overflow-x-auto">
                            <p><span class="text-pink-400">class</span> <span class="text-yellow-300">RoboticsEngineer</span>:</p>
                            <p class="pl-4"><span class="text-pink-400">def</span> <span class="text-blue-400">__init__</span>(<span class="text-orange-400">self</span>):</p>
                            <p class="pl-8"><span class="text-orange-400">self</span>.name = <span class="text-green-300">"Alex Rivera"</span></p>
                            <p class="pl-8"><span class="text-orange-400">self</span>.focus = [<span class="text-green-300">"ROS2"</span>, <span class="text-green-300">"Embedded C++"</span>, <span class="text-green-300">"PyTorch"</span>]</p>
                            <p class="pl-8"><span class="text-orange-400">self</span>.hardware = [<span class="text-green-300">"STM32"</span>, <span class="text-green-300">"ESP32"</span>, <span class="text-green-300">"Jetson Nano"</span>]</p>
                            <p class="pl-4"><br></p>
                            <p class="pl-4"><span class="text-pink-400">def</span> <span class="text-blue-400">build_future</span>(<span class="text-orange-400">self</span>):</p>
                            <p class="pl-8"><span class="text-purple-400">return</span> <span class="text-green-300">"Autonomous Systems & AI Integration"</span></p>
                            <p class="pt-2 text-gray-500"># Ready for deployment...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="projects" class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
                <h2 class="text-xs uppercase tracking-widest text-brand-500 font-semibold mb-2">Portfolio</h2>
                <h3 class="text-3xl font-bold text-white tracking-tight">Featured Projects & Repositories</h3>
            </div>
            
            <!-- Search & Filter Controls -->
            <div class="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3">
                <div class="relative">
                    <i class="fa-solid fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
                    <input type="text" id="project-search" placeholder="Search projects, tags..." class="bg-[#161b22] border border-[#30363d] rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 w-full sm:w-64 transition-colors">
                </div>
            </div>
        </div>

        <!-- Category Filter Buttons -->
        <div id="filter-container" class="flex flex-wrap gap-2 mb-10">
            <button data-filter="all" class="filter-btn active-filter px-4 py-2 rounded-lg text-sm font-medium bg-brand-500 text-black transition-all">All Projects</button>
            <button data-filter="robotics" class="filter-btn px-4 py-2 rounded-lg text-sm font-medium bg-[#161b22] text-gray-300 hover:bg-[#30363d] border border-[#30363d] transition-all">Robotics</button>
            <button data-filter="embedded" class="filter-btn px-4 py-2 rounded-lg text-sm font-medium bg-[#161b22] text-gray-300 hover:bg-[#30363d] border border-[#30363d] transition-all">Embedded & IoT</button>
            <button data-filter="ai" class="filter-btn px-4 py-2 rounded-lg text-sm font-medium bg-[#161b22] text-gray-300 hover:bg-[#30363d] border border-[#30363d] transition-all">AI & Data Science</button>
            <button data-filter="software" class="filter-btn px-4 py-2 rounded-lg text-sm font-medium bg-[#161b22] text-gray-300 hover:bg-[#30363d] border border-[#30363d] transition-all">Web & Software</button>
        </div>

        <!-- Projects Grid Container -->
        <div id="projects-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Project Cards will be dynamically injected or rendered here via JavaScript -->
        </div>

        <!-- Empty State (hidden by default) -->
        <div id="no-projects" class="hidden text-center py-16">
            <div class="w-16 h-16 bg-[#161b22] border border-[#30363d] rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 text-xl">
                <i class="fa-solid fa-folder-open"></i>
            </div>
            <h4 class="text-lg font-medium text-white">No matching projects found</h4>
            <p class="text-gray-400 text-sm mt-1">Try adjusting your search query or category filter.</p>
        </div>
    </section>

    <section id="stats" class="py-20 border-t border-[#30363d] bg-[#161b22]/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-16">
                <h2 class="text-xs uppercase tracking-widest text-brand-500 font-semibold mb-2">Metrics & Activity</h2>
                <h3 class="text-3xl font-bold text-white tracking-tight">GitHub Activity Overview</h3>
                <p class="text-gray-400 text-sm mt-2">Real-time stats tracking commits, pull requests, and repository contributions.</p>
            </div>

            <!-- Stats Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div class="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-center">
                    <div class="w-10 h-10 rounded-lg bg-brand-500/10 text-brand-500 flex items-center justify-center mx-auto mb-4 text-lg">
                        <i class="fa-solid fa-code-commit"></i>
                    </div>
                    <div class="text-3xl font-bold text-white">1,428</div>
                    <div class="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">Commits in 2026</div>
                </div>
                
                <div class="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-center">
                    <div class="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-4 text-lg">
                        <i class="fa-solid fa-book-bookmark"></i>
                    </div>
                    <div class="text-3xl font-bold text-white">32</div>
                    <div class="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">Public Repositories</div>
                </div>

                <div class="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-center">
                    <div class="w-10 h-10 rounded-lg bg-yellow-500/10 text-yellow-400 flex items-center justify-center mx-auto mb-4 text-lg">
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="text-3xl font-bold text-white">480+</div>
                    <div class="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">Total Stars Earned</div>
                </div>

                <div class="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-center">
                    <div class="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto mb-4 text-lg">
                        <i class="fa-solid fa-code-pull-request"></i>
                    </div>
                    <div class="text-3xl font-bold text-white">85</div>
                    <div class="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">Pull Requests Merged</div>
                </div>
            </div>

            <!-- Simulated GitHub Contribution Graph -->
            <div class="bg-[#161b22] border border-[#30363d] rounded-xl p-6 overflow-hidden">
                <div class="flex items-center justify-between mb-4">
                    <span class="text-sm font-medium text-white">1,428 contributions in the last year</span>
                    <div class="flex items-center space-x-2 text-xs text-gray-400">
                        <span>Less</span>
                        <div class="flex space-x-1">
                            <div class="w-3 h-3 bg-[#21262d] rounded-sm"></div>
                            <div class="w-3 h-3 bg-[#0e4429] rounded-sm"></div>
                            <div class="w-3 h-3 bg-[#006d32] rounded-sm"></div>
                            <div class="w-3 h-3 bg-[#26a641] rounded-sm"></div>
                            <div class="w-3 h-3 bg-[#39d353] rounded-sm"></div>
                        </div>
                        <span>More</span>
                    </div>
                </div>
                <div id="contribution-grid" class="grid grid-flow-col grid-rows-7 gap-1.5 overflow-x-auto pb-2">
                    <!-- JavaScript will generate the contribution squares here -->
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#30363d]">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div class="lg:col-span-6 space-y-6">
                <h2 class="text-xs uppercase tracking-widest text-brand-500 font-semibold">Background</h2>
                <h3 class="text-3xl font-bold text-white tracking-tight">Engineering robust solutions from silicon to cloud</h3>
                <p class="text-gray-400 leading-relaxed">
                    I specialize in designing custom printed circuit boards, writing low-level firmware in C/C++, orchestrating autonomous mobile robots using ROS2, and deploying machine learning models to edge devices like NVIDIA Jetson and Raspberry Pi.
                </p>
                <p class="text-gray-400 leading-relaxed">
                    Whether it's writing memory-safe embedded code or building intuitive full-stack web dashboards to monitor sensor telemetry, I bridge the gap between physical hardware and modern software architecture.
                </p>

                <div class="grid grid-cols-2 gap-4 pt-4">
                    <div class="flex items-center space-x-3 bg-[#161b22] border border-[#30363d] p-3.5 rounded-lg">
                        <i class="fa-solid fa-microchip text-brand-500 text-xl"></i>
                        <div>
                            <div class="text-white text-sm font-semibold">Embedded Systems</div>
                            <div class="text-gray-400 text-xs">STM32, ESP32, RTOS</div>
                        </div>
                    </div>
                    <div class="flex items-center space-x-3 bg-[#161b22] border border-[#30363d] p-3.5 rounded-lg">
                        <i class="fa-solid fa-robot text-brand-500 text-xl"></i>
                        <div>
                            <div class="text-white text-sm font-semibold">Robotics & ROS2</div>
                            <div class="text-gray-400 text-xs">Navigation2, Gazebo</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Skills Stack -->
            <div class="lg:col-span-6 bg-[#161b22] border border-[#30363d] rounded-xl p-6 sm:p-8">
                <h4 class="text-lg font-bold text-white mb-6 flex items-center space-x-2">
                    <i class="fa-solid fa-layer-group text-brand-500"></i>
                    <span>Tech Stack & Competencies</span>
                </h4>

                <div class="space-y-5">
                    <div>
                        <div class="flex justify-between text-xs font-medium text-gray-300 mb-1.5">
                            <span>C / C++ / Embedded Firmware</span>
                            <span class="text-brand-500">95%</span>
                        </div>
                        <div class="w-full bg-[#21262d] h-2 rounded-full overflow-hidden">
                            <div class="bg-brand-500 h-full rounded-full" style="width: 95%"></div>
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-between text-xs font-medium text-gray-300 mb-1.5">
                            <span>Python & PyTorch (AI/ML)</span>
                            <span class="text-brand-500">90%</span>
                        </div>
                        <div class="w-full bg-[#21262d] h-2 rounded-full overflow-hidden">
                            <div class="bg-brand-500 h-full rounded-full" style="width: 90%"></div>
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-between text-xs font-medium text-gray-300 mb-1.5">
                            <span>ROS2 & Autonomous Navigation</span>
                            <span class="text-brand-500">88%</span>
                        </div>
                        <div class="w-full bg-[#21262d] h-2 rounded-full overflow-hidden">
                            <div class="bg-brand-500 h-full rounded-full" style="width: 88%"></div>
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-between text-xs font-medium text-gray-300 mb-1.5">
                            <span>PCB Design (Altium / KiCad)</span>
                            <span class="text-brand-500">85%</span>
                        </div>
                        <div class="w-full bg-[#21262d] h-2 rounded-full overflow-hidden">
                            <div class="bg-brand-500 h-full rounded-full" style="width: 85%"></div>
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-between text-xs font-medium text-gray-300 mb-1.5">
                            <span>Web & Full-Stack (HTML/JS/Tailwind)</span>
                            <span class="text-brand-500">82%</span>
                        </div>
                        <div class="w-full bg-[#21262d] h-2 rounded-full overflow-hidden">
                            <div class="bg-brand-500 h-full rounded-full" style="width: 82%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="py-20 border-t border-[#30363d] bg-[#161b22]/30">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-xs uppercase tracking-widest text-brand-500 font-semibold mb-2">Get In Touch</h2>
            <h3 class="text-3xl font-bold text-white tracking-tight mb-4">Let's build something extraordinary</h3>
            <p class="text-gray-400 max-w-xl mx-auto mb-8 text-sm">
                Have a project in mind, a hardware challenge, or want to discuss open-source collaboration? My inbox is always open.
            </p>

            <div class="flex flex-wrap justify-center gap-4 mb-12">
                <a href="mailto:alex.rivera.robotics@gmail.com" class="bg-brand-500 hover:bg-brand-600 text-black font-semibold px-6 py-3 rounded-lg transition-all flex items-center space-x-2 shadow-lg shadow-brand-500/20">
                    <i class="fa-solid fa-envelope"></i>
                    <span>Send Email</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="bg-[#21262d] hover:bg-[#30363d] text-white border border-[#30363d] font-medium px-6 py-3 rounded-lg transition-all flex items-center space-x-2">
                    <i class="fa-brands fa-github"><span>GitHub Profile</span></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="bg-[#21262d] hover:bg-[#30363d] text-white border border-[#30363d] font-medium px-6 py-3 rounded-lg transition-all flex items-center space-x-2">
                    <i class="fa-brands fa-linkedin text-blue-400"></i>
                    <span>LinkedIn</span>
                </a>
            </div>

            <!-- GitHub README Integration Guide Box -->
            <div class="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-2 text-white font-medium text-sm">
                        <i class="fa-brands fa-markdown text-brand-500 text-lg"></i>
                        <span>Using this template in your GitHub README (`README.md`)</span>
                    </div>
                    <button id="copy-readme-btn" class="bg-[#21262d] hover:bg-[#30363d] text-gray-300 hover:text-white px-3 py-1.5 rounded-lg text-xs border border-[#30363d] transition-colors flex items-center space-x-1.5">
                        <i class="fa-regular fa-copy"></i>
                        <span id="copy-text">Copy Markdown Badge</span>
                    </button>
                </div>
                <p class="text-xs text-gray-400 mb-4">
                    You can easily host this single-file portfolio on GitHub Pages (`gh-pages` branch) and embed your portfolio banner directly into your GitHub profile README repository!
                </p>
                <div class="bg-[#0d1117] p-3 rounded-lg border border-[#30363d] code-font text-xs text-gray-300 overflow-x-auto">
                    <code>&lt;div align="center"&gt;<br>&nbsp;&nbsp;&lt;a href="https://yourusername.github.io"&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="https://img.shields.io/badge/Portfolio-Live_Website-22c55e?style=for-the-badge&logo=icloud&logoColor=white" alt="Portfolio"/&gt;<br>&nbsp;&nbsp;&lt;/a&gt;<br>&lt;/div&gt;</code>
                </div>
            </div>
        </div>
    </section>

    <div id="project-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm hidden">
        <div class="bg-[#161b22] border border-[#30363d] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button id="close-modal" class="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#21262d] hover:bg-[#30363d] text-gray-400 hover:text-white flex items-center justify-center transition-colors">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div id="modal-content" class="p-6 sm:p-8">
                <!-- Dynamically populated modal details -->
            </div>
        </div>
    </div>

    <footer class="py-8 border-t border-[#30363d] text-center text-xs text-gray-500">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
                © 2026 Alex Rivera. Built with HTML, Tailwind CSS, and Vanilla JS.
            </div>
            <div class="flex items-center space-x-4">
                <a href="https://github.com" target="_blank" class="hover:text-brand-500 transition-colors"><i class="fa-brands fa-github text-base"></i></a>
                <a href="https://linkedin.com" target="_blank" class="hover:text-brand-500 transition-colors"><i class="fa-brands fa-linkedin text-base"></i></a>
                <a href="https://twitter.com" target="_blank" class="hover:text-brand-500 transition-colors"><i class="fa-brands fa-twitter text-base"></i></a>
            </div>
        </div>
    </footer>

    <script>
        // Project Database
        const projects = [
            {
                id: 1,
                title: "OmniRover ROS2 Autonomous AGV",
                category: "robotics",
                summary: "An omni-directional autonomous guided vehicle powered by ROS2 Navigation2, LiDAR, and an NVIDIA Jetson Orin Nano for warehouse automation.",
                description: "OmniRover is an advanced open-source AGV designed for high-density indoor logistics. It features 3-wheel omni-drive kinematics with custom closed-loop PID motor controllers on an STM32 co-processor, SLAM-toolbox mapping, and real-time obstacle avoidance via Hokuyo LiDAR and Intel RealSense depth cameras.",
                image: "https://placehold.co/600x400/161b22/22c55e?text=OmniRover+ROS2",
                tags: ["ROS2", "C++", "Python", "Gazebo", "STM32", "LiDAR"],
                stars: 184,
                forks: 42,
                githubUrl: "https://github.com",
                demoUrl: "https://github.com"
            },
            {
                id: 2,
                title: "NeuralEdge - TinyML Object Detection",
                category: "ai",
                summary: "Optimized YOLOv8 neural network models quantized and deployed on low-power ESP32-CAM and Raspberry Pi modules for edge surveillance.",
                description: "NeuralEdge bridges the gap between state-of-the-art computer vision and resource-constrained edge microcontrollers. By utilizing INT8 post-training quantization and CMSIS-NN kernels, this project achieves 24 FPS inference on low-cost hardware without cloud dependency.",
                image: "https://placehold.co/600x400/161b22/3b82f6?text=NeuralEdge+TinyML",
                tags: ["PyTorch", "OpenCV", "ESP32", "C++", "TinyML"],
                stars: 142,
                forks: 29,
                githubUrl: "https://github.com",
                demoUrl: "https://github.com"
            },
            {
                id: 3,
                title: "FlightMaster Drone Flight Controller",
                category: "embedded",
                summary: "Custom STM32F4-based multirotor flight controller firmware written from scratch with complementary filter attitude estimation and MAVLink telemetry.",
                description: "A bare-metal C flight controller designed to explore sensor fusion and robust attitude estimation. Features a custom SPI driver for MPU9250 IMU, barometric altitude hold algorithms, and a failsafe RC receiver protocol parser.",
                image: "https://placehold.co/600x400/161b22/f59e0b?text=Drone+Firmware",
                tags: ["STM32", "Embedded C", "FreeRTOS", "MAVLink", "PCB"],
                stars: 96,
                forks: 18,
                githubUrl: "https://github.com",
                demoUrl: "https://github.com"
            },
            {
                id: 4,
                title: "IoT Greenhouse Telemetry Dashboard",
                category: "software",
                summary: "Real-time web dashboard built with Tailwind CSS and MQTT websockets to monitor soil moisture, ambient temperature, and automated irrigation.",
                description: "A full-stack IoT web application designed for precision agriculture. Connects multiple ESP8266 sensor nodes via MQTT broker to a Node.js backend with live data visualization charts and automated actuator triggers.",
                image: "https://placehold.co/600x400/161b22/a855f7?text=IoT+Dashboard",
                tags: ["JavaScript", "MQTT", "Tailwind CSS", "Node.js", "ESP8266"],
                stars: 64,
                forks: 12,
                githubUrl: "https://github.com",
                demoUrl: "https://github.com"
            },
            {
                id: 5,
                title: "Bionic Prosthetic Arm Interface",
                category: "robotics",
                summary: "Surface EMG signal processing pipeline and neural classifier running on Teensy 4.1 for multi-grip myoelectric hand control.",
                description: "This research project captures electromyographic (EMG) muscle signals through custom differential amplifiers, filters 60Hz powerline noise with digital notch filters, and classifies hand gestures using random forest models.",
                image: "https://placehold.co/600x400/161b22/ef4444?text=Bionic+Arm",
                tags: ["Python", "C++", "Teensy", "Signal Processing", "Biomedical"],
                stars: 58,
                forks: 9,
                githubUrl: "https://github.com",
                demoUrl: "https://github.com"
            },
            {
                id: 6,
                title: "DevPortfolio README Template Generator",
                category: "software",
                summary: "A sleek single-file portfolio generator designed explicitly for developers to showcase GitHub projects inside repository readmes.",
                description: "A lightweight, zero-dependency HTML/JS showcase template crafted for developers to host instantly on GitHub Pages or embed as dynamic profile showcase cards.",
                image: "https://placehold.co/600x400/161b22/10b981?text=README+Portfolio",
                tags: ["HTML5", "Tailwind CSS", "JavaScript", "GitHub Pages"],
                stars: 112,
                forks: 34,
                githubUrl: "https://github.com",
                demoUrl: "https://github.com"
            }
        ];

        // Render Projects Grid
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
                
                const tagsHtml = project.tags.map(tag => `<span class="px-2.5 py-1 rounded-md bg-[#21262d] text-gray-300 text-xs font-mono border border-[#30363d]">${tag}</span>`).join('');
                
                card.innerHTML = `
                    <div>
                        <div class="relative overflow-hidden group aspect-video bg-[#0d1117]">
                            <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.src='https://placehold.co/600x400/161b22/ffffff?text=Project+Image'">
                            <div class="absolute inset-0 bg-gradient-to-t from-[#161b22] via-transparent to-transparent opacity-80"></div>
                            <span class="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-brand-400 text-xs font-semibold uppercase tracking-wider border border-brand-500/30">
                                ${project.category}
                            </span>
                        </div>
                        <div class="p-6">
                            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">${project.title}</h3>
                            <p class="text-gray-400 text-sm line-clamp-2 mb-4">${project.summary}</p>
                            <div class="flex flex-wrap gap-1.5 mb-4">
                                ${tagsHtml}
                            </div>
                        </div>
                    </div>
                    <div class="px-6 pb-6 pt-0 flex items-center justify-between border-t border-[#30363d]/50 pt-4 mt-auto">
                        <div class="flex items-center space-x-4 text-xs text-gray-400 font-mono">
                            <span class="flex items-center space-x-1"><i class="fa-solid fa-star text-yellow-400"></i><span>${project.stars}</span></span>
                            <span class="flex items-center space-x-1"><i class="fa-solid fa-code-fork"></i><span>${project.forks}</span></span>
                        </div>
                        <button onclick="openModal(${project.id})" class="text-xs font-medium text-brand-400 hover:text-brand-300 flex items-center space-x-1 bg-brand-500/10 hover:bg-brand-500/20 px-3 py-1.5 rounded-lg border border-brand-500/20 transition-all">
                            <span>Details</span>
                            <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // Modal Handler
        function openModal(id) {
            const project = projects.find(p => p.id === id);
            if (!project) return;

            const modalContent = document.getElementById('modal-content');
            const tagsHtml = project.tags.map(tag => `<span class="px-3 py-1 rounded-md bg-[#21262d] text-brand-400 text-xs font-mono border border-[#30363d]">${tag}</span>`).join('');

            modalContent.innerHTML = `
                <div class="space-y-6">
                    <div class="flex items-center space-x-2">
                        <span class="px-3 py-1 rounded-md bg-brand-500/10 text-brand-400 text-xs font-semibold uppercase tracking-wider border border-brand-500/20">
                            ${project.category}
                        </span>
                        <span class="text-gray-500 text-sm">•</span>
                        <span class="text-gray-400 text-xs font-mono">Repository ID: #0${project.id}</span>
                    </div>

                    <h2 class="text-2xl sm:text-3xl font-bold text-white">${project.title}</h2>
                    
                    <div class="rounded-xl overflow-hidden border border-[#30363d] aspect-video bg-[#0d1117]">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
                    </div>

                    <div>
                        <h4 class="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Overview</h4>
                        <p class="text-gray-300 leading-relaxed text-sm">${project.description}</p>
                    </div>

                    <div>
                        <h4 class="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Technologies & Frameworks</h4>
                        <div class="flex flex-wrap gap-2">
                            ${tagsHtml}
                        </div>
                    </div>

                    <div class="flex flex-wrap items-center gap-4 pt-4 border-t border-[#30363d]">
                        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="bg-brand-500 hover:bg-brand-600 text-black font-semibold px-5 py-2.5 rounded-lg text-sm transition-all flex items-center space-x-2">
                            <i class="fa-brands fa-github text-base"></i>
                            <span>View Source Code</span>
                        </a>
                        <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="bg-[#21262d] hover:bg-[#30363d] text-white border border-[#30363d] font-medium px-5 py-2.5 rounded-lg text-sm transition-all flex items-center space-x-2">
                            <i class="fa-solid fa-globe text-gray-400"></i>
                            <span>Live Documentation</span>
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

        // Close on background click
        document.getElementById('project-modal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('project-modal')) {
                document.getElementById('project-modal').classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });

        // Search & Filter State
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

        // Filter button event listeners
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

        // Search input listener
        document.getElementById('project-search').addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            filterAndRender();
        });

        // Generate Simulated Contribution Graph Squares
        function generateContributions() {
            const container = document.getElementById('contribution-grid');
            // 52 weeks * 7 days = 364 squares
            for (let i = 0; i < 364; i++) {
                const square = document.createElement('div');
                square.className = "w-3 h-3 rounded-sm transition-colors";
                
                // Randomize intensity levels to mimic real github commit map
                const rand = Math.random();
                if (rand > 0.85) {
                    square.classList.add('bg-[#39d353]');
                } else if (rand > 0.65) {
                    square.classList.add('bg-[#26a641]');
                } else if (rand > 0.45) {
                    square.classList.add('bg-[#006d32]');
                } else if (rand > 0.25) {
                    square.classList.add('bg-[#0e4429]');
                } else {
                    square.classList.add('bg-[#21262d]');
                }
                container.appendChild(square);
            }
        }

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Copy README badge button
        document.getElementById('copy-readme-btn').addEventListener('click', () => {
            const markdownCode = `<div align="center">\n  <a href="https://yourusername.github.io">\n    <img src="https://img.shields.io/badge/Portfolio-Live_Website-22c55e?style=for-the-badge&logo=icloud&logoColor=white" alt="Portfolio"/>\n  </a>\n</div>`;
            document.execCommand('copy');
            
            // Fallback copy using modern navigator if available
            if (navigator.clipboard) {
                navigator.clipboard.writeText(markdownCode);
            }

            const copyText = document.getElementById('copy-text');
            copyText.textContent = "Copied to Clipboard!";
            setTimeout(() => {
                copyText.textContent = "Copy Markdown Badge";
            }, 2000);
        });

        // Initialize on load
        window.onload = function() {
            renderProjects(projects);
            generateContributions();
        };
    </script>
</body>
</html>
