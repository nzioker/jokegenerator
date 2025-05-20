import { allJokes } from './data'
import { useState } from 'react'

const Joke = () => {
  const [joke, setJoke] = useState(null)
  const displayJoke = () => {
    const randomIndex = Math.floor(Math.random() * allJokes.length)
    const selectedJoke = allJokes[randomIndex]
    setJoke(selectedJoke)
  }

  return (
    <div className='bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center px-4'>
      <div className='max-w-md w-full text-center space-y-6'>
        <h1 className='text-4xl font-bold text-purple-400'>JokeBot 🤖</h1>
        <p className='text-gray-400'>
          Click the button to hear a robot-approved joke.
        </p>

        <button
          onClick={displayJoke}
          className='bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-xl text-lg font-semibold shadow-lg'
        >
          Tell Me a Joke
        </button>

        {joke && (
          <div
            id='jokeBox'
            className='bg-gray-800 text-white p-6 rounded-xl shadow-md border border-purple-500 text-lg'
          >
            {joke.question ? (
              <>
                <p className='font-semibold mb-2'>{joke.question}</p>
                <p>{joke.answer}</p>
              </>
            ) : (
              <p>{joke.text}</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Joke
