const getRandomMessage = async () => {
  const response = await fetch('http://localhost:3000/api/v1/greetings');
  return response.json();
};

export default getRandomMessage;
