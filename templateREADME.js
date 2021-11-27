const generateInstall = installText => {
  if (!installText) {
    return '';
  }
  return `
  ##Installation
  ${installText}
  `;
};

const generateMD = userInput => {
  return `
  #${appName}

  ##Description
  ${descriptionInput}

  
  `
}
