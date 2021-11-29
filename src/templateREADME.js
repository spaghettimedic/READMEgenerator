const generateInstall = installText => {
  if (!installText) {
    return `
  ## Table of Contents
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Deployed Application](#deployed-application)
    `;
  } else {
    return `
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Deployed Application](#deployed-application)
  
  ## Installation
  ${installText}
    `;
  }
};

const generateContribute = contributeText => {
  if (!contributeText) {
    return `This is an open source project and as such, please follow the [Contributor Covenant](https://www.contributor-covenant.org/).`
  } else {
    return `${contributeText}`
  }
};

module.exports = templateData => {
  const { appName, description, install, usage, contribute, link } = templateData;

  return `
  # ${appName}

  ## Description
  ${description}
  ${generateInstall(install)}
  ## Usage
  ${usage}

  ## Contributing
  ${generateContribute(contribute)}

  ## Deployed Application
  ${link}
  `;
};
