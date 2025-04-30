import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';

type SignupFormData = {
  username: string;
};

const SignupModal: React.FC = () => {
  const { setUsername } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupFormData>({
    mode: 'onChange',
  });

  const onSubmit = (data: SignupFormData) => {
    setUsername(data.username);
  };

  return (
    <div className="fixed inset-0 bg-[#DDDDDD] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="modal-content"
      >
        <div className="p-6">
          <h2 className="modal-title">Welcome to CodeLeap network!</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="username" className="input-label">
                Please enter your username
              </label>
              <input
                id="username"
                type="text"
                className="text-input"
                placeholder="John doe"
                {...register('username', {
                  required: 'Username is required',
                  minLength: {
                    value: 3,
                    message: 'Username must be at least 3 characters',
                  },
                })}
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
              )}
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!isValid}
                className="primary-button"
              >
                ENTER
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupModal;