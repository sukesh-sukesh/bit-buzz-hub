
import React from 'react';
import { TrendingUp, Clock, MapPin } from 'lucide-react';

const Sidebar = () => {
  const quickStats = [
    { label: 'Active Students', value: '1,247', icon: TrendingUp },
    { label: 'Today\'s Posts', value: '89', icon: Clock },
    { label: 'Campus Events', value: '12', icon: MapPin },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Campus Stats</h3>
        <div className="space-y-4">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </div>
                <span className="font-semibold text-gray-900">{stat.value}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Access</h3>
        <div className="space-y-2">
          <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
            Campus Guidelines
          </button>
          <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
            Academic Calendar
          </button>
          <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
            Student Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
