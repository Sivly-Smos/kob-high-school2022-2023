/* ── DATA ── */
const polaroids = [
  {
    src: "imgs/1.JPG",
    label: "Graduation Day",
    tag: "events",
    color: "#E8748A",
  },
  {
    src: "imgs/2.JPG",
    label: "Graduation Day",
    tag: "events",
    color: "#E8748A",
  },
  // sports
  {
    src: "imgs/sports/1.JPG",
    label: "Game Day Crew",
    tag: "sports",
    color: "#4ECDC4",
  },
  {
    src: "imgs/sports/2.JPG",
    label: "Game Day Crew",
    tag: "sports",
    color: "#4ECDC4",
  },
  {
    src: "imgs/sports/3.JPG",
    label: "Game Day Crew",
    tag: "sports",
    color: "#4ECDC4",
  },
  {
    src: "imgs/sports/4.JPG",
    label: "Game Day Crew",
    tag: "sports",
    color: "#4ECDC4",
  },
  {
    src: "imgs/sports/5.JPG",
    label: "Game Day Crew",
    tag: "sports",
    color: "#4ECDC4",
  },
  {
    src: "imgs/sports/6.JPG",
    label: "Game Day Crew",
    tag: "sports",
    color: "#4ECDC4",
  },
  {
    src: "imgs/sports/7.JPG",
    label: "Game Day Crew",
    tag: "sports",
    color: "#4ECDC4",
  },
  {
    src: "imgs/sports/8.JPG",
    label: "Game Day Crew",
    tag: "sports",
    color: "#4ECDC4",
  },
  //sports
  {
    src: "imgs/4.JPG",
    label: "Prom Night",
    tag: "events",
    color: "#9B5DE5",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&q=75",
    label: "Science Fair",
    tag: "academic",
    color: "#E8B84B",
  },
  {
    src: "https://images.unsplash.com/photo-1540479859555-17af45c78602?w=500&q=75",
    label: "Lunch Break",
    tag: "social",
    color: "#E8748A",
  },
  {
    src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&q=75",
    label: "Cap & Gown",
    tag: "events",
    color: "#9B5DE5",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=75",
    label: "Best Friends",
    tag: "social",
    color: "#E8748A",
  },
  {
    src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=500&q=75",
    label: "Beach Trip",
    tag: "social",
    color: "#4ECDC4",
  },
  // trips
  {
    src: "imgs/trips/sr1.JPG",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/sr2.JPG",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/sr3.JPG",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/sr4.JPG",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/sr5.JPG",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/sr6.JPG",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/sr7.JPG",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/sr8.JPG",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/sr9.JPG",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/sr10.JPG",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/sr12.JPG",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/sr13.JPG",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/bmc.JPG",
    label: "Bonteay Mean Chey",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/bmc1.JPG",
    label: "Bonteay Mean Chey",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/bmc2.JPG",
    label: "Bonteay Mean Chey",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/bmc3.JPG",
    label: "Bonteay Mean Chey",
    tag: "trips",
    color: "#E8B84B",
  },
  // trips

  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&q=75",
    label: "Team Meeting",
    tag: "social",
    color: "#E8748A",
  },
  {
    src: "https://images.unsplash.com/photo-1461532257246-777de18cd58b?w=500&q=75",
    label: "Spring Concert",
    tag: "events",
    color: "#9B5DE5",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=500&q=75",
    label: "Hallway Vibes",
    tag: "social",
    color: "#E8748A",
  },
  {
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&q=75",
    label: "Diploma Moment",
    tag: "events",
    color: "#9B5DE5",
  },
  {
    src: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&q=75",
    label: "Homecoming",
    tag: "events",
    color: "#9B5DE5",
  },
];

