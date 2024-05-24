import axios from 'axios'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchButton() {
   
    // Handling API data
    const fetchData = (e) => {
        console.log(e)
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
        })

  }
  return (
    <div className="btn justify-center items-center mt-6 cursor-pointer" onClick={(e) => fetchData (e)} >
                <FaSearch className="w-6 h-6 text-white lg:block"/>
            </div>
  )
}

export default SearchButton

