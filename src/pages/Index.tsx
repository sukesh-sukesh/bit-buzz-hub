
import React from 'react';
import Header from '../components/Header';
import TweetFeed from '../components/TweetFeed';
import Sidebar from '../components/Sidebar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
          <div className="lg:col-span-3">
            <TweetFeed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
