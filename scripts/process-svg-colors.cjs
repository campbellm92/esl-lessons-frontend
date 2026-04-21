const fs = require("fs");
const path = require("path");

const undrawSuggestedColors = [
  "#6c63ff",
  "#dadada",
  "#f59e0b",
  "#F50057",
  "#38bdf8",
  "#17B8A6",
];

console.log("Directory name:", __dirname);
console.log("File name:", __filename);

const rawIllustrationsDir = path.join(
  __dirname,
  "../src/assets/illustrations/raw",
);

const processedIllustrationsDir = path.join(
  __dirname,
  "../src/assets/illustrations/processed",
);

const files = fs.readdirSync(rawIllustrationsDir);

files.forEach((file) => {
  if (!file.endsWith(".svg")) return;

  const inputPath = path.join(rawIllustrationsDir, file);
  const outputPath = path.join(processedIllustrationsDir, file);

  let contents = fs.readFileSync(inputPath, "utf-8");

  let updated = contents;

  undrawSuggestedColors.forEach((color) => {
    const pattern = new RegExp(`fill="${color}"`, "gi");
    updated = updated.replace(pattern, 'fill="currentColor"');

    fs.writeFileSync(outputPath, updated, "utf-8");

    console.log(`Processed: ${file}`);
  });
});
