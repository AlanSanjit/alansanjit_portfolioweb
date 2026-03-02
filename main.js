const panelsData = [
    {
        id: "panel-1",
        title: "Gallery",
        desc: "",
        imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu7LRVsv5eKSztHJhg-XwZSv6lNIEIpTMNDncbUt5T6d6zIkpFHjcOG2bRlBE4phKq9C2w2siXkJ6yIBoj3sIKnFYjYtmvjDuy3Avac43AlrGdG-LgvRNBistyo3GHeiQMFeLI233O4HPdfehRwCP0_zhkAdHH-krXZJe8-gG3ksBTR06nCys8RXcvvjO311TrGvUQsl4sRJpZM_9YqCDQcYms-bB3bbXoYzUq5UN2KnRFVYXc1sLWEpiXhP5gAVICdwhUnXRfzkA",
        videoSrc: "./assets/IMG_9197.mov",
        videoClass: "experience-video pointer-events-none",
        imgAlt: "Gallery: Minimalist photography",
        linkText: "",
        linkHref: "",
        bgColor: "bg-black/60",
        delayClass: "panel-entrance-1",
        extraContent: `<div class="w-full max-w-7xl mx-auto flex flex-col overflow-y-auto max-h-[65vh] md:max-h-[75vh] pr-4 custom-scrollbar text-left py-4 space-y-16">
                           
                           <!-- 2026 Section -->
                           <div>
                               <div class="flex items-center gap-4 mb-8">
                                   <h3 class="text-3xl md:text-4xl font-display font-bold text-white tracking-widest">2026</h3>
                                   <div class="h-px flex-1 bg-white/20"></div>
                               </div>
                               
                               <!-- Collage Grid -->
                               <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
                                   <!-- Large Feature Image -->
                                   <div class="md:col-span-2 md:row-span-2 rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                       <img src="./IMG_9821.jpg" alt="2026 Large Feature" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                   </div>
                                   
                                   <!-- Standard Images -->
                                   <div class="rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                       <img src="./IMG_0782.jpg" alt="2026 Standard Image 1" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                   </div>
                                   <div class="rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                       <img src="./IMG_0805.JPG" alt="2026 Standard Image 2" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                   </div>
                               </div>
                           </div>

                           <!-- 2025 Section -->
                           <div>
                               <div class="flex items-center gap-4 mb-8">
                                   <h3 class="text-3xl md:text-4xl font-display font-bold text-white tracking-widest">2025</h3>
                                   <div class="h-px flex-1 bg-white/20"></div>
                               </div>
                               
                               <!-- Collage Grid -->
                               <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
                                   <!-- Tall Image -->
                                   <div class="md:row-span-2 rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                       <img src="./assets/IMG_9212.jpg" alt="2025 Tall Image" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                   </div>

                                   <!-- Standard Images Block -->
                                   <div class="grid grid-rows-2 gap-4 md:gap-6 md:col-span-2 md:row-span-2">
                                       <div class="rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                           <img src="./assets/IMG_2387.jpg" alt="2025 Image 1" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                       </div>
                                       <div class="grid grid-cols-2 gap-4 md:gap-6">
                                           <div class="rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                               <img src="./assets/IMG_0709.jpg" alt="2025 Image 2" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                           </div>
                                           <div class="rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                               <img src="./assets/FB669344-56DA-47E6-8E9B-2AC99868C021.jpg" alt="2025 Image 3" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           
                           <!-- 2024 Section -->
                           <div>
                               <div class="flex items-center gap-4 mb-8">
                                   <h3 class="text-3xl md:text-4xl font-display font-bold text-white tracking-widest">2024</h3>
                                   <div class="h-px flex-1 bg-white/20"></div>
                               </div>
                               <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[200px]">
                                   <div class="md:col-span-2 md:row-span-2 rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                       <img src="./assets/IMG_7195.jpg" alt="2024 Large Feature" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                   </div>
                                   <div class="md:col-span-2 rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                       <img src="./assets/1538.jpg" onerror="this.src='./assets/IMG_1538.jpg'" alt="2024 Wide Placeholder" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                   </div>
                                   <div class="rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                       <img src="./assets/81c047e6-3cfd-4467-ae65-1805422ba5a4.jpg" alt="2024 Standard Image 1" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                   </div>
                                   <div class="rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                       <img src="./assets/IMG_8444.JPG" alt="2024 Standard Image 2" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                   </div>
                               </div>
                           </div>

                           <!-- 2023 Section -->
                           <div>
                               <div class="flex items-center gap-4 mb-8">
                                   <h3 class="text-3xl md:text-4xl font-display font-bold text-white tracking-widest">2023</h3>
                                   <div class="h-px flex-1 bg-white/20"></div>
                               </div>
                               <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
                                   <div class="rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                       <img src="./assets/photo1.jpg" alt="2023 Image 1" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                   </div>
                                   <div class="rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                       <img src="./assets/photo4.jpg" alt="2023 Image 2" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                   </div>
                                   <div class="md:row-span-2 rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                       <img src="./assets/photo3.jpg" alt="2023 Portrait" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                   </div>
                                   <div class="md:col-span-2 rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                       <img src="./assets/photo2.jpg" alt="2023 Panorama" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                   </div>
                               </div>
                           </div>

                           <!-- 2022 Section -->
                           <div>
                               <div class="flex items-center gap-4 mb-8">
                                   <h3 class="text-3xl md:text-4xl font-display font-bold text-white tracking-widest">2022</h3>
                                   <div class="h-px flex-1 bg-white/20"></div>
                               </div>
                               <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
                                   <div class="rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                       <img src="./assets/photo_2022_1.jpg" alt="2022 Image 1" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                   </div>
                                   <div class="md:col-span-2 md:row-span-2 rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                       <img src="./assets/photo_2022_3.jpg" alt="2022 Main Feature" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                   </div>
                                   <div class="rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                       <img src="./assets/photo_2022_2.jpg" alt="2022 Image 2" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                   </div>
                               </div>
                           </div>

                           <!-- 2021 Section -->
                           <div>
                               <div class="flex items-center gap-4 mb-8">
                                   <h3 class="text-3xl md:text-4xl font-display font-bold text-white tracking-widest">2021</h3>
                                   <div class="h-px flex-1 bg-white/20"></div>
                               </div>
                               <div class="grid grid-cols-2 gap-4 md:gap-6 auto-rows-[250px]">
                                   <div class="rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                       <img src="./assets/photo_2021_1.jpg" alt="2021 Image 1" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                   </div>
                                   <div class="rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                       <img src="./assets/photo_2021_2.jpg" alt="2021 Image 2" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                   </div>
                               </div>
                           </div>

                           <!-- 2020 Section -->
                           <div>
                               <div class="flex items-center gap-4 mb-8">
                                   <h3 class="text-3xl md:text-4xl font-display font-bold text-white tracking-widest">2020</h3>
                                   <div class="h-px flex-1 bg-white/20"></div>
                               </div>
                               <div class="w-full">
                                   <!-- Changed from grid layout to a simple block layout that determines height from the image's aspect ratio -->
                                   <div class="rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 overflow-hidden group cursor-pointer hover:bg-white/10 w-full aspect-video">
                                       <img src="./assets/photo_2020.jpg" alt="2020 Ultra Wide Showpiece" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                   </div>
                               </div>
                           </div>
                           
                           <!-- 2019 Section -->
                           <div>
                               <div class="flex items-center gap-4 mb-8">
                                   <h3 class="text-3xl md:text-4xl font-display font-bold text-white tracking-widest">2019</h3>
                                   <div class="h-px flex-1 bg-white/20"></div>
                               </div>
                               <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
                                   <div class="rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                       <img src="./assets/photo_2019_1.jpg" alt="2019 Image 1" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                   </div>
                                   <div class="rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                       <img src="./assets/photo_2019_2.jpg" alt="2019 Image 2" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                   </div>
                                   <div class="rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                       <img src="./assets/photo_2019_3.jpg" alt="2019 Image 3" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                   </div>
                               </div>
                           </div>

                           <!-- 2018 Section -->
                           <div>
                               <div class="flex items-center gap-4 mb-8">
                                   <h3 class="text-3xl md:text-4xl font-display font-bold text-white tracking-widest">2018</h3>
                                   <div class="h-px flex-1 bg-white/20"></div>
                               </div>
                               <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
                                   <div class="rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10 md:col-span-2">
                                       <img src="./assets/photo_2018_1.jpg" alt="2018 Main" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                   </div>
                                   <div class="grid grid-rows-2 gap-4 md:gap-6">
                                       <div class="rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                           <img src="./assets/photo_2018_2.jpg" alt="2018 Photo 2" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                       </div>
                                       <div class="rounded border border-white/20 bg-white/5 relative hover:border-white/40 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden group cursor-pointer hover:bg-white/10">
                                           <img src="./assets/photo_2018_3.jpg" alt="2018 Photo 3" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                       </div>
                                   </div>
                               </div>
                           </div>

                       </div>`
    },
    {
        id: "panel-2",
        title: "Projects",
        desc: "",
        videoSrc: "./assets/IMG_4631.MOV",
        videoClass: "experience-video pointer-events-none",
        imgAlt: "Projects: Robotic arm schematic",
        linkText: "",
        linkHref: "#",
        bgColor: "bg-black/70",
        delayClass: "panel-entrance-2",
        extraContent: `<div class="w-full max-w-7xl mx-auto flex flex-col overflow-y-auto max-h-[65vh] md:max-h-[75vh] pr-4 custom-scrollbar text-left">
                           <div class="flex-1 relative border-l-2 border-white/20 pl-6 md:pl-10 space-y-16 py-4">
                               
                               <!-- Project 1 -->
                               <div class="relative group">
                                   <!-- Timeline dot -->
                                   <div class="absolute -left-[33px] md:-left-[49px] top-2 w-4 h-4 bg-accent-red rounded-full border-4 border-black/80 group-hover:bg-white transition-colors duration-300"></div>
                                   <div class="flex flex-col xl:flex-row items-center gap-8">
                                       <div class="flex-1 space-y-3">
                                           <div class="flex flex-col gap-1 mb-1">
                                               <h3 class="text-2xl md:text-3xl font-display font-bold text-white tracking-wide">Autonomous Mechatronic Scavenger Robot</h3>
                                               <span class="text-sm font-sans tracking-widest text-white/50 uppercase">Jan 2026</span>
                                           </div>
                                           <div class="text-accent-red font-semibold text-sm tracking-widest uppercase mb-4 block">Mechatronics System Design Challenge</div>
                                           <div class="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed font-sans space-y-4">
                                               <p>I poured my heart into designing this fully autonomous scavenger robot. There is something incredibly satisfying about bridging software and physical hardware. Using an <strong>ESP32 microcontroller</strong> alongside a custom color-reflectance sorting algorithm, I managed to push the classification accuracy to a flawless 100%.</p>
                                               <p>Before bringing it to life, I obsessed over testing systems models in <strong>Simulink</strong>, ensuring IR beacon localization and collision avoidance were perfect even in unknown 15m² terrains. Refining the CAD models in <strong>SolidWorks</strong> to meet rigorous weight constraints while flawlessly executing real-time path planning through a custom <strong>C++ Finite State Machine</strong> taught me the true meaning of optimization.</p>
                                           </div>
                                       </div>
                                       <div class="w-full xl:w-72 h-48 xl:h-[300px] shrink-0 rounded border border-white/20 bg-white/5 relative group-hover:border-white/40 transition-colors flex flex-col items-center justify-center overflow-hidden">
                                           <img src="./assets/project_scavenger.jpg" alt="Autonomous Mechatronic Scavenger Robot" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                       </div>
                                   </div>
                               </div>
                               
                               <!-- Project 2 -->
                               <div class="relative group">
                                   <div class="absolute -left-[33px] md:-left-[49px] top-2 w-4 h-4 bg-accent-red rounded-full border-4 border-black/80 group-hover:bg-white transition-colors duration-300"></div>
                                   <div class="flex flex-col xl:flex-row items-center gap-8">
                                       <div class="flex-1 space-y-3">
                                           <div class="flex flex-col gap-1 mb-1">
                                               <h3 class="text-2xl md:text-3xl font-display font-bold text-white tracking-wide">"PayMi" | AI Receipt Splitting & Repayment</h3>
                                               <span class="text-sm font-sans tracking-widest text-white/50 uppercase">Nov 2025</span>
                                           </div>
                                           <div class="text-accent-red font-semibold text-sm tracking-widest uppercase mb-4 block">Hack Western XII</div>
                                           <div class="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed font-sans space-y-4">
                                               <p>Dealing with group expenses is universally miserable, so I decided to fix it using AI. I engineered a receipt parsing algorithm using <strong>Gemini's NLP</strong> that instantly transforms a static, crumpled receipt image into interactive, fully selectable line items on a webapp, allowing users to invoice contacts in under 30 seconds.</p>
                                               <p>But parsing wasn't enough; I wanted the repayment to be completely frictionless. I integrated <strong>Solana Pay</strong> via <strong>Python</strong> to facilitate instant, near-zero fee USDC transactions. Wrapping it all up in a responsive <strong>Next.js</strong> dashboard backed by a <strong>MongoDB</strong> database for real-time debt tracking gave users absolutely clear, immediate insight into their financial coordination.</p>
                                           </div>
                                       </div>
                                       <div class="w-full xl:w-72 h-48 xl:h-[300px] shrink-0 rounded border border-white/20 bg-white/5 relative group-hover:border-white/40 transition-colors flex flex-col items-center justify-center overflow-hidden">
                                           <img src="./assets/project_paymi.png" alt="PayMi AI Receipt Splitting" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                       </div>
                                   </div>
                               </div>
                               
                               <!-- Project 3 -->
                               <div class="relative group">
                                   <div class="absolute -left-[33px] md:-left-[49px] top-2 w-4 h-4 bg-accent-red rounded-full border-4 border-black/80 group-hover:bg-white transition-colors duration-300"></div>
                                   <div class="flex flex-col xl:flex-row items-center gap-8">
                                       <div class="flex-1 space-y-3">
                                           <div class="flex flex-col gap-1 mb-1">
                                               <h3 class="text-2xl md:text-3xl font-display font-bold text-white tracking-wide">Greenhouse Plant Disease Classification AI</h3>
                                               <span class="text-sm font-sans tracking-widest text-white/50 uppercase">Sept - Dec 2025</span>
                                           </div>
                                           <div class="text-accent-red font-semibold text-sm tracking-widest uppercase mb-4 block">CNN & Computer Vision System</div>
                                           <div class="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed font-sans space-y-4">
                                               <p>Applying AI to solve real-world sustainability issues is a massive passion of mine. I architected a complex <strong>Convolutional Neural Network</strong> capable of analyzing over 87,000 images to detect plant pathologies using Transfer Learning. This wasn't just building a model; it was about delivering a highly scalable solution farmers could securely rely on for automated, real-time greenhouse monitoring.</p>
                                               <p>I built out a robust <strong>Python</strong> data pipeline, diving deep into custom geometric augmentation and pixel normalization across 38 distinct classes to drastically expand dataset diversity and ensure the model wouldn't overfit. Stripping it down and seamlessly deploying it onto a <strong>Raspberry Pi</strong> as a standalone embedded vision solution while maintaining 97% accuracy was a massive victory.</p>
                                           </div>
                                       </div>
                                       <div class="w-full xl:w-72 h-48 xl:h-[300px] shrink-0 rounded border border-white/20 bg-white/5 relative group-hover:border-white/40 transition-colors flex flex-col items-center justify-center overflow-hidden">
                                           <img src="./assets/project_greenhouse.jpg" alt="Greenhouse Plant Disease Classification AI" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                       </div>
                                   </div>
                               </div>
                               
                               <!-- Project 4 -->
                               <div class="relative group">
                                   <div class="absolute -left-[33px] md:-left-[49px] top-2 w-4 h-4 bg-accent-red rounded-full border-4 border-black/80 group-hover:bg-white transition-colors duration-300"></div>
                                   <div class="flex flex-col xl:flex-row items-center gap-8">
                                       <div class="flex-1 space-y-3">
                                           <div class="flex flex-col gap-1 mb-1">
                                               <h3 class="text-2xl md:text-3xl font-display font-bold text-white tracking-wide">Embedded Thermal Object Detection</h3>
                                               <span class="text-sm font-sans tracking-widest text-white/50 uppercase">March 2025</span>
                                           </div>
                                           <div class="text-accent-red font-semibold text-sm tracking-widest uppercase mb-4 block">GM & OVIN Automotive Innovation Challenge</div>
                                           <div class="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed font-sans space-y-4">
                                               <p>Autonomous vehicle safety is an exhilarating frontier that I'm obsessed with. For this challenge, I developed an embedded system integrating thermal imaging with a <strong>Raspberry Pi</strong> utilizing <strong>Python</strong> to reliably detect pedestrians, cyclists, and cars in severe, diverse conditions where standard optical cameras fail entirely.</p>
                                               <p>I took on the complex task of training and deploying a custom <strong>YOLOv8</strong> edge model specifically on curated thermal data. By ruthlessly analyzing and optimizing the neural net architecture, I managed to bump the overall detection accuracy by 14% while halving the latency to just a 0.72-second runtime directly on the Pi hardware. This project deeply solidified my love for pushing edge computing to its absolute limits.</p>
                                           </div>
                                       </div>
                                       <div class="w-full xl:w-72 h-48 xl:h-[300px] shrink-0 rounded border border-white/20 bg-white/5 relative group-hover:border-white/40 transition-colors flex flex-col items-center justify-center overflow-hidden">
                                           <img src="./assets/project_thermal.png" alt="Embedded Thermal Object Detection" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                       </div>
                                   </div>
                               </div>







                           </div>
                       </div>`
    },
    {
        id: "panel-3",
        title: "About Me",
        desc: "",
        imgSrc: "./assets/about-me-bg.jpg",
        imgAlt: "About Me: Abstract tech texture",
        linkText: "",
        linkHref: "#",
        bgColor: "bg-black/60",
        delayClass: "panel-entrance-3",
        extraContent: `<div class="font-sans w-full max-w-7xl mx-auto text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90 overflow-y-auto max-h-[65vh] md:max-h-[75vh] pr-4 custom-scrollbar flex flex-col items-start text-left space-y-16 py-4">
                           <div class="max-w-4xl space-y-6">
                               <p>Hey, I'm <strong>Alan</strong>.</p>
                               <p>I’m a <strong>third-year Mechatronics and AI Engineering student</strong> at Western University. Honestly, I’ve always been that person who is <strong>slightly too fascinated</strong> by how everything around me actually works. That curiosity is what dragged me into the world of physics and calculus, and eventually led me to specialize in the intersection of <strong>Robotics and AI</strong>.</p>
                           </div>

                           <!-- Zigzag 1: Text Left, Image Right -->
                           <div class="flex flex-col xl:flex-row items-center gap-8 xl:gap-16 w-full text-left">
                               <div class="flex-1 space-y-6">
                                   <strong class="block text-white text-2xl md:text-3xl lg:text-4xl font-display uppercase tracking-widest mb-6 border-l-4 border-accent-red pl-4">The Professional Side (Kind of)</strong>
                                   <p>Right now, I’m an incoming <strong>Machine Vision Engineering Intern</strong> at Vista Solutions. Currently, I'm also a Project Manager for <strong>Western Tech for Social Impact</strong>. I'm leading a team to build a space-themed exhibit for the London Children’s Museum, where we're creating a <strong>space simulation game</strong>. It's a pretty cool setup where visitors use a physical glove which is integrated with flex sensors and gyroscopes to control an astronaut and interact with the digital surroundings in real-time.</p>
                                   <p><strong>Fun fact:</strong> I actually spent a good chunk of my childhood <strong>convinced I was going to be an astronaut</strong>. While I still have a massive fascination with space exploration, I eventually realized I’d rather be the one building the tech that gets us there; <strong>satiating that need for innovation one project at a time</strong>.</p>
                               </div>
                               <div class="w-full xl:w-[450px] h-64 xl:h-[350px] shrink-0 relative flex flex-col items-center justify-center overflow-hidden group cursor-pointer image-blend-mask">
                                   <img src="./assets/about_prof.png" alt="Professional Image" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                               </div>
                           </div>

                           <!-- Zigzag 2: Image Left, Text Right -->
                           <div class="flex flex-col xl:flex-row-reverse items-center gap-8 xl:gap-16 w-full text-left">
                               <div class="flex-1 space-y-6 xl:pl-8">
                                   <strong class="block text-white text-2xl md:text-3xl lg:text-4xl font-display uppercase tracking-widest mb-6 border-l-4 border-accent-red pl-4">The Rest of the Time</strong>
                                   <p>When I’m not buried in my school work or projects, I’m probably out <strong>being spontaneous</strong>; because, hey, <strong>you only live once, right?</strong> Here’s a quick snapshot of what I’m into lately:</p>
                                   <ul class="list-disc pl-6 space-y-4 mt-4 marker:text-accent-red">
                                       <li><strong>Sports:</strong> Volleyball and basketball have been my go-to sports where I could've gone pro, but ended my season with a <strong>Haliburton 2025 NBA final level injury :(</strong></li>
                                       <li><strong>Media:</strong> Big into movies, TV shows, and anime. Don't ask me what my favourites are though since <strong>I'd go on forever.</strong></li>
                                       <li><strong>Gaming:</strong> My go-to are FPS games like Valorant, Overwatch, etc. <strong>(it’s a hobby, I promise). :p</strong></li>
                                       <li><strong>Reading:</strong> I bounce between educational books to learn something new and fantasy novels to <strong>immerse myself in a captivating tale.</strong></li>
                                   </ul>
                               </div>
                               <div class="w-full xl:w-[450px] h-64 xl:h-[350px] shrink-0 relative flex flex-col items-center justify-center overflow-hidden group cursor-pointer image-blend-mask">
                                   <img src="./assets/about_rest.jpg" alt="Personal Image" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                               </div>
                           </div>
                       </div>`,
    },
    {
        id: "panel-4",
        title: "Experience",
        desc: "",
        videoSrc: "./assets/IMG_0548.mov",
        imgAlt: "Work Experience: AI Nodes",
        linkText: "",
        linkHref: "#",
        bgColor: "bg-black/60",
        videoClass: "experience-video pointer-events-none",
        delayClass: "panel-entrance-4",
        extraContent: `<div class="w-full max-w-7xl mx-auto flex flex-col overflow-y-auto max-h-[65vh] md:max-h-[75vh] pr-4 custom-scrollbar">
                           <div class="flex-1 relative border-l-2 border-white/20 pl-6 md:pl-10 space-y-16 py-4">
                               
                               <!-- Experience 1 -->
                               <div class="relative group">
                                   <!-- Timeline dot -->
                                   <div class="absolute -left-[33px] md:-left-[49px] top-2 w-4 h-4 bg-accent-red rounded-full border-4 border-black/80 group-hover:bg-white transition-colors duration-300"></div>
                                   <div class="flex flex-col gap-3">
                                       <div class="flex flex-col mb-1">
                                           <h3 class="text-2xl md:text-3xl font-display font-bold text-white tracking-wide">Machine Vision Engineer Intern</h3>
                                           <span class="text-sm font-sans tracking-widest text-[#B3ADFF] uppercase font-semibold mt-1">Incoming Summer 2026 Co-op</span>
                                       </div>
                                       <div class="text-accent-red font-semibold text-base tracking-widest uppercase block">Vista Solutions</div>
                                   </div>
                               </div>

                               <!-- Experience 2 (Combined WTSI Roles) -->
                               <div class="relative group">
                                   <div class="absolute -left-[33px] md:-left-[49px] top-2 w-4 h-4 bg-accent-red rounded-full border-4 border-black/80 group-hover:bg-white transition-colors duration-300"></div>
                                   <div class="flex flex-col gap-5">
                                       <div class="flex flex-col mb-2">
                                           <h3 class="text-2xl md:text-3xl font-display font-bold text-white tracking-wide">Western Tech For Social Impact</h3>
                                           <span class="text-sm font-sans tracking-widest text-white/50 uppercase mt-2">Sept 2024 – April 2026</span>
                                       </div>
                                       
                                       <!-- Role 1: PM -->
                                       <div class="relative">
                                           <div class="flex flex-col mb-3 border-l-2 border-accent-red pl-5">
                                               <h4 class="text-xl md:text-2xl font-display font-bold text-white/90 tracking-wide">Project Manager – London Children’s Museum</h4>
                                               <span class="text-sm font-sans tracking-widest text-white/50 uppercase mt-1 block">Sept 2025 – April 2026</span>
                                           </div>
                                           <ul class="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed font-sans space-y-3 list-disc pl-10 marker:text-accent-red">
                                               <li>Driven by my deep passion for non-profits, I led an interdisciplinary team of <strong>10+ engineers</strong> to deliver an interactive space-themed exhibit that ultimately increased museum visitors by <strong>50%</strong>.</li>
                                               <li>Having the opportunity to design a space-related game with a custom <strong>Human-Computer Interface (HCI)</strong> was an incredibly thrilling experience. I managed the <strong>hardware-software</strong> integration of flex sensors and gyroscopes to achieve a <strong>sub-100ms</strong> response latency, perfectly mimicking physical actions within the simulation.</li>
                                               <li>Designed a <strong>custom casing and glove</strong> in <strong>SolidWorks</strong> focused on ease of repair, saving the non-profit over <strong>$5000+</strong> in maintenance costs.</li>
                                           </ul>
                                       </div>

                                       <div class="h-px w-full bg-gradient-to-r from-accent-red/50 to-transparent my-3"></div>

                                       <!-- Role 2: Dev -->
                                       <div class="relative">
                                           <div class="flex flex-col mb-3 border-l-2 border-accent-red pl-5">
                                               <h4 class="text-xl md:text-2xl font-display font-bold text-white/80 tracking-wide">Frontend Developer – London Jet Aircraft Museum</h4>
                                               <span class="text-sm font-sans tracking-widest text-white/50 uppercase mt-1 block">Sept 2024 – April 2025</span>
                                           </div>
                                           <ul class="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed font-sans space-y-3 list-disc pl-10 marker:text-accent-red">
                                               <li>Spearheaded a comprehensive update to the museum's website using <strong>HTML, React.js, and Tailwind CSS</strong>. By drastically improving the layout and intuitive navigation, we actively increased user engagement by <strong>23%</strong>.</li>
                                               <li>Restructured the museum’s repository and database systems to enhance accessibility. Applying strict, clean coding practices ensured long-term maintainability, empowering future teams to make modifications effortlessly.</li>
                                               <li>Adhered to rigorous museum brand guidelines to deliver a visually compelling application that maintained a consistent and powerful core message for all visitors.</li>
                                           </ul>
                                       </div>
                                   </div>
                               </div>

                               <!-- Experience 4 -->
                               <div class="relative group">
                                   <div class="absolute -left-[33px] md:-left-[49px] top-2 w-4 h-4 bg-accent-red rounded-full border-4 border-black/80 group-hover:bg-white transition-colors duration-300"></div>
                                   <div class="flex flex-col gap-3">
                                       <div class="flex flex-col mb-1">
                                           <h3 class="text-2xl md:text-3xl font-display font-bold text-white tracking-wide">Embedded Systems Engineer</h3>
                                           <span class="text-sm font-sans tracking-widest text-white/50 uppercase mt-1">Sept 2024 – March 2025</span>
                                       </div>
                                       <div class="text-accent-red font-semibold text-base tracking-widest uppercase block">Western Rocketry Club</div>
                                       <ul class="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed font-sans space-y-3 list-disc pl-6 mt-2 marker:text-accent-red">
                                           <li>Designed <strong>system-level</strong> integration of flight electronics, managing interfaces between custom PCBs and sensors to ensure robust communication across avionics which led to a <strong>40%</strong> increase in efficiency from previous iterations.</li>
                                           <li>Rigorous debugging and sensor calibration between subsystems to verify data acquisition performance using <strong>Simulink</strong>.</li>
                                           <li>Accomplished precise model validation as measured by an <strong>85%</strong> correlation with theoretical flight models by doing real-time orientation and altitude tracking in <strong>C/C++</strong> and <strong>Python</strong>.</li>
                                       </ul>
                                   </div>
                               </div>

                           </div>
                       </div>`
    },
    {
        id: "panel-5",
        title: "Contact",
        desc: "I'm always open to new opportunities, collaborations, and conversations. Let's build something incredible together.",
        videoSrc: "./assets/IMG_5904.MOV",
        videoClass: "experience-video pointer-events-none",
        imgAlt: "Contact Me: University Campus",
        linkText: "",
        linkHref: "",
        bgColor: "bg-black/60",
        delayClass: "panel-entrance-5",
        extraContent: `<div class="w-full max-w-7xl mx-auto flex flex-col overflow-y-auto max-h-[65vh] md:max-h-[75vh] pr-4 custom-scrollbar text-left">
                            <div class="flex flex-col gap-6 w-full max-w-lg mt-4">
                            
                            <!-- Email -->
                            <a href="mailto:alansanjit@gmail.com" class="group flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300">
                                <div class="w-12 h-12 rounded-full bg-black/50 border border-white/20 flex items-center justify-center group-hover:bg-accent-red group-hover:border-accent-red transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                                    <span class="material-symbols-outlined text-white/80 group-hover:text-white transition-colors">mail</span>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-xs font-sans tracking-[0.2em] text-white/50 uppercase mb-1">Email directly</span>
                                    <span class="text-xl md:text-2xl font-light text-white/90 group-hover:text-white transition-colors tracking-wide">alansanjit@gmail.com</span>
                                </div>
                            </a>

                            <!-- LinkedIn -->
                            <a href="https://linkedin.com/in/alan-sanjit" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300">
                                <div class="w-12 h-12 rounded-full bg-black/50 border border-white/20 flex items-center justify-center group-hover:bg-[#0A66C2] group-hover:border-[#0A66C2] transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                    <!-- Embedded precise SVG for LinkedIn to maintain premium aesthetic without relying on external fonts for brands -->
                                    <svg class="w-5 h-5 fill-white/80 group-hover:fill-white transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-xs font-sans tracking-[0.2em] text-white/50 uppercase mb-1">Connect</span>
                                    <span class="text-xl md:text-2xl font-light text-white/90 group-hover:text-white transition-colors tracking-wide">linkedin.com/in/alan-sanjit</span>
                                </div>
                            </a>

                            <!-- GitHub -->
                            <a href="https://github.com/AlanSanjit" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300">
                                <div class="w-12 h-12 rounded-full bg-black/50 border border-white/20 flex items-center justify-center group-hover:bg-[#333] group-hover:border-[#333] transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                    <!-- Embedded precise SVG for GitHub to maintain premium aesthetic -->
                                    <svg class="w-6 h-6 fill-white/80 group-hover:fill-white transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-xs font-sans tracking-[0.2em] text-white/50 uppercase mb-1">View Work</span>
                                    <span class="text-xl md:text-2xl font-light text-white/90 group-hover:text-white transition-colors tracking-wide">github.com/AlanSanjit</span>
                                </div>
                            </a>

                        </div>
                        </div>`
    }
];

