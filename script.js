/* =========================================================
   TEACHER DATA
   -----------------------------------------------------------
   Edit this array with your own 20 teachers. Each object needs:

     name         - full name, e.g. "Mrs. Ananya Sharma"
     subject      - what they teach, e.g. "Mathematics"
     photo        - path/URL to their photo. Leave the dicebear
                    URL if you don't have a photo yet -- it will
                    auto-generate a nice initials avatar.
                    To use a real photo, put the image file next
                    to this folder (e.g. "photos/sharma.jpg") and
                    set photo: "photos/sharma.jpg"
     love         - one sentence: what students love about them
     grow         - one sentence: a gentle, positively-framed wish
                    ("more chill on test days" not "too strict")
     soulType     - "flower" or "animal"
     soulIcon     - one emoji matching soulType, e.g. "🌻" or "🦉"
     soulText     - one sentence explaining the comparison

   The grid renders automatically from this list -- just add,
   remove, or edit entries below. Card count is not fixed to 20,
   add as many as you like.
   ========================================================= */

const teachers = [
  {
    name: "Mrs. Ananya Sharma",
    subject: "Mathematics",
    photo: "https://api.dicebear.com/9.x/initials/svg?seed=Ananya%20Sharma&backgroundColor=f5a623&textColor=1a1105",
    love: "She turns the scariest word problems into little puzzles you actually want to solve, and never makes you feel silly for asking twice.",
    grow: "We'd love it if she went a little easier on pop quizzes on Monday mornings!",
    soulType: "animal",
    soulIcon: "🦉",
    soulText: "An owl — quietly watchful, endlessly patient, and always sees the answer before you do."
  },
  { name: "Teacher Name 2", subject: "Science", photo: "https://api.dicebear.com/9.x/initials/svg?seed=Teacher%20Two&backgroundColor=b4442c&textColor=f6efdf",
    love: "Add what students love about this teacher here.",
    grow: "Add a gentle, positively-framed wish for this teacher here.",
    soulType: "flower", soulIcon: "🌻", soulText: "Add the flower/animal comparison and why here." },
  { name: "Teacher Name 3", subject: "English", photo: "https://api.dicebear.com/9.x/initials/svg?seed=Teacher%20Three&backgroundColor=16412f&textColor=f6efdf",
    love: "Add what students love about this teacher here.",
    grow: "Add a gentle, positively-framed wish for this teacher here.",
    soulType: "animal", soulIcon: "🐢", soulText: "Add the flower/animal comparison and why here." },
  { name: "Teacher Name 4", subject: "History", photo: "https://api.dicebear.com/9.x/initials/svg?seed=Teacher%20Four&backgroundColor=f5a623&textColor=1a1105",
    love: "Add what students love about this teacher here.",
    grow: "Add a gentle, positively-framed wish for this teacher here.",
    soulType: "flower", soulIcon: "🌷", soulText: "Add the flower/animal comparison and why here." },
  { name: "Teacher Name 5", subject: "Geography", photo: "https://api.dicebear.com/9.x/initials/svg?seed=Teacher%20Five&backgroundColor=b4442c&textColor=f6efdf",
    love: "Add what students love about this teacher here.",
    grow: "Add a gentle, positively-framed wish for this teacher here.",
    soulType: "animal", soulIcon: "🦋", soulText: "Add the flower/animal comparison and why here." },
  { name: "Teacher Name 6", subject: "Physics", photo: "https://api.dicebear.com/9.x/initials/svg?seed=Teacher%20Six&backgroundColor=16412f&textColor=f6efdf",
    love: "Add what students love about this teacher here.",
    grow: "Add a gentle, positively-framed wish for this teacher here.",
    soulType: "flower", soulIcon: "🌼", soulText: "Add the flower/animal comparison and why here." },
  { name: "Teacher Name 7", subject: "Chemistry", photo: "https://api.dicebear.com/9.x/initials/svg?seed=Teacher%20Seven&backgroundColor=f5a623&textColor=1a1105",
    love: "Add what students love about this teacher here.",
    grow: "Add a gentle, positively-framed wish for this teacher here.",
    soulType: "animal", soulIcon: "🐬", soulText: "Add the flower/animal comparison and why here." },
  { name: "Teacher Name 8", subject: "Biology", photo: "https://api.dicebear.com/9.x/initials/svg?seed=Teacher%20Eight&backgroundColor=b4442c&textColor=f6efdf",
    love: "Add what students love about this teacher here.",
    grow: "Add a gentle, positively-framed wish for this teacher here.",
    soulType: "flower", soulIcon: "🌸", soulText: "Add the flower/animal comparison and why here." },
  { name: "Teacher Name 9", subject: "Computer Science", photo: "https://api.dicebear.com/9.x/initials/svg?seed=Teacher%20Nine&backgroundColor=16412f&textColor=f6efdf",
    love: "Add what students love about this teacher here.",
    grow: "Add a gentle, positively-framed wish for this teacher here.",
    soulType: "animal", soulIcon: "🦁", soulText: "Add the flower/animal comparison and why here." },
  { name: "Teacher Name 10", subject: "Economics", photo: "https://api.dicebear.com/9.x/initials/svg?seed=Teacher%20Ten&backgroundColor=f5a623&textColor=1a1105",
    love: "Add what students love about this teacher here.",
    grow: "Add a gentle, positively-framed wish for this teacher here.",
    soulType: "flower", soulIcon: "🪷", soulText: "Add the flower/animal comparison and why here." },
  { name: "Teacher Name 11", subject: "Political Science", photo: "https://api.dicebear.com/9.x/initials/svg?seed=Teacher%20Eleven&backgroundColor=b4442c&textColor=f6efdf",
    love: "Add what students love about this teacher here.",
    grow: "Add a gentle, positively-framed wish for this teacher here.",
    soulType: "animal", soulIcon: "🦢", soulText: "Add the flower/animal comparison and why here." },
  { name: "Teacher Name 12", subject: "Hindi", photo: "https://api.dicebear.com/9.x/initials/svg?seed=Teacher%20Twelve&backgroundColor=16412f&textColor=f6efdf",
    love: "Add what students love about this teacher here.",
    grow: "Add a gentle, positively-framed wish for this teacher here.",
    soulType: "flower", soulIcon: "🌺", soulText: "Add the flower/animal comparison and why here." },
  { name: "Teacher Name 13", subject: "Sanskrit", photo: "https://api.dicebear.com/9.x/initials/svg?seed=Teacher%20Thirteen&backgroundColor=f5a623&textColor=1a1105",
    love: "Add what students love about this teacher here.",
    grow: "Add a gentle, positively-framed wish for this teacher here.",
    soulType: "animal", soulIcon: "🐿️", soulText: "Add the flower/animal comparison and why here." },
  { name: "Teacher Name 14", subject: "Art", photo: "https://api.dicebear.com/9.x/initials/svg?seed=Teacher%20Fourteen&backgroundColor=b4442c&textColor=f6efdf",
    love: "Add what students love about this teacher here.",
    grow: "Add a gentle, positively-framed wish for this teacher here.",
    soulType: "flower", soulIcon: "🌹", soulText: "Add the flower/animal comparison and why here." },
  { name: "Teacher Name 15", subject: "Music", photo: "https://api.dicebear.com/9.x/initials/svg?seed=Teacher%20Fifteen&backgroundColor=16412f&textColor=f6efdf",
    love: "Add what students love about this teacher here.",
    grow: "Add a gentle, positively-framed wish for this teacher here.",
    soulType: "animal", soulIcon: "🐦", soulText: "Add the flower/animal comparison and why here." },
  { name: "Teacher Name 16", subject: "Physical Education", photo: "https://api.dicebear.com/9.x/initials/svg?seed=Teacher%20Sixteen&backgroundColor=f5a623&textColor=1a1105",
    love: "Add what students love about this teacher here.",
    grow: "Add a gentle, positively-framed wish for this teacher here.",
    soulType: "animal", soulIcon: "🐎", soulText: "Add the flower/animal comparison and why here." },
  { name: "Teacher Name 17", subject: "Environmental Science", photo: "https://api.dicebear.com/9.x/initials/svg?seed=Teacher%20Seventeen&backgroundColor=b4442c&textColor=f6efdf",
    love: "Add what students love about this teacher here.",
    grow: "Add a gentle, positively-framed wish for this teacher here.",
    soulType: "flower", soulIcon: "🌿", soulText: "Add the flower/animal comparison and why here." },
  { name: "Teacher Name 18", subject: "Psychology", photo: "https://api.dicebear.com/9.x/initials/svg?seed=Teacher%20Eighteen&backgroundColor=16412f&textColor=f6efdf",
    love: "Add what students love about this teacher here.",
    grow: "Add a gentle, positively-framed wish for this teacher here.",
    soulType: "animal", soulIcon: "🐘", soulText: "Add the flower/animal comparison and why here." },
  { name: "Teacher Name 19", subject: "Accountancy", photo: "https://api.dicebear.com/9.x/initials/svg?seed=Teacher%20Nineteen&backgroundColor=f5a623&textColor=1a1105",
    love: "Add what students love about this teacher here.",
    grow: "Add a gentle, positively-framed wish for this teacher here.",
    soulType: "flower", soulIcon: "🌾", soulText: "Add the flower/animal comparison and why here." },
  { name: "Teacher Name 20", subject: "Class Teacher", photo: "https://api.dicebear.com/9.x/initials/svg?seed=Teacher%20Twenty&backgroundColor=b4442c&textColor=f6efdf",
    love: "Add what students love about this teacher here.",
    grow: "Add a gentle, positively-framed wish for this teacher here.",
    soulType: "flower", soulIcon: "🌼", soulText: "Add the flower/animal comparison and why here." },
];

/* =========================================================
   RENDER CARDS
   ========================================================= */

const grid = document.getElementById("teacher-grid");

teachers.forEach((t, i) => {
  const card = document.createElement("article");
  card.className = "card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Open tribute card for ${t.name}`);

  card.innerHTML = `
    <div class="card__photo-wrap">
      <img class="card__photo" src="${t.photo}" alt="Photo of ${t.name}" loading="lazy">
      <div class="card__ring"></div>
    </div>
    <h3 class="card__name">${t.name}</h3>
    <p class="card__subject">${t.subject}</p>
    <span class="card__hint">${t.soulIcon}&nbsp; tap to open</span>
  `;

  card.addEventListener("click", () => openModal(t));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(t);
    }
  });

  grid.appendChild(card);
});

/* Scroll reveal for cards */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${(idx % 6) * 0.06}s`;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".card").forEach((c) => observer.observe(c));

/* =========================================================
   MODAL
   ========================================================= */

const backdrop = document.getElementById("modal-backdrop");
const modalPhoto = document.getElementById("modal-photo");
const modalEmblem = document.getElementById("modal-emblem");
const modalSubject = document.getElementById("modal-subject");
const modalName = document.getElementById("modal-name");
const modalPersonalityLine = document.getElementById("modal-personality-line");
const modalLove = document.getElementById("modal-love");
const modalGrow = document.getElementById("modal-grow");
const modalSoul = document.getElementById("modal-soul");
const modalSoulIcon = document.getElementById("modal-soul-icon");
const closeBtn = document.getElementById("modal-close");

let lastFocused = null;

function openModal(t) {
  lastFocused = document.activeElement;

  modalPhoto.src = t.photo;
  modalPhoto.alt = `Photo of ${t.name}`;
  modalEmblem.textContent = t.soulIcon;
  modalSubject.textContent = t.subject;
  modalName.textContent = t.name;
  modalPersonalityLine.textContent = t.soulType === "flower"
    ? `Blooms in the classroom like a ${t.soulIcon}`
    : `Moves through the day like a ${t.soulIcon}`;
  modalLove.textContent = t.love;
  modalGrow.textContent = t.grow;
  modalSoul.textContent = t.soulText;
  modalSoulIcon.textContent = t.soulIcon;

  backdrop.classList.add("is-open");
  document.body.style.overflow = "hidden";
  closeBtn.focus();
}

function closeModal() {
  backdrop.classList.remove("is-open");
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

closeBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && backdrop.classList.contains("is-open")) closeModal();
});

/* =========================================================
   AMBIENT FALLING PETALS
   ========================================================= */

const petalField = document.getElementById("petal-field");
const PETAL_COUNT = 26;
const petalTypes = ["petal--marigold", "petal--maroon", "petal--chalk"];

for (let i = 0; i < PETAL_COUNT; i++) {
  const petal = document.createElement("div");
  const type = petalTypes[Math.floor(Math.random() * petalTypes.length)];
  const size = type === "petal--chalk"
    ? 3 + Math.random() * 4
    : 8 + Math.random() * 10;

  petal.className = `petal ${type}`;
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.width = `${size}px`;
  petal.style.height = `${size}px`;
  petal.style.setProperty("--drift", `${(Math.random() - 0.5) * 160}px`);
  petal.style.animationDuration = `${12 + Math.random() * 14}s`;
  petal.style.animationDelay = `${Math.random() * -20}s`;

  petalField.appendChild(petal);
}
