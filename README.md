# Suraj Vishwakarma — Premium 3D Full Stack Developer Portfolio

> **Digital Experiences Engineered with Precision & Architectural Discipline**  
> Brand: SURAJ VISHWAKARMA — DIGITAL EXPERIENCES  
> Role: Full Stack Developer & M.Sc. IT Student  
> Location: Bhayandar / Mumbai, Maharashtra, India  

---

## ✦ Luxury Visual Identity & Design Tokens

Designed with a balanced **Maroon + Champagne Gold + Warm Ivory** editorial aesthetic:

- **Deep Burgundy**: `#2B1019`
- **Dark Maroon**: `#401421`
- **Wine Red**: `#641E32`
- **Rich Burgundy Accent**: `#7D293F`
- **Champagne Gold**: `#D6B477`
- **Soft Gold**: `#E8D2A1`
- **Warm Ivory**: `#F7F1E8`
- **Muted Rose**: `#BCA3A8`
- **Dark Surface**: `#1C1015`
- **Subtle Border**: `rgba(214, 180, 119, 0.20)`

### Typography
- **Headings**: Editorial serif typography powered by `Playfair Display`
- **Body**: High-readability technical typography powered by `Manrope`

---

## 🛠 Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: TypeScript (Strict typing)
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber (`@react-three/fiber`), `@react-three/drei`
- **Animations**: Framer Motion & CSS Micro-Interactions
- **Icons**: Lucide React + Bespoke SV Monogram Vector Logos
- **Forms & Validation**: React Hook Form, Zod Schema Enforcement
- **Backend APIs**:
  - `/api/contact`: Rate-limited, honeypot-protected, sanitized, persists to `.data/submissions.json` with Resend email provider support.
  - `/api/github`: Cached real-time GitHub integration with fallback.

---

## 🚀 Getting Started

### 1. Installation
```bash
# Navigate to the project directory
cd suraj-vishwakarma-portfolio

# Install dependencies
npm install
```

### 2. Environment Configuration
Copy the example environment file:
```bash
cp .env.example .env.local
```

Configure your parameters inside `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_EMAIL=surajvishwakarma333@gmail.com

# Optional: To enable real-time email dispatch from the contact form
# RESEND_API_KEY=re_your_api_key_from_resend.com

# Optional: To increase GitHub API rate limits
# GITHUB_TOKEN=ghp_your_github_token
```

### 3. Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Running Verification Tests
```bash
npm test
```

### 5. Production Build
```bash
npm run build
npm run start
```

---

## 📄 Resume PDF Replacement
The portfolio serves the verified resume from:
```
public/resume.pdf
```
To update your resume with any newer revisions, replace the file located at `public/resume.pdf`. The single-click download CTA in the navigation and hero section will stream the updated file immediately.

---

## 📂 Architecture & Directory Structure

```
suraj-vishwakarma-portfolio/
├── public/
│   ├── favicon.ico             # Custom SV monogram favicon
│   ├── logo.svg                # Vector SVG architectural emblem
│   ├── og-image.png            # Open Graph social preview
│   └── resume.pdf              # Verified CV asset
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/route.ts # Rate-limited Zod contact handler
│   │   │   └── github/route.ts  # Cached GitHub activity fetcher
│   │   ├── globals.css         # Luxury tokens & dark/light theme classes
│   │   ├── icon.svg            # Dynamic SVG favicon
│   │   ├── layout.tsx          # SEO metadata, JSON-LD Schema & Fonts
│   │   ├── page.tsx            # Main single-page portfolio layout
│   │   ├── robots.ts           # Robots.txt configuration
│   │   └── sitemap.ts          # XML Sitemap generator
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx  # Accessible mobile drawer (ESC key + focus trap)
│   │   │   ├── Navbar.tsx      # Sticky glass navigation with active link tracking
│   │   │   ├── ScrollProgress.tsx # Champagne progress indicator
│   │   │   └── ThemeContext.tsx # Persistent light/dark state
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ExperienceSection.tsx # Development Journey
│   │   │   ├── EducationSection.tsx  # Abhinav College timeline
│   │   │   ├── GithubActivitySection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── three/
│   │   │   ├── HeroScene.tsx         # Lazy 3D container & WebGL detection
│   │   │   ├── InteractiveCanvas.tsx # R3F Canvas instance
│   │   │   ├── SculpturalComposition.tsx # Burgundy glass & champagne orbit rings
│   │   │   └── SceneFallback.tsx     # Graceful CSS 3D fallback
│   │   └── ui/
│   │       ├── AtmosphereBackground.tsx # Burgundy atmosphere & stardust
│   │       ├── Button.tsx
│   │       ├── Logo.tsx             # Custom interlocking SV vector logo
│   │       ├── ProjectCard.tsx      # 3D interactive tilt cards
│   │       ├── ProjectModal.tsx     # Architectural deep-dive modal
│   │       ├── ResumeModal.tsx      # Executive CV viewer & download guide
│   │       └── SectionHeading.tsx
│   ├── lib/
│   │   ├── journey.ts           # Education & milestone datasets
│   │   ├── projects.ts          # Centrally typed projects data
│   │   ├── site-config.ts       # Central brand & link configuration
│   │   ├── skills.ts            # Categorized skills matrix
│   │   ├── utils.ts
│   │   └── validation.ts        # Zod validation & sanitization
│   └── types/
│       └── index.ts             # Strict TypeScript definitions
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🌐 Verified Links

- **GitHub**: [https://github.com/Vishwakarmasuraj333](https://github.com/Vishwakarmasuraj333)
- **LinkedIn**: [https://www.linkedin.com/in/suraj-vishwakarma-2ab64436a/](https://www.linkedin.com/in/suraj-vishwakarma-2ab64436a/)
- **Projects**:
  - [IntelliTwin AI](https://github.com/Vishwakarmasuraj333/IntelliTwin-AI) (Cyber ML Anomaly Detection)
  - [Nexora Social](https://github.com/Vishwakarmasuraj333/-Nexora-Social) (Publishing Workflows)
  - [SE Ranking Research Studio](https://github.com/MamtaYdvTech1/SE-Ranking) (SERP Intelligence)

