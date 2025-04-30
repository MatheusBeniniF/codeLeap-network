import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Trash2, Edit } from 'lucide-react';
import { motion } from 'framer-motion';
import { Post } from '../types';
import { useUser } from '../context/UserContext';

interface PostCardProps {
  post: Post;
  onEdit: (post: Post) => void;
  onDelete: (post: Post) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onEdit, onDelete }) => {
  const { username } = useUser();
  const isOwner = post.username === username;
  
  const timeAgo = formatDistanceToNow(new Date(post.created_datetime), { addSuffix: true });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="post-card"
    >
      <div className="post-header">
        <h3 className="post-title">{post.title}</h3>
        {isOwner && (
          <div className="flex space-x-6">
            <button
              onClick={() => onDelete(post)}
              className="hover:text-red-200 transition-colors"
              aria-label="Delete post"
            >
              <Trash2 size={24} />
            </button>
            <button
              onClick={() => onEdit(post)}
              className="hover:text-blue-200 transition-colors"
              aria-label="Edit post"
            >
              <Edit size={24} />
            </button>
          </div>
        )}
      </div>
      <div className="post-content">
        <div className="post-meta">
          <span>@{post.username}</span>
          <span>{timeAgo}</span>
        </div>
        <p className="post-text">{post.content}</p>
      </div>
    </motion.div>
  );
};

export default PostCard;