const fs = require('fs');

try {
    const data = fs.readFileSync('courses.json', 'utf-8');
    const courses = JSON.parse(data);
    
    // Write as a JS file defining global COURSES_DATA
    const content = `// Static fallback course data for CodePilot
const COURSES_DATA = ${JSON.stringify(courses, null, 2)};
`;
    fs.writeFileSync('js/coursesData.js', content, 'utf-8');
    console.log('Successfully generated js/coursesData.js');
} catch (e) {
    console.error('Error generating js/coursesData.js:', e);
}
