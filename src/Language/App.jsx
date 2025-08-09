import React from "react";
import LanguageProvider from "./LanguageProvider";
import Test from "./Test";

const App = () => {
  return (
    <LanguageProvider>
      <Test />
    </LanguageProvider>
  );
};

export default App;

