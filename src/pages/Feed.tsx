import React, { useState } from 'react';
import PostCard from '../components/PostCard';
import Editor from '../components/Editor';
import { DUMMY_POSTS } from '../features/feed/dummyPosts';
import AuthModal from '../components/AuthModal';
import { useAuth } from '../features/auth/authContext';

export type Post = {
  id: number;
  name: string;
  content: string;
  avatarUrl: string;
  emoji: string;
  timestamp: number;
};

const Feed: React.FC = () => {
  const { isAuthenticated, currentUser } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState<Post[]>(DUMMY_POSTS);

  const handleClick = () => {
    if (!isAuthenticated) {
      setShowModal(true);
    } else {
      alert('function not implemented');
    }
  };

  const handleNewPost = (content: string, emoji: string) => {
    if (!isAuthenticated) {
      setShowModal(true);
      return;
    }

    if (!currentUser) {
      return;
    }

    const newPost: Post = {
      id: Date.now(),
      name: `${currentUser.firstName} ${currentUser.lastName}`,
      content: content,
      avatarUrl: `https://i.pravatar.cc/150?img=67`,
      emoji: emoji,
      timestamp: Date.now(),
    };

    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="mx-auto max-w-xl">
        <div className="mb-6">
          <Editor onNewPost={handleNewPost} onClick={handleClick} />
        </div>
        <div>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} onClick={handleClick} />
          ))}
        </div>
      </div>

      <AuthModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Feed;
