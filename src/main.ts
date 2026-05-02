import * as THREE from "three";

const root = document.documentElement;
const themeToggle = document.querySelector<HTMLButtonElement>("#themeToggle");
const compareToggle = document.querySelector<HTMLButtonElement>("#compareToggle");
const comparePanel = document.querySelector<HTMLElement>("#comparePanel");
const recruiterToggle = document.querySelector<HTMLButtonElement>("#recruiterToggle");
const recruiterPanel = document.querySelector<HTMLElement>("#recruiterPanel");
const tabs = document.querySelectorAll<HTMLButtonElement>(".tab");
const filterButtons = document.querySelectorAll<HTMLButtonElement>(".filter-chip");
const projectCards = document.querySelectorAll<HTMLElement>(".project-card");
const caseModal = document.querySelector<HTMLDialogElement>("#caseModal");
const modalClose = document.querySelector<HTMLButtonElement>("#modalClose");
const caseImage = document.querySelector<HTMLImageElement>("#caseImage");
const caseSource = document.querySelector<HTMLSourceElement>("#caseSource");
const caseType = document.querySelector<HTMLElement>("#caseType");
const caseTitle = document.querySelector<HTMLElement>("#caseTitle");
const caseSummary = document.querySelector<HTMLElement>("#caseSummary");
const caseProblem = document.querySelector<HTMLElement>("#caseProblem");
const caseSolution = document.querySelector<HTMLElement>("#caseSolution");
const caseStack = document.querySelector<HTMLElement>("#caseStack");
const caseArchitecture = document.querySelector<HTMLElement>("#caseArchitecture");
const caseGallery = document.querySelector<HTMLElement>("#caseGallery");
const caseLink = document.querySelector<HTMLAnchorElement>("#caseLink");
const commandPalette = document.querySelector<HTMLDialogElement>("#commandPalette");
const commandSearch = document.querySelector<HTMLInputElement>("#commandSearch");
const commandList = document.querySelector<HTMLElement>("#commandList");
const scrollProgress = document.querySelector<HTMLElement>("#scrollProgress");
const cursorRing = document.querySelector<HTMLElement>("#cursorRing");
const lightbox = document.querySelector<HTMLDialogElement>("#lightbox");
const lightboxImage = document.querySelector<HTMLImageElement>("#lightboxImage");
const lightboxClose = document.querySelector<HTMLButtonElement>("#lightboxClose");
const cvLayouts: Record<string, HTMLElement | null> = {
  generalTab: document.querySelector<HTMLElement>("#generalCv"),
  personalTab: document.querySelector<HTMLElement>("#personalCv"),
};

type CaseStudy = {
  title: string;
  type: string;
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  architecture: string[];
  gallery: { label: string; png: string; webp: string }[];
  image: string;
  webp: string;
  link: string;
};

