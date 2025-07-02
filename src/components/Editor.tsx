import React, { useState } from 'react';
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Quote,
  Code,
  Trash2,
  Plus,
  Mic,
  Image,
  Send,
} from 'lucide-react';
import './Editor.css';

type PostEditorProps = {
  onNewPost: (content: string, emoji: string) => void;
  onClick: () => void;
};

const Editor: React.FC<PostEditorProps> = ({ onNewPost, onClick }) => {
  const [postContent, setPostContent] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('😊');
  const emojiOptions = [
    '😊',
    '😂',
    '😢',
    '😍',
    '😎',
    '👻',
    '🙏',
    '💡',
    '🔥',
    '📚',
    '🏖️',
    '🥤',
  ];

  const handlePublish = () => {
    if (postContent.trim().length === 0) {
      return;
    }

    onNewPost(postContent, selectedEmoji);
    setPostContent('');
    setSelectedEmoji('😊');
  };

  return (
    <div className="editor-wrapper">
      <div className="editor-container">
        <div className="flex items-center justify-between border-b border-gray-100 p-4">
          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl">
            <select
              className="input-field cursor-pointer border-none bg-transparent text-sm text-gray-700 outline-none"
              onChange={onClick}
            >
              <option>Paragraph</option>
            </select>

            <div className="ml-2 flex items-center gap-1 ">
              <button
                className="toolbar-btn rounded p-2 text-gray-600 hover:bg-gray-100"
                onClick={onClick}
              >
                <Bold size={16} />
              </button>
              <button
                className="toolbar-btn rounded p-2 text-gray-600 hover:bg-gray-100"
                onClick={onClick}
              >
                <Italic size={16} />
              </button>
              <button
                className="toolbar-btn rounded p-2 text-gray-600 hover:bg-gray-100"
                onClick={onClick}
              >
                <Underline size={16} />
              </button>
            </div>

            <div className="ml-2 flex items-center gap-1">
              <button
                className="toolbar-btn rounded p-2 text-gray-600 hover:bg-gray-100"
                onClick={onClick}
              >
                <List size={16} />
              </button>
              <button
                className="toolbar-btn rounded p-2 text-gray-600 hover:bg-gray-100"
                onClick={onClick}
              >
                <ListOrdered size={16} />
              </button>
            </div>

            <div className="ml-2 flex items-center gap-1">
              <button
                className="toolbar-btn rounded p-2 text-gray-600 hover:bg-gray-100"
                onClick={onClick}
              >
                <Quote size={16} />
              </button>
              <button
                className="toolbar-btn rounded p-2 text-gray-600 hover:bg-gray-100"
                onClick={onClick}
              >
                <Code size={16} />
              </button>
            </div>
          </div>

          <button
            className="rounded-sm bg-rose-200 p-2 text-gray-400 transition-colors hover:bg-rose-300 hover:text-rose-500"
            onClick={onClick}
          >
            <Trash2 size={16} strokeWidth={2} color="red"/>
          </button>
        </div>
        <div className="p-4">
          <div className="mb-4 flex items-start gap-3">
            <select
              value={selectedEmoji}
              onChange={(e) => setSelectedEmoji(e.target.value)}
              className="emoji-select"
            >
              {emojiOptions.map((emoji) => (
                <option key={emoji} value={emoji}>
                  {emoji}
                </option>
              ))}
            </select>

            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="How are you feeling today?"
              className="input-field min-h-[80px] flex-1 resize-none border-none text-sm leading-relaxed text-gray-700 placeholder-gray-400 outline-none"
              rows={3}
            />
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-100 p-4">
          <div className="flex items-center gap-3">
            <button
              className="action-btn rounded p-2 text-gray-500 hover:bg-gray-100"
              onClick={onClick}
            >
              <Plus size={18} />
            </button>
            <button
              className="action-btn rounded p-2 text-gray-500 hover:bg-gray-100"
              onClick={onClick}
            >
              <Mic size={18} />
            </button>
            <button
              className="action-btn rounded p-2 text-gray-500 hover:bg-gray-100"
              onClick={onClick}
            >
              <Image size={18} />
            </button>
          </div>

          <button
            onClick={handlePublish}
            disabled={postContent.trim().length === 0}
            className="publish-btn flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editor;
