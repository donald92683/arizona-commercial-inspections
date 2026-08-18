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
  assert.match(page, /inspectionHero"><img[^>]+City-view\.jpg/);
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
