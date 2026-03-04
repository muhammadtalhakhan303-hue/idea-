if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": ["#00e5ff", "#b500ff"] },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#00e5ff", "opacity": 0.2, "width": 1 },
            "move": { "enable": true, "speed": 1.5, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
            "modes": { "grab": { "distance": 200, "line_linked": { "opacity": 0.5 } }, "push": { "particles_nb": 4 } }
        },
        "retina_detect": true
    });
}

const dictionary = {
    "en": {
        "dir": "ltr",
        "heroTitle": "Generate Smart Business Ideas in Seconds",
        "heroSubtitle": "Enter your skills, passion, and budget to get AI-powered ideas.",
        "filterLowBudget": "Low budget ideas",
        "filterStudent": "Student-friendly",
        "filterOnline": "Online business",
        "filterHome": "Home-based",
        "filterTech": "Tech-based",
        "labelPassion": "Passion / Interest",
        "placeholderPassion": "E.g., Video editing...",
        "labelSkills": "Skills",
        "placeholderSkills": "E.g., Graphic design...",
        "labelBudget": "Budget Range",
        "budgetLow": "Under 50,000 PKR",
        "budgetMed": "50k - 200k PKR",
        "budgetHigh": "Above 200k PKR",
        "labelCity": "City / Country",
        "placeholderCity": "E.g., Karachi, Pakistan",
        "labelTime": "Available Time",
        "timePart": "Part-time",
        "timeFull": "Full-time",
        "labelRisk": "Risk Preference",
        "riskLow": "Low (Safe)",
        "riskMed": "Medium",
        "riskHigh": "High (Aggressive)",
        "btnGenerate": "Generate Idea",
        "loadingText": "AI is generating your brilliant ideas...",
        "resultsTitle": "Your Tailored Business Ideas",
        "premiumTitle": "Ideazium Premium",
        "premiumDesc": "Unlock full business plans, marketing strategies, and competitor analysis.",
        "feat1": "Full PDF Plan",
        "feat2": "Brand Identity & Logo",
        "feat3": "30-Day Roadmap",
        "btnUpgrade": "Upgrade Now",
        "blogTitle": "Latest Insights",
        "blog1": "How to start a business in Pakistan 2026",
        "blog2": "Top 5 Freelancing Skills",
        "blog3": "Zero Investment Startup Guide",
        "footerTag": "Ideas That Build Futures.",
        "estIncome": "Est. Monthly Income",
        "startupCost": "Startup Cost",
        "diffLevel": "Difficulty",
        "stepsToStart": "Steps to Start",
        "diffEasy": "Easy",
        "diffMed": "Medium",
        "diffHard": "Hard"
    },
    "ur": {
        "dir": "rtl",
        "heroTitle": "سیکنڈوں میں اسمارٹ بزنس آئیڈیاز حاصل کریں",
        "heroSubtitle": "اپنے شوق، مہارت اور بجٹ درج کریں اور AI سے زبردست آئیڈیاز پائیں۔",
        "filterLowBudget": "کم بجٹ آئیڈیاز",
        "filterStudent": "طلباء کے لیے",
        "filterOnline": "آن لائن کاروبار",
        "filterHome": "گھر کا کاروبار",
        "filterTech": "ٹیک آئیڈیاز",
        "labelPassion": "شوق / دلچسپی",
        "placeholderPassion": "مثلاً: ویڈیو ایڈیٹنگ...",
        "labelSkills": "مہارت (Skills)",
        "placeholderSkills": "مثلاً: گرافک ڈیزائن...",
        "labelBudget": "بجٹ کی حد",
        "budgetLow": "50,000 پی کے آر سے کم",
        "budgetMed": "50 ہزار - 2 لاکھ",
        "budgetHigh": "2 لاکھ سے زائد",
        "labelCity": "شہر / ملک",
        "placeholderCity": "مثلاً: کراچی، پاکستان",
        "labelTime": "دستیاب وقت",
        "timePart": "پارٹ ٹائم",
        "timeFull": "فل ٹائم",
        "labelRisk": "رسک کی سطح",
        "riskLow": "کم (محفوظ)",
        "riskMed": "درمیانہ",
        "riskHigh": "زیادہ (جارحانہ)",
        "btnGenerate": "آئیڈیا بنائیں",
        "loadingText": "AI آپ کے شاندار آئیڈیاز تیار کر رہا ہے...",
        "resultsTitle": "آپ کے لیے تیار کردہ بزنس آئیڈیاز",
        "premiumTitle": "آئیڈیازیم پریمیم",
        "premiumDesc": "مکمل بزنس پلان، مارکیٹنگ حکمت عملی، اور مقابلہ تجزیہ ان لاک کریں۔",
        "feat1": "مکمل پی ڈی ایف پلان",
        "feat2": "برانڈ شناخت اور لوگو",
        "feat3": "30 دن کا روڈ میپ",
        "btnUpgrade": "ابھی اپ گریڈ کریں",
        "blogTitle": "تازہ ترین مضامین",
        "blog1": "پاکستان میں کاروبار کیسے شروع کریں 2026",
        "blog2": "فری لانسنگ کی بہترین 5 مہارتیں",
        "blog3": "صفر سرمایہ کاری سے اسٹارٹ اپ",
        "footerTag": "وہ آئیڈیاز جو مستقبل بناتے ہیں۔",
        "estIncome": "متوقع ماہانہ آمدنی",
        "startupCost": "شروعاتی لاگت",
        "diffLevel": "مشکل کی سطح",
        "stepsToStart": "شروع کرنے کے اقدامات",
        "diffEasy": "آسان",
        "diffMed": "درمیانہ",
        "diffHard": "مشکل"
    },
    "ar": {
        "dir": "rtl",
        "heroTitle": "ابتكر أفكار عمل ذكية في ثوانٍ",
        "heroSubtitle": "أدخل مهاراتك وشغفك وميزانيتك للحصول على أفكار مدعومة بالذكاء الاصطناعي.",
        "filterLowBudget": "أفكار بميزانية منخفضة",
        "filterStudent": "مناسبة للطلاب",
        "filterOnline": "عمل عبر الإنترنت",
        "filterHome": "العمل من المنزل",
        "filterTech": "أفكار تقنية",
        "labelPassion": "الشغف / الاهتمام",
        "placeholderPassion": "مثال: تحرير الفيديو...",
        "labelSkills": "المهارات",
        "placeholderSkills": "مثال: التصميم الجرافيكي...",
        "labelBudget": "نطاق الميزانية",
        "budgetLow": "أقل من 50 ألف",
        "budgetMed": "50 ألف - 200 ألف",
        "budgetHigh": "أكثر من 200 ألف",
        "labelCity": "المدينة / البلد",
        "placeholderCity": "مثال: كراتشي، باكستان",
        "labelTime": "الوقت المتاح",
        "timePart": "دوام جزئي",
        "timeFull": "دوام كامل",
        "labelRisk": "مستوى المخاطرة",
        "riskLow": "منخفض (آمن)",
        "riskMed": "متوسط",
        "riskHigh": "مرتفع (هجومي)",
        "btnGenerate": "توليد الفكرة",
        "loadingText": "الذكاء الاصطناعي يصنع أفكارك الرائعة...",
        "resultsTitle": "أفكار العمل المخصصة لك",
        "premiumTitle": "إيديازيوم بريميوم",
        "premiumDesc": "افتح خطط العمل الكاملة واستراتيجيات التسويق وتحليل المنافسين.",
        "feat1": "خطة PDF كاملة",
        "feat2": "هوية العلامة التجارية والشعار",
        "feat3": "خارطة طريق لمدة 30 يومًا",
        "btnUpgrade": "الترقية الآن",
        "blogTitle": "أحدث المقالات",
        "blog1": "كيف تبدأ عملاً تجاريًا في عام 2026",
        "blog2": "أفضل 5 مهارات في العمل الحر",
        "blog3": "دليل البدء بصفر استثمار",
        "footerTag": "أفكار تبني المستقبل.",
        "estIncome": "الدخل الشهري المتوقع",
        "startupCost": "تكلفة البدء",
        "diffLevel": "مستوى الصعوبة",
        "stepsToStart": "خطوات البدء",
        "diffEasy": "سهل",
        "diffMed": "متوسط",
        "diffHard": "صعب"
    }
};

