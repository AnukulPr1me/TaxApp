
const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        <div className="mt-4">
          <a href="/about" className="text-white hover:underline mx-4">About</a>
          <a href="/contact" className="text-white hover:underline mx-4">Contact</a>
          <a href="/privacy" className="text-white hover:underline mx-4">Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Footer