import React from 'react';
import Header from './components/Header';
import SignupModal from './components/SignupModal';
import CreatePostForm from './components/CreatePostForm';
import PostList from './components/PostList';
import { useUser } from './context/UserContext';

function App() {
  const { isLoggedIn } = useUser();

  return (
    <div className="min-h-screen bg-[#DDDDDD]">
      {isLoggedIn ? (
        <>
          <Header />
          <main className="max-w-[800px] mx-auto px-6 py-6">
            <CreatePostForm />
            <PostList />
          </main>
        </>
      ) : (
        <SignupModal />
      )}
    </div>
  );
}

export default App;