let currentLang = "en";

document.getElementById("lang-switcher").addEventListener("change", (e) => {
    currentLang = e.target.value;
    updateLanguage(currentLang);
});

function updateLanguage(lang) {
    document.body.setAttribute('dir', dictionary[lang].dir);
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dictionary[lang][key]) {
            let iconTextContext = "";
            let htmlInnerContent = "";

            const hasIcon = el.querySelector('i');

            if (hasIcon) {
                // Determine icon placement based on direction and elementType
                if (lang === 'ur' || lang === 'ar') {
                    // RTL: Icon usually goes before or after text depending on aesthetic 
                    htmlInnerContent = dictionary[lang][key];
                } else {
                    htmlInnerContent = dictionary[lang][key];
                }

                // Keep icon but update sibling text node or re-create
                const iconHtml = hasIcon.outerHTML;

                // Specific manual overrides for buttons/headings with icons based on i18n
                if (el.id === "generate-btn") {
                    el.innerHTML = '<span>' + dictionary[lang][key] + '</span> ' + '<i class="fas fa-magic" style="margin-left: 8px;"></i>';
                } else if (el.classList.contains("premium-box") || el.closest(".premium-box")) {
                    // don't overwrite the whole innerHTML incorrectly 
                }
            } else {
                el.textContent = dictionary[lang][key];
            }
        }
    });

    // Special handling for the heading icons to avoid replacing innerHTML in simple map
    document.querySelector("[data-i18n='premiumTitle']").innerHTML = '<i class="fas fa-crown gold" style="margin-right:8px;"></i> ' + dictionary[lang].premiumTitle;
    document.querySelector("[data-i18n='blogTitle']").innerHTML = '<i class="fas fa-newspaper text-cyan" style="margin-right:8px;"></i> ' + dictionary[lang].blogTitle;
    document.querySelector("[data-i18n='feat1']").textContent = dictionary[lang].feat1;
    document.querySelector("[data-i18n='feat2']").textContent = dictionary[lang].feat2;
    document.querySelector("[data-i18n='feat3']").textContent = dictionary[lang].feat3;

    // Fix arrow icons in blog preview
    document.querySelector("[data-i18n='blog1']").parentElement.innerHTML = '<span data-i18n="blog1">' + dictionary[lang].blog1 + '</span> <i class="fas fa-arrow-right arrow-icon"></i>';
    document.querySelector("[data-i18n='blog2']").parentElement.innerHTML = '<span data-i18n="blog2">' + dictionary[lang].blog2 + '</span> <i class="fas fa-arrow-right arrow-icon"></i>';
    document.querySelector("[data-i18n='blog3']").parentElement.innerHTML = '<span data-i18n="blog3">' + dictionary[lang].blog3 + '</span> <i class="fas fa-arrow-right arrow-icon"></i>';

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (dictionary[lang][key]) {
            el.placeholder = dictionary[lang][key];
        }
    });
}

