
import React from 'react';
import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react';

interface Tweet {
  id: string;
  author: string;
  handle: string;
  content: string;
  timestamp: string;
  likes: number;
  isLiked: boolean;
}

interface TweetCardProps {
  tweet: Tweet;
  onLike: (tweetId: string) => void;
}

const TweetCard = ({ tweet, onLike }: TweetCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex space-x-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-medium">
          {tweet.author.charAt(0)}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h4 className="font-semibold text-gray-900">{tweet.author}</h4>
            <span className="text-gray-500">{tweet.handle}</span>
            <span className="text-gray-400">·</span>
            <span className="text-gray-500 text-sm">{tweet.timestamp}</span>
            <button className="ml-auto text-gray-400 hover:text-gray-600 transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-gray-900 mb-4 leading-relaxed">{tweet.content}</p>
          
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">Reply</span>
            </button>
            
            <button
              onClick={() => onLike(tweet.id)}
              className={`flex items-center space-x-2 transition-colors ${
                tweet.isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
              }`}
            >
              <Heart className={`w-5 h-5 ${tweet.isLiked ? 'fill-current' : ''}`} />
              <span className="text-sm">{tweet.likes}</span>
            </button>
            
            <button className="flex items-center space-x-2 text-gray-500 hover:text-green-600 transition-colors">
              <Share className="w-5 h-5" />
              <span className="text-sm">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
