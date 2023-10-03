const fs = require('fs');

// Path to your text file
const filePath = './text.txt';

// Regular expression to match HH:MM:SS timestamps
const timeStampRegex = /\b(?:[01]?\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)\b/g;

// Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Remove the time stamps
    const cleanedData = data.replace(timeStampRegex, '');

    // Write the cleaned data back to the file (or to a new file if you prefer)
    fs.writeFile(filePath, cleanedData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
        } else {
            console.log('Time stamps removed successfully!');
        }
    });
});
