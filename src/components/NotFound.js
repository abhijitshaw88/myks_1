import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 px-4">
    <div className="max-w-md w-full text-center">
      <svg className="mx-auto mb-8 w-32 h-32" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="100" fill="#E0E7FF"/>
        <text x="100" y="120" textAnchor="middle" fontSize="64" fill="#6366F1" fontWeight="bold">404</text>
      </svg>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">Sorry, the page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium shadow-md transition">Go Home</Link>
    </div>
  </div>
);

export default NotFound; 