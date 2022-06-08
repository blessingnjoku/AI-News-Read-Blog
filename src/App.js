import React from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";

const alankey =
  "65b8f7219be52ad83e66196cd56bd95d2e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>this is working</h1>
    </div>
  );
};

export default App;
