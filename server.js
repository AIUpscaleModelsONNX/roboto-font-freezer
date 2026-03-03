const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static('public'));

// API endpoint to download font
app.get('/download-font/:fontName', (req, res) => {
    const fontName = req.params.fontName;
    const fontPath = path.join(__dirname, 'fonts', `${fontName}.woff`);

    fs.access(fontPath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).send('Font not found');
        }
        res.download(fontPath, `${fontName}.woff`);
    });
});

// API endpoint to freeze a font
app.post('/freeze-font', (req, res) => {
    // Logic to freeze the font goes here
    // This is a placeholder response
    res.send('Font freezing functionality not implemented yet.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
