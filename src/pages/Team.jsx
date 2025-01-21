import { motion } from 'framer-motion';
import { Code, Music, Palette, MessageCircle, Terminal } from 'lucide-react';

const teamMembers = [
  {
    name: "Alessandro Gregori",
    role: "CEO & Game Designer",
    bio: "A passionate game developer with a vision to create unique and memorable gaming experiences.",
    icon: <Code className="w-6 h-6" />,
    image: "/images/Alessandro.jpg"
  },
  {
    name: "Aslan Sepe",
    role: "Music Producer",
    bio: "Creating immersive soundscapes and memorable game music that brings our worlds to life.",
    icon: <Music className="w-6 h-6" />,
    image: "/images/Aslan.jpg"
  },
  {
    name: "Anya Filipenko",
    role: "2D Artist",
    bio: "Bringing characters and worlds to life through vibrant and distinctive art styles.",
    icon: <Palette className="w-6 h-6" />,
    image: "/images/Anya.jpg"
  },
  {
    name: "Simone Artibani",
    role: "Marketing Specialist",
    bio: "Connecting our games with players and building our community worldwide.",
    icon: <MessageCircle className="w-6 h-6" />,
    image: "/images/Simone.jpg"
  },
  {
    name: "Ken He",
    role: "Game Developer",
    bio: "Skilled developer bringing technical expertise and innovation to our game projects.",
    icon: <Terminal className="w-6 h-6" />,
    image: "/images/Ken.jpg"
  }
];

const Team = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Meet Our Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-12"
          >
            The creative minds behind Pixel Infinity Studios
          </motion.p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-gray-700 rounded-lg p-8 shadow-xl"
              >
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 bg-gray-600 rounded-lg text-primary mb-4">
                    {member.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-gray-300 mb-8">
              We're always looking for talented individuals who share our passion for creating amazing games.
            </p>
            <button className="bg-primary hover:bg-secondary px-8 py-3 rounded-full font-semibold transition-colors">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;