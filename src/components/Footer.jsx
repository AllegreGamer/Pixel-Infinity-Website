import { Twitter, Instagram, Facebook, Youtube, MessageSquare } from 'lucide-react';

const socialLinks = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/PixelInfinity_S',
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/pixelinfinitystudios',
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/4tDXx6Sux4',
    icon: <MessageSquare className="w-5 h-5" />,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@PixelInfinityStudios',
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61572510234627',
    icon: <Facebook className="w-5 h-5" />,
  }
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <a 
              href="mailto:pixelinfinitystudios@gmail.com"
              className="text-gray-300 hover:text-primary transition-colors"
            >
              pixelinfinitystudios@gmail.com
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <p className="text-gray-300">Sydney, Australia</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Pixel Infinity Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;