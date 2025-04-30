import React from 'react';
import { useForm } from 'react-hook-form';
import { useUser } from '../context/UserContext';
import { usePosts } from '../hooks/usePosts';

type PostFormData = {
  title: string;
  content: string;
};

const CreatePostForm: React.FC = () => {
  const { username } = useUser();
  const { createPost } = usePosts();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<PostFormData>({
    mode: 'onChange',
  });

  const onSubmit = (data: PostFormData) => {
    createPost(
      {
        username,
        title: data.title,
        content: data.content,
      },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  return (
    <div className="modal-content mb-6">
      <div className="p-6">
        <h2 className="modal-title">What's on your mind?</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="title" className="input-label">
              Title
            </label>
            <input
              id="title"
              type="text"
              className="text-input"
              placeholder="Hello world"
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
              placeholder="Content here"
              {...register('content', {
                required: 'Content is required',
              })}
            />
            {errors.content && (
              <p className="mt-1 text-sm text-red-600">{errors.content.message}</p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!isValid}
              className="primary-button"
            >
              CREATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostForm;