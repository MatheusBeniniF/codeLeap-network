import React, { useState } from 'react';
import PostCard from './PostCard';
import EditPostModal from './EditPostModal';
import DeleteConfirmModal from './DeleteConfirmModal';
import { Post } from '../types';
import { usePosts } from '../hooks/usePosts';

const PostList: React.FC = () => {
  const { posts, isLoading, isError, updatePost, deletePost } = usePosts();
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [deletingPost, setDeletingPost] = useState<Post | null>(null);

  const handleEdit = (post: Post) => {
    setEditingPost(post);
  };

  const handleDelete = (post: Post) => {
    setDeletingPost(post);
  };

  const handleSaveEdit = (id: number, data: { title: string; content: string }) => {
    updatePost({ id, data });
    setEditingPost(null);
  };

  const handleConfirmDelete = (id: number) => {
    deletePost(id);
    setDeletingPost(null);
  };

  const sortedPosts = [...posts].sort((a, b) =>
    new Date(b.created_datetime).getTime() - new Date(a.created_datetime).getTime()
  );

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
        <p className="mt-2 text-gray-600">Loading posts...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Error loading posts. Please try again later.</p>
      </div>
    );
  }

  if (sortedPosts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No posts yet. Be the first to post!</p>
      </div>
    );
  }

  return (
    <div>
      {sortedPosts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}

      {editingPost && (
        <EditPostModal
          post={editingPost}
          onClose={() => setEditingPost(null)}
          onSave={handleSaveEdit}
        />
      )}

      {deletingPost && (
        <DeleteConfirmModal
          post={deletingPost}
          onClose={() => setDeletingPost(null)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
};

export default PostList;