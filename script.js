// Scroll animations

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

        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });

        // Smooth scrolling

        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const elementPosition = element.offsetTop - navHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        
        // Toggle Navigation bar 

        const toggle = document.getElementById('toggle');
const menu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    toggle.classList.toggle('open');
});

        // Modal 

        const godDetails = {
            p1: {
                title: 'Mayureshwar - Moregaon',
                content: `
                    <h3>1) Mayureshwar</h3>
                    <p><strong>Location: </strong> Morgaon village, Pune district</p>
                    <p><strong>Deity Name: </strong>Moreshwar / Mayureshwar</p>
                    <p><strong>Legend: </strong>Lord Ganesha slew the demon Sindhu riding on a peacock (Mayura), hence the name Mayureshwar.</p>
                    <p><strong>Specialty: </strong> Considered the first and most important temple of the Ashtavinayak yatra.</p>
                   
                `
            },
            p2: {
                title: 'Siddhivinayak - Siddhatek',
                content: `
                    <h3>2) Siddhivinayak</h3>
                    <p><strong>Location: </strong> Siddhatek, Ahmednagar district (on Bhima river bank)</p>
                    <p><strong>Deity Name: </strong> Siddhivinayak</p>
                    <p><strong>Legend: </strong> Lord Vishnu attained siddhi (powers) here by worshipping Ganesha before slaying demons.</p>
                    <p><strong>Specialty: </strong>Belief that the deity here grants success and siddhis (powers). </p>
                   
                `
            },
            p3: {
                title: 'Ballaleshwar - Pali',
                content: `
                    <h3>3) Ballaleshwar</h3>
                    <p><strong>Location: </strong>  Pali, Raigad district</p>
                    <p><strong>Deity Name: </strong> Ballaleshwar</p>
                    <p><strong>Legend: </strong> A devoted boy named Ballal worshipped Ganesha; moved by his devotion, Ganesha appeared and promised to reside there as Ballaleshwar.</p>
                    <p><strong>Specialty: </strong> This is the only Ganesha idol named after a devotee. </p>
                   
                `
            },
            p4: {
                title: 'Varadvinayak - Mahad',
                content: `
                    <h3>4) Varadvinayak</h3>
                    <p><strong>Location: </strong> Mahad, Raigad district</p>
                    <p><strong>Deity Name: </strong>  Varadvinayak</p>
                    <p><strong>Legend: </strong> King Bhadrak once performed penance here; Ganesha granted him boons (Varad = boon giver).</p>
                    <p><strong>Specialty: </strong> Devotees can directly enter the sanctum and perform puja themselves.</p>
                   
                `
            },
            p5: {
                title: 'Chintamani - Theur',
                content: `
                    <h3>5) Chintamani</h3>
                    <p><strong>Location: </strong> Theur, Pune district</p>
                    <p><strong>Deity Name: </strong> Chintamani</p>
                    <p><strong>Legend: </strong> Sage Kapila possessed the precious gem Chintamani, which fulfills wishes. When stolen by a greedy king, Ganesha retrieved it.</p>
                    <p><strong>Specialty: </strong> Worship here is believed to bring peace of mind and relieve anxiety (Chinta).</p>
                   
                `
            },
            p6: {
                title: 'Girijatmaj - Lenyadri',
                content: `
                    <h3>6) Girijatmaj</h3>
                    <p><strong>Location: </strong> Lenyadri, Pune district (caves in a hill)</p>
                    <p><strong>Deity Name: </strong> Girijatmaj (son of Parvati, Girija = Parvati)</p>
                    <p><strong>Legend: </strong> Goddess Parvati performed penance here and Lord Ganesha was born as her son.</p>
                    <p><strong>Specialty: </strong> The idol is in a Buddhist-style cave temple, with 307 steps to climb.</p>
                   
                `
            },
            p7: {
                title: 'Vighneshwar - Ozar',
                content: `
                    <h3>7) Vighneshwar</h3>
                    <p><strong>Location: </strong> Ozar, Pune district</p>
                    <p><strong>Deity Name: </strong> Vighneshwar</p>
                    <p><strong>Legend: </strong> Demon Vighnasur created obstacles in prayers and yajnas. Lord Ganesha defeated him, and took the name Vighneshwar (remover of obstacles).</p>
                    <p><strong>Specialty: </strong> Known as the eliminator of troubles and hurdles.</p>
                   
                `
            },
            p8: {
                title: 'Mahaganapati - Ranjangaon',
                content: `
                    <h3>8) Mahaganpati</h3>
                    <p><strong>Location: </strong>  Ranjangaon, Pune district</p>
                    <p><strong>Deity Name: </strong> Mahaganapati</p>
                    <p><strong>Legend: </strong>   Lord Shiva worshipped Ganesha here before fighting Tripurasura.</p>
                    <p><strong>Specialty: </strong> The idol is believed to have ten trunks and twenty arms (hidden behind the main idol).</p>
                   
                `
            },
            
        };

        function openModal(godId) {
            const modal = document.getElementById('modal');
            const modalBody = document.getElementById('modal-body');
            
            if (godDetails[godId]) {
                modalBody.innerHTML = godDetails[godId].content;
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        }

        function closeModal() {
            const modal = document.getElementById('modal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modal 

        window.onclick = function(event) {
            const modal = document.getElementById('modal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Navbar scroll effect

        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            } else {
                navbar.style.background = 'rgba(0, 0, 0, 0.9)';
            }
        });
      
      // Quiz Game 
      
      const quizData = [
{
question: "What sweet is Lord Ganesha's favorite?",
options: ["Ladoo", "Modak", "Jalebi", "Kaju Katli"],
answer: "Modak"
},
{
question: "How many days is Ganesh Chaturthi usually celebrated?",
options: ["5", "7", "10", "12"],
answer: "10"
},
{
question: "In which Indian state is Ganesh Chaturthi celebrated on a grand scale?",
options: ["Kerala", "Maharashtra", "Punjab", "Rajasthan"],
answer: "Maharashtra"
},
{
question: "What is the ritual of immersing Lord Ganesha's idol in water called?",
options: ["Puja", "Aarti", "Visarjan", "Yagna"],
answer: "Visarjan"
},
{
question: "Which flower is commonly offered to Lord Ganesha?",
options: ["Lotus", "Hibiscus", "Rose", "Sunflower"],
answer: "Hibiscus"
}
];
let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function loadQuestion() {
const q = quizData[currentQuestion];
questionEl.textContent = q.question;
optionsEl.innerHTML = "";

q.options.forEach(option => {
const btn = document.createElement("button");
btn.classList.add("option");
btn.textContent = option;
btn.style.animation = "pop 0.4s ease";
btn.onclick = () => selectAnswer(btn, q.answer);
optionsEl.appendChild(btn);
});

nextBtn.classList.add("hidden");
resultEl.textContent = "";
}

function selectAnswer(button, correctAnswer) {
const options = document.querySelectorAll(".option");
options.forEach(btn => btn.disabled = true);

if (button.textContent === correctAnswer) {
button.style.background = "#6BCB77";
button.style.transform = "scale(1.1)";
setTimeout(() => button.style.transform = "scale(1)", 200);
score++;
resultEl.textContent = "✅ Correct!";
} 

else {
button.style.background = "#FF6B6B";
button.style.transform = "shake 0.3s";
resultEl.textContent = `❌ Wrong! Correct answer: ${correctAnswer}`;
}
nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
currentQuestion++;

if (currentQuestion < quizData.length) {
loadQuestion();
}
else {
showFinalResult();
}
});

function showFinalResult() {
questionEl.textContent = "🎉 Quiz Completed!";
optionsEl.innerHTML = "";
resultEl.textContent = `Your Score: ${score} / ${quizData.length}`;
nextBtn.classList.add("hidden");
resultEl.style.animation = "pop 0.6s ease";
}

loadQuestion();

// Ganapati Name Picker 

 const names = [
  "Sumukha", "Ekadanta", "Kapila", "Gajakarna", "Lambodara", "Vikata", "Vighnanasha", "Vinayaka", 
  "Dhumraketu", "Ganadhyaksha", "Bhalachandra", "Gajanan", "Vakratunda", "Shurpakarna", "Heramba", "Skandapurvaja", 
  "Siddhivinayaka", "Durga", "Vighneshvara", "Dhyanin", "Sthula", "Varadavinayaka", "Avighna", "Siddhidhata", 
  "Haridra", "Surpakarna", "Mahaganapati", "Manomay", "Pramod", "Gunanidhi", "Vighnaraja", "Pramukh", 
  "Sthulakaya", "Krutivanta", "Jyeshtha", "Shripatipriya", "Devarshi", "Yogadhipa", "Giri", "Buddhipriya", 
  "Bhaktavighnavinasaka", "Ekakshara", "Varaprada", "Shivapriya", "Devadeva", "Anantachidrupamaya", "Sukhakarta", "Dukhaharta", 
  "Siddhi", "Buddhi", "Shanta", "Brahmachari", "Grihapati", "Shubhanga", "Shashivarnama", "Sarvasiddhiprada", 
  "Avighna", "Vighnaraja", "Pranava", "Omkara", "Gananatha", "Shrivighnesha", "Dhumraketu", "Ganapati", 
  "Kshipraprasad", "Haridra", "Shubh", "Shubhanana", "Sarveshvara", "Sarvadeva", "Prathameshvara", "Shurpakarna", 
  "Mahakaya", "Chintamani", "Ganadhyaksha", "Vinayaka", "Vighnanasha", "Devadeva", "Yogadhipa", "Bhaktavighnavinasaka", 
  "Krutivanta", "Siddhidhata", "Varadavinayaka", "Sthulakaya", "Jyeshtha", "Shripatipriya", "Buddhipriya", "Gunanidhi", 
  "Pramukh", "Avighna", "Durga", "Vighneshvara", "Siddhivinayaka", "Skandapurvaja", "Heramba", "Vakratunda", 
  "Gajanan", "Bhalachandra", "Ganadhyaksha", "Dhumraketu", "Vinayaka", "Vighnanasha", "Vikata", "Lambodara", 
  "Gajakarna", "Kapila", "Ekadanta", "Sumukha"];

let isPickingAnimation = false;

        document.getElementById('nameCount').textContent = names.length;

        function createSparkles() {
            const container = document.querySelector('.np-container');
            
         for (let i = 0; i < 8; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                container.appendChild(sparkle);
                
                setTimeout(() => {
                    sparkle.remove();
                }, 1000);
            }
        }

        function pickRandomName() {
            if (isPickingAnimation) return;
            
            const button = document.getElementById('pickButton');
            const nameDisplay = document.getElementById('nameDisplay');
            const selectedNameEl = document.getElementById('selectedName');
            
            button.disabled = true;
            button.textContent = '🎲 Picking...';
            isPickingAnimation = true;
            
            
            selectedNameEl.classList.remove('show');
            nameDisplay.classList.add('picking');
            
            
            let animationCount = 0;
            const maxAnimations = 15;
            
            const animationInterval = setInterval(() => {
                const randomIndex = Math.floor(Math.random() * names.length);
                selectedNameEl.textContent = names[randomIndex];
                animationCount++;
                
                if (animationCount >= maxAnimations) {
                    clearInterval(animationInterval);
                    
                    const finalIndex = Math.floor(Math.random() * names.length);
                    const finalName = names[finalIndex];
                    
                    setTimeout(() => {
                        selectedNameEl.textContent = finalName;
                        selectedNameEl.classList.add('show');
                        nameDisplay.classList.remove('picking');
                
                        createSparkles();
                        
                        button.disabled = false;
                        button.textContent = '🎯 Pick Again';
                        isPickingAnimation = false;
                    }, 200);
                }
            }, 80);
        }

        
        window.addEventListener('load', () => {
            setTimeout(() => {
                const initialIndex = Math.floor(Math.random() * names.length);
                document.getElementById('selectedName').textContent = names[initialIndex];
                document.getElementById('selectedName').classList.add('show');
            }, 500);
        });

          document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' || e.code === 'Enter') {
                e.preventDefault();
                pickRandomName();
            }
        });
        
        
