import React, { useEffect, useState } from 'react';
import brain from 'brain.js';
import './SuggestedBooks.css';

const SuggestedBooks = () => {
  const [net, setNet] = useState(new brain.NeuralNetwork());
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Simulating the model training with dummy data
    net.train([
      { input: [1, 2, 3], output: { book1: 1 } },
      { input: [4, 5, 6], output: { book2: 1 } },
      // Add more training data as needed
    ]);
  }, [net]);

  useEffect(() => {
    const userPreferences = [0.1, 0.2, 0.3]; // Example user preferences data
    const result = net.run(userPreferences);
    setSuggestions(Object.keys(result).sort((a, b) => result[b] - result[a]));
  }, [net]);

  return (
    <div className="suggested-books">
      <h2>Suggested Books</h2>
      <ul>
        {suggestions.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestedBooks;
