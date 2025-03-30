import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, PhoneCall } from "lucide-react";
import { AppName } from "../../../data/constants";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="font-bold text-xl text-white">{AppName}</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Connecting patients with the right healthcare professionals for better treatment outcomes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-6">For Patients</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/find-doctors" className="text-gray-400 hover:text-white transition-colors">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link to="/patient-guide" className="text-gray-400 hover:text-white transition-colors">
                  Patient Guide
                </Link>
              </li>
              <li>
                <Link to="/patient-testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-6">For Doctors</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/doctor-benefits" className="text-gray-400 hover:text-white transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link to="/verification" className="text-gray-400 hover:text-white transition-colors">
                  Get Verified
                </Link>
              </li>
              <li>
                <Link to="/doctor-resources" className="text-gray-400 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/doctor-testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <a href="mailto:contact@medic.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@medic.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall size={18} className="text-blue-400" />
                <a href="tel:+18001234567" className="text-gray-400 hover:text-white transition-colors">
                  +1 (800) 123-4567
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-3">Subscribe to Our Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-md bg-gray-800 border-gray-700 text-white focus:outline-none focus:border-blue-500 flex-1"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2023 HealthExchange. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/faq" className="text-gray-500 hover:text-white text-sm transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};