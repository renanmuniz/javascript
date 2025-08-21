// Improved version with error handling
const fs = require("fs");

const filePath = "./resultados-finais+participantes-info-ordered.json";

let data;
try {
    const rawData = fs.readFileSync(filePath, "utf-8");
    data = JSON.parse(rawData);
} catch (err) {
    console.error("Error reading or parsing the file:", err.message);
    process.exit(1);
}

data.forEach((item, index) => {
    const posicao = index + 1;
    const langs = Array.isArray(item?.info?.langs) ? item.info.langs.join(", ") : "N/A";
    console.log(`${posicao}º lugar -> ${langs}`);
});