import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Arizona commercial inspections home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Arizona Commercial Property Inspections/);
  assert.match(html, /SPECIALIZING IN COMMERCIAL PROPERTY INSPECTIONS IN ARIZONA/);
  assert.match(html, /PROPERTIES WE INSPECT/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview/);
});

test("ships the modern accessible and search-optimized design system", async () => {
  const [layout, styles, chrome] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/components/SiteChrome.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /application\/ld\+json/);
  assert.match(layout, /LocalBusiness/);
  assert.match(layout, /metadataBase/);
  assert.match(layout, /openGraph/);
  assert.match(layout, /Skip to main content/);
  assert.match(styles, /Issue 48 — modern site-wide design system/);
  assert.match(styles, /prefers-reduced-motion:reduce/);
  assert.match(styles, /@keyframes revealUp/);
  assert.match(chrome, /Clarity for every commercial property decision/);
});

test("uses the issue 44 hero and moves the previous hero into the inspector section", async () => {
  const [page, styles, heroImage] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../public/uploads/2024/02/issue-44-hero.jpg", import.meta.url)),
  ]);

  assert.match(styles, /issue-44-hero\.jpg/);
  assert.match(page, /2024\/02\/0ccce12c-cfc5-4824-b3aa-900471c17a84\.jpg/);
  assert.match(page, /const gallery=\["2024\/02\/issue-44-hero\.jpg"/);
  assert.match(page, /"2021\/05\/AZCPIimg-400x284\.jpg","2024\/02\/Advanced-HVAc-400x284\.jpg"/);
  assert.doesNotMatch(page, /const gallery=\[[^;]+AZCPI2-400x284\.jpg/);
  assert.ok(heroImage.length > 0, "the issue 44 hero image should not be empty");
});

