import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const isActive = (path) => location.pathname === path;

  const games = [
    { title: "STINK!", path: "/games/stink" },
    // Altri giochi possono essere aggiunti qui in futuro
  ];
  
  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            Pixel Infinity Studios
          </Link>
          <div className="space-x-8 flex items-center">
            {/* Games Dropdown */}
            <div className="relative h-16 flex items-center">
              {/* Games Link */}
              <div 
                onMouseEnter={() => setIsDropdownOpen(true)}
              >
                <Link 
                  to="/games" 
                  className={`hover:text-primary transition-colors ${isActive('/games') ? 'text-primary' : ''}`}
                >
                  Games
                </Link>
              </div>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div 
                  className="absolute left-0 top-16 w-48 bg-black shadow-xl rounded-md z-50"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {games.map((game) => (
                    <Link
                      key={game.path}
                      to={game.path}
                      className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      {game.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/team" 
              className={`hover:text-primary transition-colors ${isActive('/team') ? 'text-primary' : ''}`}
            >
              Team
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;