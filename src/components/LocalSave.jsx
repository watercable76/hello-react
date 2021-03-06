import React from "react";

// demo of local storage
const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

function LocalSave() {
  const [value, setValue] = useStateWithLocalStorage(
    'myValueInLocalStorage'
  );

  const onChange = event => setValue(event.target.value);

  return (
    <div>
      <h1>Hello React with Local Storage!</h1>
      <label for='name'>
        Please enter your name here: <input id="name" value={value} type="text" onChange={onChange} />
      </label>



      <p>{value}</p>
    </div>
  );
}

export default LocalSave;