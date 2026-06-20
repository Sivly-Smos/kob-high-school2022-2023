/* ── DATA ── */
const polaroids = [
  // {
  //   src: "imgs/1.JPG",
  //   label: "Graduation Day",
  //   tag: "events",
  //   color: "#E8748A",
  // },
  // {
  //   src: "imgs/2.JPG",
  //   label: "Graduation Day",
  //   tag: "events",
  //   color: "#E8748A",
  // },
  // sports
  // {
  //   src: "imgs/sports/1.JPG",
  //   label: "Game Day Crew",
  //   tag: "sports",
  //   color: "#4ECDC4",
  // },
  // {
  //   src: "imgs/sports/2.JPG",
  //   label: "Game Day Crew",
  //   tag: "sports",
  //   color: "#4ECDC4",
  // },
  // {
  //   src: "imgs/sports/3.JPG",
  //   label: "Game Day Crew",
  //   tag: "sports",
  //   color: "#4ECDC4",
  // },
  // {
  //   src: "imgs/sports/4.JPG",
  //   label: "Game Day Crew",
  //   tag: "sports",
  //   color: "#4ECDC4",
  // },
  // {
  //   src: "imgs/sports/5.JPG",
  //   label: "Game Day Crew",
  //   tag: "sports",
  //   color: "#4ECDC4",
  // },
  // {
  //   src: "imgs/sports/6.JPG",
  //   label: "Game Day Crew",
  //   tag: "sports",
  //   color: "#4ECDC4",
  // },
  // {
  //   src: "imgs/sports/7.JPG",
  //   label: "Game Day Crew",
  //   tag: "sports",
  //   color: "#4ECDC4",
  // },
  // {
  //   src: "imgs/sports/8.JPG",
  //   label: "Game Day Crew",
  //   tag: "sports",
  //   color: "#4ECDC4",
  // },
  //sports
  // {
  //   src: "imgs/4.JPG",
  //   label: "Prom Night",
  //   tag: "events",
  //   color: "#9B5DE5",
  // },
  // {
  //   src: "",
  //   label: "Science Fair",
  //   tag: "academic",
  //   color: "#E8B84B",
  // },
  // {
  //   src: "",
  //   label: "Lunch Break",
  //   tag: "social",
  //   color: "#E8748A",
  // },
  // {
  //   src: "",
  //   label: "Cap & Gown",
  //   tag: "events",
  //   color: "#9B5DE5",
  // },
  // {
  //   src: "",
  //   label: "Best Friends",
  //   tag: "social",
  //   color: "#E8748A",
  // },
  // {
  //   src: "",
  //   label: "Beach Trip",
  //   tag: "social",
  //   color: "#4ECDC4",
  // },
  // trips
  {
    src: "imgs/trips/sr1.jpg",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/sr2.jpg",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/sr3.jpg",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/sr4.jpg",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/sr5.jpg",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/sr6.jpg",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/sr7.jpg",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/sr8.jpg",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/sr9.jpg",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/sr10.jpg",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/sr12.jpg",
    label: "Siem Reap",
    tag: "trips",
    color: "#E8B84B",
  },
  {
    src: "imgs/trips/sr13.jpg",
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

  // {
  //   src: "",
  //   label: "Team Meeting",
  //   tag: "social",
  //   color: "#E8748A",
  // },
  // {
  //   src: "",
  //   label: "Spring Concert",
  //   tag: "events",
  //   color: "#9B5DE5",
  // },
  // {
  //   src: "",
  //   label: "Hallway Vibes",
  //   tag: "social",
  //   color: "#E8748A",
  // },
  // {
  //   src: "",
  //   label: "Diploma Moment",
  //   tag: "events",
  //   color: "#9B5DE5",
  // },
  // {
  //   src: "",
  //   label: "Homecoming",
  //   tag: "events",
  //   color: "#9B5DE5",
  // },
];

const classmates = [
  {
    name: "Vang Kimsuy",
    role: "Chemistry Teacher",
    quote: '"She empowers every student to succeed."',
    img: "imgs/teachers/kimsuy.JPG",
  },
  {
    name: "Peng Samrith",
    role: "Khmer Language Teacher",
    quote: '"He teaches with passion and leads with purpose."',
    img: "imgs/teachers/somrit.JPG",
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
