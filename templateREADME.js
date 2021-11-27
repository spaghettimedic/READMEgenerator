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

const generateMD = userInput => {
  return `
  #${appName}

  ##Description
  ${descriptionInput}

  ${generateInstall()}
    
  ##Usage
  ${usageInput}

  ##Contributing
  ${contributeInput}

  ##Deployed Application
  ${link}
  `;
};
