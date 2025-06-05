
import React from 'react';
import { MessageCircle, Users, Calendar } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              BITtweets
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="flex items-center space-x-2 text-blue-600 font-medium hover:text-indigo-600 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>Feed</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Users className="w-5 h-5" />
              <span>Open Chat</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Calendar className="w-5 h-5" />
              <span>Events</span>
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              Welcome, <span className="font-medium text-blue-600">Student</span>
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
              S
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
