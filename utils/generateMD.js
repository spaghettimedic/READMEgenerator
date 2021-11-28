const fs = require('fs');

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'README created!'
      });
    });
  });
};

module.exports = { writeFile };
