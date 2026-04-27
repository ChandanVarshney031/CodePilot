const fs = require('fs');
const path = require('path');

const src1 = "C:\\Users\\chand\\Documents\\HTML One Shot.pdf";
const dest1 = "c:\\Users\\chand\\Desktop\\CodePilot\\public\\files\\HTML_One_Shot.pdf";

const src2 = "C:\\Users\\chand\\Documents\\CSS Notes.pdf";
const dest2 = "c:\\Users\\chand\\Desktop\\CodePilot\\public\\files\\CSS_Notes.pdf";

try {
    if (!fs.existsSync(path.dirname(dest1))) {
        fs.mkdirSync(path.dirname(dest1), { recursive: true });
    }

    fs.copyFileSync(src1, dest1);
    fs.copyFileSync(src2, dest2);
    console.log("Documents copied natively via FS successfully.");
} catch(e) {
    console.error("Error migrating files:", e);
}
