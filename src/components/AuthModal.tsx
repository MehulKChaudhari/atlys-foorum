import React, { useEffect } from 'react';
import SignInForm from './SignInForm';
import './AuthModal.css';
import { X } from 'lucide-react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AuthModal: React.FC<Props> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="close-button"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        <SignInForm onSuccess={onClose} />
      </div>
    </div>
  );
};

export default AuthModal;
