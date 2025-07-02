import type { Post } from '../../components/PostCard';

export const DUMMY_POSTS: Post[] = [
  {
    id: 1,
    name: 'Demo User',
    timestamp: 1751475961,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatarUrl: 'https://i.pravatar.cc/150?img=32',
    emoji: '😊',
  },
  {
    id: 2,
    name: 'Test User',
    timestamp: 1751472000,
    content:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
    emoji: '😎',
  },
  {
    id: 3,
    name: 'Demo User',
    timestamp: 1751400000,
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    emoji: '👻',
  },
];
