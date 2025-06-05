
import React, { useState } from 'react';
import { Send, Image, Smile } from 'lucide-react';

interface TweetComposerProps {
  onTweet: (content: string) => void;
}

const TweetComposer = ({ onTweet }: TweetComposerProps) => {
  const [content, setContent] = useState('');
  const maxLength = 280;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim() && content.length <= maxLength) {
      onTweet(content.trim());
      setContent('');
    }
  };

  const remainingChars = maxLength - content.length;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-medium">
            S
          </div>
          
          <div className="flex-1">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's happening at BIT today?"
              className="w-full p-3 text-lg border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              maxLength={maxLength}
            />
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <Image className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <Smile className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className={`text-sm ${remainingChars < 20 ? 'text-red-500' : 'text-gray-500'}`}>
                  {remainingChars}
                </span>
                <button
                  type="submit"
                  disabled={!content.trim() || content.length > maxLength}
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Tweet</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TweetComposer;
