/* ==========================================================================
   al-folio Academic Theme Script for Yaobin Yang, Ph.D.
   Handles: Theme Toggle, Bilingual Switch (EN/ZH), Inline ABS/BIB Drawers,
   Publication Year-Aware Filtering, Project Tabs, and Lightbox Modal
   ========================================================================== */

const BIBTEX_ENTRIES = {
  "TransformingCriticalWaterPipelines": `@article{TransformingCriticalWaterPipelines,
  author  = {Jasiak, Maksymilian and Yang, Yaobin and Wang, Chien-Chih and Chiu, Shih-Hung and Luo, Linqing and Hubbard, Peter and Xu, Yuankun and Zhang, Youqi and Burgmann, Roland and Soga, Kenichi},
  title   = {Transforming Critical Water Pipelines into Seismic Fault Movement Sensors},
  journal = {Geophysical Research Letters},
  volume  = {53},
  number  = {22},
  year    = {2026},
  doi     = {10.1029/2026GL123978}
}`,
  "luo2026flowinduced": `@article{luo2026flowinduced,
  author  = {Luo, Linqing and Yang, Yaobin and Soga, Kenichi and Ryan, John and Wu, Yuxin},
  title   = {Flow-Induced Vibration Suppression for Distributed Fiber Optic Sensing Cables in Turbulent Marine Environments},
  journal = {Journal of Ocean Engineering and Science},
  year    = {2026},
  note    = {Accepted}
}`,
  "Shin_EccentricLoad": `@article{Shin_EccentricLoad,
  author  = {Shin, Gyu-Beom and Yang, Yaobin and Pelecanos, Loizos and Mevoli, Federica Angela and Yeskoo, Andrew and Shantz, Tom and Soga, Kenichi},
  title   = {Distributed Fiber Optic Sensing for Monitoring Piles under Eccentric Load},
  journal = {Journal of Geotechnical and Geoenvironmental Engineering},
  volume  = {152},
  number  = {9},
  pages   = {04026089},
  year    = {2026},
  doi     = {10.1061/JGGEFK.GTENG-14998}
}`,
  "YANG2026108131": `@article{YANG2026108131,
  title   = {Inference of pile capacity from distributed strain sensing via PDE-constrained optimization},
  author  = {Yaobin Yang and Gyu-Beom Shin and Loizos Pelecanos and Chien-Chih Wang and Linqing Luo and Kenichi Soga},
  journal = {Computers and Geotechnics},
  volume  = {196},
  pages   = {108131},
  year    = {2026},
  issn    = {0266-352X},
  doi     = {10.1016/j.compgeo.2026.108131}
}`,
  "yang2025cosserat": `@article{yang2025cosserat,
  title     = {Cosserat rod-based modeling and stochastic analysis for distributed fiber optics shape-sensing},
  author    = {Yang, Yaobin and Luo, Linqing and Jasiak, Maksymilian and Wang, Chien-Chih and Chiu, Shih-Hung and Soga, Kenichi},
  journal   = {Mechanical Systems and Signal Processing},
  volume    = {241},
  pages     = {113457},
  year      = {2025},
  publisher = {Elsevier},
  doi       = {10.1016/j.ymssp.2025.113457}
}`,
  "cheng2023numerical": `@article{cheng2023numerical,
  title     = {Numerical analysis of coupled thermal-hydro-chemo-mechanical (THCM) behavior to joint production of marine gas hydrate and shallow gas},
  author    = {Cheng, Fanbao and Sun, Xiang and Li, Yanghui and Ju, Xin and Yang, Yaobin and Liu, Xuanji and Liu, Weiguo and Yang, Mingjun and Song, Yongchen},
  journal   = {Energy},
  volume    = {281},
  pages     = {128224},
  year      = {2023},
  publisher = {Elsevier},
  doi       = {10.1016/j.energy.2023.128224}
}`,
  "yang2027porepressure": `@inproceedings{yang2027porepressure,
  author    = {Yang, Yaobin and Luo, Linqing and Soga, Kenichi and Sun, Xiang},
  title     = {Fiber-optic Miniature Pore Pressure Probe: Design, Fabrication and Application},
  booktitle = {ASCE Conference 2027},
  year      = {2027},
  note      = {Accepted Abstract, Paper Forthcoming. Abstract ID: ASCE2027-288}
}`,
  "araica2024design": `@incollection{araica2024design,
  title     = {Design and Installation of Distributed Fiber Optic Sensing Technology to Monitor HDPE Pipelines at an Earthquake Fault Crossing},
  author    = {Araica, Krista and Cicala, Gus and McLeod, Marshall P and Soga, Kenichi and Jasiak, Maksymilian and Hubbard, Peter and Wang, Chien-Chih and Yang, Yaobin and Luo, Linqing and Yeskoo, Andrew and others},
  booktitle = {Pipelines 2024},
  pages     = {561--571},
  year      = {2024},
  doi       = {10.1061/9780784485569.060}
}`,
  "sinha2024thermal": `@inproceedings{sinha2024thermal,
  title     = {Thermal Response Test of Geothermal Boreholes Using Distributed Fiber Optic Sensing},
  author    = {Sinha, Sumeet K and Yang, Jiahui and Yang, Yaobin and Nigh, Asha and Soga, Kenichi},
  booktitle = {Geo-Congress 2024},
  pages     = {493--503},
  year      = {2024},
  doi       = {10.1061/9780784485330.050}
}`,
  "yang2026matrixfree": `@unpublished{yang2026matrixfree,
  author  = {Yang, Yaobin and Zhang, Teng and Kumar, Krishna and Soga, Kenichi and Perez, Claudio Matias and Luo, Linqing and Shin, Gyu-Beom},
  title   = {A Matrix-Free Discontinuous Galerkin Method for Dynamic Cosserat Rod Simulation},
  year    = {2026},
  note    = {Under Review at Computer Methods in Applied Mechanics and Engineering},
  doi     = {10.2139/ssrn.7417101},
  url     = {https://ssrn.com/abstract=7417101}
}`,
  "Wang2026OptimalControl": `@unpublished{Wang2026OptimalControl,
  author  = {Wang, Yanglan and {Delle Monache}, Maria Laura and Yang, Yaobin and Soga, Kenichi},
  title   = {Optimal Control Modeling for Switched Systems in Traffic Evacuation},
  year    = {2026},
  note    = {Under Review at Transportation Research Part C: Emerging Technologies},
  doi     = {10.2139/ssrn.6727554},
  url     = {https://ssrn.com/abstract=6727554}
}`,
  "illangasekare2022intermediate": `@inproceedings{illangasekare2022intermediate,
  title     = {Intermediate-scale testing of a spatially distributed sensing technology for monitoring greenhouse gas migration through vadose zone to the atmosphere},
  author    = {Illangasekare, Tissa H and Ilie, Ana Maria and Yang, Yaobin and Soga, Kenichi and Whalley, W Richard and Trautz, Andrew},
  booktitle = {AGU Fall Meeting Abstracts},
  volume    = {2022},
  pages     = {H45J--1511},
  year      = {2022}
}`,
  "flyingdriller2025": `@misc{flyingdriller2025,
  title        = {Flying Driller: Gravity- and Inertia-Driven Penetration with Seed-inspired Flight Behavior for Enhanced Aerial Seeding},
  howpublished = {U.S. Provisional Patent Application No. 63/877,853},
  year         = {2025},
  month        = sep
}`,
  "yang2024discontinuous": `@phdthesis{yang2024discontinuous,
  title  = {Discontinuous Galerkin Finite Element Analysis and Experimental Sensors Innovations for Unsaturated Soil},
  author = {Yang, Yaobin},
  year   = {2024},
  school = {University of California, Berkeley},
  url    = {https://escholarship.org/uc/item/4gg741d8}
}`
};

