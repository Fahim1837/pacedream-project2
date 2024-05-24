import Budget from "./Budget"
import Gender from "./Gender"
import SearchBar from "./SearchBar"
import SearchButton from "./SearchButton"

function Section() {
  return (
    <form action="" method="post">
    <div className="relative top-10">
        <div ><img src="images/room-mate-filter-image.webp" alt="Roommate"  className="h-[456px] w-full object-cover"/> </div>
        <div className=" flex items-center justify-center w-full p-8 absolute top-0 bottom-0 "  >
            <div className="flex bg-white mt-6 w-[80%] flex-row justify-center gap-6 px-6 py-16 rounded-[32px]">
            <SearchBar />
            <Budget/>
            <Gender/>
            <SearchButton/>
            </div>
         </div>
    
    </div>
    </form>
  )
}

export default Section