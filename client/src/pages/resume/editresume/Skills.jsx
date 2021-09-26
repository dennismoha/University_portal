import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function Skills() {
  const [selectedOption, setSelectedOption] = useState(null);
  console.log(selectedOption);

  return (
    <div className="App">
      {/* <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isMulti
        className="basic-multi-select"
        classNamePrefix="select"
      /> */}
    </div>
  );
}
// export default Skills;
