import { motion } from 'framer-motion';
import { Gamepad2, Brain, Target } from 'lucide-react';

const TheHostage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section with Logo */}
      <section className="py-20" style={{ backgroundColor: '#273238' }}>
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <img 
              src="/images/thehostage-logo3.png" 
              alt="The Hostage Logo" 
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
            backgroundImage: `url('/images/thehostage-moodboard.png')`,
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
        The Hostage is a retro-styled, pixel art psychological thriller where players must choose between red and black buttons to save a hostage from execution. With roguelike elements and a morbid collection mechanic, the game tests players' luck while rewarding both success and failure through over 100 unique death animations.
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
          src="https://www.youtube.com/embed/YOUR_HOSTAGE_VIDEO_ID"
          title="The Hostage Game Trailer"
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
            <h2 className="text-3xl font-bold mb-6">THE CONCEPT</h2>
            <p className="text-gray-300 mb-8">
              This game began as a simple idea: red or blue. A binary choice. 100 times. You choose your name at the start—and that name becomes the hostage. You're not saving someone else. You're trying to save yourself. You watch the hostage through an old TV screen, distant and powerless, representing how many of us live—passively observing our lives unfold like a show.
            </p>

            <h2 className="text-3xl font-bold mb-6">THE PHILOSOPHY</h2>
            <p className="text-gray-300 mb-8">
              Each choice feels random, but that's the trap. This is not a game of chance—it's a critique of it. A statement against gambling, against the illusion that luck can save us. Because statistically, saving the hostage is nearly impossible. And that's the point. This game is not about winning. It's about realizing why you're playing.
            </p>

            <h2 className="text-3xl font-bold mb-6">THE MESSAGE</h2>
            <p className="text-gray-300">
              This game, in its apparent mechanical simplicity, hides a powerful, intimate, and deeply philosophical message. The repetitive, binary choice becomes a symbolic ritual, a psychological journey into the heart of our identity. Maybe, just maybe, you'll decide to stop pressing buttons—and start reclaiming your life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Game Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="mb-4 text-red-500">
                <Gamepad2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Simple Yet Deep</h3>
              <p className="text-gray-300">
                Binary choices that test your luck across 100 rounds. Each decision carries weight, and every failure reveals a unique, pixelated death animation in our growing collection gallery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="mb-4 text-red-500">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Psychological Experience</h3>
              <p className="text-gray-300">
                More than a game—it's an interactive exploration of chance, control, and self-rescue. Educational content about probability and gambling psychology adds depth to the experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="mb-4 text-red-500">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Roguelike Progression</h3>
              <p className="text-gray-300">
                Collect talismans through slot machine mechanics to modify gameplay rules. Up to 5 talismans can be equipped, offering strategic depth and replayability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TheHostage;