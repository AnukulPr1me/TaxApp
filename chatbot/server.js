const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/ollama/ask', async (req, res) => {
  const { query } = req.body;

  try {
    // Make a request to the local Ollama API
    const response = await axios.post(
      'http://localhost:11434/api/generate',
      {
        model: 'llama3.2-vision',
        prompt: query,
      },
      {
        responseType: 'stream',
      }
    );

    // Handle streaming response
    let completeResponse = '';

    response.data.on('data', (chunk) => {
      try {
        // Parse each chunk of data
        const jsonResponse = JSON.parse(chunk.toString());
        // Append the response text
        if (jsonResponse.response) {
          completeResponse += jsonResponse.response;
        }
      } catch (error) {
        console.error('Error parsing chunk:', error);
      }
    });

    response.data.on('end', () => {
      // Send the complete response back to the client
      res.json({ response: completeResponse });
    });

  } catch (error) {
    console.error('Error communicating with Ollama:', error);
    res.status(500).json({ error: 'Failed to communicate with the AI model' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
