import React, { useState } from "react";
const customDictionary = {
  /// create a dictionary with the key - value pair
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};
export default XSpellCheck = () => {
  /// fucntional comp
  const [inputText, setInputText] = useState(""); // Stores user input
  const [suggestion, setSuggestion] = useState(""); // Stores correction suggestion
  const handleInputChange = (e) => {
    const value = e.target.value; // Gets text input value
    setInputText(value); /// updates the state using the setter function initaly state is holding
    // an empty string ""
    // Check for spelling mistakes
    const words = value.split(" "); // Split input into words
    for (let word of words) {
      /// loop and check if key exist in dic if yes then return the value corresponding to it
      if (customDictionary[word]) {
        setSuggestion(`Did you mean: ${customDictionary[word]}?`);
        /// add the text to the setter function
        return; // Show only first detected correction
      }
    } /// loop ends here
    setSuggestion(""); // Clear suggestion if no mistake found
  };
  /// return jsx syntax to render the UI
  return (
    <div className="spell-check-container">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        placeholder="Enter text..."
        value={inputText} /// as the input text is dynamic render it using {}
        onChange={handleInputChange} /// as for handleInputChange
        rows="5"
        cols="50"
      />
      {suggestion ? ( /// if the suggestion is truthy value then render the ui present before : else render ui present after :
        <div className="suggestion">
          <strong>{suggestion}</strong>
        </div>
      ) : null}
    </div>
  ); // returning null means nothing will be displayed in the UI
}; /// as the suggestion is dynamic render it using curly braces becz there are different suggestions for different
/// tect inputs like the for teh and work for wrok like this from dictionary created above
//export default XSpellCheck;/// export the component and render it in the index
