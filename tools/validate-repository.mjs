import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const errors = [];

const requiredDocs = [
  'docs/01-ui-ux-design-skills-system-spec.md',
  'docs/02-ui-ux-design-skills-workflows-and-artifacts-spec.md',
  'docs/03-ui-ux-design-skills-repository-and-contracts-spec.md',
  'docs/04-testing-and-benchmark-spec.md',
  'docs/05-ui-ux-design-customisation-packs-spec.md',
  'docs/06-ui-ux-design-extension-pack-catalogue.md',
  'docs/extraction-candidates.md',
];

const coreSkills = {
  'uiux-research': ['frame-problem', 'ingest-evidence', 'identify-mechanisms', 'define-interaction-requirements'],
  'uiux-design': ['define-hypothesis', 'map-task', 'generate-alternatives', 'select-fidelity', 'create-flow', 'prepare-prototype'],
  'uiux-evaluate': ['plan-evaluation', 'evaluate-hypothesis', 'verify-preservation', 'diagnose-failure', 'recommend-refinement'],
  'uiux-handoff': ['build-interaction-contract', 'define-acceptance-criteria', 'verify-traceability'],
};

const packAuthorCommands = [
  'pack-inspect',
  'pack-create',
  'pack-example',
  'pack-evals',
  'pack-validate',
];

const primaryExamples = [
  'level-1-destructive-confirmation',
  'level-1-inline-form-validation',
  'level-1-search-and-filter',
  'level-2-mobile-account-recovery',
  'level-2-guest-checkout',
  'level-2-api-permission-setup',
  'level-3-ai-assisted-support',
  'level-3-saas-analytics',
  'level-3-reference-driven-developer-portal',
  'level-4-operations-review-workspace',
  'level-4-ecommerce-account-area',
  'level-4-media-discovery-and-playback',
  'level-5-interrupted-financial-decision',
  'level-5-conflicting-evidence-redesign',
  'level-5-failed-interaction-hypothesis',
];

const firstWavePacks = [
  'native-mobile-critical-flow',
  'trustworthy-ai-decision-support',
  'reference-driven-saas-product',
];

function exists(rel) {
  return fs.existsSync(path.join(root, rel));
}

function read(rel) {
  return fs.readFileSync(path.join(root, rel), 'utf8');
}

function requireFile(rel) {
  if (!exists(rel)) errors.push(`missing ${rel}`);
}

for (const rel of requiredDocs) requireFile(rel);

for (const rel of [
  'README.md',
  'LICENSE',
  'CONTRIBUTING.md',
  'CHANGELOG.md',
  'CODE_OF_CONDUCT.md',
  'SECURITY.md',
  'extension-packs/README.md',
  'extension-packs/manifest.json',
  'examples/README.md',
  'evals/README.md',
  'benchmarks/README.md',
]) requireFile(rel);

let coreCommandCount = 0;
for (const [skill, commands] of Object.entries(coreSkills)) {
  const skillFile = `skills/${skill}/SKILL.md`;
  requireFile(skillFile);
  if (!exists(skillFile)) continue;

  const text = read(skillFile);
  if (!text.startsWith('---\n')) errors.push(`${skillFile}: missing YAML frontmatter`);
  if (!text.includes(`name: ${skill}`)) errors.push(`${skillFile}: incorrect/missing name`);
  if (!text.includes('description:')) errors.push(`${skillFile}: missing description`);

  for (const command of commands) {
    coreCommandCount++;
    const rel = `skills/${skill}/commands/${command}.md`;
    requireFile(rel);
    if (!exists(rel)) continue;

    const commandText = read(rel);
    for (const heading of ['## Purpose', '## Inputs', '## Outputs', '## Must preserve', '## Must not', '## Failure routing', '## Evaluation hooks']) {
      if (!commandText.includes(heading)) errors.push(`${rel}: missing ${heading}`);
    }
    if (!text.includes(`commands/${command}.md`)) errors.push(`${skillFile}: does not reference ${command}`);
  }
}

if (coreCommandCount !== 18) errors.push(`expected 18 core P0 commands, validator catalogues ${coreCommandCount}`);

const packAuthorSkill = 'skills/uiux-pack-create/SKILL.md';
requireFile(packAuthorSkill);
if (exists(packAuthorSkill)) {
  const text = read(packAuthorSkill);
  if (!text.startsWith('---\n')) errors.push(`${packAuthorSkill}: missing YAML frontmatter`);
  if (!text.includes('name: uiux-pack-create')) errors.push(`${packAuthorSkill}: incorrect/missing name`);
  if (!text.includes('description:')) errors.push(`${packAuthorSkill}: missing description`);

  for (const command of packAuthorCommands) {
    const rel = `skills/uiux-pack-create/commands/${command}.md`;
    requireFile(rel);
    if (!exists(rel)) continue;
    const commandText = read(rel);
    for (const heading of ['## Purpose', '## Inputs', '## Outputs', '## Must preserve', '## Must not', '## Failure routing', '## Evaluation hooks']) {
      if (!commandText.includes(heading)) errors.push(`${rel}: missing ${heading}`);
    }
    if (!text.includes(`commands/${command}.md`)) errors.push(`${packAuthorSkill}: does not reference ${command}`);
  }
}

for (const example of primaryExamples) {
  const rel = `examples/${example}/README.md`;
  requireFile(rel);
  if (!exists(rel)) continue;
  const text = read(rel);
  if (!text.includes('## Generation prompt')) errors.push(`${rel}: missing complete generation prompt section`);
  if (!text.includes('```text')) errors.push(`${rel}: generation prompt must use a text code fence`);
  if (!text.includes('## Primary benchmark focus')) errors.push(`${rel}: missing primary benchmark focus`);
}

const countsByLevel = new Map();
for (const example of primaryExamples) {
  const match = example.match(/^level-(\d)-/);
  if (!match) continue;
  countsByLevel.set(match[1], (countsByLevel.get(match[1]) ?? 0) + 1);
}
for (const level of ['1', '2', '3', '4', '5']) {
  if (countsByLevel.get(level) !== 3) errors.push(`expected 3 primary examples for level ${level}`);
}

for (const pack of firstWavePacks) {
  const skillFile = `skills/${pack}/SKILL.md`;
  const showcaseFile = `extension-packs/${pack}/README.md`;
  requireFile(skillFile);
  requireFile(showcaseFile);
  if (exists(skillFile) && !read(skillFile).includes(`name: ${pack}`)) errors.push(`${skillFile}: incorrect/missing name`);
  if (exists(showcaseFile)) {
    const text = read(showcaseFile);
    if (!text.includes('## Generation prompt')) errors.push(`${showcaseFile}: missing generation prompt`);
    if (!text.includes('## Evaluation focus')) errors.push(`${showcaseFile}: missing evaluation focus`);
  }
}

if (exists('commands')) errors.push('root commands/ directory is not allowed; commands must remain under their owning skill');

if (errors.length) {
  console.error(`Repository validation FAILED (${errors.length} issue${errors.length === 1 ? '' : 's'}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Repository validation PASS: 6 canonical specs, 4 core skills, ${coreCommandCount} core P0 commands, ` +
  `uiux-pack-create with ${packAuthorCommands.length} commands, ${primaryExamples.length} primary examples and ` +
  `${firstWavePacks.length} first-wave Extension Packs present.`,
);