test("keeps the inspection page header in reference order", async () => {
  const page = await readFile(
    new URL("../app/inspection-services/page.tsx", import.meta.url),
    "utf8",
  );
  const hero = page.indexOf('className="inspectionHero"');
  const intro = page.indexOf('className="inspectionIntro"');

  assert.notEqual(hero, -1);
  assert.notEqual(intro, -1);
  assert.ok(hero < intro, "the inspection hero should render before the intro band");
  assert.match(page, /inspectionHero"><img[^>]+architecture-1448221_1920\.jpg/);
  assert.match(page, /overviewImages"><img[^>]+Untitled-1\.jpg/);
  assert.match(page, /overviewImages">[\s\S]*AZCPIimg4\.jpg/);
  assert.match(page, /Home-Inspection-Software2-e1572267234321\.png/);
  assert.doesNotMatch(page, /City-view\.jpg|Advanced-HVAC-unit\.jpg|AZCPIimg5\.jpg/);
  assert.equal((page.match(/name="additional-inspection-services"/g) ?? []).length, 2);
  assert.equal((page.match(/open=\{i===0\}/g) ?? []).length, 1);
});

test("includes the complete about us route", async () => {
  const page = await readFile(
    new URL("../app/about-us/page.tsx", import.meta.url),
    "utf8",
  );

  assert.match(page, /YOUR PREMIER/);
  assert.match(page, /CERTIFIED LEAD THE WAY IN COMMERCIAL INSPECTIONS/);
  assert.match(page, /INSPECTIONS WE HAVE PERFORMED/);
  assert.match(page, /OUR SOCIALS/);
  assert.match(page, /TUCSON COMMERCIAL INSPECTIONS &amp; ALL OF ARIZONA/);
  assert.match(page, /<source src="\/CCPIA-Promo\.mp4" type="video\/mp4" \/>/);
  assert.equal((page.match(/\/uploads\//g) ?? []).length, 12);
  assert.doesNotMatch(page, /wp-content\/uploads/);
});

test("includes the complete special inspector route", async () => {
  const page = await readFile(
    new URL("../app/special-inspector/page.tsx", import.meta.url),
    "utf8",
  );

  assert.match(page, /SPECIAL INSPECTOR \(SI\) SERVICES IN PHOENIX, AZ/);
  assert.match(page, /WHAT THEY DO/);
  assert.match(page, /WHY A SPECIAL INSPECTOR IS IMPORTANT/);
  assert.match(page, /OUR CERTIFICATIONS/);
  assert.match(page, /Frequently Asked Questions: Special Inspector/);
  assert.match(page, /10\. When are inspection reports due\?/);
});

test("includes the complete property condition assessments route", async () => {
  const page = await readFile(
    new URL("../app/property-condition-assessments/page.tsx", import.meta.url),
    "utf8",
  );

  assert.match(page, /PROPERTY CONDITION<br \/>ASSESSMENTS/);
  assert.match(page, /Your Premier<br \/>Partner for Expert<br \/>Assessments/);
  assert.match(page, /AssessmentAccordion/);
  assert.match(page, /BOOK YOUR CONDITION ASSESSMENT/);
  assert.match(page, /ARIZONA PROPERTY CONDITION/);
});

test("includes the complete multi-family inspections route", async () => {
  const page = await readFile(
    new URL("../app/multi-family-inspections/page.tsx", import.meta.url),
    "utf8",
  );

  assert.match(page, /MULTI-FAMILY/);
  assert.match(page, /PROPERTY INSPECTIONS FOR MULTI-FAMILY PROPERTIES/);
  assert.match(page, /ALL OF YOUR INSPECTION NEEDS/);
  assert.match(page, /HUD Inspections/);
  assert.match(page, /NSPIRE Evaluations/);
  assert.match(page, /Capital Needs Assessments/);
  assert.match(page, /Physical Needs Assessments/);
  assert.match(page, /CHOOSE US FOR YOUR MULTI-FAMILY PROPERTY/);
});

test("ships all restored page images", async () => {
  const images = [
    "../public/uploads/2021/01/tools-1183374_1280.jpg",
    "../public/uploads/2021/03/PHOTO-2021-03-08-16-48-51-2.jpg",
    "../public/uploads/2021/05/ccpia_logo_tagline_small-1.png",
    "../public/uploads/2021/05/new_logo.jpg",
    "../public/uploads/2024/02/CMI.jpg",
    "../public/uploads/2024/02/AdobeStock_224078215.jpg",
    "../public/uploads/2024/02/AdobeStock_260656199.jpg",
    "../public/uploads/2024/02/AdobeStock_467303585.jpg",
    "../public/uploads/2024/02/AdobeStock_444745697.jpg",
    "../public/uploads/2024/02/AdobeStock_247812309.jpg",
    "../public/uploads/2024/02/AdobeStock_293716326.jpg",
    "../public/uploads/2024/02/1588271856429-roofinspectorcertificationlogoprogram.jpg",
    "../public/uploads/2024/02/astm.jpg",
    "../public/uploads/2024/02/certified-multi-unit-housing-inspector.jpg",
    "../public/uploads/2024/02/certified-professional-inspector-cpi-logo.jpg",
    "../public/uploads/2024/02/icc.jpg",
    "../public/uploads/2024/02/ifc-1.jpg",
    "../public/uploads/2024/02/nachiinstructor.jpg",
    "../public/uploads/2024/02/DALL·E-2024-02-09-10.13.21.jpg",
    "../public/uploads/2024/02/DALL·E-2024-02-09-12.00.29.jpg",
    "../public/uploads/2024/02/wall-3701557_960_720.jpg",
    "../public/uploads/2024/05/AdobeStock_225545483-scaled.jpeg",
  ];

  for (const image of images) {
    const contents = await readFile(new URL(image, import.meta.url));
    assert.ok(contents.length > 0, `${image} should not be empty`);
  }
});

test("includes the complete thermal imaging route", async () => {
  const page = await readFile(
    new URL("../app/thermal-imaging/page.tsx", import.meta.url),
    "utf8",
  );

  assert.match(page, /THERMAL IMAGING/);
  assert.match(page, /Innovative Thermal/);
  assert.match(page, /ThermalAccordion/);
  assert.match(page, /BOOK YOUR THERMAL INSPECTION/);
  assert.match(page, /ARIZONA COMMERCIAL THERMAL IMAGING/);

  const accordion = await readFile(
    new URL("../app/thermal-imaging/ThermalAccordion.tsx", import.meta.url),
    "utf8",
  );
  assert.match(accordion, /Solar \/ Photovoltaic System Scan/);
  assert.match(accordion, /Flat Roof Moisture Intrusion Scan/);
  assert.match(accordion, /Electrical Equipment Maintenance Scan/);
  assert.match(accordion, /Building Envelope Efficiency Scan/);
  assert.match(accordion, /Fire Damage Prevention and Property Safety/);
});

test("includes the complete real estate agents route", async () => {
  const page = await readFile(
    new URL("../app/real-estate-agents/page.tsx", import.meta.url),
    "utf8",
  );

  assert.match(page, /REAL ESTATE AGENTS/);
  assert.match(page, /Premier Commercial/);
  assert.match(page, /AgentAccordion/);
  assert.match(page, /CONTACT US ABOUT YOUR REAL ESTATE NEEDS TODAY/);
  assert.match(page, /SCHEDULE ONLINE/);

  const accordion = await readFile(
    new URL("../app/real-estate-agents/AgentAccordion.tsx", import.meta.url),
    "utf8",
  );
  assert.match(accordion, /Comprehensive Inspection Services Tailored for Arizona/);
  assert.match(accordion, /One-Stop Shop for All Your Due Diligence Requirements/);
  assert.match(accordion, /Unrivaled Local Expertise and Insight/);
  assert.match(accordion, /Cutting-Edge Technology and Comprehensive Reporting/);
});

test("includes the complete contact us route", async () => {
  const page = await readFile(
    new URL("../app/contact-us/page.tsx", import.meta.url),
    "utf8",
  );

  assert.match(page, /CONTACT US/);
  assert.match(page, /CALL US/);
  assert.match(page, /EMAIL US/);
  assert.match(page, /REQUEST AN INSPECTION/);
  assert.match(page, /Map of Arizona/);
  assert.match(page, /href="\/contact-us\/"/);
  assert.match(page, /ContactForm/);

  const form = await readFile(
    new URL("../app/contact-us/ContactForm.tsx", import.meta.url),
    "utf8",
  );
  assert.match(form, /data-tf-widget="uUZUOlyC"/);
  assert.match(form, /Arizona Commercial Inspections Form/);
  assert.match(form, /data-tf-transitive-search-params/);
  assert.match(form, /https:\/\/embed\.typeform\.com\/next\/embed\.js/);
  assert.doesNotMatch(form, /mailto:arizonacpi@gmail.com/);
});

test("publishes the contact us route in the static export", async () => {
  const exporter = await readFile(
    new URL("../scripts/export-github-pages.mjs", import.meta.url),
    "utf8",
  );

  assert.match(exporter, /"\/contact-us\/"/);
  assert.match(exporter, /const basePath = "";/);
  assert.doesNotMatch(exporter, /const basePath = "\/arizona-commercial-inspections";/);
});

test("redirects the legacy scheduling route to the contact page", async () => {
  const page = await readFile(
    new URL("../app/schedule-an-inspection/page.tsx", import.meta.url),
    "utf8",
  );

  assert.match(page, /redirect\("\/contact-us\/"\)/);
});

test("includes the blog index and all ten requested articles", async () => {
  const index = await readFile(new URL("../app/blog/page.tsx", import.meta.url), "utf8");
  const posts = await readFile(new URL("../app/blog/posts.ts", import.meta.url), "utf8");
  const exporter = await readFile(new URL("../scripts/export-github-pages.mjs", import.meta.url), "utf8");

  assert.match(index, /OUR BLOG/);
  assert.match(index, /blogPosts\.map/);
  const slugs = [
    "paradigms-of-precision-how-cutting-edge-drones-are-transforming-roof-inspections",
    "unveiling-the-secrets-of-old-wiring-that-could-power-new-profit",
    "why-your-hvac-system-might-be-repelling-future-tenants",
    "through-the-eyes-of-an-investor-the-overlooked-details-of-property-valuation",
    "roof-mysteries-decoding-the-language-of-leaks-and-longevity",
    "the-untold-story-of-parking-structures-a-quiet-revolution-in-compliance",
    "warning-signals-how-fire-sprinklers-can-make-or-break-tenant-safety-and-satisfaction",
    "what-your-buildings-elevator-tells-us-about-its-future-health",
    "is-your-building-an-hvac-time-bomb-discover-the-hidden-threats",
    "the-unseen-battle-fire-sprinklers-vs-code-compliance-nightmares",
  ];
  for (const slug of slugs) {
    assert.match(posts, new RegExp(`slug: "${slug}"`));
    assert.match(exporter, new RegExp(`"/${slug}/"`));
  }
});

test("opens the blog navigation link in a new tab", async () => {
  const chrome = await readFile(new URL("../app/components/SiteChrome.tsx", import.meta.url), "utf8");

  assert.match(chrome, /href="\/blog\/" target="_blank" rel="noopener noreferrer"/);
});

test("opens individual blog links in a new tab", async () => {
  const index = await readFile(new URL("../app/blog/page.tsx", import.meta.url), "utf8");
  const article = await readFile(new URL("../app/blog/BlogArticle.tsx", import.meta.url), "utf8");

  assert.ok(index.includes('href={`/${post.slug}/`} target="_blank" rel="noopener noreferrer"'));
  assert.ok(article.includes('href={`/${item.slug}/`} key={item.slug} target="_blank" rel="noopener noreferrer"'));
});
