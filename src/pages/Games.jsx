import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Games = () => {
  const games = [
    {
      title: "The Hostage",
      logo: "/images/thehostage-logo3.png",
      description: "A retro-styled psychological thriller where every choice matters. Make 100 binary decisions to save a hostage—yourself.",
      image: "/images/thehostage-moodboard.png",
      status: "In Development",
      path: "/games/the-hostage"
    },
    {
      title: "STINK!",
      logo: "/images/stink-logo.png",
      description: "A survival-action rogue-like shooter that dares to be bold, hilarious, and disgustingly fun. Face hordes of bathroom-themed monsters using outrageous abilities!",
      image: "/images/stink-moodboard.png",
      status: "In Development",
      path: "/games/stink"
    },
    // Altri giochi possono essere aggiunti qui in futuro
  ];

  return (
    <div className="min-h-screen bg-[#03050D]">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white text-center mb-12"
          >
            Our Games
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto"
          >
            Explore our collection of unique and immersive gaming experiences
          </motion.p>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12">
            {games.map((game, index) => (
              <motion.div
                key={game.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (index + 1) }}
                className="bg-[#0A0F1F] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Link to={game.path} className="block hover:opacity-95 transition-opacity">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Game Info */}
                    <div className="flex flex-col justify-center">
                      <img 
                        src={game.logo} 
                        alt={game.title}
                        className="h-60 object-contain mb-6"
                      />
                      <p className="text-gray-300 mb-6">
                        {game.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="px-4 py-2 bg-primary rounded-full text-sm font-semibold">
                          {game.status}
                        </span>
                        <span className="text-primary hover:text-secondary font-semibold">
                          Learn More →
                        </span>
                      </div>
                    </div>
                    
                    {/* Game Image */}
                    <div className="relative">
                      <img 
                        src={game.image}
                        alt={`${game.title} preview`}
                        className="rounded-lg w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Games Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">More Coming Soon</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Stay tuned for more exciting games in development. Follow us on social media to get the latest updates!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Games;