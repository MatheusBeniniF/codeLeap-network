import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Post } from '../types';

interface EditPostModalProps {
  post: Post;
  onClose: () => void;
  onSave: (id: number, data: { title: string; content: string }) => void;
}

type EditFormData = {
  title: string;
  content: string;
};

const EditPostModal: React.FC<EditPostModalProps> = ({ post, onClose, onSave }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<EditFormData>({
    mode: 'onChange',
    defaultValues: {
      title: post.title,
      content: post.content,
    },
  });

  const onSubmit = (data: EditFormData) => {
    onSave(post.id, data);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="modal-content"
      >
        <div className="p-6">
          <h2 className="modal-title">Edit item</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="title" className="input-label">
                Title
              </label>
              <input
                id="title"
                type="text"
                className="text-input"
                {...register('title', {
                  required: 'Title is required',
                })}
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="content" className="input-label">
                Content
              </label>
              <textarea
                id="content"
                rows={4}
                className="text-input resize-none"
                {...register('content', {
                  required: 'Content is required',
                })}
              />
              {errors.content && (
                <p className="mt-1 text-sm text-red-600">{errors.content.message}</p>
              )}
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="secondary-button"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!isValid}
                className="primary-button"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default EditPostModal;