document.addEventListener("DOMContentLoaded", () => {
  /* ========================================================================
     1. Dark / Light Theme Toggle
     ======================================================================== */
  const themeToggle = document.getElementById("theme-toggle");
  const htmlEl = document.documentElement;
  const savedTheme = localStorage.getItem("yy_theme") || "light";
  htmlEl.setAttribute("data-theme", savedTheme);

  const updateThemeIcon = (theme) => {
    if (!themeToggle) return;
    themeToggle.innerHTML = theme === "dark"
      ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
      : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  };
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = htmlEl.getAttribute("data-theme") === "dark" ? "light" : "dark";
      htmlEl.setAttribute("data-theme", next);
      localStorage.setItem("yy_theme", next);
      updateThemeIcon(next);
    });
  }

  /* ========================================================================
     2. Bilingual (EN / 中文) Toggle
     ======================================================================== */
  const langToggle = document.getElementById("lang-toggle");
  let currentLang = localStorage.getItem("yy_lang") || "en";

  const applyLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem("yy_lang", lang);
    htmlEl.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");

    if (langToggle) {
      langToggle.textContent = lang === "zh" ? "EN" : "中文";
    }

    document.querySelectorAll("[data-en][data-zh]").forEach((el) => {
      const val = lang === "zh" ? el.getAttribute("data-zh") : el.getAttribute("data-en");
      if (el.tagName === "INPUT") {
        el.setAttribute("placeholder", val);
      } else {
        el.innerHTML = val;
      }
    });
  };

  applyLanguage(currentLang);

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      applyLanguage(currentLang === "en" ? "zh" : "en");
    });
  }

  /* ========================================================================
     3. Mobile Navbar Menu Toggle
     ======================================================================== */
  const navToggler = document.getElementById("navbar-toggler");
  const navMenu = document.getElementById("navbar-nav");
  if (navToggler && navMenu) {
    navToggler.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navMenu.classList.remove("open"));
    });
  }

  /* ========================================================================
     4. Inline al-folio ABS & BIB Collapsible Drawers
     ======================================================================== */
  document.querySelectorAll("[data-toggle-abs]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-toggle-abs");
      const drawer = document.getElementById(targetId);
      if (!drawer) return;
      const isOpen = drawer.classList.toggle("open");
      btn.classList.toggle("active", isOpen);
    });
  });

  document.querySelectorAll("[data-bibtex]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-bibtex");
      const entry = BIBTEX_ENTRIES[key];
      if (!entry) return;

      const li = btn.closest("li");
      if (!li) return;

      let drawer = li.querySelector(".pub-bib-drawer");
      if (!drawer) {
        drawer = document.createElement("div");
        drawer.className = "pub-drawer pub-bib-drawer";
        drawer.innerHTML = `
          <div class="pub-drawer-actions">
            <button type="button" class="btn-sm copy-inline-bib" style="font-size:0.7rem;padding:2px 8px;border:1px solid var(--global-divider-color);background:transparent;color:var(--global-text-color);cursor:pointer;">Copy BibTeX</button>
          </div>
          <pre></pre>
        `;
        drawer.querySelector("pre").textContent = entry;
        drawer.querySelector(".copy-inline-bib").addEventListener("click", (e) => {
          const copyBtn = e.currentTarget;
          navigator.clipboard.writeText(entry).then(() => {
            copyBtn.textContent = currentLang === "zh" ? "已复制 ✓" : "Copied ✓";
            setTimeout(() => {
              copyBtn.textContent = "Copy BibTeX";
            }, 1800);
          });
        });
        li.querySelector(".pub-main-col").appendChild(drawer);
      }

      const isOpen = drawer.classList.toggle("open");
      btn.classList.toggle("active", isOpen);
    });
  });

  /* ========================================================================
     5. Publication Category & Search Filtering (Year-Group Aware)
     ======================================================================== */
  const pubTabs = document.querySelectorAll(".pub-tab");
  const pubSearch = document.getElementById("pub-search");
  const pubGroups = document.querySelectorAll(".pub-year-group");
  let activeCategory = "all";
  let searchQuery = "";

  const filterPublications = () => {
    const q = searchQuery.trim().toLowerCase();
    pubGroups.forEach((group) => {
      let visibleInGroup = 0;
      group.querySelectorAll("li.pub-item").forEach((item) => {
        const cat = item.getAttribute("data-category");
        const text = item.textContent.toLowerCase();
        const matchCat = activeCategory === "all" || cat === activeCategory;
        const matchQuery = !q || text.includes(q);
        const show = matchCat && matchQuery;
        item.style.display = show ? "" : "none";
        if (show) visibleInGroup++;
      });
      group.style.display = visibleInGroup > 0 ? "" : "none";
    });
  };

  pubTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      pubTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      activeCategory = tab.getAttribute("data-filter") || "all";
      filterPublications();
    });
  });

  if (pubSearch) {
    pubSearch.addEventListener("input", (e) => {
      searchQuery = e.target.value || "";
      filterPublications();
    });
  }

  /* ========================================================================
     6. Project Category Filtering
     ======================================================================== */
  const simTabs = document.querySelectorAll(".sim-tab");
  const simCards = document.querySelectorAll(".sim-card");

  simTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      simTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.getAttribute("data-sim-filter") || "all";

      simCards.forEach((card) => {
        const cat = card.getAttribute("data-sim-category") || "";
        const visible = filter === "all" || cat.split(" ").includes(filter);
        card.style.display = visible ? "" : "none";

        const vid = card.querySelector("video");
        if (vid) {
          if (!visible) {
            vid.pause();
          } else if (vid.hasAttribute("autoplay")) {
            vid.play().catch(() => {});
          }
        }
      });
    });
  });

  /* ========================================================================
     7. Lightbox Modal for Videos & High-Resolution Figures
     ======================================================================== */
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxVideo = document.getElementById("lightbox-video");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeLightboxBtn = document.getElementById("close-lightbox");

  const closeLightbox = () => {
    if (!lightboxModal) return;
    lightboxModal.classList.remove("active");
    if (lightboxVideo) {
      lightboxVideo.pause();
      lightboxVideo.removeAttribute("src");
      lightboxVideo.style.display = "none";
    }
  };

  document.querySelectorAll("[data-lightbox-src]").forEach((el) => {
    el.addEventListener("click", () => {
      const src = el.getAttribute("data-lightbox-src");
      const title = currentLang === "zh"
        ? (el.getAttribute("data-title-zh") || el.getAttribute("data-title-en"))
        : el.getAttribute("data-title-en");
      const caption = currentLang === "zh"
        ? (el.getAttribute("data-caption-zh") || el.getAttribute("data-caption-en"))
        : el.getAttribute("data-caption-en");

      if (lightboxModal && lightboxImg) {
        if (lightboxVideo) {
          lightboxVideo.pause();
          lightboxVideo.style.display = "none";
        }
        lightboxImg.style.display = "block";
        lightboxImg.src = src;
        if (lightboxTitle) lightboxTitle.textContent = title || "";
        if (lightboxCaption) lightboxCaption.textContent = caption || "";
        lightboxModal.classList.add("active");
      }
    });
  });

  document.querySelectorAll("[data-lightbox-video]").forEach((el) => {
    el.addEventListener("click", () => {
      const src = el.getAttribute("data-lightbox-video");
      const title = currentLang === "zh"
        ? (el.getAttribute("data-title-zh") || el.getAttribute("data-title-en"))
        : el.getAttribute("data-title-en");
      const caption = currentLang === "zh"
        ? (el.getAttribute("data-caption-zh") || el.getAttribute("data-caption-en"))
        : el.getAttribute("data-caption-en");

      if (lightboxModal && lightboxVideo) {
        if (lightboxImg) lightboxImg.style.display = "none";
        lightboxVideo.style.display = "block";
        lightboxVideo.src = src;
        lightboxVideo.play().catch(() => {});
        if (lightboxTitle) lightboxTitle.textContent = title || "";
        if (lightboxCaption) lightboxCaption.textContent = caption || "";
        lightboxModal.classList.add("active");
      }
    });
  });

  if (closeLightboxBtn) {
    closeLightboxBtn.addEventListener("click", closeLightbox);
  }
  if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
});
