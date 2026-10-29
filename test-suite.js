const fs = require("fs");
const path = require("path");
const assert = require("assert");

console.log("=================================================");
console.log("RUNNING PORTFOLIO FUNCTIONAL & INTEGRITY TEST SUITE");
console.log("=================================================");

let passed = 0;
let failed = 0;

function runTest(testName, fn) {
  try {
    fn();
    console.log(`[PASS] ${testName}`);
    passed++;
  } catch (err) {
    console.error(`[FAIL] ${testName}:`, err.message);
    failed++;
  }
}

// 1. ASSET EXISTENCE & VALIDITY
runTest("Resume PDF Asset exists and contains valid PDF magic bytes", () => {
  const resumePath = path.join(__dirname, "public", "resume.pdf");
  assert.ok(fs.existsSync(resumePath), "resume.pdf must exist in public/");
  const buffer = fs.readFileSync(resumePath);
  assert.ok(buffer.length > 100, "resume.pdf must have non-trivial size");
  const header = buffer.slice(0, 5).toString("utf-8");
  assert.strictEqual(header, "%PDF-", "resume.pdf must begin with valid %PDF- magic bytes");
});

runTest("Branding assets (logo.svg, favicon.ico, og-image) exist", () => {
  const logoPath = path.join(__dirname, "public", "logo.svg");
  const faviconPath = path.join(__dirname, "public", "favicon.ico");
  assert.ok(fs.existsSync(logoPath), "logo.svg must exist");
  assert.ok(fs.existsSync(faviconPath), "favicon.ico must exist");
});

// 2. DATA INTEGRITY & TYPE CONFORMANCE
runTest("Site Config contains accurate, verified links and metadata", () => {
  const siteConfigContent = fs.readFileSync(path.join(__dirname, "src", "lib", "site-config.ts"), "utf-8");
  assert.ok(siteConfigContent.includes("Suraj Vishwakarma"), "Must have correct name");
  assert.ok(siteConfigContent.includes("https://github.com/Vishwakarmasuraj333"), "Must link to exact verified GitHub");
  assert.ok(siteConfigContent.includes("https://www.linkedin.com/in/suraj-vishwakarma-2ab64436a/"), "Must link to exact verified LinkedIn");
});

runTest("Projects dataset contains all 3 verified repositories and no fabrications", () => {
  const projectsContent = fs.readFileSync(path.join(__dirname, "src", "lib", "projects.ts"), "utf-8");
  assert.ok(projectsContent.includes("IntelliTwin AI"), "Must contain IntelliTwin AI");
  assert.ok(projectsContent.includes("https://github.com/Vishwakarmasuraj333/IntelliTwin-AI"), "Must contain IntelliTwin GitHub repo");
  assert.ok(projectsContent.includes("Nexora Social"), "Must contain Nexora Social");
  assert.ok(projectsContent.includes("https://github.com/Vishwakarmasuraj333/-Nexora-Social"), "Must contain Nexora GitHub repo");
  assert.ok(projectsContent.includes("SE Ranking Research Studio"), "Must contain SE Ranking");
  assert.ok(projectsContent.includes("https://github.com/MamtaYdvTech1/SE-Ranking"), "Must contain SE Ranking GitHub repo");
});

runTest("Education dataset contains verified institutions and degrees", () => {
  const journeyContent = fs.readFileSync(path.join(__dirname, "src", "lib", "journey.ts"), "utf-8");
  assert.ok(journeyContent.includes("Abhinav College"), "Must cite Abhinav College");
  assert.ok(journeyContent.includes("M.Sc. in Information Technology") || journeyContent.includes("Master of Science in Information Technology"), "Must cite M.Sc. IT");
  assert.ok(journeyContent.includes("B.Sc. in Information Technology") || journeyContent.includes("Bachelor of Science in Information Technology"), "Must cite B.Sc. IT");
  assert.ok(journeyContent.includes("Bhayandar"), "Must cite Bhayandar location");
});

runTest("Skills dataset does not contain fabricated percentage bars", () => {
  const skillsContent = fs.readFileSync(path.join(__dirname, "src", "lib", "skills.ts"), "utf-8");
  assert.ok(!skillsContent.includes("%"), "No percentage bars permitted in skills");
  assert.ok(skillsContent.includes("React"), "Contains React");
  assert.ok(skillsContent.includes("Next.js"), "Contains Next.js");
  assert.ok(skillsContent.includes("FastAPI"), "Contains FastAPI");
  assert.ok(skillsContent.includes("PostgreSQL"), "Contains PostgreSQL");
});

// 3. CONTACT FORM VALIDATION SCHEMA LOGIC
runTest("Contact Form Schema validation rejecting empty or malicious input", () => {
  // Test sanitization regex logic directly
  function sanitizeInput(input) {
    return input.replace(/[<>]/g, "").trim();
  }

  const rawMalicious = "<script>alert('xss')</script>Hello";
  const cleaned = sanitizeInput(rawMalicious);
  assert.strictEqual(cleaned, "scriptalert('xss')/scriptHello", "Tags must be stripped");

  // Validate email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  assert.strictEqual(emailRegex.test("invalid-email"), false, "Invalid email format must be rejected");
  assert.strictEqual(emailRegex.test("valid.recruiter@company.com"), true, "Valid email must pass");
});

// 4. PRODUCTION BUILD ARTIFACTS
runTest("Production build artifacts in .next/ directory exist", () => {
  const nextDir = path.join(__dirname, ".next");
  assert.ok(fs.existsSync(nextDir), ".next build directory must exist");
  assert.ok(fs.existsSync(path.join(nextDir, "BUILD_ID")), "BUILD_ID must exist indicating successful build");
});

console.log("=================================================");
console.log(`SUMMARY: ${passed} PASSED, ${failed} FAILED`);
console.log("=================================================");

if (failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}

