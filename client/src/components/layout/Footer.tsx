import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-[#50312F] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone text-[#FF6B35]"></i>
                <div>
                  <p className="text-gray-300">Phone</p>
                  <a href="tel:+918779987132" className="text-white hover:text-[#FF6B35] transition">
                    +91 877 998 7132
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-[#FF6B35]"></i>
                <div>
                  <p className="text-gray-300">Email</p>
                  <a href="mailto:infonainaland@gmail.com" className="text-white hover:text-[#FF6B35] transition">
                    infonainaland@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-[#FF6B35] mt-1"></i>
                <div>
                  <p className="text-gray-300">Address</p>
                  <p className="text-white">
                    2506 the park luxury Apt. Oshiwara<br />
                    Andheri West<br />
                    Mumbai 53
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-clock text-[#FF6B35]"></i>
                <div>
                  <p className="text-gray-300">Business Hours</p>
                  <p className="text-white">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white hover:text-[#FF6B35] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-white hover:text-[#FF6B35] transition">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white hover:text-[#FF6B35] transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white hover:text-[#FF6B35] transition">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="/#about" className="text-white hover:text-[#FF6B35] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-white hover:text-[#FF6B35] transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
            <p className="text-gray-300 mb-6">
              Follow us on social media for the latest updates on new properties and real estate insights.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@theurbanips" className="w-10 h-10 rounded-full bg-[#3C2523] flex items-center justify-center text-white hover:bg-[#FF6B35] transition">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#3C2523] flex items-center justify-center text-white hover:bg-[#FF6B35] transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/nainalanddeals/?hl=en" className="w-10 h-10 rounded-full bg-[#3C2523] flex items-center justify-center text-white hover:bg-[#FF6B35] transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/urban-investments-&-property-solutions/people/" className="w-10 h-10 rounded-full bg-[#3C2523] flex items-center justify-center text-white hover:bg-[#FF6B35] transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#3C2523] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Nainaland Deals. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