const caseStudies: Record<string, CaseStudy> = {
  decision: {
    title: "AI Decision Intelligence Platform",
    type: "AI/ML Data Product Case Study",
    summary: "A guided data science workspace for turning uploaded business files into model training, results, estimates, and AI-assisted next steps.",
    problem: "Most beginner ML tools stop at upload or prediction. Users still need a readable workflow that explains what happened and what to do next.",
    solution: "Designed a step-based interface with upload, training, result, and assistant stages so the product feels guided instead of technical-only.",
    stack: ["AI", "ML workflow", "Data upload", "Hugging Face", "Decision support"],
    architecture: ["User upload", "Data cleaning", "Model workflow", "Results dashboard", "AI assistant"],
    gallery: [
      { label: "Workspace", png: "assets/projects/decision.png", webp: "assets/projects/decision.webp" },
      { label: "Workflow", png: "assets/projects/decision.png", webp: "assets/projects/decision.webp" },
      { label: "Assistant", png: "assets/projects/decision.png", webp: "assets/projects/decision.webp" },
    ],
    image: "assets/projects/decision.png",
    webp: "assets/projects/decision.webp",
    link: "https://gavinder-ai-decision-intelligence-platform.hf.space",
  },
  carecompass: {
    title: "AI Powered Medical Consultation System",
    type: "Healthcare AI Case Study",
    summary: "A full-stack healthcare assistant for symptom analysis, consultation history, appointments, hospital lookup, and PDF reports.",
    problem: "Healthcare tools need trust, history, and follow-up context, not just a one-time chatbot answer.",
    solution: "Built a structured healthcare workflow with authentication, database-backed history, AI fallback handling, reports, and deployment checks.",
    stack: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "Gemini API", "Render"],
    architecture: ["Patient input", "Flask routes", "Gemini analysis", "PostgreSQL history", "PDF report"],
    gallery: [
      { label: "Dashboard", png: "assets/projects/carecompass.png", webp: "assets/projects/carecompass.webp" },
      { label: "Consultation", png: "assets/projects/carecompass.png", webp: "assets/projects/carecompass.webp" },
      { label: "Reports", png: "assets/projects/carecompass.png", webp: "assets/projects/carecompass.webp" },
    ],
    image: "assets/projects/carecompass.png",
    webp: "assets/projects/carecompass.webp",
    link: "https://carecompass-ai.onrender.com/",
  },
  airpods: {
    title: "Apple Headphones Interactive Showcase",
    type: "Frontend Experience Case Study",
    summary: "A cinematic product showcase with scroll storytelling, responsive layouts, and polished animation direction.",
    problem: "Product pages often look static and fail to communicate premium feel through interaction.",
    solution: "Used motion, scroll timing, and clean product presentation to create a richer frontend experience.",
    stack: ["Next.js", "React", "TypeScript", "GSAP", "Framer Motion", "Three.js"],
    architecture: ["Product story", "Scroll trigger", "Motion timeline", "3D visual layer", "GitHub Pages"],
    gallery: [
      { label: "Hero", png: "assets/projects/airpods.png", webp: "assets/projects/airpods.webp" },
      { label: "Motion", png: "assets/projects/airpods.png", webp: "assets/projects/airpods.webp" },
      { label: "Product", png: "assets/projects/airpods.png", webp: "assets/projects/airpods.webp" },
    ],
    image: "assets/projects/airpods.png",
    webp: "assets/projects/airpods.webp",
    link: "https://gavisingh12.github.io/apple-headphones/",
  },
  os: {
    title: "Resilient File Harbor",
    type: "Systems UI Case Study",
    summary: "An operating-system themed project presented as a web experience around distributed storage and reliability concepts.",
    problem: "Systems concepts can be difficult to present visually when they stay only in documentation or code.",
    solution: "Built a clear web interface that turns OS ideas into a browsable, demo-friendly experience.",
    stack: ["Operating Systems", "Web UI", "GitHub Pages", "Systems design"],
    architecture: ["Storage concept", "Replication logic", "Node status", "Web interface", "GitHub Pages"],
    gallery: [
      { label: "System UI", png: "assets/projects/os.png", webp: "assets/projects/os.webp" },
      { label: "Storage", png: "assets/projects/os.png", webp: "assets/projects/os.webp" },
      { label: "Nodes", png: "assets/projects/os.png", webp: "assets/projects/os.webp" },
    ],
    image: "assets/projects/os.png",
    webp: "assets/projects/os.webp",
    link: "https://gavisingh12.github.io/os-project/",
  },
};

const commands = [
  { title: "Open General CV", hint: "Resume", action: () => window.open("assets/gavinder-general-cv.pdf", "_blank") },
  { title: "Open Specialized CV", hint: "Resume", action: () => window.open("assets/gavinder-specialized-cv.pdf", "_blank") },
  { title: "Download CV", hint: "Resume", action: () => (window.location.href = "assets/gavinder-general-cv.pdf") },
  { title: "Download Specialized CV", hint: "Resume", action: () => (window.location.href = "assets/gavinder-specialized-cv.pdf") },
  { title: "Go to Projects", hint: "Navigation", action: () => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }) },
  { title: "Go to Recruiter Kit", hint: "Navigation", action: () => document.querySelector("#kit")?.scrollIntoView({ behavior: "smooth" }) },
  { title: "Open GitHub", hint: "Profile", action: () => window.open("https://github.com/Gavisingh12", "_blank") },
  { title: "Open LinkedIn", hint: "Profile", action: () => window.open("https://www.linkedin.com/in/gavindra-singh/", "_blank") },
  { title: "Email Gavindra", hint: "Contact", action: () => (window.location.href = "mailto:gavinder.singh@gmail.com") },
  { title: "Decision Intelligence Case Study", hint: "Project", action: () => openCaseStudy("decision") },
  { title: "CareCompass AI Case Study", hint: "Project", action: () => openCaseStudy("carecompass") },
  { title: "Apple Headphones Case Study", hint: "Project", action: () => openCaseStudy("airpods") },
  { title: "OS Project Case Study", hint: "Project", action: () => openCaseStudy("os") },
];

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark" || savedTheme === "light") {
  root.dataset.theme = savedTheme;
}

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
});

recruiterToggle?.addEventListener("click", () => {
  const isActive = recruiterToggle.getAttribute("aria-pressed") === "true";
  recruiterToggle.setAttribute("aria-pressed", String(!isActive));
  document.body.classList.toggle("recruiter-mode", !isActive);
  recruiterPanel?.classList.toggle("show", !isActive);
});

