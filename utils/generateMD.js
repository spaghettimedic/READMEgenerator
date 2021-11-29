const fs = require('fs');

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./generatedMD/README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'README created!'
      });
      console.log(`
Your README.md file has been generated!
It will appear in the "generatedMD" folder at the root directory of README Generator.
=====================================================================================
Note: a "Tests" section was also created but because of the dynamic nature of tests
for different applications, it is blank. Feel free to fill it in with tests of your application,
or delete it if desired, before deployment.`);
    });
  });
};

module.exports = { writeFile };