updateLanguage('en');

const form = document.getElementById("idea-form");
const loading = document.getElementById("loading");
const results = document.getElementById("results");
const cardsContainer = document.getElementById("cards-container");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    results.classList.add("hidden");
    loading.classList.remove("hidden");

    loading.scrollIntoView({ behavior: 'smooth', block: 'center' });

    setTimeout(() => {
        generateMockResults();
        loading.classList.add("hidden");
        results.classList.remove("hidden");
        results.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 2500);
});

function generateMockResults() {
    const passion = document.getElementById("passion").value || "General";

    const mockDataEn = [
        {
            title: \`AI-Powered \${passion} Agency\`,
            desc: \`Offer automated \${passion.toLowerCase()} solutions to local clients using AI tools to speed up delivery.\`,
            income: "150k - 300k PKR",
            cost: "30,000 PKR",
            diff: "Med",
            steps: ["Set up a professional portfolio", "Subscribe to AI tools", "Run local FB ads"]
        },
        {
            title: \`Micro Niche Blog for \${passion}\`,
            desc: \`Create highly targeted content regarding \${passion.toLowerCase()} and monetize via Ads and Affiliate marketing.\`,
            income: "50k - 100k PKR",
            cost: "5,000 PKR",
            diff: "Easy",
            steps: ["Buy a domain & hosting", "Write 20 SEO optimized articles", "Apply for AdSense"]
        },
        {
            title: \`Consulting Service (\${passion})\`,
            desc: \`Provide 1-on-1 strategy calls and consulting for businesses needing \${passion.toLowerCase()} expertise.\`,
            income: "200k+ PKR",
            cost: "10,000 PKR",
            diff: "Hard",
            steps: ["Build a Calendly & Zoom setup", "Reach out on LinkedIn", "Offer free initial audits"]
        },
        {
            title: \`\${passion} Course Creator\`,
            desc: \`Record a comprehensive course teaching \${passion.toLowerCase()} and sell it on Udemy or self-hosted platform.\`,
            income: "Passive 100k+",
            cost: "15,000 PKR",
            diff: "Med",
            steps: ["Outline course curriculum", "Record and edit videos", "Launch with a small Facebook ad budget"]
        },
        {
            title: \`Productized \${passion} Service\`,
            desc: \`Sell \${passion.toLowerCase()} as a fixed-price package instead of hourly freelancing.\`,
            income: "100k - 200k PKR",
            cost: "12,000 PKR",
            diff: "Med",
            steps: ["Define exactly what's included", "Create a landing page", "Cold email local businesses"]
        }
    ];

    cardsContainer.innerHTML = "";
    const dict = dictionary[currentLang];

    mockDataEn.forEach((idea, index) => {
        const card = document.createElement("div");
        card.className = "card glass idea-card";
        card.style.animation = \`fadeUp 0.5s ease forwards \${index * 0.1}s\`;
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        card.innerHTML = \`
            <h3 class="idea-title">\${idea.title}</h3>
            <p class="idea-desc">\${idea.desc}</p>
            <div class="idea-metrics">
                <div class="metric">
                    \${dict.estIncome}
                    <strong>\${idea.income}</strong>
                </div>
                <div class="metric">
                    \${dict.startupCost}
                    <strong>\${idea.cost}</strong>
                </div>
                <div class="metric">
                    \${dict.diffLevel}
                    <strong>\${dict['diff' + idea.diff] || idea.diff}</strong>
                </div>
            </div>
            <h4 style="margin-bottom: 0.5rem; color: var(--electric-blue); font-size:1rem;">\${dict.stepsToStart}</h4>
            <ol class="idea-steps">
                \${idea.steps.map(step => \`<li>\${step}</li>\`).join('')}
            </ol>
        \`;
        cardsContainer.appendChild(card);
    });
}

const style = document.createElement('style');
style.innerHTML = \`
    @keyframes fadeUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
\`;
document.head.appendChild(style);
