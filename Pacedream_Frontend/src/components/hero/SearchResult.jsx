import React, { useRef, useState } from 'react'

function SearchResult({result, changeInput}) {

    const listRef = useRef(null)
    const [listData, setListData] = useState('')

    // Clicking List Data
    const handleListClick = (target) => {
        // console.log(listRef.current.target.textContent)
        setListData(target.textContent)
        console.log(target.textContent)
        console.log(listData)
        changeInput(listData)
    }
  
    return (
        // <div>hello</div>
        <div className="ms-4 mt-1 z-10 absolute w-[420px] h-52 overflow-y-auto ">
            {result && result.map((item) => 
            <li className="li border-b-2  border-slate-400" 
            key={item.id}
            ref={listRef}
            listData = {listData}
            onClick={(e) => handleListClick(e.target)}
            > 
            
            {item.cityCountry} 
                </li>)}
        </div>
  )
}

export default SearchResult