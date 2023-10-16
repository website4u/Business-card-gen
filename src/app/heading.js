import React from 'react';

function Header() {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl text-white font-bold">Business card generator </h1>
        {/* <nav className="mt-2">
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white hover:underline">Home</a></li>
            <li><a href="/about" className="text-white hover:underline">About</a></li>
            <li><a href="/contact" className="text-white hover:underline">Contact</a></li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
}

export default Header;
