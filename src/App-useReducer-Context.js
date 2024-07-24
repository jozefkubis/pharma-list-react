import ampularium from "./data";
import { useState } from "react";

const App = (e) => {
  const [searchingMed, setSearchingMed] = useState("");
  const [filteredMed, setFilteredMed] = useState([]);

  const setFirstWordBold = (result) => {
    const words = result.split(" ");
    const firstWord = words[0];
    const restOfSentence = words.slice(1).join(" ");

    return (
      <span>
        <span style={{ fontWeight: "bold", fontSize: "15px"}}>{firstWord}</span>
        <span> {restOfSentence}</span>
      </span>
    );
  };

  const medsOnPage = (e) => {
    e.preventDefault();

    const medsAfterFilter = ampularium.filter((meds) => {
      return meds.nazov.toLowerCase().includes(searchingMed.toLowerCase());
    });

    if (searchingMed) {
      setFilteredMed(medsAfterFilter);
    }
    setSearchingMed("");
  };

  return (
    <section className="section">
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Search Med"
          value={searchingMed}
          onChange={(e) => setSearchingMed(e.target.value)}
        />
        <button className="submit-btn" onClick={medsOnPage}>
          Submit
        </button>
      </form>

      <div className="filtered-med">
        {filteredMed.map((oneMed) => {
          const {
            id,
            nazov,
            skupina,
            MU,
            indikacie,
            davkovanie,
            sposobPodania,
            nastupAodoznenieUcinku,
            NU,
            KI,
          } = oneMed;

          return (
            <div className="printed-med" key={id}>
              <h2>{nazov}</h2>
              <p>{setFirstWordBold(skupina)}</p>
              <p>{setFirstWordBold(MU)}</p>
              <p>{setFirstWordBold(indikacie)}</p>
              <p>{setFirstWordBold(davkovanie)}</p>
              <p>{setFirstWordBold(sposobPodania)}</p>
              <p>{setFirstWordBold(nastupAodoznenieUcinku)}</p>
              <p>{setFirstWordBold(NU)}</p>
              <p>{setFirstWordBold(KI)}</p>
              <div className="div-selector"></div>
            </div>
          );
        })}
      </div>

      <div className="refresh-btn-div">
        <button className="refresh-btn" onClick={() => setFilteredMed([])}>Refresh</button>
      </div>
    </section>
  );
};

export default App;
