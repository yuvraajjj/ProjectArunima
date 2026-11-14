// =========================================================================
        // SHARED ASSETS & REUSABLE HELPERS
        // =========================================================================
        const ASSETS = {
            logo: 'https://i.ibb.co/6JJwdwWn/arunima-logo-1.png',
            aparna: 'https://i.ibb.co/h1CbWGwQ/aparna.jpg',
            familyGroup: 'https://i.ibb.co/WNmw9kjW/555x312-slider3.png',
            friendsArt: 'https://i.ibb.co/zhg3PXmC/about-us-friends.jpg',
            tiffinTeam: 'https://i.ibb.co/KpZMfJ5H/home-page-bnr-min.png'
        };

        const ORG_CONTACT = {
            phoneDisplay: '+91-8859046829',
            phoneHref: 'tel:+918859046829',
            whatsappBase: 'https://wa.me/918859046829',
            email: 'info@projectarunima.org',
            address: 'Kamboj Plotting, Chalang, Nagal Hatnala, Sahastradhara Road, Dehradun - 248013, Uttarakhand, India'
        };

        function renderBreadcrumb(categoryLabel, categoryRoute, pageTitle, subtitle) {
            return `
                <section class="bg-brand-light border-b border-pink-100 py-10 md:py-14">
                    <div class="container mx-auto px-4 lg:px-8">
                        <nav aria-label="Breadcrumb" class="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-500 mb-3">
                            <a href="index.html" class="hover:text-brand-pink font-medium transition"><i class="fas fa-home mr-1"></i> Home</a>
                            <span>/</span>
                            <a href="${categoryRoute}" class="hover:text-brand-pink font-medium transition">${categoryLabel}</a>
                            <span>/</span>
                            <span class="text-brand-pink font-semibold">${pageTitle}</span>
                        </nav>
                        <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">${pageTitle}</h1>
                        ${subtitle ? `<p class="text-gray-600 text-base md:text-lg mt-3 max-w-3xl leading-relaxed">${subtitle}</p>` : ''}
                    </div>
                </section>
            `;
        }

        function downloadTextFile(filename, content) {
            const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }

        function showInlineStatus(elementId, message, isError = false) {
            const el = document.getElementById(elementId);
            if (!el) return;
            el.className = `mt-4 p-4 rounded-xl text-sm font-medium border ${isError ? 'bg-red-50 text-red-700 border-red-200' : 'bg-green-50 text-green-800 border-green-200'}`;
            el.innerHTML = message;
            el.classList.remove('hidden');
        }

        // =========================================================================
        // 1. PRESERVED APPROVED HOMEPAGE (#home)
        // =========================================================================
        function viewHome() {
            return `
                <!-- Hero Section -->
                <section class="bg-brand-light py-12 md:py-20 relative overflow-hidden">
                    <div class="container mx-auto px-4 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-10">
                        <div class="md:w-1/2 space-y-6 z-10 text-center md:text-left">
                            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                                Building Futures, <br><span class="text-brand-pink">Empowering Lives</span>
                            </h1>
                            <p class="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
                                For more than a decade, Project Arunima has provided comprehensive residential and support programs to empower neurodiverse individuals. We build skills, foster purpose, and support every step toward an independent life.
                            </p>
                            <div class="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                                <a href="donate.html" class="bg-brand-pink text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform text-lg">Donate Now</a>
                                <a href="tiffin-service.html" class="bg-white border-2 border-brand-dark text-brand-dark px-8 py-3.5 rounded-full font-bold hover:bg-brand-dark hover:text-white transition shadow-md text-lg">Order Tiffin</a>
                            </div>
                        </div>
                        <div class="md:w-1/2 rounded-2xl overflow-hidden shadow-2xl z-10 w-full">
                            <img src="${ASSETS.tiffinTeam}" alt="Friends of Arunima in Tiffin Uniforms" class="w-full h-auto object-cover">
                        </div>
                    </div>
                </section>

                <!-- Impact Bar -->
                <section class="bg-brand-dark text-white py-10 relative z-20">
                    <div class="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-blue-400/30">
                        <div class="p-2">
                            <h3 class="text-3xl lg:text-4xl font-bold text-brand-orange">10+</h3>
                            <p class="text-sm uppercase tracking-wider mt-2 opacity-90 font-medium">Years of Impact</p>
                        </div>
                        <div class="p-2">
                            <h3 class="text-3xl lg:text-4xl font-bold text-brand-orange">45+</h3>
                            <p class="text-sm uppercase tracking-wider mt-2 opacity-90 font-medium">Friends Supported</p>
                        </div>
                        <div class="p-2">
                            <h3 class="text-3xl lg:text-4xl font-bold text-brand-orange">1,200</h3>
                            <p class="text-sm uppercase tracking-wider mt-2 opacity-90 font-medium">Tiffins per Month</p>
                        </div>
                        <div class="p-2">
                            <h3 class="text-3xl lg:text-4xl font-bold text-brand-orange">500+</h3>
                            <p class="text-sm uppercase tracking-wider mt-2 opacity-90 font-medium">Handicrafts Sold</p>
                        </div>
                    </div>
                </section>

                <!-- Arukriti Section -->
                <section id="arukriti" class="py-16 md:py-24 bg-white">
                    <div class="container mx-auto px-4 lg:px-8">
                        <div class="text-center mb-16">
                            <span class="text-brand-pink font-bold tracking-wider uppercase text-sm mb-2 block">Our Initiatives</span>
                            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Arukriti <span class="font-normal text-gray-500">by Arunima</span></h2>
                            <p class="text-gray-600 max-w-2xl mx-auto text-lg">Our in-house vocational initiatives where our Friends and local artisans create value, earn income, and build confidence.</p>
                        </div>

                        <div class="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                            <!-- Tiffin Service Card -->
                            <div id="tiffin" class="bg-gray-50 rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col hover:shadow-2xl transition duration-300">
                                <div class="relative h-64">
                                    <img src="${ASSETS.tiffinTeam}" alt="Arukriti Tiffin Team" class="w-full h-full object-cover object-top">
                                    <div class="absolute top-4 right-4 bg-white/90 backdrop-blur text-brand-orange font-bold px-3 py-1 rounded-full text-sm shadow">Freshly Made</div>
                                </div>
                                <div class="p-8 flex-grow flex flex-col justify-between space-y-6">
                                    <div>
                                        <h3 class="text-2xl font-bold mb-3 flex items-center gap-2"><i class="fas fa-box-open text-brand-orange"></i> The Tiffin Experience</h3>
                                        <p class="text-gray-600 leading-relaxed">Fresh, hygienic, and wholesome meals prepared daily by our neurodiverse team. Taste the dedication in every bite while supporting our community.</p>
                                    </div>
                                    <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                                        <a href="tiffin-service.html" class="flex-1 bg-red-500 text-white text-center py-3 rounded-xl font-bold hover:bg-red-600 transition flex items-center justify-center gap-2 shadow-sm">
                                            <i class="fas fa-utensils"></i> Order Details &amp; Zomato
                                        </a>
                                        <a href="${ORG_CONTACT.whatsappBase}?text=Hello%20Project%20Arunima%2C%20I%20would%20like%20to%20enquire%20about%20Arukriti%20Tiffin%20Service." target="_blank" rel="noopener noreferrer" class="flex-1 bg-green-500 text-white text-center py-3 rounded-xl font-bold hover:bg-green-600 transition flex items-center justify-center gap-2 shadow-sm">
                                            <i class="fab fa-whatsapp text-xl"></i> WhatsApp Us
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <!-- Handicrafts Card -->
                            <div id="handicrafts" class="bg-gray-50 rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col hover:shadow-2xl transition duration-300">
                                <div class="relative h-64">
                                    <img src="${ASSETS.friendsArt}" alt="Friends painting handicrafts" class="w-full h-full object-cover">
                                    <div class="absolute top-4 right-4 bg-white/90 backdrop-blur text-brand-dark font-bold px-3 py-1 rounded-full text-sm shadow">Handmade</div>
                                </div>
                                <div class="p-8 flex-grow flex flex-col justify-between space-y-6">
                                    <div>
                                        <h3 class="text-2xl font-bold mb-3 flex items-center gap-2"><i class="fas fa-paint-brush text-brand-dark"></i> Handcrafted with Joy</h3>
                                        <p class="text-gray-600 leading-relaxed">Unique home decor, bags, and art pieces crafted meticulously by our Friends and local community artisans. Each piece tells a story of empowerment.</p>
                                    </div>
                                    <div class="pt-4 border-t border-gray-200">
                                        <a href="handicrafts.html" class="w-full bg-brand-dark text-white text-center py-3 rounded-xl font-bold hover:bg-blue-900 transition flex items-center justify-center gap-2 shadow-sm">
                                            <i class="fas fa-shopping-bag"></i> Shop Handicrafts
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Fundraiser / Support Us Section -->
                <section id="donate" class="py-16 bg-brand-light">
                    <div class="container mx-auto px-4 lg:px-8 max-w-5xl">
                        <div class="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-t-8 border-brand-pink">
                            <div class="text-center mb-8">
                                <h2 class="text-3xl md:text-4xl font-bold mb-4">Support Our Journey</h2>
                                <p class="text-gray-600 max-w-2xl mx-auto">Your generous contributions directly fund skill training, residential care, and vocational independence for our Friends.</p>
                            </div>

                            <!-- Progress Bar -->
                            <div class="mb-10 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <div class="flex flex-col sm:flex-row justify-between text-sm md:text-base font-bold text-gray-800 mb-3 gap-2">
                                    <span>Current Campaign: Expanding Vocational &amp; Residential Care</span>
                                    <span class="text-brand-pink">₹2,50,000 <span class="text-gray-500 font-normal">raised of ₹5,00,000</span></span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
                                    <div class="bg-gradient-to-r from-brand-orange to-brand-pink h-5 rounded-full transition-all duration-1000 relative" style="width: 50%">
                                        <div class="absolute inset-0 bg-white/20 w-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>

                            <!-- Impact Tiers -->
                            <div class="grid sm:grid-cols-3 gap-6 mb-10">
                                <a href="donate.html" class="block border border-gray-200 hover:border-brand-pink transition rounded-xl p-6 bg-white text-center shadow-sm">
                                    <div class="w-12 h-12 bg-pink-50 text-brand-pink rounded-full flex items-center justify-center text-xl mx-auto mb-3"><i class="fas fa-palette"></i></div>
                                    <h4 class="font-bold text-2xl text-gray-900">₹ 500</h4>
                                    <p class="text-sm text-gray-500 mt-2">Funds 1 week of art and craft supplies.</p>
                                </a>
                                <a href="donate.html" class="block border-2 border-brand-dark rounded-xl p-6 bg-white text-center shadow-md relative transform sm:-translate-y-2 hover:shadow-lg transition">
                                    <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-dark text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>
                                    <div class="w-12 h-12 bg-blue-50 text-brand-dark rounded-full flex items-center justify-center text-xl mx-auto mb-3 mt-1"><i class="fas fa-book-reader"></i></div>
                                    <h4 class="font-bold text-2xl text-gray-900">₹ 2,000</h4>
                                    <p class="text-sm text-gray-500 mt-2">Provides 1 month of vocational training.</p>
                                </a>
                                <a href="donate.html" class="block border border-gray-200 hover:border-brand-pink transition rounded-xl p-6 bg-white text-center shadow-sm">
                                    <div class="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center text-xl mx-auto mb-3"><i class="fas fa-home"></i></div>
                                    <h4 class="font-bold text-2xl text-gray-900">₹ 5,000</h4>
                                    <p class="text-sm text-gray-500 mt-2">Sponsors comprehensive monthly care.</p>
                                </a>
                            </div>

                            <div class="text-center">
                                <a href="donate.html" class="inline-block bg-brand-pink text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-brand-pink/30 hover:bg-pink-700 hover:-translate-y-1 transition transform">Make a Secure Donation</a>
                                <div class="mt-5">
                                    <a href="certifications.html" class="text-sm text-gray-500 inline-flex items-center justify-center gap-2 bg-green-50 text-green-700 py-2 px-4 rounded-lg hover:bg-green-100 transition">
                                        <i class="fas fa-shield-alt"></i> Eligible for Section 80G Tax Exemption — View Registration Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Our Family / Stories -->
                <section class="py-16 md:py-24 bg-white">
                    <div class="container mx-auto px-4 lg:px-8">
                        <div class="text-center mb-16">
                            <span class="text-brand-orange font-bold tracking-wider uppercase text-sm mb-2 block">Community</span>
                            <h2 class="text-3xl md:text-4xl font-bold mb-4">The Arunima Family</h2>
                            <p class="text-gray-600 max-w-2xl mx-auto text-lg">Every smile at Arunima starts with a caring trainer. We are a community built on love, patience, and professional support.</p>
                        </div>

                        <div class="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                            <div class="rounded-2xl overflow-hidden shadow-xl">
                                <img src="${ASSETS.familyGroup}" alt="Our Dedicated Staff and Trainees" class="w-full h-full object-cover">
                            </div>
                            <div class="space-y-8">
                                <!-- Director Profile -->
                                <div class="flex items-start gap-5 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <img src="${ASSETS.aparna}" alt="Aparna Das - Director" class="w-24 h-24 rounded-full object-cover shadow-md border-4 border-white flex-shrink-0">
                                    <div>
                                        <h4 class="font-bold text-xl text-gray-900">Aparna Das</h4>
                                        <p class="text-sm text-brand-pink font-bold uppercase tracking-wider mb-2">Director &amp; Founder</p>
                                        <p class="text-gray-600 text-base italic leading-relaxed">"We've built something beautiful over the last decade. It's not just a residence; it's a place where our Friends find true belonging and dignity."</p>
                                        <a href="meet-the-team.html" class="inline-flex items-center gap-1 text-brand-dark text-xs font-bold mt-3 hover:text-brand-pink">Read Aparna's Full Story <i class="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>

                                <!-- Community Feedback Card -->
                                <div class="bg-brand-light p-6 rounded-2xl border-l-4 border-brand-orange shadow-sm">
                                    <div class="text-brand-orange text-2xl mb-2"><i class="fas fa-quote-left"></i></div>
                                    <p class="text-gray-700 text-base italic leading-relaxed mb-4">"Ordering from Arukriti Tiffin has been wonderful. Not only does the food feel like home, but knowing it supports such a noble cause makes every meal special. The dedication of the team is truly inspiring."</p>
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-dark font-bold shadow-sm"><i class="fas fa-heart text-brand-pink"></i></div>
                                        <div>
                                            <p class="font-bold text-sm text-gray-900">Dehradun Community Supporter</p>
                                            <p class="text-xs text-gray-500 uppercase tracking-wider">Arukriti Tiffin Patron</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        }

        // =========================================================================
        // 2. ABOUT US PAGES
        // =========================================================================
        function viewAboutWhoWeAre() {
            return `
                ${renderBreadcrumb('About Us', 'who-we-are.html', 'Who We Are', 'A warm, dignified residential and skill-building community in Dehradun founded in 2011 for adults with autism and developmental disabilities.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-6xl space-y-16">
                        <div class="grid lg:grid-cols-2 gap-12 items-center">
                            <div class="space-y-5">
                                <span class="text-brand-pink font-bold uppercase tracking-wider text-xs">Our Story &amp; Origins</span>
                                <h2 class="text-3xl font-bold text-gray-900">More Than Just a Place to Live</h2>
                                <p class="text-gray-600 leading-relaxed">
                                    Founded in 2011 in Dehradun, Uttarakhand, <strong>Project Arunima</strong> was born out of a deeply personal question faced by families of neurodiverse individuals: <em>"What happens to our loved ones when they become adults, and when parents are no longer around?"</em>
                                </p>
                                <p class="text-gray-600 leading-relaxed">
                                    At Project Arunima, we do not refer to our residents and trainees as "patients" or "inmates." We call them our <strong>Friends</strong>. Every person above 18 who joins our residential or day-training programs becomes part of a close-knit household built on respect, routine, purposeful work, and emotional warmth.
                                </p>
                                <div class="flex flex-wrap gap-3 pt-2">
                                    <a href="inclusivity.html" class="bg-brand-pink text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-pink-700 transition">Read Ruhi's Inspiration</a>
                                    <a href="residence-training.html" class="border border-brand-dark text-brand-dark px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-dark hover:text-white transition">Explore Our Residence</a>
                                </div>
                            </div>
                            <div class="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                                <img src="${ASSETS.familyGroup}" alt="Project Arunima Community in Dehradun" class="w-full h-auto object-cover">
                            </div>
                        </div>

                        <!-- Timeline Milestones -->
                        <div class="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
                            <h3 class="text-2xl font-bold text-center text-gray-900 mb-10">Key Milestones on Our Journey</h3>
                            <div class="grid md:grid-cols-4 gap-6">
                                <div class="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-brand-pink">
                                    <span class="text-brand-pink font-extrabold text-xl">1995</span>
                                    <h4 class="font-bold text-gray-900 mt-2">The Seed of Purpose</h4>
                                    <p class="text-sm text-gray-600 mt-2">Ruhi is diagnosed with autism at a time when awareness and adult support services in India were scarce.</p>
                                </div>
                                <div class="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-brand-dark">
                                    <span class="text-brand-dark font-extrabold text-xl">2011</span>
                                    <h4 class="font-bold text-gray-900 mt-2">Project Arunima Founded</h4>
                                    <p class="text-sm text-gray-600 mt-2">Aparna Das establishes Project Arunima in Dehradun to create a supportive adult living and training centre.</p>
                                </div>
                                <div class="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-brand-orange">
                                    <span class="text-brand-orange font-extrabold text-xl">Arukriti</span>
                                    <h4 class="font-bold text-gray-900 mt-2">Social Enterprises Launched</h4>
                                    <p class="text-sm text-gray-600 mt-2">Arukriti Tiffin Service and Arukriti Handicrafts open meaningful vocational roles for our Friends.</p>
                                </div>
                                <div class="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-green-600">
                                    <span class="text-green-600 font-extrabold text-xl">Today</span>
                                    <h4 class="font-bold text-gray-900 mt-2">A Growing Home</h4>
                                    <p class="text-sm text-gray-600 mt-2">Supporting 45+ Friends with assisted living, daily skill building, and strong community partnerships.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        }

        function viewAboutInclusivity() {
            return `
                ${renderBreadcrumb('About Us', 'who-we-are.html', 'Our Commitment to Inclusivity', 'Every story at Project Arunima is inspired by someone wonderful: Arunima (affectionately known as Ruhi).')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-5xl space-y-12">
                        <article class="bg-brand-light rounded-3xl p-8 md:p-12 border border-pink-100 space-y-6">
                            <div class="inline-flex items-center gap-2 bg-white text-brand-pink px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                                <i class="fas fa-sun text-brand-orange"></i> The Heart Behind Our Name
                            </div>
                            <h2 class="text-3xl font-bold text-gray-900">Inspired by Ruhi — Arunima</h2>
                            <p class="text-gray-700 leading-relaxed text-lg">
                                Born in 1980 and diagnosed with autism in 1986, <strong>Arunima ("Ruhi")</strong> is the inspiration behind Project Arunima. Her family began planning for her future as she approached adulthood, leading to the assisted living project.
                            </p>
                            <p class="text-gray-700 leading-relaxed">
                                Out of that love and determination, <strong>Project Arunima Assisted Living Centre</strong> was born. "Arunima" signifies the first warm glow of dawn—a new beginning where neurodiverse adults are valued for who they are and empowered to contribute meaningfully to society.
                            </p>
                        </article>

                        <div class="grid md:grid-cols-3 gap-8">
                            <div class="bg-gray-50 p-7 rounded-2xl border border-gray-100">
                                <div class="w-12 h-12 rounded-xl bg-pink-100 text-brand-pink flex items-center justify-center text-xl mb-4"><i class="fas fa-user-friends"></i></div>
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Our "Friends" Philosophy</h3>
                                <p class="text-sm text-gray-600 leading-relaxed">Adults aged 18+ live together in warm, home-like apartments on Sahastradhara Road, learning daily life skills alongside peers and mentors.</p>
                            </div>
                            <div class="bg-gray-50 p-7 rounded-2xl border border-gray-100">
                                <div class="w-12 h-12 rounded-xl bg-blue-100 text-brand-dark flex items-center justify-center text-xl mb-4"><i class="fas fa-hands-helping"></i></div>
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Caring Local Staff</h3>
                                <p class="text-sm text-gray-600 leading-relaxed">Our young, dedicated staff hail from Dehradun, Mussoorie, and neighboring hill towns—bringing warmth, patience, and Direct Support training.</p>
                            </div>
                            <div class="bg-gray-50 p-7 rounded-2xl border border-gray-100">
                                <div class="w-12 h-12 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center text-xl mb-4"><i class="fas fa-seedling"></i></div>
                                <h3 class="text-xl font-bold text-gray-900 mb-2">Valued Social Roles</h3>
                                <p class="text-sm text-gray-600 leading-relaxed">Through Arukriti Tiffin and Handicrafts, our Friends step into visible, respected roles as chefs, packers, artists, and community contributors.</p>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        }

        function viewAboutBrochure() {
            return `
                ${renderBreadcrumb('About Us', 'who-we-are.html', 'Project Brochure', 'Overview of Project Arunima’s residential programs, vocational initiatives, and Dehradun campus.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-5xl">
                        <div class="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm space-y-8">
                            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-200 pb-6">
                                <div class="flex items-center gap-4">
                                    <img src="${ASSETS.logo}" alt="Project Arunima Logo" class="h-14 w-auto bg-white p-2 rounded-xl shadow-sm">
                                    <div>
                                        <h2 class="text-2xl font-bold text-gray-900">Project Arunima Information Brochure</h2>
                                        <p class="text-sm text-gray-500">Sahastradhara Road, Dehradun, Uttarakhand</p>
                                    </div>
                                </div>
                                <div class="flex flex-wrap gap-3 no-print">
                                    <button type="button" id="download-brochure-btn" class="bg-brand-pink text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-pink-700 transition flex items-center gap-2 shadow">
                                        <i class="fas fa-download"></i> Download Summary (.txt)
                                    </button>
                                    <button type="button" onclick="window.print()" class="bg-brand-dark text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-blue-900 transition flex items-center gap-2 shadow">
                                        <i class="fas fa-print"></i> Print Brochure
                                    </button>
                                </div>
                            </div>

                            <div class="grid md:grid-cols-2 gap-8">
                                <div class="space-y-4">
                                    <h3 class="text-xl font-bold text-brand-dark">1. Residential &amp; Assisted Living</h3>
                                    <p class="text-sm text-gray-600 leading-relaxed">Structured, home-like living spaces for adults (18+) with autism and developmental disabilities, emphasizing personal care, emotional security, and independent living routines.</p>
                                    <h3 class="text-xl font-bold text-brand-dark pt-2">2. Vocational Training &amp; Arukriti</h3>
                                    <p class="text-sm text-gray-600 leading-relaxed">Daily skill-building in culinary preparation (Arukriti Tiffin Service), textile painting, block printing, and handcrafted goods alongside local artisans.</p>
                                </div>
                                <div class="space-y-4">
                                    <h3 class="text-xl font-bold text-brand-dark">3. Academic &amp; Community Outreach</h3>
                                    <p class="text-sm text-gray-600 leading-relaxed">Training seminars and immersion programs for universities, colleges, and educators across Uttarakhand and India to build inclusive communities.</p>
                                    <h3 class="text-xl font-bold text-brand-dark pt-2">4. Contact &amp; Campus Visits</h3>
                                    <p class="text-sm text-gray-600 leading-relaxed">
                                        <strong>Address:</strong> Kamboj Plotting, Chalang, Nagal Hatnala, Sahastradhara Road, Dehradun - 248013<br>
                                        <strong>Phone:</strong> +91-8859046829 | <strong>Email:</strong> info@projectarunima.org
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        }

        function viewAboutVisionMission() {
            return `
                ${renderBreadcrumb('About Us', 'who-we-are.html', 'Vision and Mission', 'Guiding principles that shape daily life, learning, and dignity at Project Arunima.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-6xl space-y-12">
                        <div class="grid md:grid-cols-2 gap-8">
                            <div class="bg-brand-dark text-white rounded-3xl p-8 md:p-10 shadow-xl">
                                <div class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-orange text-2xl mb-6"><i class="fas fa-eye"></i></div>
                                <h2 class="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
                                <p class="text-blue-100 leading-relaxed text-lg">
                                    An inclusive society where neurodiverse adults live with dignity, security, purpose, and valued social roles—embraced as active, contributing members of their communities.
                                </p>
                            </div>
                            <div class="bg-brand-pink text-white rounded-3xl p-8 md:p-10 shadow-xl">
                                <div class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white text-2xl mb-6"><i class="fas fa-compass"></i></div>
                                <h2 class="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
                                <p class="text-pink-100 leading-relaxed text-lg">
                                    To empower individuals with autism and developmental disabilities by providing compassionate assisted living, individualized life-skills training, vocational opportunities, and lifelong family partnership.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-2xl font-bold text-gray-900 text-center mb-8">Our Core Pillars</h3>
                            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <h4 class="font-bold text-lg text-brand-pink mb-2">Dignity First</h4>
                                    <p class="text-sm text-gray-600">Every Friend is treated with adult respect, personal choice, and warmth rather than institutional routine.</p>
                                </div>
                                <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <h4 class="font-bold text-lg text-brand-dark mb-2">Valued Roles</h4>
                                    <p class="text-sm text-gray-600">Meaningful work in kitchens, studios, and gardens builds self-worth and community recognition.</p>
                                </div>
                                <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <h4 class="font-bold text-lg text-brand-orange mb-2">Holistic Growth</h4>
                                    <p class="text-sm text-gray-600">Balancing daily living skills, communication, physical fitness, recreation, and emotional wellness.</p>
                                </div>
                                <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <h4 class="font-bold text-lg text-green-700 mb-2">Family Partnership</h4>
                                    <p class="text-sm text-gray-600">Walking alongside parents and siblings with transparent communication and shared long-term planning.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        }

        function viewAboutBoard() {
            return `
                ${renderBreadcrumb('About Us', 'who-we-are.html', 'Trust and Advisory Board', 'Ethical governance, transparent stewardship, and multidisciplinary guidance.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-5xl space-y-10">
                        <div class="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-4">
                            <i class="fas fa-info-circle text-amber-600 text-xl mt-0.5"></i>
                            <div class="text-sm text-amber-900">
                                <strong>Governance Roster Note:</strong> Project Arunima operates as a registered non-profit trust in Uttarakhand led by Founder &amp; Director <strong>Aparna Das</strong>. Official trustee names, designations, and advisory board biographies from the Trust Deed can be populated directly into this governance directory prior to public launch.
                            </div>
                        </div>

                        <div class="grid md:grid-cols-2 gap-8">
                            <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100 space-y-4">
                                <span class="text-xs font-bold uppercase tracking-wider text-brand-pink">Executive Leadership</span>
                                <h3 class="text-2xl font-bold text-gray-900">Board of Trustees</h3>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    The Board of Trustees oversees fiduciary responsibility, regulatory compliance, child and adult safeguarding policies, and long-term sustainability of Project Arunima's Dehradun campus.
                                </p>
                                <div class="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-4">
                                    <img src="${ASSETS.aparna}" alt="Aparna Das" class="w-14 h-14 rounded-full object-cover">
                                    <div>
                                        <p class="font-bold text-gray-900">Aparna Das</p>
                                        <p class="text-xs text-brand-pink font-semibold">Founder &amp; Director</p>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100 space-y-4">
                                <span class="text-xs font-bold uppercase tracking-wider text-brand-dark">Guidance &amp; Expertise</span>
                                <h3 class="text-2xl font-bold text-gray-900">Advisory Council</h3>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Official trustee and advisory roster details were not supplied for this prototype. Contact Project Arunima to request the current governance information.
                                </p>
                                <a href="contact.html" class="inline-flex items-center gap-2 text-brand-dark font-bold text-sm hover:text-brand-pink pt-2">
                                    Request Governance &amp; Compliance Dossier <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        }

        function viewAboutNews() {
            const newsletters = [
                {
                    title: "We're Home and It Still Feels Surreal",
                    tag: 'Community Milestone',
                    summary: 'A heartfelt reflection on settling into our permanent home space in Dehradun—celebrating the warmth, stability, and sense of belonging our Friends experience every day.',
                    url: 'https://mailchi.mp/ff278263c98a/were-home-and-it-still-feels-surreal'
                },
                {
                    title: 'You Helped Us Build Something Beautiful This Year',
                    tag: 'Annual Gratitude',
                    summary: 'Looking back on a year of shared meals, handcrafted art, donor generosity, and steady personal milestones achieved by our Friends.',
                    url: 'https://mailchi.mp/68cb6fef99d9/you-helped-us-build-something-beautiful-this-year-17977815'
                },
                {
                    title: 'A Proud Moment for the Arunima Family',
                    tag: 'Celebration & Pride',
                    summary: 'Highlighting the dedication, teamwork, and public recognition earned by our neurodiverse Friends and trainers.',
                    url: 'https://mailchi.mp/46d79131ad1e/a-proud-moment-for-the-arunima-family'
                },
                {
                    title: 'Every Smile at Arunima Starts with a Caring Trainer',
                    tag: 'Behind the Scenes',
                    summary: 'A tribute to our Direct Support Professionals and educators whose patience, creativity, and daily care make independence possible.',
                    url: 'https://mailchi.mp/fe3bbb2e1f87/every-smile-at-arunima-starts-with-a-caring-trainer'
                }
            ];

            return `
                ${renderBreadcrumb('About Us', 'who-we-are.html', 'News & Newsletters', 'Stories, dispatches, and celebrations straight from the Arunima family in Dehradun.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-6xl space-y-10">
                        <div class="grid md:grid-cols-2 gap-8">
                            ${newsletters.map(item => `
                                <article class="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition flex flex-col justify-between space-y-6">
                                    <div>
                                        <span class="inline-block bg-pink-100 text-brand-pink text-xs font-bold px-3 py-1 rounded-full mb-3">${item.tag}</span>
                                        <h2 class="text-2xl font-bold text-gray-900 mb-3">${item.title}</h2>
                                        <p class="text-gray-600 leading-relaxed text-sm">${item.summary}</p>
                                    </div>
                                    <div class="pt-4 border-t border-gray-200 flex items-center justify-between">
                                        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="text-brand-dark font-bold text-sm hover:text-brand-pink inline-flex items-center gap-2">
                                            Read Full Mailchimp Dispatch <i class="fas fa-external-link-alt text-xs"></i>
                                        </a>
                                    </div>
                                </article>
                            `).join('')}
                        </div>
                    </div>
                </section>
            `;
        }

        function viewAboutCertification() {
            return `
                ${renderBreadcrumb('About Us', 'who-we-are.html', 'Legal & Tax Certification', 'Transparency, statutory registrations, and tax-exemption eligibility for supporters.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-4xl space-y-8">
                        <div class="bg-green-50 border border-green-200 rounded-2xl p-6 flex items-start gap-4">
                            <i class="fas fa-shield-alt text-green-700 text-2xl mt-1"></i>
                            <div>
                                <h2 class="text-lg font-bold text-green-900">Registered Charitable Trust • 12A &amp; 80G Compliant</h2>
                                <p class="text-sm text-green-800 mt-1">Project Arunima’s official website lists 12AA and 80G certification. Donors should confirm current eligibility and receipt requirements with the organization before contributing.</p>
                            </div>
                        </div>

                        <div class="bg-gray-50 rounded-2xl p-8 border border-gray-200 space-y-4">
                            <h3 class="text-xl font-bold text-gray-900">Statutory &amp; Registration Information</h3>
                            <dl class="grid sm:grid-cols-2 gap-4 text-sm">
                                <div class="bg-white p-4 rounded-xl border border-gray-100">
                                    <dt class="text-gray-500 font-medium">Registered Entity</dt>
                                    <dd class="font-bold text-gray-900 mt-1">Project Arunima (Charitable Trust)</dd>
                                </div>
                                <div class="bg-white p-4 rounded-xl border border-gray-100">
                                    <dt class="text-gray-500 font-medium">Registered Office</dt>
                                    <dd class="font-bold text-gray-900 mt-1">Sahastradhara Road, Dehradun - 248013, Uttarakhand</dd>
                                </div>
                                <div class="bg-white p-4 rounded-xl border border-gray-100">
                                    <dt class="text-gray-500 font-medium">Income Tax Status</dt>
                                    <dd class="font-bold text-gray-900 mt-1">Section 12A &amp; Section 80G Certified</dd>
                                </div>
                                <div class="bg-white p-4 rounded-xl border border-gray-100">
                                    <dt class="text-gray-500 font-medium">Compliance Verification</dt>
                                    <dd class="font-bold text-brand-dark mt-1"><a href="mailto:info@projectarunima.org?subject=Request%20for%2080G%20and%20Registration%20Certificates" class="hover:underline">Request Certificate Copies via Email</a></dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </section>
            `;
        }

        function viewAboutFamily() {
            return `
                ${renderBreadcrumb('About Us', 'who-we-are.html', 'Meet the Family', 'Celebrating the joy, creativity, and everyday camaraderie of our Friends and mentors.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-6xl space-y-12">
                        <div class="grid md:grid-cols-2 gap-8">
                            <figure class="bg-gray-50 rounded-2xl overflow-hidden shadow-md border border-gray-100">
                                <img src="${ASSETS.tiffinTeam}" alt="Arukriti Tiffin Culinary Team" class="w-full h-72 object-cover object-top">
                                <figcaption class="p-6">
                                    <h3 class="font-bold text-lg text-gray-900">The Arukriti Culinary Team</h3>
                                    <p class="text-sm text-gray-600 mt-1">Dressed in their Arukriti aprons and hairnets, our Friends take immense pride in preparing wholesome meals for Dehradun households.</p>
                                </figcaption>
                            </figure>
                            <figure class="bg-gray-50 rounded-2xl overflow-hidden shadow-md border border-gray-100">
                                <img src="${ASSETS.friendsArt}" alt="Friends painting on the sunlit terrace" class="w-full h-72 object-cover">
                                <figcaption class="p-6">
                                    <h3 class="font-bold text-lg text-gray-900">Sunlit Terrace Art Sessions</h3>
                                    <p class="text-sm text-gray-600 mt-1">Focused, joyful, and expressive—our Friends hand-paint vibrant motifs onto textiles that become Arukriti bags and home decor.</p>
                                </figcaption>
                            </figure>
                            <figure class="bg-gray-50 rounded-2xl overflow-hidden shadow-md border border-gray-100">
                                <img src="${ASSETS.familyGroup}" alt="Staff and trainees sharing refreshments" class="w-full h-72 object-cover">
                                <figcaption class="p-6">
                                    <h3 class="font-bold text-lg text-gray-900">Togetherness &amp; Shared Moments</h3>
                                    <p class="text-sm text-gray-600 mt-1">Every afternoon tea and celebration strengthens the bond between our Friends and our dedicated local support team.</p>
                                </figcaption>
                            </figure>
                            <figure class="bg-brand-light rounded-2xl p-8 border border-pink-100 flex flex-col justify-center space-y-4">
                                <div class="flex items-center gap-4">
                                    <img src="${ASSETS.aparna}" alt="Aparna Das" class="w-20 h-20 rounded-full object-cover border-4 border-white shadow">
                                    <div>
                                        <h3 class="font-bold text-xl text-gray-900">Led by Family Love</h3>
                                        <p class="text-xs font-bold uppercase text-brand-pink">Aparna Das, Founder &amp; Director</p>
                                    </div>
                                </div>
                                <p class="text-gray-700 text-sm leading-relaxed italic">
                                    "When you walk through our doors in Dehradun, you don't feel like you're entering a facility—you feel like you've come home to an extended family where every individual is celebrated."
                                </p>
                                <a href="volunteer.html" class="inline-flex items-center gap-2 text-brand-dark font-bold text-sm hover:text-brand-pink">
                                    Spend Time With Our Family — Volunteer <i class="fas fa-arrow-right"></i>
                                </a>
                            </figure>
                        </div>
                    </div>
                </section>
            `;
        }

        function viewAboutTeam() {
            return `
                ${renderBreadcrumb('About Us', 'who-we-are.html', 'Meet the Team', 'Dedicated educators, direct support professionals, and compassionate leaders.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-6xl space-y-12">
                        <!-- Featured Director Card -->
                        <div class="bg-brand-light rounded-3xl p-8 md:p-12 border border-pink-100 grid lg:grid-cols-3 gap-8 items-center">
                            <div class="lg:col-span-1 flex justify-center">
                                <img src="${ASSETS.aparna}" alt="Aparna Das - Director of Project Arunima" class="w-60 h-60 rounded-2xl object-cover shadow-xl border-4 border-white">
                            </div>
                            <div class="lg:col-span-2 space-y-4">
                                <span class="inline-block bg-white text-brand-pink text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Founder &amp; Director</span>
                                <h2 class="text-3xl font-bold text-gray-900">Aparna Das</h2>
                                <p class="text-sm font-semibold text-brand-dark">Has the privilege of being Ruhi's sister</p>
                                <p class="text-gray-700 leading-relaxed">
                                    Inspired by her younger sister Ruhi's needs, Aparna received her degree in <strong>Special Education from SNDT (Delhi) in 2005</strong> and went on to work with individuals with autism in the United States.
                                </p>
                                <p class="text-gray-700 leading-relaxed">
                                    Upon returning to India, she established and led the <strong>Learning Support Program at Woodstock School (Mussoorie)</strong> for 9 years before leaving to establish <strong>Project Arunima in 2011</strong> in Dehradun.
                                </p>
                            </div>
                        </div>

                        <!-- Staff Team Card -->
                        <div class="grid md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-8 border border-gray-100">
                            <div class="rounded-2xl overflow-hidden shadow-md">
                                <img src="${ASSETS.familyGroup}" alt="Project Arunima Direct Support Staff" class="w-full h-auto object-cover">
                            </div>
                            <div class="space-y-4">
                                <span class="text-brand-orange font-bold uppercase tracking-wider text-xs">Our Greatest Strength</span>
                                <h3 class="text-2xl font-bold text-gray-900">Direct Support Professionals &amp; Educators</h3>
                                <p class="text-gray-600 leading-relaxed text-sm">
                                    Our young, dedicated, and loving staff hail from Mussoorie, Dehradun, and neighboring areas. Some are trained Special Educators, while many are mentored on-site as <strong>Direct Support Professionals (DSPs)</strong>.
                                </p>
                                <p class="text-gray-600 leading-relaxed text-sm">
                                    They bring freshness, energy, and genuine friendship to the program—supporting our Friends in daily living, kitchen hygiene, handicraft production, and community outings.
                                </p>
                                <a href="jobs.html" class="inline-flex items-center gap-2 bg-brand-dark text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-900 transition">
                                    Join Our Team <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        }

        function viewAboutFaq() {
            const faqs = [
                {
                    q: 'Who is eligible to join Project Arunima’s residential or training programs?',
                    a: 'Project Arunima supports neurodiverse adults aged 18 years and above, including individuals with autism and developmental disabilities, who can benefit from structured assisted living, daily life skills, and vocational training.'
                },
                {
                    q: 'Why do you call residents and trainees "Friends"?',
                    a: 'Language shapes dignity. Calling our residents "Friends" reflects our non-institutional, egalitarian community ethos where adults live, learn, and work together as respected peers.'
                },
                {
                    q: 'Where is Project Arunima located?',
                    a: 'Our campus is located at Kamboj Plotting, Chalang, Nagal Hatnala, Sahastradhara Road, Dehradun - 248013, Uttarakhand, surrounded by peaceful greenery near the foothills.'
                },
                {
                    q: 'How can families apply for admission or schedule a campus visit?',
                    a: 'Families can review our 4-step Admissions process on the Admissions page, submit the online Application Form, or reach out directly via phone (+91-8859046829) or email (info@projectarunima.org) to schedule an initial consultation and campus visit.'
                },
                {
                    q: 'What is Arukriti and how does it benefit the Friends?',
                    a: 'Arukriti by Arunima is our social enterprise encompassing the Arukriti Tiffin Service and Arukriti Handicrafts. Our Friends actively participate in meal preparation, packaging, painting, and crafting—gaining practical vocational skills and pride.'
                },
                {
                    q: 'How can I order from Arukriti Tiffin Service in Dehradun?',
                    a: 'You can place meal enquiries directly through our Arukriti Tiffin Service page via WhatsApp (+91-8859046829) or search for Arukriti by Arunima on Zomato within Dehradun delivery zones.'
                },
                {
                    q: 'Are donations to Project Arunima eligible for 80G tax exemption?',
                    a: 'Yes. Project Arunima is a registered charitable trust with Section 12A and 80G certification, enabling Indian donors to claim tax deductions under Section 80G.'
                },
                {
                    q: 'Can college students or professionals volunteer or intern at Project Arunima?',
                    a: 'Yes! We welcome volunteers, special education interns, and university seminar groups. Please fill out the Volunteer Form under Get Involved so our team can coordinate dates and orientation.'
                }
            ];

            return `
                ${renderBreadcrumb('About Us', 'who-we-are.html', 'Frequently Asked Questions', 'Helpful answers for families, donors, customers, and volunteers.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-4xl">
                        <div class="space-y-4" id="faq-accordion-list">
                            ${faqs.map((item, idx) => `
                                <div class="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50">
                                    <button type="button" class="faq-toggle w-full flex justify-between items-center p-6 text-left font-bold text-gray-900 hover:text-brand-pink transition" aria-expanded="${idx === 0 ? 'true' : 'false'}">
                                        <span class="pr-4">${item.q}</span>
                                        <i class="fas fa-chevron-down text-brand-pink transition-transform ${idx === 0 ? 'rotate-180' : ''}"></i>
                                    </button>
                                    <div class="faq-panel px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-200/70 pt-4 ${idx === 0 ? '' : 'hidden'}">
                                        ${item.a}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
            `;
        }

        function viewAboutVideos() {
            const videos = [
                {
                    title: 'A Day in the Life at Project Arunima, Dehradun',
                    category: 'Campus & Daily Routines',
                    thumb: ASSETS.familyGroup,
                    description: 'Experience morning routines, shared meals, life-skills workshops, and evening recreation with our Friends and trainers.'
                },
                {
                    title: 'Inside Arukriti: The Tiffin Experience',
                    category: 'Vocational Enterprise',
                    thumb: ASSETS.tiffinTeam,
                    description: 'See how our culinary team prepares, packs, and delivers wholesome home-style tiffins across Dehradun.'
                },
                {
                    title: 'Handcrafted with Joy: Art & Craft Studio',
                    category: 'Arukriti Handicrafts',
                    thumb: ASSETS.friendsArt,
                    description: 'Watch our Friends transform blank canvas and fabric into vibrant, hand-painted bags and decor items.'
                }
            ];

            return `
                ${renderBreadcrumb('About Us', 'who-we-are.html', 'Videos & Stories', 'Glimpses into daily life, vocational training, and community celebrations at Project Arunima.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-6xl space-y-10">
                        <div class="bg-blue-50 border border-blue-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div class="text-sm text-blue-900">
                                <strong>Official video features:</strong> This page includes videos featured on Project Arunima’s official news page, plus a link to its YouTube channel.
                            </div>
                            <a href="https://www.youtube.com/@projectarunima" target="_blank" rel="noopener noreferrer" class="bg-red-600 text-white px-5 py-2 rounded-full font-bold text-xs hover:bg-red-700 transition inline-flex items-center gap-2 whitespace-nowrap">
                                <i class="fab fa-youtube"></i> Official YouTube Channel
                            </a>
                        </div>

                        <section class="rounded-3xl border border-gray-200 bg-gray-50 p-4 md:p-6">
                            <h2 class="text-xl font-bold text-gray-900 mb-4">Videos featured by Project Arunima</h2>
                            <iframe title="Project Arunima news and video features" src="https://www.projectarunima.org/in-news-page/" loading="lazy" class="w-full h-[34rem] rounded-2xl border-0 bg-white" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                            <p class="text-xs text-gray-500 mt-3">If the embedded page is unavailable, <a href="https://www.projectarunima.org/in-news-page/" target="_blank" rel="noopener noreferrer" class="underline font-bold">open the official page</a>.</p>
                        </section>

                        <div class="grid md:grid-cols-3 gap-8">
                            ${videos.map((v, index) => `
                                <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
                                    <div class="relative h-52 group cursor-pointer video-trigger" data-video-idx="${index}">
                                        <img src="${v.thumb}" alt="${v.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                                        <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                                            <div class="w-14 h-14 rounded-full bg-brand-pink text-white flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition">
                                                <i class="fas fa-play ml-1"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-6 flex-grow flex flex-col justify-between space-y-4">
                                        <div>
                                            <span class="text-xs font-bold uppercase text-brand-pink">${v.category}</span>
                                            <h3 class="text-lg font-bold text-gray-900 mt-1">${v.title}</h3>
                                            <p class="text-sm text-gray-600 mt-2 leading-relaxed">${v.description}</p>
                                        </div>
                                        <button type="button" data-video-idx="${index}" class="video-trigger text-left text-brand-dark font-bold text-sm hover:text-brand-pink inline-flex items-center gap-2">
                                            Watch Story Preview <i class="fas fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
            `;
        }

        // =========================================================================
        // 3. SERVICES PAGES
        // =========================================================================
        function viewServicesResidence() {
            return `
                ${renderBreadcrumb('Services', 'residence-training.html', 'Our Residence & Training Office', 'Comprehensive residential living and structured day-training programs for neurodiverse adults in Dehradun.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-6xl space-y-16">
                        <div class="grid lg:grid-cols-2 gap-12 items-center">
                            <div class="space-y-5">
                                <span class="text-brand-pink font-bold uppercase tracking-wider text-xs">Assisted Living &amp; Skill Development</span>
                                <h2 class="text-3xl font-bold text-gray-900">A Structured, Supportive Home Environment</h2>
                                <p class="text-gray-600 leading-relaxed">
                                    Our Residence &amp; Training Office on Sahastradhara Road provides a safe, predictable, and nurturing environment where adults (18+) with autism and developmental disabilities build functional independence at their own pace.
                                </p>
                                <ul class="space-y-3 text-sm text-gray-700">
                                    <li class="flex items-start gap-3"><i class="fas fa-check-circle text-brand-pink mt-1"></i> <span><strong>Assisted Residential Living:</strong> Residential support with individual assessment and programs designed around each person’s development and independence.</span></li>
                                    <li class="flex items-start gap-3"><i class="fas fa-check-circle text-brand-pink mt-1"></i> <span><strong>Activities of Daily Living (ADL):</strong> Grooming, housekeeping, laundry, meal planning, and personal safety skills.</span></li>
                                    <li class="flex items-start gap-3"><i class="fas fa-check-circle text-brand-pink mt-1"></i> <span><strong>Vocational &amp; Work Readiness:</strong> Hands-on training in the Arukriti kitchen, packaging unit, and handicraft studio.</span></li>
                                    <li class="flex items-start gap-3"><i class="fas fa-check-circle text-brand-pink mt-1"></i> <span><strong>Wellness, Fitness &amp; Community Outings:</strong> Yoga, walks, music, festival celebrations, and local Dehradun excursions.</span></li>
                                </ul>
                                <div class="pt-4 flex flex-wrap gap-4">
                                    <a href="admissions.html" class="bg-brand-pink text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-pink-700 transition shadow">Explore Admissions</a>
                                    <a href="packing-list.html" class="border border-brand-dark text-brand-dark px-7 py-3 rounded-full font-bold text-sm hover:bg-brand-dark hover:text-white transition">View Packing List</a>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <img src="${ASSETS.familyGroup}" alt="Residential community gathering" class="rounded-2xl shadow-lg col-span-2 w-full h-64 object-cover">
                                <img src="${ASSETS.tiffinTeam}" alt="Vocational kitchen training" class="rounded-2xl shadow-md w-full h-44 object-cover object-top">
                                <img src="${ASSETS.friendsArt}" alt="Creative craft training" class="rounded-2xl shadow-md w-full h-44 object-cover">
                            </div>
                        </div>
                    </div>
                </section>
            `;
        }

        function viewServicesSeminars() {
            return `
                ${renderBreadcrumb('Services', 'residence-training.html', 'University & College Training Seminars', 'Bridging academic learning with real-world neurodiversity inclusion and hands-on practice.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-6xl">
                        <div class="grid lg:grid-cols-2 gap-12 items-start">
                            <div class="space-y-6">
                                <span class="text-brand-dark font-bold uppercase tracking-wider text-xs">Academic Outreach &amp; Capacity Building</span>
                                <h2 class="text-3xl font-bold text-gray-900">Inspiring Future Educators, Therapists &amp; Citizens</h2>
                                <p class="text-gray-600 leading-relaxed">
                                    Led by Founder &amp; Special Educator <strong>Aparna Das</strong> and our senior team, Project Arunima conducts interactive training seminars, campus immersion days, and awareness workshops for universities, B.Ed./M.Ed. Special Education departments, psychology students, and colleges.
                                </p>
                                <div class="space-y-4">
                                    <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                                        <h3 class="font-bold text-gray-900">1. Understanding Adult Autism &amp; Neurodiversity</h3>
                                        <p class="text-sm text-gray-600 mt-1">Moving beyond childhood-centric models to understand adult transitions, sensory needs, and communication supports.</p>
                                    </div>
                                    <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                                        <h3 class="font-bold text-gray-900">2. Structured Teaching &amp; Vocational Inclusion</h3>
                                        <p class="text-sm text-gray-600 mt-1">Practical demonstrations of task analysis, visual schedules, and building dignified social enterprises like Arukriti.</p>
                                    </div>
                                    <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                                        <h3 class="font-bold text-gray-900">3. Guided Campus Immersion Visits</h3>
                                        <p class="text-sm text-gray-600 mt-1">Structured student cohort visits to our Dehradun centre to observe person-centered support in action.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Seminar Booking Form -->
                            <div class="bg-brand-light rounded-3xl p-8 border border-pink-100 shadow-lg">
                                <h3 class="text-2xl font-bold text-gray-900 mb-2">Request a College / University Seminar</h3>
                                <p class="text-sm text-gray-600 mb-6">Share your institution's details and preferred dates. Our academic outreach coordinator will respond promptly.</p>
                                <form id="seminar-form" class="space-y-4">
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Institution / College Name *</label>
                                        <input type="text" name="institution" required placeholder="e.g., Department of Special Education..." class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-brand-pink outline-none">
                                    </div>
                                    <div class="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Coordinator Name *</label>
                                            <input type="text" name="coordinator" required placeholder="Your full name" class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-brand-pink outline-none">
                                        </div>
                                        <div>
                                            <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Phone / WhatsApp *</label>
                                            <input type="tel" name="phone" required placeholder="+91..." class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-brand-pink outline-none">
                                        </div>
                                    </div>
                                    <div class="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Official Email *</label>
                                            <input type="email" name="email" required placeholder="faculty@college.edu" class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-brand-pink outline-none">
                                        </div>
                                        <div>
                                            <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Estimated Group Size</label>
                                            <input type="text" name="groupSize" placeholder="e.g., 40 students" class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-brand-pink outline-none">
                                        </div>
                                    </div>
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Format &amp; Preferred Dates</label>
                                        <textarea name="notes" rows="3" placeholder="On-campus workshop, Dehradun visit, or online seminar..." class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-brand-pink outline-none"></textarea>
                                    </div>
                                    <button type="submit" class="w-full bg-brand-pink text-white py-3 rounded-xl font-bold text-sm hover:bg-pink-700 transition shadow">
                                        Submit Seminar Enquiry
                                    </button>
                                </form>
                                <div id="seminar-form-status" class="hidden"></div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        }

        // =========================================================================
        // 4. ARUKRITI PAGES
        // =========================================================================
        function viewArukritiTiffin() {
            return `
                ${renderBreadcrumb('Arukriti', 'tiffin-service.html', 'Arukriti Tiffin Service', 'Wholesome, hygienic home-style meals prepared daily in Dehradun by our neurodiverse culinary team.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-6xl space-y-12">
                        <div class="grid lg:grid-cols-2 gap-10 items-center">
                            <div class="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                                <img src="${ASSETS.tiffinTeam}" alt="Arukriti Tiffin Service Team" class="w-full h-auto object-cover">
                            </div>
                            <div class="space-y-5">
                                <span class="inline-block bg-orange-100 text-brand-orange text-xs font-bold uppercase px-3 py-1 rounded-full">The Tiffin Experience</span>
                                <h2 class="text-3xl font-bold text-gray-900">Nutritious Meals Made With Pride &amp; Care</h2>
                                <p class="text-gray-600 leading-relaxed">
                                    Every day, our Friends and culinary trainers prepare fresh, balanced Indian meals in our hygienic Sahastradhara Road kitchen. Every tiffin ordered directly supports vocational skill training and meaningful employment.
                                </p>
                                <div class="grid sm:grid-cols-2 gap-4 text-sm">
                                    <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <h4 class="font-bold text-gray-900"><i class="fas fa-leaf text-green-600 mr-1.5"></i> Fresh Home-Style Cooking</h4>
                                        <p class="text-gray-600 text-xs mt-1">Balanced roti, sabzi, dal, rice, and wholesome accompaniments cooked fresh daily.</p>
                                    </div>
                                    <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <h4 class="font-bold text-gray-900"><i class="fas fa-building text-brand-dark mr-1.5"></i> Individual &amp; Office Plans</h4>
                                        <p class="text-gray-600 text-xs mt-1">Available for single orders, monthly subscriptions, and Dehradun office lunches.</p>
                                    </div>
                                </div>
                                <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900">
                                    <strong>Zomato &amp; Direct Delivery:</strong> Search for <em>"Arukriti by Arunima"</em> on Zomato in Dehradun, or use our instant WhatsApp Order Generator below for direct tiffin bookings and monthly plans.
                                </div>
                            </div>
                        </div>

                        <!-- Interactive WhatsApp Tiffin Order Generator -->
                        <div class="bg-brand-light rounded-3xl p-8 md:p-10 border border-pink-100 max-w-4xl mx-auto">
                            <h3 class="text-2xl font-bold text-gray-900 mb-2">Instant Tiffin Order / Subscription Enquiry</h3>
                            <p class="text-sm text-gray-600 mb-6">Configure your tiffin request below to send a pre-filled order directly to our Dehradun kitchen on WhatsApp or Email.</p>
                            <form id="tiffin-order-form" class="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Your Name *</label>
                                    <input type="text" id="tiffin-name" required placeholder="Full name" class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                </div>
                                <div>
                                    <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Delivery Area in Dehradun *</label>
                                    <input type="text" id="tiffin-area" required placeholder="e.g., Sahastradhara Road, Rajpur Road, Jakhan..." class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                </div>
                                <div>
                                    <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Plan Type</label>
                                    <select id="tiffin-plan" class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                        <option value="Single / Trial Lunch Tiffin">Single / Trial Lunch Tiffin</option>
                                        <option value="Weekly Lunch Subscription">Weekly Lunch Subscription</option>
                                        <option value="Monthly Lunch Subscription">Monthly Lunch Subscription</option>
                                        <option value="Office / Group Bulk Order">Office / Group Bulk Order</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Quantity (Tiffins per day)</label>
                                    <input type="number" id="tiffin-qty" min="1" value="1" class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                </div>
                                <div class="sm:col-span-2">
                                    <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Dietary Notes / Preferred Start Date</label>
                                    <input type="text" id="tiffin-notes" placeholder="Any spice preference or start date..." class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                </div>
                                <div class="sm:col-span-2 flex flex-col sm:flex-row gap-3 pt-2">
                                    <button type="submit" class="flex-1 bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 shadow">
                                        <i class="fab fa-whatsapp text-lg"></i> Send Order via WhatsApp
                                    </button>
                                    <button type="button" id="tiffin-email-btn" class="flex-1 bg-brand-dark hover:bg-blue-900 text-white py-3.5 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 shadow">
                                        <i class="fas fa-envelope"></i> Send Enquiry via Email
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            `;
        }

        function viewArukritiHandicrafts() {
            const products = [
                {
                    name: 'Hand-Painted Cotton Tote & Utility Bags',
                    desc: 'Durable canvas and cotton totes hand-painted by our Friends during terrace art workshops.',
                    tag: 'Bestseller'
                },
                {
                    name: 'Artisan Cushion Covers & Table Runners',
                    desc: 'Vibrant block-printed and hand-painted home textiles created in collaboration with local Dehradun artisans.',
                    tag: 'Home Decor'
                },
                {
                    name: 'Festive Diya Sets, Pouches & Gift Hampers',
                    desc: 'Thoughtful eco-friendly gift hampers ideal for Diwali, conferences, and corporate gifting.',
                    tag: 'Corporate Gifting'
                },
                {
                    name: 'Handcrafted Stationery & Journals',
                    desc: 'Fabric-bound notebooks, bookmarks, and greeting cards featuring original artwork by Arunima Friends.',
                    tag: 'Everyday Art'
                }
            ];

            return `
                ${renderBreadcrumb('Arukriti', 'handicrafts.html', 'Arukriti Handicrafts', 'Handcrafted with joy by our Friends and local artisans in Dehradun.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-6xl space-y-12">
                        <div class="grid lg:grid-cols-2 gap-10 items-center">
                            <div class="space-y-5">
                                <span class="inline-block bg-blue-100 text-brand-dark text-xs font-bold uppercase px-3 py-1 rounded-full">Arukriti Studio</span>
                                <h2 class="text-3xl font-bold text-gray-900">Every Piece Carries Dignity &amp; Craftsmanship</h2>
                                <p class="text-gray-600 leading-relaxed">
                                    At Arukriti Handicrafts, our Friends work alongside skilled local artisans to paint, stitch, assemble, and package thoughtful lifestyle products. Each item celebrates patience, color, and inclusive livelihood.
                                </p>
                                <div class="flex flex-wrap gap-3 pt-2">
                                    <a href="${ORG_CONTACT.whatsappBase}?text=Hello%20Project%20Arunima%2C%20I%20would%20like%20to%20view%20the%20Arukriti%20Handicrafts%20catalogue%20and%20place%20an%20order." target="_blank" rel="noopener noreferrer" class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-bold text-sm transition inline-flex items-center gap-2 shadow">
                                        <i class="fab fa-whatsapp text-lg"></i> Request Catalogue on WhatsApp
                                    </a>
                                    <a href="mailto:info@projectarunima.org?subject=Arukriti%20Handicrafts%20%2F%20Corporate%20Gifting%20Enquiry" class="bg-brand-dark hover:bg-blue-900 text-white px-6 py-3 rounded-full font-bold text-sm transition inline-flex items-center gap-2 shadow">
                                        <i class="fas fa-envelope"></i> Bulk / Corporate Gifting Enquiry
                                    </a>
                                </div>
                            </div>
                            <div class="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                                <img src="${ASSETS.friendsArt}" alt="Friends crafting and painting products" class="w-full h-auto object-cover">
                            </div>
                        </div>

                        <!-- Product Categories Grid -->
                        <div class="grid sm:grid-cols-2 gap-6">
                            ${products.map(p => `
                                <div class="bg-gray-50 rounded-2xl p-7 border border-gray-100 flex flex-col justify-between space-y-4">
                                    <div>
                                        <span class="inline-block bg-pink-100 text-brand-pink text-xs font-bold px-3 py-1 rounded-full mb-2">${p.tag}</span>
                                        <h3 class="text-xl font-bold text-gray-900">${p.name}</h3>
                                        <p class="text-sm text-gray-600 mt-2 leading-relaxed">${p.desc}</p>
                                    </div>
                                    <div class="pt-3 border-t border-gray-200 flex items-center justify-between">
                                        <a href="${ORG_CONTACT.whatsappBase}?text=${encodeURIComponent('Hello Project Arunima, I am interested in ordering: ' + p.name)}" target="_blank" rel="noopener noreferrer" class="text-brand-pink font-bold text-sm hover:underline inline-flex items-center gap-1.5">
                                            Enquire to Order <i class="fas fa-arrow-right text-xs"></i>
                                        </a>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
            `;
        }

        // =========================================================================
        // 5. RESOURCES FOR FAMILIES PAGES
        // =========================================================================
        function viewResourcesReports() {
            return `
                ${renderBreadcrumb('Resources for Families', 'resources.html', 'Annual Reports', 'Access published reporting and ask the organization for the latest documents.')}
                <section class="py-16 bg-white"><div class="container mx-auto px-4 lg:px-8 max-w-4xl space-y-8">
                    <article class="rounded-3xl border border-gray-200 bg-gray-50 p-8 md:p-10">
                        <span class="text-xs font-bold uppercase tracking-wide text-brand-pink">Published report</span>
                        <h2 class="text-2xl font-bold text-gray-900 mt-2">Annual Report 2019–2020</h2>
                        <p class="text-gray-600 mt-3">This is the report linked from Project Arunima’s official website. Contact the organization to request more recent annual reports or audited statements.</p>
                        <a href="https://www.projectarunima.org/wp-content/uploads/2021/08/annual_report_19-20.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex mt-6 items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-white font-bold"><i class="fas fa-file-pdf"></i> Open annual report (PDF)</a>
                    </article>
                    <p class="text-sm text-gray-600">For current reporting, email <a class="font-bold text-brand-pink underline" href="mailto:info@projectarunima.org?subject=Request%20for%20current%20annual%20report">info@projectarunima.org</a>.</p>
                </div></section>`;
        }

        function viewResourcesPolicy() {
            return `
                ${renderBreadcrumb('Resources for Families', 'resources.html', 'Policy Manual', 'Read Project Arunima’s published policy manual.')}
                <section class="py-16 bg-white"><div class="container mx-auto px-4 lg:px-8 max-w-4xl space-y-8">
                    <div class="rounded-3xl border border-pink-100 bg-brand-light p-8 md:p-10">
                        <h2 class="text-2xl font-bold text-gray-900">Project Arunima Policy Manual</h2>
                        <p class="mt-3 text-gray-700">The official website lists a 2024 policy manual. Please confirm with Project Arunima whether this document is the current version before relying on it.</p>
                        <a href="https://www.projectarunima.org/wp-content/uploads/2024/04/ARUNIMA-POLICY-MANUAL-2024.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex mt-6 items-center gap-2 rounded-full bg-brand-pink px-6 py-3 text-white font-bold"><i class="fas fa-file-pdf"></i> Open policy manual (PDF)</a>
                    </div>
                </div></section>`;
        }

        function viewResourcesApplication() {
            return `
                ${renderBreadcrumb('Resources for Families', 'annual-reports.html', 'Admission Application Form', 'Begin the admission and assessment conversation for your loved one.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-4xl">
                        <div class="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm">
                            <h2 class="text-2xl font-bold text-gray-900 mb-2">Prospective Friend Application Form</h2>
                            <p class="text-sm text-gray-600 mb-8">Please share initial details below. Once submitted, you can immediately transmit your application to <strong>info@projectarunima.org</strong> or schedule a call with our admissions team.</p>

                            <form id="admission-application-form" class="space-y-6">
                                <div class="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Applicant (Friend) Full Name *</label>
                                        <input type="text" name="applicantName" required class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                    </div>
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Age (18+ Preferred) *</label>
                                        <input type="number" name="applicantAge" min="15" max="75" required class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                    </div>
                                </div>

                                <div class="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Program Preference *</label>
                                        <select name="programType" class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                            <option value="Full-Time Residential Assisted Living">Full-Time Residential Assisted Living</option>
                                            <option value="Day Training & Vocational Program">Day Training &amp; Vocational Program</option>
                                            <option value="Short Trial / Respite Stay">Short Trial / Respite Stay</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Primary Diagnosis / Support Profile *</label>
                                        <input type="text" name="diagnosis" required placeholder="e.g., Autism Spectrum, Intellectual Disability..." class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                    </div>
                                </div>

                                <div class="grid sm:grid-cols-3 gap-4">
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Parent / Guardian Name *</label>
                                        <input type="text" name="guardianName" required class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                    </div>
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Contact Phone *</label>
                                        <input type="tel" name="phone" required placeholder="+91..." class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                    </div>
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Email Address *</label>
                                        <input type="email" name="email" required class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Communication Style, Daily Living Skills &amp; Interests *</label>
                                    <textarea name="supportNotes" rows="4" required placeholder="Share details about communication, self-care independence, sensory preferences, medical needs, and favorite activities..." class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm"></textarea>
                                </div>

                                <button type="submit" class="w-full bg-brand-pink text-white py-3.5 rounded-xl font-bold text-sm hover:bg-pink-700 transition shadow-md">
                                    Generate &amp; Submit Application Summary
                                </button>
                            </form>
                            <div id="admission-form-status" class="hidden"></div>
                        </div>
                    </div>
                </section>
            `;
        }

        function viewResourcesPacking() {
            const packingGroups = [
                {
                    category: 'Clothing & Footwear (Season-Appropriate for Dehradun)',
                    items: [
                        '7–10 sets of comfortable everyday casual wear (labeled with name)',
                        'Warm woolens, fleece jackets, thermals, and woolen caps (for Dehradun winters Oct–Feb)',
                        '2–3 sets of festive / smart-casual attire for celebrations and outings',
                        'Comfortable walking shoes, slip-on sandals, and indoor slippers',
                        'Undergarments, socks, and sleepwear'
                    ]
                },
                {
                    category: 'Personal Care & Toiletries',
                    items: [
                        'Toothbrush, toothpaste, bathing soap/body wash, shampoo, and hair oil',
                        'Bath towels (2–3) and hand towels',
                        'Comb/hairbrush, nail cutter, and personal grooming essentials',
                        'Preferred sensory-friendly toiletries if specific textures/scents are needed'
                    ]
                },
                {
                    category: 'Medical & Important Documents',
                    items: [
                        'Prescribed medications in original packaging with clear dosage instructions',
                        'Copies of recent medical records, blood group report, and vaccination history',
                        'Copy of Aadhaar Card, UDID Card (if available), and passport-size photographs',
                        'Emergency family contact sheet with local and primary guardian numbers'
                    ]
                },
                {
                    category: 'Comfort & Personal Favorites',
                    items: [
                        'Favorite books, coloring supplies, music player/headphones, or familiar comfort item',
                        'Reusable water bottle and small daypack for outings'
                    ]
                }
            ];

            return `
                ${renderBreadcrumb('Resources for Families', 'annual-reports.html', 'Residential Packing Lists', 'Interactive preparation checklist for Friends joining Project Arunima for trial stays or residential living.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-4xl space-y-8">
                        <div class="bg-brand-light rounded-2xl p-6 border border-pink-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h2 class="text-xl font-bold text-gray-900">Interactive Residential Packing Checklist</h2>
                                <p class="text-sm text-gray-600 mt-1">Check off items as you pack. Progress: <strong id="packing-progress" class="text-brand-pink">0 / 17 packed</strong></p>
                            </div>
                            <button type="button" onclick="window.print()" class="no-print bg-brand-dark text-white px-5 py-2.5 rounded-full font-bold text-xs hover:bg-blue-900 transition flex items-center gap-2">
                                <i class="fas fa-print"></i> Print Checklist
                            </button>
                        </div>

                        <div class="space-y-6">
                            ${packingGroups.map(group => `
                                <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                    <h3 class="text-lg font-bold text-brand-dark mb-4">${group.category}</h3>
                                    <div class="space-y-3">
                                        ${group.items.map(item => `
                                            <label class="flex items-start gap-3 cursor-pointer text-sm text-gray-700 hover:text-gray-900">
                                                <input type="checkbox" class="packing-checkbox mt-1 h-4 w-4 rounded border-gray-300 text-brand-pink focus:ring-brand-pink">
                                                <span>${item}</span>
                                            </label>
                                        `).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
            `;
        }

        function viewResourcesSafety() {
            return `
                ${renderBreadcrumb('Resources for Families', 'resources.html', 'Safety', 'Find the published policy resource and contact Project Arunima for current safeguarding information.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-4xl space-y-8">
                        <div class="rounded-3xl border border-amber-200 bg-amber-50 p-8">
                            <h2 class="text-2xl font-bold text-gray-900">Safety information</h2>
                            <p class="mt-3 text-gray-700">This prototype does not describe site-specific safeguarding procedures. Please contact Project Arunima directly for current safety information and speak with the team before making decisions about care.</p>
                            <a href="policy-manual.html" class="inline-flex mt-6 items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-white font-bold">View published policy manual <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </section>
            `;
        }

        // =========================================================================
        // 6. GET INVOLVED PAGES
        // =========================================================================
        function viewInvolvedAdmissions() {
            const steps = [
                {
                    num: '01',
                    title: 'Initial enquiry',
                    desc: 'Contact the team to ask about the program and whether it may fit your family member’s needs.'
                },
                {
                    num: '02',
                    title: 'Discuss the program',
                    desc: 'Ask Project Arunima about current services, eligibility, availability, and whether a visit can be arranged.'
                },
                {
                    num: '03',
                    title: 'Individual assessment',
                    desc: 'The assessment and admission process varies by individual. Contact Project Arunima for current eligibility, availability, and next steps.'
                },
                {
                    num: '04',
                    title: 'Agree on next steps',
                    desc: 'The organization can explain its current assessment and admission decisions directly to each family.'
                }
            ];

            return `
                ${renderBreadcrumb('Get Involved', 'admissions.html', 'Admissions Process', 'A thoughtful, family-centered transition into Project Arunima’s assisted living and training programs.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-6xl space-y-12">
                        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            ${steps.map(s => `
                                <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative">
                                    <span class="text-3xl font-extrabold text-brand-pink/30">${s.num}</span>
                                    <h3 class="text-lg font-bold text-gray-900 mt-2">${s.title}</h3>
                                    <p class="text-sm text-gray-600 mt-2 leading-relaxed">${s.desc}</p>
                                </div>
                            `).join('')}
                        </div>

                        <div class="bg-brand-light rounded-3xl p-8 md:p-10 border border-pink-100 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div class="space-y-2 max-w-2xl">
                                <h2 class="text-2xl font-bold text-gray-900">Ready to Begin the Conversation?</h2>
                                <p class="text-sm text-gray-600">Complete our online Application Form or speak directly with our Dehradun admissions team.</p>
                            </div>
                            <div class="flex flex-wrap gap-3">
                                <a href="application-form.html" class="bg-brand-pink text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-pink-700 transition shadow">Open Application Form</a>
                                <a href="${ORG_CONTACT.phoneHref}" class="bg-white border border-brand-dark text-brand-dark px-6 py-3.5 rounded-full font-bold text-sm hover:bg-brand-dark hover:text-white transition">Call +91-8859046829</a>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        }

        function viewInvolvedDonate() {
            return `
                ${renderBreadcrumb('Get Involved', 'get-involved.html', 'Donate to Project Arunima', 'Contact Project Arunima for current contribution options and verified payment details.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-5xl space-y-10">
                        <div class="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm text-blue-900">For current campaigns and verified payment information, contact Project Arunima directly. This page does not process payments.</div>

                        <!-- Interactive Contribution Selector -->
                        <div class="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-200 space-y-8">
                            <div>
                                <h2 class="text-2xl font-bold text-gray-900">Ask about contributing</h2>
                                <p class="text-sm text-gray-600 mt-1">You can include an optional amount as part of your enquiry. No payment is taken on this prototype.</p>
                            </div>

                            <div class="max-w-sm" id="donation-tier-grid">
                                <label for="custom-donation-input" class="block text-xs font-bold uppercase text-gray-500 mb-1">Optional pledge amount (INR)</label>
                                <input type="number" id="custom-donation-input" min="1" placeholder="Enter an amount, if applicable" class="w-full px-4 py-3 rounded-xl border border-gray-300 font-bold text-gray-900 text-sm">
                            </div>

                            <form id="donor-pledge-form" class="grid sm:grid-cols-3 gap-4">
                                <div>
                                    <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Name *</label>
                                    <input type="text" id="donor-name" required placeholder="Your name" class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                </div>
                                <div>
                                    <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Email Address *</label>
                                    <input type="email" id="donor-email" required placeholder="Your email" class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                </div>
                                <div>
                                    <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Phone / WhatsApp *</label>
                                    <input type="tel" id="donor-phone" required placeholder="+91..." class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                </div>
                                <div class="sm:col-span-3 flex flex-col sm:flex-row gap-3 pt-2">
                                    <button type="submit" class="flex-1 bg-brand-pink hover:bg-pink-700 text-white py-3.5 rounded-xl font-bold text-sm transition shadow flex items-center justify-center gap-2">
                                        <i class="fab fa-whatsapp text-lg"></i> Prepare WhatsApp enquiry
                                    </button>
                                    <button type="button" id="donor-email-btn" class="flex-1 bg-brand-dark hover:bg-blue-900 text-white py-3.5 rounded-xl font-bold text-sm transition shadow flex items-center justify-center gap-2">
                                        <i class="fas fa-envelope"></i> Request Bank / UPI Details via Email
                                    </button>
                                </div>
                            </form>

                            <div class="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-xs text-amber-900 space-y-1">
                                <p>Payment details are intentionally not displayed here. Confirm current contribution methods, documentation, and receipt eligibility with Project Arunima.</p>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        }

        function viewInvolvedJobs() {
            return `
                ${renderBreadcrumb('Get Involved', 'get-involved.html', 'Careers & Jobs at Project Arunima', 'Contact Project Arunima to ask whether there are current vacancies.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-6xl space-y-12">
                        <div class="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm text-blue-900">No current vacancy list was supplied for this prototype. Please confirm openings, role requirements, and application details with Project Arunima.</div>

                        <div class="bg-brand-light rounded-3xl p-8 md:p-10 border border-pink-100 max-w-3xl mx-auto">
                            <h2 class="text-2xl font-bold text-gray-900 mb-2">Apply to Join Our Team</h2>
                            <p class="text-sm text-gray-600 mb-6">Submit your expression of interest below and send your CV to <strong>info@projectarunima.org</strong>.</p>
                            <form id="job-application-form" class="space-y-4">
                                <div class="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Full Name *</label>
                                        <input type="text" name="name" required class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                    </div>
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Role Applying For *</label>
                                        <input type="text" name="role" required placeholder="Role or area of interest" class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                    </div>
                                </div>
                                <div class="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Phone Number *</label>
                                        <input type="tel" name="phone" required class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                    </div>
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Email Address *</label>
                                        <input type="email" name="email" required class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Qualifications &amp; Relevant Experience *</label>
                                    <textarea name="experience" rows="3" required placeholder="Share your educational background, RCI registration (if applicable), and why you want to work at Project Arunima..." class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm"></textarea>
                                </div>
                                <button type="submit" class="w-full bg-brand-dark text-white py-3.5 rounded-xl font-bold text-sm hover:bg-blue-900 transition shadow">
                                    Submit Job Application
                                </button>
                            </form>
                            <div id="job-form-status" class="hidden"></div>
                        </div>
                    </div>
                </section>
            `;
        }

        function viewInvolvedPartner() {
            return `
                ${renderBreadcrumb('Get Involved', 'admissions.html', 'Partner With Us', 'Collaborate through CSR grants, corporate tiffin subscriptions, Arukriti gifting, and academic partnerships.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-6xl space-y-12">
                        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <i class="fas fa-hand-holding-heart text-brand-pink text-2xl mb-3"></i>
                                <h3 class="font-bold text-lg text-gray-900">CSR Partnerships</h3>
                                <p class="text-sm text-gray-600 mt-2">Support residential infrastructure, vocational equipment, and skill-building fellowships under CSR mandates.</p>
                            </div>
                            <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <i class="fas fa-utensils text-brand-orange text-2xl mb-3"></i>
                                <h3 class="font-bold text-lg text-gray-900">Corporate Tiffin Plans</h3>
                                <p class="text-sm text-gray-600 mt-2">Subscribe to daily wholesome lunches from Arukriti Tiffin Service for your Dehradun office team.</p>
                            </div>
                            <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <i class="fas fa-gift text-brand-dark text-2xl mb-3"></i>
                                <h3 class="font-bold text-lg text-gray-900">Inclusive Gifting</h3>
                                <p class="text-sm text-gray-600 mt-2">Commission handcrafted bags, folders, and festive hampers made by our Friends for your events.</p>
                            </div>
                            <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <i class="fas fa-university text-green-700 text-2xl mb-3"></i>
                                <h3 class="font-bold text-lg text-gray-900">Academic Alliances</h3>
                                <p class="text-sm text-gray-600 mt-2">Partner on student fieldwork placements, research, and disability inclusion seminars.</p>
                            </div>
                        </div>

                        <div class="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-200 max-w-3xl mx-auto">
                            <h2 class="text-2xl font-bold text-gray-900 mb-2">Start a Partnership Conversation</h2>
                            <p class="text-sm text-gray-600 mb-6">Tell us about your organization and how you would like to collaborate with Project Arunima.</p>
                            <form id="partner-form" class="space-y-4">
                                <div class="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Organization / Company Name *</label>
                                        <input type="text" name="orgName" required class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                    </div>
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Contact Person *</label>
                                        <input type="text" name="contactPerson" required class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                    </div>
                                </div>
                                <div class="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Work Email *</label>
                                        <input type="email" name="email" required class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                    </div>
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Phone Number *</label>
                                        <input type="tel" name="phone" required class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Partnership Area *</label>
                                    <select name="partnershipType" class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                        <option value="CSR Grant / Infrastructure Support">CSR Grant / Infrastructure Support</option>
                                        <option value="Corporate Tiffin Subscription">Corporate Tiffin Subscription</option>
                                        <option value="Arukriti Handicrafts Bulk Gifting">Arukriti Handicrafts Bulk Gifting</option>
                                        <option value="University / Institutional Collaboration">University / Institutional Collaboration</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Message / Proposal Summary *</label>
                                    <textarea name="message" rows="3" required class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm"></textarea>
                                </div>
                                <button type="submit" class="w-full bg-brand-pink text-white py-3.5 rounded-xl font-bold text-sm hover:bg-pink-700 transition shadow">
                                    Send Partnership Enquiry
                                </button>
                            </form>
                            <div id="partner-form-status" class="hidden"></div>
                        </div>
                    </div>
                </section>
            `;
        }

        function viewInvolvedVolunteer() {
            return `
                ${renderBreadcrumb('Get Involved', 'admissions.html', 'Volunteer Form', 'Share your time, skills, music, art, or professional expertise with the Arunima family.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-4xl">
                        <div class="bg-brand-light rounded-3xl p-8 md:p-10 border border-pink-100 shadow-sm">
                            <h2 class="text-2xl font-bold text-gray-900 mb-2">Volunteer Registration Form</h2>
                            <p class="text-sm text-gray-600 mb-6">Whether you are in Dehradun or contributing remotely with design, photography, or fundraising skills, we would love to hear from you.</p>

                            <form id="volunteer-form" class="space-y-4">
                                <div class="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Full Name *</label>
                                        <input type="text" name="name" required class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                    </div>
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">City / Location *</label>
                                        <input type="text" name="city" required placeholder="e.g., Dehradun, Mussoorie, Delhi..." class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                    </div>
                                </div>
                                <div class="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Email Address *</label>
                                        <input type="email" name="email" required class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                    </div>
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Phone / WhatsApp *</label>
                                        <input type="tel" name="phone" required class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                    </div>
                                </div>
                                <div class="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Area of Interest *</label>
                                        <select name="interest" class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                            <option value="Art, Craft & Music Sessions">Art, Craft &amp; Music Sessions</option>
                                            <option value="Sports, Yoga & Outdoor Recreation">Sports, Yoga &amp; Outdoor Recreation</option>
                                            <option value="Arukriti Packaging & Marketing Support">Arukriti Packaging &amp; Marketing Support</option>
                                            <option value="Special Education / Therapy Internship">Special Education / Therapy Internship</option>
                                            <option value="Photography, Content & Fundraising">Photography, Content &amp; Fundraising</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Availability / Duration *</label>
                                        <input type="text" name="availability" required placeholder="e.g., Weekends, 1 month internship..." class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Tell Us About Yourself &amp; Skills *</label>
                                    <textarea name="about" rows="3" required class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm"></textarea>
                                </div>
                                <button type="submit" class="w-full bg-brand-pink text-white py-3.5 rounded-xl font-bold text-sm hover:bg-pink-700 transition shadow">
                                    Submit Volunteer Registration
                                </button>
                            </form>
                            <div id="volunteer-form-status" class="hidden"></div>
                        </div>
                    </div>
                </section>
            `;
        }

        // =========================================================================
        // 7. SUPPORT US PAGES
        // =========================================================================
        function viewSupportContribution() {
            return `
                ${renderBreadcrumb('Support Us', 'donate.html', 'Make a Contribution', 'Multiple meaningful ways to stand with Project Arunima and our Friends.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-6xl space-y-10">
                        <div class="grid md:grid-cols-3 gap-8">
                            <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col justify-between space-y-6">
                                <div>
                                    <div class="w-12 h-12 rounded-xl bg-pink-100 text-brand-pink flex items-center justify-center text-xl mb-4"><i class="fas fa-heart"></i></div>
                                    <h3 class="text-xl font-bold text-gray-900">1. Financial Contribution (80G)</h3>
                                    <p class="text-sm text-gray-600 mt-2 leading-relaxed">Make a one-time or recurring contribution toward daily nutrition, residential care, therapy, and educator salaries.</p>
                                </div>
                                <a href="donate.html" class="bg-brand-pink text-white text-center py-3 rounded-xl font-bold text-sm hover:bg-pink-700 transition">Donate Now</a>
                            </div>

                            <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col justify-between space-y-6">
                                <div>
                                    <div class="w-12 h-12 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center text-xl mb-4"><i class="fas fa-shopping-bag"></i></div>
                                    <h3 class="text-xl font-bold text-gray-900">2. Support Arukriti Enterprises</h3>
                                    <p class="text-sm text-gray-600 mt-2 leading-relaxed">Order lunches from Arukriti Tiffin Service or purchase handcrafted items—directly sustaining dignified vocational roles.</p>
                                </div>
                                <a href="tiffin-service.html" class="bg-brand-dark text-white text-center py-3 rounded-xl font-bold text-sm hover:bg-blue-900 transition">Explore Arukriti</a>
                            </div>

                            <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col justify-between space-y-6">
                                <div>
                                    <div class="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center text-xl mb-4"><i class="fas fa-box-open"></i></div>
                                    <h3 class="text-xl font-bold text-gray-900">3. In-Kind &amp; Wish-List Support</h3>
                                    <p class="text-sm text-gray-600 mt-2 leading-relaxed">Contribute art materials, kitchen groceries, sports equipment, or household essentials needed at our Dehradun centre.</p>
                                </div>
                                <a href="${ORG_CONTACT.whatsappBase}?text=Hello%20Project%20Arunima%2C%20I%20would%20like%20to%20ask%20about%20current%20in-kind%20wish-list%20needs." target="_blank" rel="noopener noreferrer" class="bg-green-600 text-white text-center py-3 rounded-xl font-bold text-sm hover:bg-green-700 transition">Ask About Wish-List</a>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        }

        function viewSupportDonors() {
            return `
                ${renderBreadcrumb('Support Us', 'support-us.html', 'Our Donors', 'Contact Project Arunima for donor recognition and acknowledgement information.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-5xl space-y-10">
                        <div class="bg-brand-light rounded-3xl p-8 md:p-12 border border-pink-100 text-center space-y-4">
                            <i class="fas fa-hands-helping text-brand-pink text-4xl"></i>
                            <h2 class="text-3xl font-bold text-gray-900">Donor acknowledgement</h2>
                            <p class="text-gray-700 max-w-2xl mx-auto leading-relaxed">No donor names or acknowledgement list were supplied for this prototype. We have left this page free of unverified names; please contact Project Arunima for current recognition information.</p>
                        </div>

                        <div class="text-center pt-2">
                            <a href="donate.html" class="inline-block bg-brand-pink text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-pink-700 transition shadow">Join Our Circle of Supporters</a>
                        </div>
                    </div>
                </section>
            `;
        }

        // =========================================================================
        // 8. CONTACT & LEGAL PAGES
        // =========================================================================
        function viewContact() {
            return `
                ${renderBreadcrumb('Contact', 'contact.html', 'Contact Project Arunima', 'Reach out to our Dehradun campus for admissions, Arukriti orders, volunteering, or general enquiries.')}
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 lg:px-8 max-w-6xl space-y-12">
                        <div class="grid lg:grid-cols-2 gap-10">
                            <!-- Contact Details & Map -->
                            <div class="space-y-6">
                                <div class="grid sm:grid-cols-2 gap-4">
                                    <a href="${ORG_CONTACT.phoneHref}" class="bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:border-brand-pink transition">
                                        <i class="fas fa-phone-alt text-brand-pink text-xl mb-2"></i>
                                        <h3 class="font-bold text-gray-900 text-sm">Call Us</h3>
                                        <p class="text-sm text-gray-600 mt-1">+91-8859046829</p>
                                    </a>
                                    <a href="mailto:info@projectarunima.org" class="bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:border-brand-pink transition">
                                        <i class="fas fa-envelope text-brand-dark text-xl mb-2"></i>
                                        <h3 class="font-bold text-gray-900 text-sm">Email Us</h3>
                                        <p class="text-sm text-gray-600 mt-1">info@projectarunima.org</p>
                                    </a>
                                    <a href="${ORG_CONTACT.whatsappBase}" target="_blank" rel="noopener noreferrer" class="bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:border-green-500 transition">
                                        <i class="fab fa-whatsapp text-green-600 text-xl mb-2"></i>
                                        <h3 class="font-bold text-gray-900 text-sm">WhatsApp</h3>
                                        <p class="text-sm text-gray-600 mt-1">+91-8859046829</p>
                                    </a>
                                    <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                                        <i class="fas fa-map-marker-alt text-brand-orange text-xl mb-2"></i>
                                        <h3 class="font-bold text-gray-900 text-sm">Campus Location</h3>
                                        <p class="text-xs text-gray-600 mt-1">Kamboj Plotting, Chalang, Nagal Hatnala, Sahastradhara Road, Dehradun - 248013</p>
                                    </div>
                                </div>

                                <!-- Embedded OpenStreetMap of Sahastradhara Road, Dehradun -->
                                <div class="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-72">
                                    <iframe
                                        title="Project Arunima Sahastradhara Road Dehradun Map"
                                        class="w-full h-full border-0"
                                        loading="lazy"
                                        src="https://www.openstreetmap.org/export/embed.html?bbox=78.0800%2C30.3500%2C78.1350%2C30.3900&amp;layer=mapnik&amp;marker=30.3715%2C78.1085">
                                    </iframe>
                                </div>
                            </div>

                            <!-- General Contact Enquiry Form -->
                            <div class="bg-brand-light rounded-3xl p-8 border border-pink-100 shadow-sm">
                                <h2 class="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                                <p class="text-sm text-gray-600 mb-6">Fill out the form below to compose a direct message to our Dehradun office.</p>
                                <form id="contact-enquiry-form" class="space-y-4">
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Your Name *</label>
                                        <input type="text" name="name" required class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                    </div>
                                    <div class="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Email Address *</label>
                                            <input type="email" name="email" required class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                        </div>
                                        <div>
                                            <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Phone Number</label>
                                            <input type="tel" name="phone" class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                        </div>
                                    </div>
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Subject *</label>
                                        <select name="subject" class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm">
                                            <option value="General Enquiry">General Enquiry</option>
                                            <option value="Admissions & Campus Visit">Admissions &amp; Campus Visit</option>
                                            <option value="Arukriti Tiffin / Handicrafts">Arukriti Tiffin / Handicrafts</option>
                                            <option value="Donations & 80G Receipt">Donations &amp; 80G Receipt</option>
                                            <option value="Volunteering / Seminars">Volunteering / Seminars</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-xs font-bold uppercase text-gray-700 mb-1">Message *</label>
                                        <textarea name="message" rows="4" required class="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm"></textarea>
                                    </div>
                                    <button type="submit" class="w-full bg-brand-pink text-white py-3.5 rounded-xl font-bold text-sm hover:bg-pink-700 transition shadow">
                                        Send Enquiry
                                    </button>
                                </form>
                                <div id="contact-form-status" class="hidden"></div>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        }

        function viewLegalPolicies() {
            return `
                ${renderBreadcrumb('Legal', 'index.html', 'Website notices', 'Prototype notice for legal, privacy, and product-policy pages.')}
                <section class="py-16 bg-white"><div class="container mx-auto px-4 lg:px-8 max-w-4xl">
                    <div class="rounded-3xl border border-amber-200 bg-amber-50 p-8 md:p-10">
                        <h2 class="text-2xl font-bold text-gray-900">Official policies are not reproduced here</h2>
                        <p class="mt-4 text-gray-700 leading-relaxed">This is a demonstration website. Official terms of use, privacy notices, product return rules, and donation terms were not provided for this prototype. Please request current documents directly from Project Arunima before relying on any policy information.</p>
                        <p class="mt-4 text-gray-700 leading-relaxed">Forms on this prototype do not submit to or store information on a backend. If you choose a mail or WhatsApp link, check its recipient and message before sending.</p>
                        <a href="contact.html" class="inline-flex mt-6 items-center gap-2 rounded-full bg-brand-pink px-6 py-3 text-white font-bold">Contact Project Arunima</a>
                    </div>
                </div></section>`;
        }

        // =========================================================================
        // ROUTER & INTERACTIVE HANDLERS
        // =========================================================================

        function viewLanding(title, intro, links) {
            return `${renderBreadcrumb(title, 'index.html', title, intro)}
                <section class="py-14 md:py-20 bg-white"><div class="container mx-auto px-4 lg:px-8 max-w-6xl">
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">${links.map(([label, href, desc]) => `<a href="${href}" class="group rounded-2xl border border-gray-200 p-6 hover:border-pink-300 hover:shadow-lg transition"><span class="text-brand-pink text-sm font-bold">Explore</span><h2 class="text-xl font-bold text-gray-900 mt-2 group-hover:text-brand-pink">${label}</h2><p class="text-gray-600 text-sm leading-relaxed mt-2">${desc}</p><span class="inline-flex items-center gap-2 text-brand-dark font-bold mt-5 text-sm">Learn more <i class="fas fa-arrow-right"></i></span></a>`).join('')}</div>
                <div class="mt-12 rounded-3xl bg-brand-light p-8 md:p-10"><h2 class="text-2xl font-bold text-gray-900">Connect with Project Arunima</h2><p class="text-gray-600 mt-2">Reach out to learn more about our programs, family resources, or ways to get involved.</p><a href="contact.html" class="inline-block mt-5 bg-brand-pink text-white px-6 py-3 rounded-full font-bold">Contact us</a></div>
                </div></section>`;
        }
        const LANDING = {
            'about': ['About Us', 'Learn about Project Arunima, its community, values, people, and approach to inclusive support.', [['Who We Are','who-we-are.html','An assisted living and training program for adults with autism and other developmental disabilities.'],['Our commitment to inclusivity','inclusivity.html','The people and beliefs that shape Arunima’s inclusive community.'],['Vision and mission','vision-mission.html','Our aims for dignity, growth, and the highest possible independence.'],['Meet the family','meet-the-family.html','Meet the people who make up the Arunima community.'],['Meet the team','meet-the-team.html','The staff and coordinators supporting daily programs.'],['Frequently asked questions','faq.html','Answers for families and people exploring the program.']]],
            'services': ['Services', 'Explore residential support, individualized training, life skills, and learning opportunities for professionals.', [['Residence & training','residence-training.html','Learn about assisted living and individualized daily programs.'],['University & college seminars','university-seminars.html','Training seminars informed by hands-on experience.']]],
            'arukriti': ['Arukriti', 'Arukriti brings together work, skills, creativity, and community through food and handcrafted products.', [['Tiffin service','tiffin-service.html','Explore the community tiffin initiative.'],['Handicrafts','handicrafts.html','Discover handcrafted work made by Friends and local artisans.']]],
            'resources': ['Resources for Families', 'Find practical information and materials for families exploring or participating in Arunima programs.', [['Annual reports','annual-reports.html','Review available organizational reporting information.'],['Policy manual','policy-manual.html','Read about policies and procedures for the project.'],['Application form','application-form.html','Prepare an application enquiry.'],['Packing list','packing-list.html','Use the interactive checklist to prepare belongings.'],['Safety','safety.html','Learn about safety and safeguarding principles.']]],
            'get-involved': ['Get Involved', 'There are several ways to connect with Project Arunima, from exploring admissions to volunteering or partnering.', [['Admissions','admissions.html','Learn how to begin a conversation about admission.'],['Donate','donate.html','Ask the organization about contribution options.'],['Jobs','jobs.html','See how to enquire about current opportunities.'],['Partner with us','partners.html','Start a partnership conversation.'],['Volunteer','volunteer.html','Share your interests and availability.']]],
            'support-us': ['Support Us', 'Support helps sustain the community and programs at Project Arunima. Contact the organization directly for current contribution information.', [['Make a contribution','donate.html','Contact the team to discuss contribution options.'],['Our donors','donors.html','Learn about donor recognition and acknowledgement.']]]
        };

        const ROUTES = {
            'home': { render: viewHome, group: 'home', title: 'Project Arunima | Building Futures, Empowering Lives' },
            'about-who-we-are': { render: viewAboutWhoWeAre, group: 'about', title: 'Who We Are | Project Arunima' },
            'about-inclusivity': { render: viewAboutInclusivity, group: 'about', title: 'Our Commitment to Inclusivity | Project Arunima' },
            'about-brochure': { render: viewAboutBrochure, group: 'about', title: 'Project Brochure | Project Arunima' },
            'about-vision-mission': { render: viewAboutVisionMission, group: 'about', title: 'Vision and Mission | Project Arunima' },
            'about-board': { render: viewAboutBoard, group: 'about', title: 'Trust and Advisory Board | Project Arunima' },
            'about-news': { render: viewAboutNews, group: 'about', title: 'News & Newsletters | Project Arunima' },
            'about-certification': { render: viewAboutCertification, group: 'about', title: 'Legal & Tax Certification | Project Arunima' },
            'about-family': { render: viewAboutFamily, group: 'about', title: 'Meet the Family | Project Arunima' },
            'about-team': { render: viewAboutTeam, group: 'about', title: 'Meet the Team | Project Arunima' },
            'about-faq': { render: viewAboutFaq, group: 'about', title: 'FAQ | Project Arunima' },
            'about-videos': { render: viewAboutVideos, group: 'about', title: 'Videos | Project Arunima' },
            'services-residence': { render: viewServicesResidence, group: 'services', title: 'Our Residence & Training Office | Project Arunima' },
            'services-seminars': { render: viewServicesSeminars, group: 'services', title: 'University & College Training Seminars | Project Arunima' },
            'arukriti-tiffin': { render: viewArukritiTiffin, group: 'arukriti', title: 'Arukriti Tiffin Service | Project Arunima' },
            'arukriti-handicrafts': { render: viewArukritiHandicrafts, group: 'arukriti', title: 'Arukriti Handicrafts | Project Arunima' },
            'resources-reports': { render: viewResourcesReports, group: 'resources', title: 'Annual Reports | Project Arunima' },
            'resources-policy': { render: viewResourcesPolicy, group: 'resources', title: 'Policy Manual | Project Arunima' },
            'resources-application': { render: viewResourcesApplication, group: 'resources', title: 'Application Form | Project Arunima' },
            'resources-packing': { render: viewResourcesPacking, group: 'resources', title: 'Packing Lists | Project Arunima' },
            'resources-safety': { render: viewResourcesSafety, group: 'resources', title: 'Safety | Project Arunima' },
            'involved-admissions': { render: viewInvolvedAdmissions, group: 'involved', title: 'Admissions | Project Arunima' },
            'involved-donate': { render: viewInvolvedDonate, group: 'involved', title: 'Donate | Project Arunima' },
            'involved-jobs': { render: viewInvolvedJobs, group: 'involved', title: 'Jobs | Project Arunima' },
            'involved-partner': { render: viewInvolvedPartner, group: 'involved', title: 'Partner With Us | Project Arunima' },
            'involved-volunteer': { render: viewInvolvedVolunteer, group: 'involved', title: 'Volunteer Form | Project Arunima' },
            'support-contribution': { render: viewSupportContribution, group: 'support', title: 'Make a Contribution | Project Arunima' },
            'support-donors': { render: viewSupportDonors, group: 'support', title: 'Our Donors | Project Arunima' },
            'contact': { render: viewContact, group: 'contact', title: 'Contact Us | Project Arunima' },
            'legal-policies': { render: viewLegalPolicies, group: 'none', title: 'Terms, Privacy & Return Policy | Project Arunima' },
            'about': { render: () => viewLanding(...LANDING.about), group: 'about', title: 'About Us | Project Arunima' },
            'services': { render: () => viewLanding(...LANDING.services), group: 'services', title: 'Services | Project Arunima' },
            'arukriti': { render: () => viewLanding(...LANDING.arukriti), group: 'arukriti', title: 'Arukriti | Project Arunima' },
            'resources': { render: () => viewLanding(...LANDING.resources), group: 'resources', title: 'Resources for Families | Project Arunima' },
            'get-involved': { render: () => viewLanding(...LANDING['get-involved']), group: 'involved', title: 'Get Involved | Project Arunima' },
            'support-us': { render: () => viewLanding(...LANDING['support-us']), group: 'support', title: 'Support Us | Project Arunima' }
        };

        let pendingLegalTab = 'terms';

        function navigateToRoute() {
            const rawHash = (window.location.hash || '').replace('#', '').trim();
            const routeKey = ROUTES[rawHash] ? rawHash : (document.body.dataset.route || 'home');
            const routeConfig = ROUTES[routeKey];

            document.title = routeConfig.title;
            const root = document.getElementById('app-root');
            root.innerHTML = routeConfig.render();
            if (["services-seminars", "resources-application", "involved-donate", "involved-jobs", "involved-partner", "involved-volunteer", "contact"].includes(routeKey)) {
                root.insertAdjacentHTML('afterbegin', `<div class="container mx-auto px-4 lg:px-8 pt-6"><p class="rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-orange-900"><strong>Demonstration prototype:</strong> this form does not send or store your details. You can review the prepared message and choose to contact Project Arunima by email or WhatsApp.</p></div>`);
            }

            // Update active desktop navigation highlight
            document.querySelectorAll('.nav-link').forEach(el => {
                const group = el.getAttribute('data-nav-group');
                if (group === routeConfig.group) {
                    el.classList.add('text-brand-pink', 'font-bold');
                } else {
                    el.classList.remove('text-brand-pink', 'font-bold');
                }
            });

            // Close mobile drawer if open
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileBtn = document.getElementById('mobile-menu-btn');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
            }

            bindPageInteractions(routeKey);
            document.getElementById('back-to-top')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
            const galleryItems = ['about-family', 'arukriti-handicrafts', 'services-residence'].includes(routeKey) ? [...root.querySelectorAll('img')] : [];
            const lightbox = document.getElementById('image-lightbox');
            let galleryIndex = 0;
            const showGalleryImage = index => {
                if (!galleryItems.length) return;
                galleryIndex = (index + galleryItems.length) % galleryItems.length;
                const img = galleryItems[galleryIndex];
                document.getElementById('lightbox-image').src = img.currentSrc || img.src;
                document.getElementById('lightbox-image').alt = img.alt || '';
                document.getElementById('lightbox-caption').textContent = `${img.alt || 'Project Arunima'} · ${galleryIndex + 1} of ${galleryItems.length}`;
                lightbox.classList.remove('hidden'); lightbox.classList.add('flex');
            };
            galleryItems.forEach((img, index) => { img.classList.add('gallery-image'); img.tabIndex = 0; img.setAttribute('role', 'button'); img.setAttribute('aria-label', `View image: ${img.alt || 'Project Arunima'}`); img.addEventListener('click', () => showGalleryImage(index)); img.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showGalleryImage(index); } }); });
            document.getElementById('lightbox-close')?.addEventListener('click', () => { lightbox.classList.add('hidden'); lightbox.classList.remove('flex'); });
            document.getElementById('lightbox-prev')?.addEventListener('click', () => showGalleryImage(galleryIndex - 1));
            document.getElementById('lightbox-next')?.addEventListener('click', () => showGalleryImage(galleryIndex + 1));
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function bindPageInteractions(routeKey) {
            // FAQ Accordions
            if (routeKey === 'about-faq') {
                document.querySelectorAll('.faq-toggle').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const panel = btn.nextElementSibling;
                        const icon = btn.querySelector('i');
                        const isOpen = !panel.classList.contains('hidden');
                        panel.classList.toggle('hidden');
                        btn.setAttribute('aria-expanded', String(!isOpen));
                        if (icon) icon.classList.toggle('rotate-180');
                    });
                });
            }

            // Brochure Download
            if (routeKey === 'about-brochure') {
                const btn = document.getElementById('download-brochure-btn');
                if (btn) {
                    btn.addEventListener('click', () => {
                        const text = [
                            'PROJECT ARUNIMA - INFORMATION BROCHURE',
                            'Building Futures, Empowering Lives',
                            'Address: Kamboj Plotting, Chalang, Nagal Hatnala, Sahastradhara Road, Dehradun - 248013',
                            'Phone: +91-8859046829 | Email: info@projectarunima.org',
                            '',
                            '1. RESIDENTIAL & ASSISTED LIVING: Safe, home-like apartments and daily living training for adults (18+) with autism and developmental disabilities.',
                            '2. ARUKRITI SOCIAL ENTERPRISES: Arukriti Tiffin Service and Arukriti Handicrafts creating valued vocational roles.',
                            '3. ACADEMIC OUTREACH: University & college training seminars led by Founder & Special Educator Aparna Das.'
                        ].join('\n');
                        downloadTextFile('Project-Arunima-Brochure.txt', text);
                    });
                }
            }

            // Videos Modal
            if (routeKey === 'about-videos') {
                const storyData = [
                    {
                        title: 'A Day in the Life at Project Arunima, Dehradun',
                        img: ASSETS.familyGroup,
                        caption: 'Our Friends and trainers share morning routines, life-skills workshops, nutritious meals, and afternoon tea on Sahastradhara Road.'
                    },
                    {
                        title: 'Inside Arukriti: The Tiffin Experience',
                        img: ASSETS.tiffinTeam,
                        caption: 'From fresh kitchen prep to careful packaging, our neurodiverse culinary team serves wholesome lunches across Dehradun.'
                    },
                    {
                        title: 'Handcrafted with Joy: Art & Craft Studio',
                        img: ASSETS.friendsArt,
                        caption: 'On our sunlit terrace in Dehradun, Friends hand-paint vibrant motifs onto textiles alongside local artisans.'
                    }
                ];
                document.querySelectorAll('.video-trigger').forEach(el => {
                    el.addEventListener('click', () => {
                        const idx = Number(el.getAttribute('data-video-idx') || 0);
                        const item = storyData[idx];
                        const modal = document.getElementById('video-modal');
                        document.getElementById('video-modal-title').textContent = item.title;
                        document.getElementById('video-modal-body').innerHTML = `
                            <div class="space-y-4">
                                <img src="${item.img}" alt="${item.title}" class="w-full h-64 object-cover rounded-xl">
                                <p class="text-sm text-gray-700 leading-relaxed">${item.caption}</p>
                                <div class="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                                    <span class="text-xs text-gray-600">Watch full video uploads on Project Arunima's YouTube channel.</span>
                                    <a href="https://www.youtube.com/@projectarunima" target="_blank" rel="noopener noreferrer" class="bg-red-600 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-red-700 transition">Open YouTube Channel</a>
                                </div>
                            </div>
                        `;
                        modal.classList.remove('hidden');
                        modal.classList.add('flex');
                    });
                });
            }

            // Seminar Form
            if (routeKey === 'services-seminars') {
                const form = document.getElementById('seminar-form');
                if (form) {
                    form.addEventListener('submit', e => {
                        e.preventDefault();
                        const fd = new FormData(form);
                        const subject = encodeURIComponent(`University/College Seminar Enquiry - ${fd.get('institution')}`);
                        const body = encodeURIComponent(
                            `Institution: ${fd.get('institution')}\nCoordinator: ${fd.get('coordinator')}\nPhone: ${fd.get('phone')}\nEmail: ${fd.get('email')}\nGroup Size: ${fd.get('groupSize')}\nNotes: ${fd.get('notes')}`
                        );
                        showInlineStatus('seminar-form-status', `Thank you, <strong>${fd.get('coordinator')}</strong>! Your seminar request is ready. <a href="mailto:info@projectarunima.org?subject=${subject}&body=${body}" class="underline font-bold ml-1">Click here to send via Email</a>.`);
                    });
                }
            }

            // Arukriti Tiffin Order Generator
            if (routeKey === 'arukriti-tiffin') {
                const form = document.getElementById('tiffin-order-form');
                const emailBtn = document.getElementById('tiffin-email-btn');
                const buildOrderMessage = () => {
                    const name = document.getElementById('tiffin-name').value.trim();
                    const area = document.getElementById('tiffin-area').value.trim();
                    const plan = document.getElementById('tiffin-plan').value;
                    const qty = document.getElementById('tiffin-qty').value;
                    const notes = document.getElementById('tiffin-notes').value.trim();
                    return `Hello Project Arunima, I would like to place an Arukriti Tiffin enquiry:\n• Name: ${name}\n• Delivery Area (Dehradun): ${area}\n• Plan: ${plan}\n• Quantity: ${qty} tiffin(s)/day\n• Notes: ${notes || 'None'}`;
                };
                if (form) {
                    form.addEventListener('submit', e => {
                        e.preventDefault();
                        const msg = encodeURIComponent(buildOrderMessage());
                        window.open(`${ORG_CONTACT.whatsappBase}?text=${msg}`, '_blank', 'noopener,noreferrer');
                    });
                }
                if (emailBtn) {
                    emailBtn.addEventListener('click', () => {
                        if (!form.reportValidity()) return;
                        const subject = encodeURIComponent('Arukriti Tiffin Service Order Enquiry');
                        const body = encodeURIComponent(buildOrderMessage());
                        window.location.href = `mailto:info@projectarunima.org?subject=${subject}&body=${body}`;
                    });
                }
            }

            // Admission Application Form
            if (routeKey === 'resources-application') {
                const form = document.getElementById('admission-application-form');
                if (form) {
                    form.addEventListener('submit', e => {
                        e.preventDefault();
                        const fd = new FormData(form);
                        const summaryText = `Admission Application - Project Arunima\nApplicant: ${fd.get('applicantName')} (Age: ${fd.get('applicantAge')})\nProgram: ${fd.get('programType')}\nProfile: ${fd.get('diagnosis')}\nGuardian: ${fd.get('guardianName')}\nPhone: ${fd.get('phone')}\nEmail: ${fd.get('email')}\nNotes: ${fd.get('supportNotes')}`;
                        const mailHref = `mailto:info@projectarunima.org?subject=${encodeURIComponent('Admission Application: ' + fd.get('applicantName'))}&body=${encodeURIComponent(summaryText)}`;
                        const waHref = `${ORG_CONTACT.whatsappBase}?text=${encodeURIComponent(summaryText)}`;
                        showInlineStatus('admission-form-status', `Application summary prepared for <strong>${fd.get('applicantName')}</strong>! Transmit now via <a href="${mailHref}" class="underline font-bold">Email (info@projectarunima.org)</a> or <a href="${waHref}" target="_blank" rel="noopener noreferrer" class="underline font-bold">WhatsApp</a>.`);
                    });
                }
            }

            // Packing List Checkboxes
            if (routeKey === 'resources-packing') {
                const boxes = document.querySelectorAll('.packing-checkbox');
                const progressEl = document.getElementById('packing-progress');
                const updateCount = () => {
                    const checked = document.querySelectorAll('.packing-checkbox:checked').length;
                    if (progressEl) progressEl.textContent = `${checked} / ${boxes.length} packed`;
                };
                boxes.forEach(b => b.addEventListener('change', updateCount));
            }

            // Donate Page Tier Buttons & Pledge Form
            if (routeKey === 'involved-donate') {
                const customInput = document.getElementById('custom-donation-input');
                document.querySelectorAll('.donation-tier-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const amt = btn.getAttribute('data-amount');
                        if (customInput) customInput.value = amt;
                        document.querySelectorAll('.donation-tier-btn').forEach(b => {
                            b.classList.remove('border-brand-pink', 'bg-pink-50/50');
                            b.classList.add('border-gray-200', 'bg-white');
                        });
                        btn.classList.remove('border-gray-200', 'bg-white');
                        btn.classList.add('border-brand-pink', 'bg-pink-50/50');
                    });
                });

                const form = document.getElementById('donor-pledge-form');
                const emailBtn = document.getElementById('donor-email-btn');
                const buildDonorMsg = () => {
                    const amt = customInput ? customInput.value : '2000';
                    const name = document.getElementById('donor-name').value.trim();
                    const email = document.getElementById('donor-email').value.trim();
                    const phone = document.getElementById('donor-phone').value.trim();
                    return `Hello Project Arunima, I would like to ask about current contribution options${amt ? ` (indicative amount: ₹${amt})` : ''}. Please share verified payment details and information about documentation or receipt eligibility.\n• Name: ${name}\n• Email: ${email}\n• Phone: ${phone}`;
                };
                if (form) {
                    form.addEventListener('submit', e => {
                        e.preventDefault();
                        window.open(`${ORG_CONTACT.whatsappBase}?text=${encodeURIComponent(buildDonorMsg())}`, '_blank', 'noopener,noreferrer');
                    });
                }
                if (emailBtn) {
                    emailBtn.addEventListener('click', () => {
                        if (!form.reportValidity()) return;
                        window.location.href = `mailto:info@projectarunima.org?subject=${encodeURIComponent('Donation Contribution & 80G Receipt Request')}&body=${encodeURIComponent(buildDonorMsg())}`;
                    });
                }
            }

            // Jobs Form
            if (routeKey === 'involved-jobs') {
                const form = document.getElementById('job-application-form');
                if (form) {
                    form.addEventListener('submit', e => {
                        e.preventDefault();
                        const fd = new FormData(form);
                        const msg = `Job Application - ${fd.get('role')}\nName: ${fd.get('name')}\nPhone: ${fd.get('phone')}\nEmail: ${fd.get('email')}\nExperience: ${fd.get('experience')}`;
                        showInlineStatus('job-form-status', `Thank you, <strong>${fd.get('name')}</strong>! <a href="mailto:info@projectarunima.org?subject=${encodeURIComponent('Job Application: ' + fd.get('role'))}&body=${encodeURIComponent(msg)}" class="underline font-bold">Click here to attach your CV and send via Email</a>.`);
                    });
                }
            }

            // Partner Form
            if (routeKey === 'involved-partner') {
                const form = document.getElementById('partner-form');
                if (form) {
                    form.addEventListener('submit', e => {
                        e.preventDefault();
                        const fd = new FormData(form);
                        const msg = `Partnership Enquiry (${fd.get('partnershipType')})\nOrganization: ${fd.get('orgName')}\nContact: ${fd.get('contactPerson')}\nEmail: ${fd.get('email')}\nPhone: ${fd.get('phone')}\nDetails: ${fd.get('message')}`;
                        showInlineStatus('partner-form-status', `Thank you for reaching out on behalf of <strong>${fd.get('orgName')}</strong>! <a href="mailto:info@projectarunima.org?subject=${encodeURIComponent('Partnership Enquiry: ' + fd.get('orgName'))}&body=${encodeURIComponent(msg)}" class="underline font-bold">Send via Email</a> or <a href="${ORG_CONTACT.whatsappBase}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener noreferrer" class="underline font-bold">Connect on WhatsApp</a>.`);
                    });
                }
            }

            // Volunteer Form
            if (routeKey === 'involved-volunteer') {
                const form = document.getElementById('volunteer-form');
                if (form) {
                    form.addEventListener('submit', e => {
                        e.preventDefault();
                        const fd = new FormData(form);
                        const msg = `Volunteer Registration - Project Arunima\nName: ${fd.get('name')}\nLocation: ${fd.get('city')}\nEmail: ${fd.get('email')}\nPhone: ${fd.get('phone')}\nInterest: ${fd.get('interest')}\nAvailability: ${fd.get('availability')}\nAbout: ${fd.get('about')}`;
                        showInlineStatus('volunteer-form-status', `Thank you, <strong>${fd.get('name')}</strong>! Complete your registration by sending via <a href="mailto:info@projectarunima.org?subject=${encodeURIComponent('Volunteer Registration: ' + fd.get('name'))}&body=${encodeURIComponent(msg)}" class="underline font-bold">Email</a> or <a href="${ORG_CONTACT.whatsappBase}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener noreferrer" class="underline font-bold">WhatsApp</a>.`);
                    });
                }
            }

            // Contact Form
            if (routeKey === 'contact') {
                const form = document.getElementById('contact-enquiry-form');
                if (form) {
                    form.addEventListener('submit', e => {
                        e.preventDefault();
                        const fd = new FormData(form);
                        const msg = `Website Contact Enquiry (${fd.get('subject')})\nName: ${fd.get('name')}\nEmail: ${fd.get('email')}\nPhone: ${fd.get('phone')}\nMessage: ${fd.get('message')}`;
                        showInlineStatus('contact-form-status', `Message prepared for <strong>Project Arunima</strong>! <a href="mailto:info@projectarunima.org?subject=${encodeURIComponent(fd.get('subject') + ' - ' + fd.get('name'))}&body=${encodeURIComponent(msg)}" class="underline font-bold">Send via Email</a> or <a href="${ORG_CONTACT.whatsappBase}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener noreferrer" class="underline font-bold">Send via WhatsApp</a>.`);
                    });
                }
            }

            // Legal Tabs
            if (routeKey === 'legal-policies') {
                const activateTab = (tabName) => {
                    document.querySelectorAll('.legal-tab-panel').forEach(p => p.classList.add('hidden'));
                    const target = document.getElementById(`legal-tab-${tabName}`);
                    if (target) target.classList.remove('hidden');

                    document.querySelectorAll('.legal-tab-btn').forEach(b => {
                        if (b.getAttribute('data-policy-tab') === tabName) {
                            b.className = 'legal-tab-btn px-5 py-2.5 rounded-full font-bold text-sm bg-brand-pink text-white';
                        } else {
                            b.className = 'legal-tab-btn px-5 py-2.5 rounded-full font-bold text-sm bg-gray-100 text-gray-700 hover:bg-gray-200';
                        }
                    });
                };

                document.querySelectorAll('.legal-tab-btn').forEach(btn => {
                    btn.addEventListener('click', () => activateTab(btn.getAttribute('data-policy-tab')));
                });
                activateTab(pendingLegalTab);
            }
        }

        // Global Mobile Navigation & Footer Initialization
        const OVERLAY_HTML = "<a id=\"whatsapp-float\" href=\"https://wa.me/918859046829?text=Hello%20Project%20Arunima%2C%20I%20would%20like%20to%20connect%20with%20you.\" target=\"_blank\" rel=\"noopener noreferrer\" title=\"Chat with us on WhatsApp\" aria-label=\"Chat with Project Arunima on WhatsApp\" class=\"fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center\">\n        <i class=\"fab fa-whatsapp text-3xl\"></i>\n    </a>\n\n    <!-- Video Preview Modal -->\n    <div id=\"video-modal\" class=\"fixed inset-0 bg-black/80 z-50 hidden items-center justify-center p-4\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"video-modal-title\">\n        <div class=\"bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl\">\n            <div class=\"flex justify-between items-center px-6 py-4 border-b border-gray-100\">\n                <h3 id=\"video-modal-title\" class=\"font-bold text-lg text-gray-900\">Video Showcase</h3>\n                <button type=\"button\" id=\"close-video-modal\" class=\"text-gray-500 hover:text-brand-pink text-xl p-1\" aria-label=\"Close modal\">\n                    <i class=\"fas fa-times\"></i>\n                </button>\n            </div>\n            <div id=\"video-modal-body\" class=\"p-6\"></div>\n        </div>";

        async function initSite() {
            const [headerHtml, footerHtml] = await Promise.all([fetch('header.html').then(r => r.text()), fetch('footer.html').then(r => r.text())]);
            document.getElementById('site-header').innerHTML = headerHtml;
            document.getElementById('site-footer').innerHTML = footerHtml;
            document.getElementById('site-overlay').innerHTML = OVERLAY_HTML;
            document.getElementById('site-overlay').insertAdjacentHTML('beforeend', `<button type="button" id="back-to-top" class="fixed bottom-24 right-6 z-40 rounded-full bg-brand-dark text-white w-12 h-12 shadow-lg" aria-label="Back to top"><i class="fas fa-arrow-up"></i></button><div id="image-lightbox" class="fixed inset-0 z-[70] hidden items-center justify-center bg-black/90 p-4" role="dialog" aria-modal="true" aria-label="Image gallery"><button type="button" id="lightbox-close" class="absolute right-5 top-5 rounded-full bg-white/15 text-white w-11 h-11" aria-label="Close image"><i class="fas fa-times"></i></button><button type="button" id="lightbox-prev" class="absolute left-4 rounded-full bg-white/15 text-white w-11 h-11" aria-label="Previous image"><i class="fas fa-chevron-left"></i></button><figure class="max-w-5xl max-h-[90vh] text-center"><img id="lightbox-image" src="" alt="" class="max-h-[78vh] max-w-full object-contain mx-auto rounded-lg"><figcaption id="lightbox-caption" class="text-white mt-3 text-sm"></figcaption></figure><button type="button" id="lightbox-next" class="absolute right-4 rounded-full bg-white/15 text-white w-11 h-11" aria-label="Next image"><i class="fas fa-chevron-right"></i></button></div>`);
            document.querySelectorAll('button.nav-link[data-nav-group]').forEach(btn => btn.addEventListener('click', () => {
                const group = btn.closest('.group');
                const willOpen = !group.classList.contains('dropdown-open');
                document.querySelectorAll('.group.dropdown-open').forEach(openGroup => { openGroup.classList.remove('dropdown-open'); openGroup.querySelector('button.nav-link')?.setAttribute('aria-expanded', 'false'); });
                if (willOpen) { group.classList.add('dropdown-open'); btn.setAttribute('aria-expanded', 'true'); }
            }));
            document.addEventListener('click', e => { if (!e.target.closest('.group')) document.querySelectorAll('.group.dropdown-open').forEach(g => { g.classList.remove('dropdown-open'); g.querySelector('button.nav-link')?.setAttribute('aria-expanded', 'false'); }); });
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');

            if (mobileBtn && mobileMenu) {
                mobileBtn.addEventListener('click', () => {
                    const isHidden = mobileMenu.classList.toggle('hidden');
                    mobileBtn.setAttribute('aria-expanded', String(!isHidden));
                });
            }

            document.querySelectorAll('.mobile-accordion-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const panel = btn.nextElementSibling;
                    const icon = btn.querySelector('i');
                    panel.classList.toggle('hidden');
                    if (icon) icon.classList.toggle('rotate-180');
                });
            });

            // Footer legal tab links
            document.querySelectorAll('[data-legal-tab]').forEach(link => {
                link.addEventListener('click', () => {
                    pendingLegalTab = link.getAttribute('data-legal-tab') || 'terms';
                });
            });

            // Footer Newsletter Form
            const newsletterForm = document.getElementById('footer-newsletter-form');
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', e => {
                    e.preventDefault();
                    const emailInput = document.getElementById('footer-newsletter-email');
                    const msgEl = document.getElementById('footer-newsletter-msg');
                    if (emailInput && msgEl) {
                        msgEl.textContent = 'Demonstration only: this prototype does not store or send your email address.';
                        msgEl.classList.remove('hidden');
                        emailInput.value = '';
                    }
                });
            }

            // Video Modal Close
            const closeModalBtn = document.getElementById('close-video-modal');
            const videoModal = document.getElementById('video-modal');
            if (closeModalBtn && videoModal) {
                closeModalBtn.addEventListener('click', () => {
                    videoModal.classList.add('hidden');
                    videoModal.classList.remove('flex');
                });
                videoModal.addEventListener('click', e => {
                    if (e.target === videoModal) {
                        videoModal.classList.add('hidden');
                        videoModal.classList.remove('flex');
                    }
                });
            }

            window.addEventListener('hashchange', navigateToRoute);
            navigateToRoute();
        }
initSite();
