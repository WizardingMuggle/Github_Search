import React from 'react'

function About() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className=" bg-gray-200  max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          Our GitHub search app allows you to search for users and repositories on GitHub.
          With the power of the GitHub API, we provide you with comprehensive information
          about users and repositories based on your search queries.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          This app is designed and developed to showcase the potential of React and how it can
          be integrated with the GitHub API to create a useful tool for developers.
        </p>
        <p className="text-lg text-gray-700">
          Feel free to explore and discover GitHub users and repositories with ease!<br/>
          Version: 1.0.0
        </p>
      </div>
    </div>
  )
}

export default About
