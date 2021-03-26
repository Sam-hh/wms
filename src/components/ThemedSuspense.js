import React from 'react'

function ThemedSuspense() {
  return (
    <div className="w-full h-screen p-6 text-lg font-medium text-gray-600 dark:text-gray-400 dark:bg-gray-900 flex justify-center items-center">
    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-56 w-56"></div>
    </div>
  )
}

export default ThemedSuspense