compareToggle?.addEventListener("click", () => {
  const isActive = compareToggle.getAttribute("aria-pressed") === "true";
  compareToggle.setAttribute("aria-pressed", String(!isActive));
  comparePanel?.classList.toggle("show", !isActive);
  if (!isActive) {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  }
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });

    Object.values(cvLayouts).forEach((layout) => {
      if (!layout) return;
      layout.classList.remove("active");
      layout.hidden = true;
    });

    const targetLayout = cvLayouts[tab.id];
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    if (targetLayout) {
      targetLayout.hidden = false;
      targetLayout.classList.add("active");
    }
  });
});

document.querySelectorAll<HTMLButtonElement>(".timeline-item").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".timeline-item").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".cv-panel").forEach((panel) => panel.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#${button.dataset.panel}`)?.classList.add("active");
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter ?? "all";

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const categories = card.dataset.category ?? "";
      const shouldShow = filter === "all" || categories.split(" ").includes(filter);
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

const openCaseStudy = (projectId: string) => {
  const study = caseStudies[projectId];
  if (!study || !caseModal) return;

  if (caseImage) {
    caseImage.src = study.image;
    caseImage.alt = `${study.title} screenshot`;
  }
  if (caseSource) caseSource.srcset = study.webp;
  if (caseType) caseType.textContent = study.type;
  if (caseTitle) caseTitle.textContent = study.title;
  if (caseSummary) caseSummary.textContent = study.summary;
  if (caseProblem) caseProblem.textContent = study.problem;
  if (caseSolution) caseSolution.textContent = study.solution;
  if (caseLink) caseLink.href = study.link;
  if (caseStack) {
    caseStack.replaceChildren(
      ...study.stack.map((item) => {
        const pill = document.createElement("span");
        pill.textContent = item;
        return pill;
      }),
    );
  }
  if (caseArchitecture) {
    caseArchitecture.replaceChildren(
      ...study.architecture.map((item) => {
        const node = document.createElement("span");
        node.textContent = item;
        return node;
      }),
    );
  }
  if (caseGallery) {
    caseGallery.replaceChildren(
      ...study.gallery.map((item, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = item.label;
        button.classList.toggle("active", index === 0);
        button.addEventListener("click", () => {
          caseGallery.querySelectorAll("button").forEach((galleryButton) => galleryButton.classList.remove("active"));
          button.classList.add("active");
          if (caseImage) caseImage.src = item.png;
          if (caseSource) caseSource.srcset = item.webp;
        });
        return button;
      }),
    );
  }

  caseModal.showModal();
};

document.querySelectorAll<HTMLButtonElement>(".case-study-trigger").forEach((button) => {
  button.addEventListener("click", () => openCaseStudy(button.dataset.project ?? ""));
});

document.querySelectorAll<HTMLButtonElement>(".lightbox-trigger").forEach((button) => {
  button.addEventListener("click", () => {
    if (!lightbox || !lightboxImage || !button.dataset.image) return;
    lightboxImage.src = button.dataset.image;
    lightbox.showModal();
  });
});

projectCards.forEach((card) => {
  card.addEventListener("dblclick", () => openCaseStudy(card.dataset.project ?? ""));
});

modalClose?.addEventListener("click", () => caseModal?.close());
lightboxClose?.addEventListener("click", () => lightbox?.close());
caseModal?.addEventListener("click", (event) => {
  if (event.target === caseModal) {
    caseModal.close();
  }
});
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && caseModal?.open) {
    caseModal.close();
  }
  if (event.key === "Escape" && commandPalette?.open) {
    commandPalette.close();
  }
  if (event.key === "Escape" && lightbox?.open) {
    lightbox.close();
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  { threshold: 0.14 },
);

document.querySelectorAll<HTMLElement>(".reveal").forEach((element) => revealObserver.observe(element));

const sectionLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-links a, .mobile-dock a");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible?.target.id) return;
    sectionLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] },
);

document.querySelectorAll<HTMLElement>("main section[id]").forEach((section) => sectionObserver.observe(section));

const updateScrollProgress = () => {
  if (!scrollProgress) return;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  scrollProgress.style.width = `${Math.min(100, Math.max(0, progress))}%`;
};

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();

