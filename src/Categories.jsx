import React, { useState, useEffect } from 'react';
import CategoryPage from './CategoryPage';
import LoadingSpinner from './components/LoadingSpinner';

const Categories = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <main className="min-h-screen bg-gradient-to-tr from-blue-50 via-purple-50 to-pink-50">
      <CategoryPage />
    </main>
  );
};

export default Categories;
