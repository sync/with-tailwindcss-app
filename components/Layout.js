import "../static/css/tailwind.css";

export default ({ children }) => {
  return (
    <div className="antialiased text-gray-900 flex items-center justify-center max-h-screen">
      {children}
    </div>
  );
};
