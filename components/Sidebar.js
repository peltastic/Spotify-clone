import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon
} from '@heroicons/react/outline'

function Sidebar() {
  return (
    <div className="border-r border-gray-900 p-5 text-sm text-gray-500">
      <div className="space-y-4">
        <button className="hover:text-white flex items-center space-x-2">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="hover:text-white flex items-center space-x-2">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="hover:text-white flex items-center space-x-2">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>

        <hr className="border-t-[0.1px] border-gray-900" />
        <button className="hover:text-white flex items-center space-x-2">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>
        <button className="hover:text-white flex items-center space-x-2">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>
        <button className="hover:text-white flex items-center space-x-2">
          <RssIcon className="h-5 w-5" />
          <p>Your Episodes</p>
        </button>

        <hr className="border-t-[0.1px] border-gray-900" />

        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....</p>
        <p className='cursor-pointer hover:text-white'>Playlist name....
        </p>
      </div>
    </div>
  )
}

export default Sidebar
