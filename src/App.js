import React, { useState } from 'react';

function App() {
  const [options, setOptions] = useState([]);
  const [showForms, setshowForms] = useState(false);
  const [currentOption, setCurrentOption] = useState("");
  const [label, setLabel] = useState("");
  const [currentForm, setcurrentForm] = useState("");
  const [subForm, setsubForm] = useState([]);

 

  // console.log(subForm);

  if (showForms) {
    return (
      <div>
        <h1>Forms</h1>
        {
          subForm.map((item, index) => {
            return (
              <div key={{ index } + 1000}>
                {
                  item.name === "file_type" && (
                    <div>
                      <span>{item.label.label}</span>
                      <input type={item.type} />
                    </div>
                  )
                }
                {
                  item.name === "dropdown_type" && (
                    <div>
                      <span>{item.label.label}</span>
                      <select>
                        {
                          item.options.options.map((option, index) => {
                            return (
                              <option key={index}>{option}</option>
                            );
                          })
                        }
                      </select>
                    </div>
                  )
                }
                {
                  item.name === "text_type" && (
                    <div>
                      <span>{item.label.label}</span>
                      <input type={item.type} />
                    </div>
                  )
                }
              </div>
            )
          })
        }
        <button
          onClick={() => {
            setshowForms(false);
            setsubForm([]);
          }}
        >
          Create form
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Create Form</h1>

      <button
        value="file_type"
        onClick={(e) => {
          setcurrentForm(e.target.value);
          setLabel("");
        }}
      >
        Add File
      </button>
      <button
        value="dropdown_type"
        onClick={(e) => {
          setcurrentForm(e.target.value);
          setLabel("");
        }}
      >
        Add Dropdown
      </button>
      <button
        value="text_type"
        onClick={(e) => {
          setcurrentForm(e.target.value);
          setLabel("");
        }}
      >
        Add Text
      </button>

      {
        currentForm === "file_type" && (
          <div>
            <h3>File Type</h3>
            <input
              type="text"
              value={label}
              onChange={(e) => {
                setLabel(e.target.value);
              }
              }
            />
            <button
              onClick={() => {
                if (label === "") {
                  return;
                }
                subForm.push({
                  label: { label },
                  name: "file_type",
                  type: "file"
                });
                setsubForm(subForm);
                setLabel("");
              }}
            >
              Add
            </button>
          </div>
        )
      }

      {
        currentForm === "dropdown_type" && (
          <div>
            <h3>Dropdown Type</h3>
            <input
              type="text"
              value={label}
              onChange={(e) => {
                setLabel(e.target.value);
              }
              }
            />
            <input
              type="text"
              value={currentOption}
              onChange={(e) => {
                setCurrentOption(e.target.value);
              }
              }
            />
            <button
              onClick={() => {
                if (currentOption === "") {
                  return;
                }
                options.push(currentOption)
                setOptions(options);
                setCurrentOption("");
              }}
            >
              Add Option
            </button>
            <button
              onClick={() => {
                if (label === "") {
                  return;
                }
                if (options.length === 0) {
                  return;
                }

                subForm.push({
                  label: { label },
                  name: "dropdown_type",
                  options: { options },
                  type: "dropdown"
                });

                setsubForm(subForm);
                setOptions([]);
                setCurrentOption("");
                setLabel("");

              }}
            >
              Add
            </button>
          </div>
        )
      }

      {
        currentForm === "text_type" && (
          <div>
            <h3>Text Type</h3>
            <input
              type="text"
              value={label}
              onChange={(e) => {
                setLabel(e.target.value);
              }
              }
            />
            <button
              onClick={() => {
                subForm.push({
                  label: { label },
                  name: "text_type",
                  type: "text"
                });
                setsubForm(subForm);
                setLabel("");

              }}
            >
              Add
            </button>
          </div>
        )
      }

      <br></br>
      <button
        onClick={() => {
          setshowForms(true);
        }
        }
      >
        Submit
      </button>

    </div>
  );
}

export default App;