import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SearchResult from './SearchResult'

function SearchBar({listData}) {
	const [input, setInput] = useState("")
	const [result, setResult] = useState([])

	// Handling Change of Search Bar
	function handleChange (target) {
		setInput(target.value)
	}

	function changeInput (listData) {
		setInput(listData)
	}
	
	// Handling the API 
	useEffect (() => {
		result.map((item) => console.log(item.id))
		const fetchData = (input) => {
			
			const request = {text : input}
			axios.post('http://localhost:8080/location/data', request)
				.then((res) => {
					setResult (res.data)
					
				})
				.catch((err) => console.log(err))
   		}
		fetchData (input)

	}, [input])


  return (
    <div>
        <h2>Where</h2>
            <div>
                <input className="block border-neutral-200 focus:border-blue-500 focus:ring focus:ring-blue-800 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-blue-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 h-[46px] before:px-4 py-3 lg:w-[444px] w-[288px] px-3 rounded-3xl outline-none" 
                type="text" 
                placeholder='Dhaka, Bangladesh' 
                value={input}
                onInput={(event) => handleChange(event.target)}/>
            </div>
			<SearchResult result = {result} changeInput={changeInput}  />
    </div>
  )
}

export default SearchBar
