const inquirer = require('inquirer');
const generateMD = require('./src/templateREADME.js');
const { writeFile } = require('./utils/generateMD.js');

const promptUser = READMEdata => {
  // if there's no 'README' array property, create one
  if (!READMEdata) {
    READMEdata = [];
  }

  return inquirer.prompt([
    {
      type: 'input',
      name: 'appName',
      message: 'What is the name of your application? (Required)',
      validate: appNameInput => {
        if (appNameInput) {
          return true;
        } else {
          console.log('An application name is required!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your application: (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('A description of your application is required!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmInstall',
      message: 'Do you want to include an "Installation" section in your README? (Optional)',
      default: false
    },
    {
      type: 'input',
      name: 'install',
      message: 'Provide your installation instructions here:',
      when: ({ confirmInstall }) => {
        if (confirmInstall) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions on how to use your application: (Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Usage instructions are required!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmContribute',
      message: 'Would you like to write your own "Contributing" section? (Optional)',
      default: false
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Provide your instructions for contributing to this project here:',
      when: ({ confirmContribute }) => {
        if (confirmContribute) {
          return true;
        } else {
          console.log(`
  ===============================================================================================
  A brief "Contributing" section will be written for you with a link to the Contributor Covenant.
  ===============================================================================================
          `);
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'link',
      message: 'Provide the link to your deployed application: (Required)',
      validate: linkInput => {
        if (linkInput) {
          return true;
        } else {
          console.log('You must provide a link to your deployed application!');
          return false;
        }
      }
    }
  ])
};

promptUser()
  .then(READMEdata => {
    return generateMD(READMEdata);
  })
  .then(pageMD => {
    console.log('Your README.md file has been generated!');
    return writeFile(pageMD);
  })
  .catch(err => {
    console.log(err);
  });
