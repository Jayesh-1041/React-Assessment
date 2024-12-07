import React,{useState} from 'react'

// list for items
const items = ['Apple','Banana','Orange','Grapes','Pineapple','Watermelon','Mango',];

export default function App() {
    
        // declare React state for search input
        const [searchTerm, setSearchTerm]=useState("");

        // update search state based on user input
        // create a addEvent Hendaler function
        const handleInputChange=(e)=>{
            // e.preventDefault();

            // update state with user input
            setSearchTerm(e.target.value);
        };

        // Filter the list based on the search term
        const filteredItems = items.filter((item)=>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );
  return (
    <>
      <div className='container'>
        <h1>Search Filter</h1>

        {/* input field for search term */}

        <input type="text" placeholder='Search items........' value={searchTerm} onChange={handleInputChange}  className='search-item'/>

        <ul className='items'>

            {filteredItems.length > 0 ? (
                filteredItems.map((item, index)=>(
                    <li key={index}>
                        {item}
                    </li>
                ))

            ) : (
                <li className='item-found'>No items found</li>
            )}
        </ul>
      </div>
    </>
  );
}
