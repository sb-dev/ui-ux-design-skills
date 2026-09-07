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
  'docs/extraction-candidates.md',
];
const skills = {
  'uiux-research': ['frame-problem','ingest-evidence','identify-mechanisms','define-interaction-requirements'],
  'uiux-design': ['define-hypothesis','map-task','generate-alternatives','select-fidelity','create-flow','prepare-prototype'],
  'uiux-evaluate': ['plan-evaluation','evaluate-hypothesis','verify-preservation','diagnose-failure','recommend-refinement'],
  'uiux-handoff': ['build-interaction-contract','define-acceptance-criteria','verify-traceability'],
};
function exists(rel) { return fs.existsSync(path.join(root, rel)); }
function read(rel) { return fs.readFileSync(path.join(root, rel), 'utf8'); }
for (const rel of requiredDocs) if (!exists(rel)) errors.push(`missing ${rel}`);
for (const rel of ['README.md','LICENSE','CONTRIBUTING.md','CHANGELOG.md','CODE_OF_CONDUCT.md','SECURITY.md','extension-packs/README.md','examples/README.md','evals/README.md','benchmarks/README.md']) {
  if (!exists(rel)) errors.push(`missing ${rel}`);
}
let commandCount = 0;
for (const [skill, commands] of Object.entries(skills)) {
  const skillFile = `skills/${skill}/SKILL.md`;
  if (!exists(skillFile)) { errors.push(`missing ${skillFile}`); continue; }
  const text = read(skillFile);
  if (!text.startsWith('---\n')) errors.push(`${skillFile}: missing YAML frontmatter`);
  if (!text.includes(`name: ${skill}`)) errors.push(`${skillFile}: incorrect/missing name`);
  if (!text.includes('description:')) errors.push(`${skillFile}: missing description`);
  for (const command of commands) {
    commandCount++;
    const rel = `skills/${skill}/commands/${command}.md`;
    if (!exists(rel)) { errors.push(`missing ${rel}`); continue; }
    const c = read(rel);
    for (const heading of ['## Purpose','## Inputs','## Outputs','## Must preserve','## Must not','## Failure routing','## Evaluation hooks']) {
      if (!c.includes(heading)) errors.push(`${rel}: missing ${heading}`);
    }
    if (!text.includes(`commands/${command}.md`)) errors.push(`${skillFile}: does not reference ${command}`);
  }
}
if (commandCount !== 18) errors.push(`expected 18 P0 commands, validator catalogues ${commandCount}`);
if (exists('commands')) errors.push('root commands/ directory is not allowed; commands must remain self-contained under their owning skill');
if (errors.length) {
  console.error(`Repository validation FAILED (${errors.length} issue${errors.length === 1 ? '' : 's'}):`);
  for (const e of errors) console.error(`- ${e}`);
  process.exit(1);
}
console.log(`Repository validation PASS: 4 skills, ${commandCount} P0 commands, canonical docs and scaffold surfaces present.`);
