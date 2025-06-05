
import React, { useState } from 'react';
import TweetComposer from './TweetComposer';
import TweetCard from './TweetCard';

interface Tweet {
  id: string;
  author: string;
  handle: string;
  content: string;
  timestamp: string;
  likes: number;
  isLiked: boolean;
}

const TweetFeed = () => {
  const [tweets, setTweets] = useState<Tweet[]>([
    {
      id: '1',
      author: 'Rahul Sharma',
      handle: '@rahul_bit2025',
      content: 'Just finished the Data Structures assignment! The binary tree implementation was challenging but fun. Anyone else working on it?',
      timestamp: '2 hours ago',
      likes: 12,
      isLiked: false,
    },
    {
      id: '2',
      author: 'Priya Patel',
      handle: '@priya_cs',
      content: 'Reminder: The tech fest registration deadline is tomorrow! Don\'t miss out on some amazing workshops and competitions. #TechFest2024',
      timestamp: '4 hours ago',
      likes: 25,
      isLiked: true,
    },
    {
      id: '3',
      author: 'Amit Kumar',
      handle: '@amit_ece',
      content: 'Great lecture on Machine Learning today! Prof. Singh really knows how to explain complex concepts. Looking forward to the next class.',
      timestamp: '6 hours ago',
      likes: 8,
      isLiked: false,
    },
  ]);

  const handleNewTweet = (content: string) => {
    const newTweet: Tweet = {
      id: Date.now().toString(),
      author: 'Current Student',
      handle: '@current_user',
      content,
      timestamp: 'now',
      likes: 0,
      isLiked: false,
    };
    setTweets([newTweet, ...tweets]);
  };

  const handleLike = (tweetId: string) => {
    setTweets(tweets.map(tweet => {
      if (tweet.id === tweetId) {
        return {
          ...tweet,
          likes: tweet.isLiked ? tweet.likes - 1 : tweet.likes + 1,
          isLiked: !tweet.isLiked,
        };
      }
      return tweet;
    }));
  };

  return (
    <div className="space-y-6">
      <TweetComposer onTweet={handleNewTweet} />
      
      <div className="space-y-4">
        {tweets.map((tweet) => (
          <TweetCard
            key={tweet.id}
            tweet={tweet}
            onLike={handleLike}
          />
        ))}
      </div>
    </div>
  );
};

export default TweetFeed;
