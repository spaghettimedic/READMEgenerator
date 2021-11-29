const generateInstall = installText => {
  if (installText) {
    return `
## Installation
${installText}
`;
  } else {
    return ``;
  }
};

const generateLicense = licenseOption => {
  if (licenseOption === 'None') {
    return ``
  } else {
    return `
## License
This application is under a ${licenseOption} license.
`;}
}

const generateContribute = contributeText => {
  if (!contributeText) {
    return `This is an open source project and as such, please follow the [Contributor Covenant](https://www.contributor-covenant.org/).`
  } else {
    return `${contributeText}`
  }
};

const generateQuestions = (githubUserName, email) => {
  return `Check out my GitHub profile [here!](https://www.github.com/${githubUserName}) I can be reached directly at ${email} should you have any questions.`;
};

module.exports = (templateData) => {

  const { appName, description, install, usage, license, contribute, githubUserName, email, link } = templateData;

  // if user chose to have an installation section, insert a bullet for installation into Table of Contents
  if (install) {
    var installBullet = `
* [Installation](#installation)`;
  } else {
    var installBullet = ``;
  }

  // if user chose to have a license for their project, insert a bullet for license into Table of Contents and insert badge for that license at top of README.md
  if (license) {
    const licenseBadges = [
      'https://img.shields.io/static/v1?label=License&message=MIT&color=green',
      'https://img.shields.io/static/v1?label=License&message=Apache&color=blue',
      'https://img.shields.io/static/v1?label=License&message=GPL&color=red'
    ];
    if (license === 'MIT') {
      var licenseBadge = `![license badge](${licenseBadges[0]})`
    } else if (license === 'Apache') {
      var licenseBadge = `![license badge](${licenseBadges[1]})`
    } else if (license === 'GPL') {
      var licenseBadge = `![license badge](${licenseBadges[2]})`
    } else {
      var licenseBadge = ``
    }

    var licenseBullet = `
* [License](#license)`
  } else {
    var licenseBullet = ``;
  }

  return `# ${appName} ${licenseBadge}

## Description
${description}

## Table of Contents${installBullet}
* [Usage](#usage)${licenseBullet}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Deployed Application](#deployed-application)
${generateInstall(install)}
## Usage
${usage}
${generateLicense(license)}
## Contributing
${generateContribute(contribute)}

## Tests
<!-- Place your tests here -->

## Questions
${generateQuestions(githubUserName, email)}

## Deployed Application
${link}`;
};
