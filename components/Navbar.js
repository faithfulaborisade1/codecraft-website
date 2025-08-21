export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold gradient-text">CodeCraft</span>
          <div className="flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#services" className="text-gray-700 hover:text-indigo-600">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-indigo-600">Portfolio</a>
            <a href="#maintenance" className="text-gray-700 hover:text-indigo-600">Maintenance</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}