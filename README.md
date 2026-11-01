# Yaobin Yang, Ph.D. — Academic Homepage (`github.io`)

Personal academic portfolio and research homepage for **Dr. Yaobin Yang** (Postdoctoral Researcher, Department of Civil and Environmental Engineering, University of California, Berkeley).

## Features

- **Zero-Build Static Architecture**: Pure HTML5, CSS3, and vanilla JavaScript with `.nojekyll` enabled—deploys instantaneously to GitHub Pages without Jekyll/Ruby build dependencies.
- **UC Berkeley Inspired Aesthetic + Dark Mode**: Styled with Berkeley Blue (`#003262`) and California Gold (`#FDB515`) accents, plus persistent Light/Dark mode (`localStorage`).
- **Instant Bilingual Switch (`EN` / `中文`)**: One-click language toggle in the top navigation bar switching all sections between English and Simplified Chinese.
- **Interactive Research Thrusts Gallery**: High-resolution technical figures (`fieldwork.jpg`, `3DPC.jpg`, `soilcrack.jpg`, `softrobo.jpg`) with click-to-zoom lightbox modals and detailed captions.
- **Interactive Publications & Patents Explorer**: Category filtering (*Published Journals*, *Under Review & Preprints*, *Conferences*, *Patent & Thesis*), live keyword search, DOI/SSRN links, and one-click **BibTeX** citation viewer & clipboard copy.

## Directory Structure

```text
yaobinyang.github.io/
├── .nojekyll
├── index.html                  # Main academic homepage (EN / 中文)
├── README.md                   # Deployment & customization guide
└── assets/
    ├── css/
    │   └── style.css           # Responsive styles, UC Berkeley palette & Dark Mode
    ├── js/
    │   └── main.js             # Language switcher, theme toggle, pub filter & modals
    ├── docs/
    │   ├── Yaobin_Yang_CV.pdf      # English Curriculum Vitae
    │   └── Yaobin_Yang_CV_ZH.pdf   # Chinese Curriculum Vitae (中文简历)
    └── img/
        ├── photo2.jpg          # Main profile portrait (Yosemite)
        ├── photo.png           # Alternate formal portrait
        ├── fieldwork.jpg       # Thrust 1: Hayward Fault pipeline & pile sensing
        ├── 3DPC.jpg            # Thrust 2: 3D-printed concrete embedded DFOS
        ├── soilcrack.jpg       # Thrust 3: DG-FEM & phase-field soil fracture
        └── softrobo.jpg        # Thrust 4: Cosserat rod shape sensing & seedpods
```

## Quick Deployment to GitHub Pages

1. Create a new public repository on GitHub named **`<your-github-username>.github.io`**.
2. Open PowerShell in this directory (`c:\Users\yangy\Desktop\jobdocs\yaobinyang.github.io`) and run:

```powershell
git init
git add .
git commit -m "Initial commit: Academic homepage for Dr. Yaobin Yang"
git branch -M main
git remote add origin https://github.com/<your-github-username>/<your-github-username>.github.io.git
git push -u origin main
```

3. On GitHub, go to **Settings → Pages**, ensure **Source** is set to `Deploy from a branch` (`main` / `/ (root)`), and your site will be live at `https://<your-github-username>.github.io/`.
