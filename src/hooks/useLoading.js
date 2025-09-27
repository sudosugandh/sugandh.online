import { useState, useEffect, useCallback } from 'react'

export const useLoading = (initialState = false) => {
  const [isLoading, setIsLoading] = useState(initialState)
  const [loadingMessage, setLoadingMessage] = useState('Loading...')

  const startLoading = useCallback((message = 'Loading...') => {
    setLoadingMessage(message)
    setIsLoading(true)
  }, [])

  const stopLoading = useCallback(() => {
    setIsLoading(false)
  }, [])

  const setMessage = useCallback((message) => {
    setLoadingMessage(message)
  }, [])

  // Simulate loading for demo purposes
  const simulateLoading = useCallback(async (duration = 2000, message = 'Loading...') => {
    startLoading(message)
    
    // Simulate different loading stages
    const stages = [
      { message: 'Initializing...', delay: duration * 0.2 },
      { message: 'Processing data...', delay: duration * 0.3 },
      { message: 'Finalizing...', delay: duration * 0.3 },
      { message: 'Almost done...', delay: duration * 0.2 }
    ]

    for (const stage of stages) {
      await new Promise(resolve => setTimeout(resolve, stage.delay))
      setMessage(stage.message)
    }

    await new Promise(resolve => setTimeout(resolve, 500))
    stopLoading()
  }, [startLoading, stopLoading, setMessage])

  return {
    isLoading,
    loadingMessage,
    startLoading,
    stopLoading,
    setMessage,
    simulateLoading
  }
}

export default useLoading