import React from 'react';
import { Heart, MessageSquare, Share } from 'lucide-react';
import { timeAgo } from '../utils/time';
import './PostCard.css';

export type Post = {
  id: number;
  name: string;
  content: string;
  avatarUrl: string;
  emoji: string;
  timestamp: number;
};

type PostCardProps = {
  post: Post;
  onClick: () => void;
};

const PostCard: React.FC<PostCardProps> = ({ post, onClick }) => {
  const { name, content, avatarUrl, emoji, timestamp } = post;

  return (
    <div className="post-item mb-4 overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="px-5 py-4">
        <div className="mb-3 flex items-center gap-3">
          <img
            src={avatarUrl}
            alt={name}
            className="user-avatar h-10 w-10 rounded-full object-cover"
          />
          <div>
            <h4 className="text-sm font-semibold text-gray-900">{name}</h4>
            <p className="mt-1 text-xs text-gray-500">{timeAgo(timestamp)}</p>
          </div>
        </div>
        <div className="flex items-start text-sm text-gray-700">
          <span className="post-emoji mr-2 text-xl">{emoji}</span>
          <p className="flex-1">{content}</p>
        </div>
      </div>
      <div className="flex items-center gap-5 border-t border-gray-100 bg-gray-50 px-5 py-3">
        <button
          onClick={onClick}
          className="post-action post-like rounded p-2 text-gray-400"
        >
          <Heart size={16} />
        </button>
        <button
          onClick={onClick}
          className="post-action post-comment rounded p-2 text-gray-400"
        >
          <MessageSquare size={16} />
        </button>
        <button
          onClick={onClick}
          className="post-action post-share rounded p-2 text-gray-400"
        >
          <Share size={16} />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
