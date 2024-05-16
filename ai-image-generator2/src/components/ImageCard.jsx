import React, { useState } from 'react';
import { client } from "@gradio/client";

const ImageCard = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    const app = await client("ByteDance/SDXL-Lightning");
    const result = await app.predict("/generate_image", [prompt, "8-Step"]);
    
    // Log the result to verify the API response
    console.log(result);

    // Extract the image URL from the result
    if (result.data && Array.isArray(result.data) && result.data[0].url) {
      setImage(result.data[0].url);
    } else {
      console.error('Failed to retrieve image URL from API response.');
    }
  };

  return (
    <div className="image-card">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt"
      />
      <button onClick={handleSubmit}>Generate Image</button>
      {image && <img src={image} alt="Generated" />}
    </div>
  );
};

export default ImageCard;
