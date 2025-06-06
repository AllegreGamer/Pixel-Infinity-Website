import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Users, Volume2, VolumeX, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

// Componente Steam Icon
const SteamIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    className="w-8 h-8"
  >
    <path 
      fill="currentColor" 
      d="M12 0C5.37 0 0 5.37 0 12c0 5.865 4.187 10.745 9.733 11.82.712.132.981-.309.981-.687 0-.34-.012-1.47-.018-2.667-4.217.916-5.108-1.804-5.108-1.804-.69-1.752-1.684-2.217-1.684-2.217-1.377-.941.104-.922.104-.922 1.523.107 2.324 1.563 2.324 1.563 1.352 2.317 3.547 1.647 4.41 1.259.137-.979.529-1.648.962-2.027-3.367-.383-6.91-1.683-6.91-7.486 0-1.654.591-3.006 1.56-4.067-.156-.382-.676-1.922.15-4.008 0 0 1.273-.408 4.17 1.554 1.21-.337 2.506-.505 3.795-.511 1.288.006 2.585.174 3.795.511 2.895-1.962 4.167-1.554 4.167-1.554.827 2.086.307 3.626.151 4.008.971 1.061 1.558 2.413 1.558 4.067 0 5.818-3.549 7.097-6.927 7.472.543.469 1.027 1.391 1.027 2.801 0 2.027-.019 3.661-.019 4.158 0 .381.267.826.988.686C19.815 22.741 24 17.863 24 12c0-6.63-5.37-12-12-12"
    />
  </svg>
);