const classmates = [
  {
    name: "Maya Chen",
    role: "Class President",
    quote: '"Lead with your heart."',
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=75",
  },
  {
    name: "Jordan Lee",
    role: "Valedictorian",
    quote: '"Dream loud, work louder."',
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=75",
  },
  {
    name: "Sofia Reyes",
    role: "Prom Queen",
    quote: '"Life is the best party."',
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=75",
  },
  {
    name: "Marcus Jones",
    role: "Team Captain",
    quote: '"Push past the limit."',
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=75",
  },
  {
    name: "Lily Park",
    role: "Art Club President",
    quote: '"Color the world different."',
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=75",
  },
  {
    name: "Alex Rivera",
    role: "Most Likely to Succeed",
    quote: '"The future is ours."',
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=75",
  },
  {
    name: "Emma Williams",
    role: "Drama Lead",
    quote: '"All the world\'s a stage."',
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=75",
  },
  {
    name: "Tyler Brooks",
    role: "Band Director",
    quote: '"Music is memory."',
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=75",
  },
];

/* ── BUILD POLAROIDS ── */
let currentFilter = "all";
function buildPolaroids(filter) {
  const grid = document.getElementById("polaroidGrid");
  grid.innerHTML = "";
  polaroids
    .filter((p) => filter === "all" || p.tag === filter)
    .forEach((p) => {
      const el = document.createElement("div");
      el.className = "polaroid";
      el.innerHTML = `
      <div class="pol-tag" style="background:${p.color}">${p.tag}</div>
      <img src="${p.src}" alt="${p.label}" loading="lazy"/>
      <span class="pol-label">${p.label}</span>`;
      el.addEventListener("click", () => openLightboxSrc(p.src, p.label));
      grid.appendChild(el);
    });
}
function filterGallery(tag, btn) {
  currentFilter = tag;
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  const grid = document.getElementById("polaroidGrid");
  grid.style.opacity = "0";
  grid.style.transform = "translateY(10px)";
  setTimeout(() => {
    buildPolaroids(tag);
    grid.style.transition = "opacity 0.4s, transform 0.4s";
    grid.style.opacity = "1";
    grid.style.transform = "translateY(0)";
  }, 250);
}
buildPolaroids("all");

/* ── BUILD CLASSMATES ── */
const sqGrid = document.getElementById("squadGrid");
classmates.forEach((c) => {
  sqGrid.innerHTML += `
  <div class="squad-card">
    <img class="squad-img" src="${c.img}" alt="${c.name}" loading="lazy"/>
    <div class="squad-info">
      <p class="squad-name">${c.name}</p>
      <p class="squad-role">${c.role}</p>
      <p class="squad-quote">${c.quote}</p>
    </div>
  </div>`;
});

/* ── FILM HOLES ── */
function buildHoles(id) {
  const el = document.getElementById(id);
  let html = "";
  for (let i = 0; i < 60; i++) html += '<div class="strip-hole"></div>';
  el.innerHTML = html;
  el.style.width = "max-content";
  el.style.animation =
    "stripScroll 25s linear infinite" + (id === "holes2" ? " reverse" : "");
}
buildHoles("holes1");
buildHoles("holes2");

/* ── LIGHTBOX ── */
function openLightboxSrc(src, alt) {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lbImg");
  img.src = src;
  img.alt = alt || "";
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}
function openLightbox(card) {
  const img = card.querySelector("img");
  openLightboxSrc(img.src.replace(/w=\d+/, "w=1200"), img.alt);
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

/* ── SCROLL REVEAL ── */
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
revealEls.forEach((el) => observer.observe(el));

/* ── COUNTER ANIMATION ── */
function animateCounter(el, target, duration = 2000) {
  let start = 0,
    startTime = null;
  function step(ts) {
    if (!startTime) startTime = ts;
    const p = Math.min((ts - startTime) / duration, 1);
    el.textContent = Math.floor(p * target);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}
const statObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.querySelectorAll("[data-target]").forEach((el) => {
          animateCounter(el, parseInt(el.dataset.target));
        });
        statObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.4 },
);
statObs.observe(document.querySelector(".stats-inner"));
