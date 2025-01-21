import { motion } from 'framer-motion';
import { Gamepad2, Sword, Star } from 'lucide-react';

const Games = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section with Logo */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <img 
              src="/images/stink-logo.png" 
              alt="STINK! Logo" 
              className="max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Game Overview Section */}
      <section className="relative min-h-[600px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('/images/stink-moodboard.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

       {/* Content Container */}
<div className="relative max-w-6xl mx-auto px-4 py-20">
  <div className="grid md:grid-cols-2 gap-8 place-items-center">
    {/* Text Content */}
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-black/60 p-8 rounded-lg backdrop-blur-sm inline-block"
    >
      <h2 className="text-3xl font-bold mb-6">GAME OVERVIEW</h2>
      <p className="text-gray-300">
        STINK! is a comedic survival-action game where players use hilarious and disgusting abilities to fight off hordes of bathroom-themed monsters. The game combines resource management, skill upgrades, and character progression, culminating in an epic boss fight after a set survival time.
      </p>
    </motion.div>

    {/* Video Container */}
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-full flex items-center justify-center"
    >
      <div className="aspect-w-16 aspect-h-9 w-full">
        <iframe
          className="w-full h-[300px] rounded-lg"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="STINK! Game Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </motion.div>
  </div>
</div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">THE STORY</h2>
            <p className="text-gray-300 mb-8">
            STINK! follows the story of Alessandro, a man in his early thirties who embarks on a surreal and cathartic journey. During a nighttime stop at a highway rest area, his repressed frustrations and years of accumulated disappointments transport him to a distorted world where his inner demons take form as hostile creatures.
            </p>

            <h2 className="text-3xl font-bold mb-6">A DEEPER MEANING</h2>
            <p className="text-gray-300 mb-8">
            Beneath its irreverent facade, STINK! serves as a bold metaphor for managing repressed emotions and transforming pain into strength. The game delves into how negative experiences, rather than being buried, can be confronted and "expelled" in a cathartic way. With profane humor and a provocative aesthetic, STINK! addresses deep themes such as betrayal, abandonment, and the quest for personal redemption.
            </p>

            <h2 className="text-3xl font-bold mb-6">THE ORIGIN</h2>
            <p className="text-gray-300">
              This game was born from authentic pain, but aims to transform that pain into something constructive and entertaining. It's a love letter to anyone wrestling with their inner demons, a reminder that even the "dirtiest" emotions can become powerful tools for healing. Sometimes, to move forward, we must "return the shit" we were forced to swallow—even if only in a video game.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Games;