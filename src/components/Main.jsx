import Button from "./utils/Button";
import CardGenerator from "./utils/CardGenerator";
import languages from "../data/languages";
import { useState } from "react";

export default function Main() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const buttons = languages.map((language) => {
    return (
      <Button
        title={language.title}
        key={language.id}
        onClick={() => {
          setSelectedLanguage(language);
        }}
      />
    );
  });

  return (
    <>
      <div className="upper-main">
        <h1>Learn Web development</h1>
      </div>
      <div className="container">
        <ul>{buttons}</ul>
        {selectedLanguage && (
          <CardGenerator
            title={selectedLanguage.title}
            description={selectedLanguage.description}
          />
        )}
      </div>
    </>
  );
}
