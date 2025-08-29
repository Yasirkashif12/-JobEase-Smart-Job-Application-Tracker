const UserRoute = ({ children }) => {
  const { role, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;

  return role === "user" ? children : <Navigate to="/login" />;
};
