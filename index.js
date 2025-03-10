// Function 1: introduction(name)
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  // Function 2: introductionWithLanguage(name, language)
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Function 3: introductionWithLanguageOptional(name, language)
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Example usages:
  console.log(introduction("Aki")); 
  // "Hi, my name is Aki."
  
  console.log(introductionWithLanguage("Aki", "Ember.js"));
  // "Hi, my name is Aki and I am learning to program in Ember.js."
  
  console.log(introductionWithLanguageOptional("Gracie"));
  // "Hi, my name is Gracie and I am learning to program in JavaScript."
  
  console.log(introductionWithLanguageOptional("Gracie", "Python"));
  // "Hi, my name is Gracie and I am learning to program in Python."
  