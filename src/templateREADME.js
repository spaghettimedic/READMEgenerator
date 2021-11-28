const generateInstall = installText => {
  if (!installText) {
    return `
  ##Table of Contents
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Deployed Application](#deployed-application)
    `;
  } else {
    return `
    ##Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Deployed Application](#deployed-application)
  
    ##Installation
    ${installText}
    `;
  }
};

module.exports = templateData => {
  const { appName, descriptionInput, installInput, usageInput, contributeInput, link } = templateData;

  return `
  #${appName}

  ##Description
  ${descriptionInput}

  ${generateInstall(installInput)}
    
  ##Usage
  ${usageInput}

  ##Contributing
  ${contributeInput}

  ##Deployed Application
  ${link}
  `;
};
