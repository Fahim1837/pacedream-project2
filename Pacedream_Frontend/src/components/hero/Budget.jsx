import React from 'react'

function Budget() {
  return (
    <div>
    <h2>Budget</h2>
    <div className='flex flex-row gap-2 items-center'>
        <input className="block border-neutral-200 focus:border-blue-500 focus:ring focus:ring-blue-800 focus:ring-opacity-50  bg-white dark:border-neutral-700 dark:focus:ring-blue-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 h-[46px]
                px-4 py-3 w-[110px] rounded-3xl outline-none " type="text" placeholder='Maximun'/>
         <input className="block border-neutral-200 focus:border-blue-500 focus:ring focus:ring-blue-800 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-blue-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 h-[46px]
                px-4 py-3 w-[110px] rounded-3xl outline-none" type="text" placeholder='Minimum>'/>

    </div>
    </div>

  )
}

export default Budget