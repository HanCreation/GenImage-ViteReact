import { client } from "@gradio/client";

const app = await client("ByteDance/SDXL-Lightning");
const result = await app.predict("/generate_image", [		
				"Hello!!", // string  in 'Enter your prompt (English)' Textbox component		
				"1-Step", // string  in 'Select inference steps' Dropdown component
	]);

console.log(result.data);
