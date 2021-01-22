import React, {useState} from 'react'
const initialList = [
  'Learn React',
  'Learn Firebase',
  'Learn GraphQL',
];
 
const Search = () => {
  const [value, setValue] = React.useState('');
  const [list, setList] = React.useState(initialList);
 
  const handleChange = event => {
    setValue(event.target.value);
  };
 
  const handleSubmit = event => {
    if (value) {
      setList(list.concat(value));
    }
 
    setValue('');
 
    event.preventDefault();
  };
 
  return (
    <div>
      <ul>
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
 
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};
 
export default Search;

// const Search = () => {

//   const [input, setInput] = useState('');
//   return (
//     <div>
//     <label>Please specify:</label>
//     <input value={input} onInput={e => setInput(e.target.value)}/>
//     </div>
//   );
// }
    // const [showResults, setShowResults] = React.useState(false)
    // const onClick = () => setShowResults(true)
    // return (
    //   <div>
    //     <input type="submit" value="Search" onClick={onClick} />
    //     { showResults ? <Results /> : null }
    //   </div>
    // )
  
  
  // const Results = () => (
  //   <div id="results" className="search-results">
  //     Some Results
  //   </div>
  // )

// export default Search;