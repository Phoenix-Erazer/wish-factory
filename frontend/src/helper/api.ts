export const getWishes = () => 
  fetch('http://localhost:5173/wish.json')
    .then(res => res.json());


