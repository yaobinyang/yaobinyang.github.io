/* ==========================================================================
   Yaobin Yang, Ph.D. — Interactive Academic Portfolio Script
   Handles: Theme Toggle, Bilingual (EN/ZH) Switch, Publication Filter,
   BibTeX Viewer/Copy, and Research Figure Lightbox
   ========================================================================== */

const BIBTEX_ENTRIES = {
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
  "Shin_EccentricLoad": `@article{Shin_EccentricLoad,
  author  = {Shin, Gyu-Beom and Yang, Yaobin and Pelecanos, Loizos and Mevoli, Federica Angela and Yeskoo, Andrew and Shantz, Tom and Soga, Kenichi},
  title   = {Distributed Fiber Optic Sensing for Monitoring Piles under Eccentric Load},
  journal = {Journal of Geotechnical and Geoenvironmental Engineering},
  year    = {2026},
  doi     = {10.1061/JGGEFK/GTENG-14998}
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
  "yang2026matrixfree": `@unpublished{yang2026matrixfree,
  author = {Yang, Yaobin and Zhang, Teng and Kumar, Krishna and Soga, Kenichi and Perez, Claudio Matias and Luo, Linqing and Shin, Gyu-Beom},
  title  = {A Matrix-Free Discontinuous Galerkin Method for Dynamic Cosserat Rod Simulation},
  year   = {2026},
  note   = {Under Review at Computer Methods in Applied Mechanics and Engineering; SSRN: https://ssrn.com/abstract=7417101}
}`,
  "TransformingCriticalWaterPipelines": `@unpublished{TransformingCriticalWaterPipelines,
  author  = {Jasiak, Maksymilian and Yang, Yaobin and Wang, Chien-Chih and Chiu, Shih-Hung and Luo, Linqing and Hubbard, Peter and Xu, Yuankun and Zhang, Youqi and Burgmann, Roland and Soga, Kenichi},
  title   = {Transforming Critical Water Pipelines into Seismic Fault Movement Sensors},
  journal = {Geophysical Research Letters},
  year    = {2026},
  note    = {Under Review at Geophysical Research Letters}
}`,
  "Shin_Asemi": `@unpublished{Shin_Asemi,
  author  = {Shin, Gyu-Beom and Yang, Yaobin and Pelecanos, Loizos and Mevoli, Federica Angela and Ouyang, Echo and Soga, Kenichi},
  title   = {A Semi-Analytical Framework for Thermal Integrity Profiling of Cast-in-situ Piles Using Temperature Response Functions},
  journal = {Journal of Geotechnical and Geoenvironmental Engineering},
  year    = {2026},
  note    = {Under Review at Journal of Geotechnical and Geoenvironmental Engineering}
}`,
  "gao2026embeddedfiberoptic": `@unpublished{gao2026embeddedfiberoptic,
  author = {Gao, Jianhao and Niu, Yujun and Yang, Yaobin and Luo, Linqing and Soga, Kenichi and Wang, Chaofeng},
  title  = {Embedded Fiber-optic Sensing in Printed Concrete for Structural Failure and Fracture Monitoring},
  year   = {2026},
  note   = {Under Review at Additive Manufacturing}
}`,
  "Yi2026Hygrochastic": `@unpublished{Yi2026Hygrochastic,
  author = {Yi, Semina and Hong, Yaoye and Jaeger, Florentin C. and Freschi, Marco and Yang, Yaobin and Zhang, Ziyun and Lee, Hajun and Soga, Kenichi and Moler, Ehren and Zhang, Teng and Bauerle, Taryn L. and Yang, Shu and Yao, Lining},
  title  = {Hygrochastic Seedpods: Engineering Microclimates for Ecological Restoration},
  year   = {2026},
  note   = {Under Review at Nature Ecology & Evolution}
}`,
  "luo2026flowinduced": `@unpublished{luo2026flowinduced,
  author = {Luo, Linqing and Yang, Yaobin and Soga, Kenichi and Ryan, John and Wu, Yuxin},
  title  = {Flow-Induced Vibration Suppression for Distributed Fiber Optic Sensing Cables in Turbulent Marine Environments},
  year   = {2026},
  note   = {Under Review at Journal of Ocean Engineering and Science}
}`,
  "Wang2026OptimalControl": `@unpublished{Wang2026OptimalControl,
  author = {Wang, Yanglan and Delle Monache, Maria Laura and Yang, Yaobin and Soga, Kenichi},
  title  = {Optimal Control Modeling for Switched Systems in Traffic Evacuation},
  year   = {2026},
  note   = {Under Review at Transportation Research Part C: Emerging Technologies; SSRN: https://ssrn.com/abstract=6727554},
  doi    = {10.2139/ssrn.6727554}
}`,
  "yang2027porepressure": `@inproceedings{yang2027porepressure,
  author    = {Yang, Yaobin and Luo, Linqing and Soga, Kenichi and Sun, Xiang},
  title     = {Fiber-optic Miniature Pore Pressure Probe -- Design, Fabrication and Application},
  booktitle = {ASCE Conference 2027},
  year      = {2027},
  note      = {Accepted Abstract, Paper Forthcoming. Abstract ID: ASCE2027-288}
}`,
  "araica2024design": `@incollection{araica2024design,
  title     = {Design and Installation of Distributed Fiber Optic Sensing Technology to Monitor HDPE Pipelines at an Earthquake Fault Crossing},
  author    = {Araica, Krista and Cicala, Gus and McLeod, Marshall P and Soga, Kenichi and Jasiak, Maksymilian and Hubbard, Peter and Wang, Chien-Chih and Yang, Yaobin and Luo, Linqing and Yeskoo, Andrew and others},
  booktitle = {Pipelines 2024},
  pages     = {561--571},
  year      = {2024}
}`,
  "sinha2024thermal": `@inproceedings{sinha2024thermal,
  title     = {Thermal Response Test of Geothermal Boreholes Using Distributed Fiber Optic Sensing},
  author    = {Sinha, Sumeet K and Yang, Jiahui and Yang, Yaobin and Nigh, Asha and Soga, Kenichi},
  booktitle = {Geo-Congress 2024},
  pages     = {493--503},
  year      = {2024}
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
  school = {University of California, Berkeley}
}`
};

document.addEventListener("DOMContentLoaded", () => {
  /* ------------------------------------------------------------------------
     1. Theme Toggle (Light / Dark)
     ------------------------------------------------------------------------ */
  const themeBtn = document.getElementById("theme-toggle");
  const themeLabel = document.getElementById("theme-label");
  const savedTheme = localStorage.getItem("yy_theme") || "light";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("yy_theme", theme);
    if (themeLabel) {
      const currentLang = document.documentElement.getAttribute("data-lang") || "en";
      if (theme === "dark") {
        themeLabel.textContent = currentLang === "zh" ? "浅色" : "Light";
      } else {
        themeLabel.textContent = currentLang === "zh" ? "深色" : "Dark";
      }
    }
  }

  applyTheme(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  /* ------------------------------------------------------------------------
     2. Bilingual Switcher (EN / 中文)
     ------------------------------------------------------------------------ */
  const langBtn = document.getElementById("lang-toggle");
  const langLabel = document.getElementById("lang-label");
  const savedLang = localStorage.getItem("yy_lang") || "en";

  function applyLanguage(lang) {
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    localStorage.setItem("yy_lang", lang);

    if (langLabel) {
      langLabel.textContent = lang === "zh" ? "EN" : "中文";
    }

    // Update all elements with data-en / data-zh
    document.querySelectorAll("[data-en][data-zh]").forEach((el) => {
      const content = lang === "zh" ? el.getAttribute("data-zh") : el.getAttribute("data-en");
      if (el.tagName === "INPUT") {
        el.setAttribute("placeholder", content);
      } else {
        el.innerHTML = content;
      }
    });

    // Refresh theme button label in the active language
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    applyTheme(currentTheme);
  }

  applyLanguage(savedLang);

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-lang") || "en";
      applyLanguage(current === "en" ? "zh" : "en");
    });
  }

  /* ------------------------------------------------------------------------
     3. Mobile Navigation Menu
     ------------------------------------------------------------------------ */
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  /* ------------------------------------------------------------------------
     4. Publications Filter & Live Search
     ------------------------------------------------------------------------ */
  const pubTabs = document.querySelectorAll(".pub-tab");
  const pubSearch = document.getElementById("pub-search");
  const pubItems = document.querySelectorAll(".pub-item");
  let activeCategory = "all";

  function filterPublications() {
    const query = (pubSearch ? pubSearch.value : "").trim().toLowerCase();

    pubItems.forEach((item) => {
      const category = item.getAttribute("data-category") || "";
      const text = item.textContent.toLowerCase();

      const matchesCategory =
        activeCategory === "all" ||
        category.split(" ").includes(activeCategory);
      const matchesQuery = !query || text.includes(query);

      item.style.display = matchesCategory && matchesQuery ? "" : "none";
    });
  }

  pubTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      pubTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      activeCategory = tab.getAttribute("data-filter") || "all";
      filterPublications();
    });
  });

  if (pubSearch) {
    pubSearch.addEventListener("input", filterPublications);
  }

  /* ------------------------------------------------------------------------
     5. BibTeX Modal & Copy
     ------------------------------------------------------------------------ */
  const bibModal = document.getElementById("bibtex-modal");
  const bibPre = document.getElementById("bibtex-content");
  const bibCopyBtn = document.getElementById("bibtex-copy-btn");
  const bibCloseBtns = document.querySelectorAll("[data-close-bibtex]");

  document.querySelectorAll("[data-bibtex]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-bibtex");
      const entry = BIBTEX_ENTRIES[key] || "";
      if (bibPre && bibModal) {
        bibPre.textContent = entry;
        bibModal.classList.add("open");
      }
    });
  });

  bibCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (bibModal) bibModal.classList.remove("open");
    });
  });

  if (bibCopyBtn && bibPre) {
    bibCopyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(bibPre.textContent).then(() => {
        const lang = document.documentElement.getAttribute("data-lang") || "en";
        const originalText = bibCopyBtn.textContent;
        bibCopyBtn.textContent = lang === "zh" ? "已复制！" : "Copied!";
        setTimeout(() => {
          bibCopyBtn.textContent = originalText;
        }, 1800);
      });
    });
  }

  /* ------------------------------------------------------------------------
     6. Research Figure Lightbox Modal
     ------------------------------------------------------------------------ */
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxCloseBtns = document.querySelectorAll("[data-close-lightbox]");

  document.querySelectorAll("[data-lightbox-src]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const src = trigger.getAttribute("data-lightbox-src");
      const lang = document.documentElement.getAttribute("data-lang") || "en";
      const title =
        lang === "zh"
          ? trigger.getAttribute("data-title-zh")
          : trigger.getAttribute("data-title-en");
      const caption =
        lang === "zh"
          ? trigger.getAttribute("data-caption-zh")
          : trigger.getAttribute("data-caption-en");

      if (lightboxImg && lightboxModal) {
        lightboxImg.src = src;
        if (lightboxTitle) lightboxTitle.textContent = title || "";
        if (lightboxCaption) lightboxCaption.textContent = caption || "";
        lightboxModal.classList.add("open");
      }
    });
  });

  lightboxCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (lightboxModal) lightboxModal.classList.remove("open");
    });
  });

  // Close modals on backdrop click or Escape key
  window.addEventListener("click", (e) => {
    if (e.target === bibModal) bibModal.classList.remove("open");
    if (e.target === lightboxModal) lightboxModal.classList.remove("open");
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (bibModal) bibModal.classList.remove("open");
      if (lightboxModal) lightboxModal.classList.remove("open");
    }
  });

  /* ------------------------------------------------------------------------
     7. Scroll Spy for Navbar Active Highlight
     ------------------------------------------------------------------------ */
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let currentId = "";
    const scrollY = window.scrollY + 120;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = sec.getAttribute("id");
      }
    });

    navItems.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });
});
