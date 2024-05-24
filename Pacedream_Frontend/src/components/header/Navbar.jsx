
function Navbar() {
  return (
    <div className="items-center justify-end lg:flex ">
            <nav className="flex items-center gap-4 ml-48">
                <li className="list-none"><a href="#">Find Roomate  &nbsp;/</a></li>
                <li className="list-none"><a href="#">About  &nbsp;/</a></li>
                <li className="list-none"><a href="#">Contact  &nbsp;/</a></li>

                <button >USD  </button>
                <button className="list-none"><img className="w-4 h-4 rounded-full" src="public\images\usa.webp" alt="language" /></button>
            </nav>
        </div>
  )
}

export default Navbar