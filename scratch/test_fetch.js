const https = require('https');

function get(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                resolve({
                    statusCode: res.statusCode,
                    headers: res.headers,
                    data: data
                });
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

async function run() {
    try {
        console.log('Fetching /api/test...');
        const testRes = await get('https://codepilot-backend-m2xi.onrender.com/api/test');
        console.log('Test status:', testRes.statusCode);
        console.log('Test data:', testRes.data);

        console.log('Fetching /api/courses...');
        const coursesRes = await get('https://codepilot-backend-m2xi.onrender.com/api/courses');
        console.log('Courses status:', coursesRes.statusCode);
        console.log('Courses data (first 500 chars):', coursesRes.data.substring(0, 500));
    } catch (e) {
        console.error('Error fetching from Render:', e.message);
    }
}

run();