if (cursorRing && !window.matchMedia("(pointer: coarse)").matches) {
  window.addEventListener("pointermove", (event) => {
    cursorRing.style.left = `${event.clientX}px`;
    cursorRing.style.top = `${event.clientY}px`;
    cursorRing.style.opacity = "1";
  });

  document.querySelectorAll("a, button, .project-card").forEach((element) => {
    element.addEventListener("pointerenter", () => cursorRing.classList.add("is-active"));
    element.addEventListener("pointerleave", () => cursorRing.classList.remove("is-active"));
  });
}

const renderCommands = (query = "") => {
  if (!commandList) return;
  const normalizedQuery = query.trim().toLowerCase();
  const filteredCommands = commands.filter((command) =>
    `${command.title} ${command.hint}`.toLowerCase().includes(normalizedQuery),
  );

  commandList.replaceChildren(
    ...filteredCommands.map((command, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `command-item${index === 0 ? " active" : ""}`;
      button.innerHTML = `<strong>${command.title}</strong><span>${command.hint}</span>`;
      button.addEventListener("click", () => {
        commandPalette?.close();
        command.action();
      });
      return button;
    }),
  );
};

const openCommandPalette = () => {
  renderCommands();
  commandPalette?.showModal();
  requestAnimationFrame(() => commandSearch?.focus());
};

commandSearch?.addEventListener("input", () => renderCommands(commandSearch.value));
commandPalette?.addEventListener("click", (event) => {
  if (event.target === commandPalette) {
    commandPalette.close();
  }
});

document.addEventListener("keydown", (event) => {
  const isPaletteShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";
  if (isPaletteShortcut) {
    event.preventDefault();
    openCommandPalette();
  }

  if (event.ctrlKey || event.metaKey || event.altKey || event.target instanceof HTMLInputElement) return;

  const key = event.key.toLowerCase();
  if (key === "g") window.open("https://github.com/Gavisingh12", "_blank");
  if (key === "l") window.open("https://www.linkedin.com/in/gavindra-singh/", "_blank");
  if (key === "c") document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
});

const initThreeField = () => {
  const canvas = document.querySelector<HTMLCanvasElement>("#threeField");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 18;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const geometry = new THREE.BufferGeometry();
  const count = 96;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  const darkColor = new THREE.Color("#52e0c4");
  const warmColor = new THREE.Color("#ffd166");

  for (let index = 0; index < count; index += 1) {
    positions[index * 3] = (Math.random() - 0.5) * 34;
    positions[index * 3 + 1] = (Math.random() - 0.5) * 22;
    positions[index * 3 + 2] = (Math.random() - 0.5) * 8;

    const color = index % 3 === 0 ? warmColor : darkColor;
    colors[index * 3] = color.r;
    colors[index * 3 + 1] = color.g;
    colors[index * 3 + 2] = color.b;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.07,
    transparent: true,
    opacity: 0.72,
    vertexColors: true,
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  const cubeGroup = new THREE.Group();
  const cubeGeometry = new THREE.BoxGeometry(2.6, 2.6, 2.6, 5, 5, 5);
  const cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0x52e0c4,
    wireframe: true,
    transparent: true,
    opacity: 0.28,
  });
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  const innerGeometry = new THREE.IcosahedronGeometry(1.05, 1);
  const innerMaterial = new THREE.MeshBasicMaterial({
    color: 0xffd166,
    wireframe: true,
    transparent: true,
    opacity: 0.22,
  });
  const inner = new THREE.Mesh(innerGeometry, innerMaterial);
  cubeGroup.add(cube, inner);
  cubeGroup.position.set(7.5, -2.2, -1.5);
  scene.add(cubeGroup);

  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x52e0c4,
    transparent: true,
    opacity: 0.12,
  });
  const lineGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-11, -4.2, -1),
    new THREE.Vector3(-4, 2.8, 0),
    new THREE.Vector3(2, -1.4, 1),
    new THREE.Vector3(9, 3.6, -1),
  ]);
  const line = new THREE.Line(lineGeometry, lineMaterial);
  scene.add(line);

  let pointerX = 0;
  let pointerY = 0;
  window.addEventListener("pointermove", (event) => {
    pointerX = (event.clientX / window.innerWidth - 0.5) * 0.9;
    pointerY = (event.clientY / window.innerHeight - 0.5) * 0.9;
  });

  const resize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener("resize", resize);

  const animate = () => {
    particles.rotation.y += 0.0009;
    particles.rotation.x += 0.00035;
    cubeGroup.rotation.x += 0.0035;
    cubeGroup.rotation.y += 0.0048;
    scene.rotation.y += (pointerX - scene.rotation.y) * 0.02;
    scene.rotation.x += (-pointerY * 0.35 - scene.rotation.x) * 0.02;
    line.rotation.z -= 0.0007;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  animate();
};

initThreeField();