function renderPanels() {
    const container = document.getElementById('panels-container');
    if (!container) return;

    let html = '';
    panelsData.forEach(panel => {
        const hoverClass = panel.customHoverClass || "hover:text-accent-red hover:border-accent-red";
        const linkHtml = panel.linkText ? '<a class="inline-block border-b border-white pb-1 uppercase tracking-widest text-sm ' + hoverClass + ' transition-colors" href="' + panel.linkHref + '">' + panel.linkText + '</a>' : '';

        const aboutMeText = panel.title === 'About Me' ? 'About<br/>Me' : panel.title;

        html += [
            '<div class="panel-wrapper ' + panel.delayClass + ' animate-slide-up-fade">',
            '    <input class="panel-trigger" id="' + panel.id + '" name="accordion-group" type="radio" />',
            '    <label class="panel-visual block w-full h-full relative overflow-hidden" for="' + panel.id + '">',
            '        ' + (panel.overlayStyles || ''),
            panel.videoSrc ?
                '        <video class="absolute inset-0 w-full h-full ' + (panel.videoClass || 'object-cover') + ' ' + (panel.imgClass || '') + '" src="' + panel.videoSrc + '" id="video-' + panel.id + '" muted playsinline preload="auto" autoplay loop></video>' :
                '        <img alt="' + panel.imgAlt + '" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[2500ms] ease-cinematic scale-100 hover:scale-105 ' + (panel.imgClass || '') + '" src="' + panel.imgSrc + '" />',
            '        ' + (panel.bgLetter || ''),
            '        <div class="absolute inset-0 bg-black/20 transition-colors duration-1000 hover:bg-black/0"></div>',
            '        <div class="click-hint absolute bottom-6 right-6 md:bottom-8 md:right-8 flex items-center gap-2 opacity-0 transform translate-y-4 transition-all duration-500 text-white font-sans text-sm tracking-[0.3em] uppercase font-bold z-20 pointer-events-none drop-shadow-md">',
            '            <span>Click to Expand</span>',
            '            <span class="material-symbols-outlined text-base">open_in_full</span>',
            '        </div>',
            '        <div class="panel-vertical-title absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 transition-all duration-500">',
            '            <span class="vertical-text font-display text-4xl md:text-5xl text-white/90 uppercase tracking-widest drop-shadow-lg whitespace-nowrap">' + aboutMeText + '</span>',
            '        </div>',
            '        <div class="panel-content-detail absolute inset-0 z-30 flex flex-col justify-center items-start text-left p-12 md:p-20 ' + panel.bgColor + ' backdrop-blur-sm text-white">',
            '            <h2 class="font-display text-6xl md:text-8xl mb-6">' + panel.title + '</h2>',
            '            <p class="font-display text-xl md:text-2xl max-w-lg italic opacity-90 mb-8">' + panel.desc + '</p>',
            '            ' + (panel.extraContent || ''),
            '            ' + linkHtml,
            '        </div>',
            '    </label>',
            '</div>'
        ].join('\n');
    });

    container.innerHTML = html;
    initializePanels();
}

function initializePanels() {
    let currentChecked = null;

    document.querySelectorAll('video').forEach(video => {
        video.addEventListener('timeupdate', () => {
            if (video.currentTime >= 19) {
                video.currentTime = 0;
                video.play();
            }
        });
    });

    document.querySelectorAll('.panel-trigger').forEach(radio => {
        radio.addEventListener('click', function (e) {
            if (currentChecked === this) {
                this.checked = false;
                currentChecked = null;
                document.querySelectorAll('video').forEach(v => v.play());
            } else {
                currentChecked = this;
                document.querySelectorAll('video').forEach(v => v.pause());
            }
        });
    });

    document.querySelectorAll('.panel-wrapper').forEach(wrapper => {
        wrapper.addEventListener('mouseenter', function () {
            // Only restart if the accordion isn't currently open
            if (!this.querySelector('.panel-trigger').checked) {
                const video = this.querySelector('video');
                if (video) {
                    video.currentTime = 0;
                }
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', renderPanels);
