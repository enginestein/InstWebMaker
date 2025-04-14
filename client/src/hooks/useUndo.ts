import { useState, useCallback, useRef } from 'react';

export function useUndo<T>(initialState: T) {
  const [history, setHistory] = useState<T[]>([initialState]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastSavedState = useRef<string>(JSON.stringify(initialState));
  
  // Check if we can undo (go back in history)
  const canUndo = currentIndex > 0;
  
  // Check if we can redo (go forward in history)
  const canRedo = currentIndex < history.length - 1;
  
  // Add current state to history
  const addToHistory = useCallback(() => {
    // Get the latest state
    const currentState = history[currentIndex];
    const currentStateStr = JSON.stringify(currentState);
    
    // Only add to history if state has changed
    if (currentStateStr !== lastSavedState.current) {
      // Remove any future states that would be lost by a new action
      const newHistory = history.slice(0, currentIndex + 1);
      
      // Add current state to history
      setHistory(newHistory);
      lastSavedState.current = currentStateStr;
    }
  }, [history, currentIndex]);
  
  // Navigate through history (negative = undo, positive = redo)
  const navigateHistory = useCallback((direction: number): T | null => {
    const newIndex = currentIndex + direction;
    
    if (newIndex >= 0 && newIndex < history.length) {
      setCurrentIndex(newIndex);
      return history[newIndex];
    }
    
    return null;
  }, [history, currentIndex]);
  
  // Replace the current state
  const setState = useCallback((newState: T) => {
    // Remove any future states
    const newHistory = history.slice(0, currentIndex + 1);
    
    // Add new state and update index
    setHistory([...newHistory, newState]);
    setCurrentIndex(newHistory.length);
    lastSavedState.current = JSON.stringify(newState);
  }, [history, currentIndex]);
  
  return {
    history,
    currentIndex,
    canUndo,
    canRedo,
    addToHistory,
    navigateHistory,
    setState
  };
}
