import React from 'react';
import { motion } from 'framer-motion';
import { Post } from '../types';

interface DeleteConfirmModalProps {
  post: Post;
  onClose: () => void;
  onConfirm: (id: number) => void;
}

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({ post, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="modal-content"
      >
        <div className="p-6">
          <h2 className="modal-title">Are you sure you want to delete this item?</h2>
          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="secondary-button"
            >
              Cancel
            </button>
            <button
              onClick={() => onConfirm(post.id)}
              className="danger-button"
            >
              Delete
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DeleteConfirmModal;