const Home = () => {
    const [isMuted, setIsMuted] = React.useState(true);
    const videoRef = React.useRef(null);
  
    const toggleAudio = () => {
      if (videoRef.current) {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(!isMuted);
      }
    };
  
    return (
    <div className="min-h-screen bg-[#03050D]">
      {/* Hero Section with Logo and Video Background */}
<section className="relative h-screen flex items-center justify-center">
  {/* Video Background */}
  <div className="absolute inset-0 overflow-hidden">
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className="absolute w-full h-full object-cover"
      style={{ opacity: '0.25' }}
    >
      <source src="/videos/background.mp4" type="video/mp4" />
    </video>
    {/* Overlay scuro */}
    <div className="absolute inset-0 bg-[#03050D] opacity-40"></div>
  </div>

  {/* Audio Control Button */}
  <button 
    onClick={toggleAudio}
    className="absolute bottom-8 right-8 z-20 p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
  >
    {isMuted ? (
      <VolumeX className="w-6 h-6 text-white" />
    ) : (
      <Volume2 className="w-6 h-6 text-white" />
    )}
  </button>

        {/* Content */}
        <div className="relative z-10 px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <img 
              src="/images/pixel-infinity-logo.png" 
              alt="Pixel Infinity Studios" 
              className="w-full max-w-2xl mx-auto mb-12"
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300"
            >
              Where Pixels Create Magic
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Who We Are</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-gray-300">
              <p className="text-lg mb-6">
                At Pixel Infinity Studios, we believe in the magic of collaboration. Just like pixels—the smallest parts of an image—together, we create worlds that inspire, excite, and entertain.
              </p>
              <p className="text-lg">
                Based in Sydney, Australia, we are a passionate indie team dedicated to pushing the boundaries of creativity and innovation in gaming.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <TeamMember name="Alessandro Gregori" role="CEO & Game Designer" />
              <TeamMember name="Aslan Sepe" role="Music Producer" />
              <TeamMember name="Anya Filipenko" role="2D Artist" />
              <TeamMember name="Simone Artibani" role="Marketing Specialist" />
              <TeamMember name="Peter Petrov" role="Game Developer" />
              <TeamMember name="Giuseppe & Gennaro" role="Quality Assurance" />
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
<section className="py-20 px-4 bg-gray-900">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Games</h2>
    
    {/* Primo Gioco - The Hostage */}
    <div className="bg-gray-800 rounded-2xl p-8 shadow-xl mb-12">
      <Link to="/games/the-hostage" className="block">
        <img 
          src="/images/thehostage-logo.png" 
          alt="The Hostage" 
          className="max-w-xs mx-auto mb-6 hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <p className="text-gray-300 mb-6 text-center">
        A retro-styled psychological thriller where every choice matters. Make 100 binary decisions to save a hostage—yourself. Test your luck in this dark, addictive experience that questions the nature of chance and control.
      </p>
      <div className="flex justify-center mb-8">
        <a 
          href="https://store.steampowered.com/app/YOUR_HOSTAGE_APP_ID" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#171a21] hover:bg-[#2a475e] text-white px-6 py-2 rounded-full transition-colors"
        >
          Wishlist on Steam
        </a>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Feature 
          icon={<Gamepad2 className="w-8 h-8" />}
          title="Psychological Gameplay"
          description="Simple yet intense binary choices that test your luck and decision-making. With over 100 unique death animations and roguelike progression through collectible talismans, every failure becomes a new discovery in this dark collection game."
        />
        <Feature 
          icon={<Users className="w-8 h-8" />}
          title="Deep Philosophy"
          description="A profound exploration of chance, control, and self-rescue. You're not saving someone else—you're trying to save yourself. This game challenges our relationship with luck and questions whether we're truly in control of our destiny."
        />
        <Feature 
          icon={<Heart className="w-8 h-8" />}
          title="Meaningful Message"
          description="More than entertainment, this is a critique of gambling culture and our dependence on chance. Through its retro aesthetic and educational content, the game delivers a powerful message about taking conscious action in life rather than relying on luck."
        />
      </div>
    </div>

    {/* Secondo Gioco - STINK! */}
    <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
      <Link to="/games/stink" className="block">
        <img 
          src="/images/stink-logo.png" 
          alt="STINK!" 
          className="max-w-xs mx-auto mb-6 hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <p className="text-gray-300 mb-6 text-center">
        A comedic survival-action shooter that dares to be bold, hilarious, and disgustingly fun. Face hordes of bathroom-themed monsters using outrageous abilities!
      </p>
      <div className="flex justify-center mb-8">
        <a 
          href="https://store.steampowered.com/app/YOUR_APP_ID" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#171a21] hover:bg-[#2a475e] text-white px-6 py-2 rounded-full transition-colors"
        >
          Wishlist on Steam
        </a>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Feature 
          icon={<Gamepad2 className="w-8 h-8" />}
          title="Hilarious Gameplay"
          description="STINK! is a comedic survival-action game where players use hilarious and disgusting abilities to fight off hordes of bathroom-themed monsters. The game combines resource management, skill upgrades, and character progression, culminating in an epic boss fight after a set survival time."
        />
        <Feature 
          icon={<Users className="w-8 h-8" />}
          title="Deep Storyline"
          description="A surreal journey of self-discovery. Alessandro, burdened by betrayals and anger, is pulled into a surreal world where hostile toilets embody his deepest fears. Armed with unlikely tools, he must fight through this twisted reality, confronting the pain that has consumed him."
        />
        <Feature 
          icon={<Heart className="w-8 h-8" />}
          title="Deeper Meaning"
          description="This game was born from authentic pain but aims to transform that pain into something constructive and entertaining. It's a love letter to anyone wrestling with their inner demons, a reminder that even the 'dirtiest' emotions can become powerful tools for healing. Sometimes, to move forward, we must 'return the shit' we were forced to swallow—even if only in a video game."
        />
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

const TeamMember = ({ name, role }) => (
  <div className="bg-gray-700 p-6 rounded-lg text-white">
    <h3 className="font-semibold mb-2">{name}</h3>
    <p className="text-gray-300 text-sm">{role}</p>
  </div>
);

const Feature = ({ icon, title, description, link }) => (
  <div className="bg-gray-700 p-6 rounded-lg text-white">
    <div className="mb-4 text-primary">{icon}</div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 text-sm mb-4">{description}</p>
    {link && (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block bg-primary hover:bg-secondary px-4 py-2 rounded-full text-sm font-semibold transition-colors"
      >
        Add to Wishlist
      </a>
    )}
  </div>
);

export default Home;