import { spawn } from "node:child_process";
import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const output = path.resolve("_site");
// The production site is served from the root of its custom domain.
// Keep generated asset and navigation URLs root-relative so CSS, JavaScript,
// images, and routes resolve correctly on arizonacommercialinspections.com.
const basePath = "";
const routes = [
  "/",
  "/inspection-services/",
  "/special-inspector/",
  "/about-us/",
  "/schedule-an-inspection/",
  "/property-condition-assessments/",
  "/multi-family-inspections/",
  "/thermal-imaging/",
  "/real-estate-agents/",
  "/contact-us/",
  "/blog/",
  "/paradigms-of-precision-how-cutting-edge-drones-are-transforming-roof-inspections/",
  "/unveiling-the-secrets-of-old-wiring-that-could-power-new-profit/",
  "/why-your-hvac-system-might-be-repelling-future-tenants/",
  "/through-the-eyes-of-an-investor-the-overlooked-details-of-property-valuation/",
  "/roof-mysteries-decoding-the-language-of-leaks-and-longevity/",
  "/the-untold-story-of-parking-structures-a-quiet-revolution-in-compliance/",
  "/warning-signals-how-fire-sprinklers-can-make-or-break-tenant-safety-and-satisfaction/",
  "/what-your-buildings-elevator-tells-us-about-its-future-health/",
  "/is-your-building-an-hvac-time-bomb-discover-the-hidden-threats/",
  "/the-unseen-battle-fire-sprinklers-vs-code-compliance-nightmares/",
  "/privacy-policy/",
  "/terms-of-service/",
  "/showlow-az-commercial-building-inspections/",
  "/kingman-arizona-commercial-building-inspections/",
  "/yuma-az-commercial-inspections/",
  "/payson-az-commercial-building-inspections/",
  "/lake-havasu-arizona-commercial-building-inspections/",
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp("dist/client", output, { recursive: true });
await writeFile(path.join(output, ".nojekyll"), "");

const server = spawn("npm", ["run", "start"], { stdio: "inherit" });

try {
  let ready = false;
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch("http://127.0.0.1:3000/");
      if (response.ok) { ready = true; break; }
    } catch {
      // The preview server may still be starting; retry until the limit below.
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  if (!ready) throw new Error("The local site did not start in time.");

  for (const route of routes) {
    const response = await fetch(`http://127.0.0.1:3000${route}`);
    if (!response.ok) throw new Error(`Could not render ${route}: ${response.status}`);
    let html = await response.text();
    html = html
      .replace(/((?:href|src|data-rsc-css-href)=["'])\/(?!\/)/g, `$1${basePath}/`)
      .replace(/(\\["'])\/(?!\/)/g, `$1${basePath}/`);
    const destination = route === "/"
      ? path.join(output, "index.html")
      : path.join(output, route.slice(1), "index.html");
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, html);
  }

  await cp(path.join(output, "index.html"), path.join(output, "404.html"));
} finally {
  server.kill("SIGTERM");
}
