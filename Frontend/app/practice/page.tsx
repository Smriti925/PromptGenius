"use client";
import { Github, Mail, Twitter } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import "./styles.css"
import { text } from "stream/consumers";
import OpenAI from "openai";
require("dotenv").config();

const socials = [
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/chronark_",
		label: "Twitter",
		handle: "@chronark_",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:dev@chronark.com",
		label: "Email",
		handle: "dev@chronark.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/chronark",
		label: "Github",
		handle: "chronark",
	},
];

const bestAns = [
	{
		id: 1,
		problem:
		"I want you to act as an interior decorator. Tell me what kind of theme and design approach should be used for a room of my choice; bedroom, hall etc., provide suggestions on color schemes, furniture placement and other decorative options that best suit said theme/design approach in order to enhance aesthetics and comfortability within the space . My first request is 'I am designing our living hall'.",
	},
	{
		id: 2,
		problem:
			"I want you to act as a software quality assurance tester for a new software application. Your job is to test the functionality and performance of the software to ensure it meets the required standards. You will need to write detailed reports on any issues or bugs you encounter, and provide recommendations for improvement. Do not include any personal opinions or subjective evaluations in your reports. Your first task is to test the login functionality of the software",
	},
	{
		id: 3,
		problem:
			"I want you to act as a software quality assurance tester for a new software application. Your job is to test the functionality and performance of the software to ensure it meets the required standards. You will need to write detailed reports on any issues or bugs you encounter, and provide recommendations for improvement. Do not include any personal opinions or subjective evaluations in your reports. Your first task is to test the login functionality of the software",
	},
	{
		id: 4,
		problem:
			"You are doing a research in a super-conductor making company and  your company expects to use the now hyped machine learning  technique. Since you have never worked with this before you are  expected to learn it within 20 days before the company starts  its research program. Since you are entirely new to the field  you decided to get help from ChatGPT. Write a prompt to  get ChatGPT(LLM) doing the work for you",
	},
	{
		id: 5,
		problem:
			"Want assistance provided by qualified individuals enabled with experience on understanding charts using technical analysis tools while interpreting macroeconomic environment prevailing across world consequently assisting customers acquire long term advantages requires clear verdicts therefore seeking same through informed predictions written down precisely! First statement contains following content- 'Can you tell us what future stock market looks like based upon current conditions ?'.",
	},
	{
		id: 6,
		problem:
			"You are doing a research in a super-conductor making company and  your company expects to use the now hyped machine learning  technique. Since you have never worked with this before you are  expected to learn it within 20 days before the company starts  its research program. Since you are entirely new to the field  you decided to get help from ChatGPT. Write a prompt to  get ChatGPT(LLM) doing the work for you",
	},
	
];

const problems = [
	{
		id: 1,
		problem:
			"Congratulations on becoming an Interior Decorator! Your first task is to design a client's living hall, focusing on creating a modern and cozy space. Provide detailed recommendations on theme, color schemes, furniture placement, and decorative options, ensuring a balance between aesthetics and comfort. The client desires a versatile area for relaxation and entertaining, with a preference for a clean and uncluttered look. Incorporate a touch of nature while maintaining a professional and client-focused tone.",
	},
	{
		id: 2,
		problem:
		"You have been assigned the role of a Software Quality Assurance Tester for a cutting-edge software application developed by a leading tech company. Your responsibility is to thoroughly test the functionality and performance of the software to ensure it meets the highest standards. The development team has emphasized the importance of detailed reports on any issues or bugs encountered during the testing process. Your objective is to provide precise and objective feedback, avoiding personal opinions or subjective evaluations.\nYour first task is to focus on testing the login functionality of the software. The login process is a critical component, as it establishes the user's identity and access to the application. You are required to simulate various scenarios, such as valid and invalid inputs, multiple login attempts, and potential edge cases.\nIn your interaction with the AI chatbot, you should request specific guidance or information related to testing the login functionality. This may include queries about test cases, input variations, or strategies to assess the robustness of the login process. Ensure that your input is clear, concise, and aligns with the professional and objective tone expected in a software testing environment.",
	},
	{
		id: 3,
		problem:
			"You, a budding entrepreneur, have embarked on a thrilling yet challenging journey to establish your startup. The path is filled with uncertainties, strategic decisions, and a constant need for innovation. As you navigate through this dynamic landscape, you recognize the potential of leveraging AI to enhance your decision-making process and streamline various aspects of your startup.\nIn your quest for effective AI-powered assistance, you've decided to explore a ChatGPT practice platform. This platform serves as a virtual playground, allowing you to simulate real-world scenarios and interact with an AI-powered chatbot designed to provide insights, suggestions, and solutions tailored to the challenges faced by startups.",
	},
	{
		id: 4,
		problem:
			"You are doing a research in a super-conductor making company and  your company expects to use the now hyped machine learning  technique. Since you have never worked with this before you are  expected to learn it within 20 days before the company starts  its research program. Since you are entirely new to the field  you decided to get help from ChatGPT. Write a prompt to  get ChatGPT(LLM) doing the work for you",
	},
	{
		id: 5,
		problem:
			"You've stepped into the shoes of a Financial Analyst with expertise in technical analysis and a deep understanding of the global macroeconomic environment. A client is seeking your assistance to gain insights into the future outlook of the stock market based on the current conditions. The client emphasizes the need for clear and informed predictions, as they are looking to make strategic decisions for long-term advantages.\nYour task is to respond to the client's inquiry with a precise and well-informed analysis. Given the nature of the request, you should consider factors such as market trends, economic indicators, geopolitical events, and any other relevant variables that may impact the stock market. The client is particularly interested in receiving clear and actionable information to guide their investment decisions.\nIn your interaction with the AI chatbot, you should provide a detailed analysis of the current stock market conditions, highlighting key trends and potential influencing factors. Use your knowledge of technical analysis tools to support your predictions, and ensure that your response is written in a manner that is both informative and accessible to someone seeking financial guidance.\nRemember to maintain a professional and confident tone throughout your response, conveying the expertise expected from a qualified financial analyst.",
	},
	{
		id: 6,
		problem:
			"You are doing a research in a super-conductor making company and  your company expects to use the now hyped machine learning  technique. Since you have never worked with this before you are  expected to learn it within 20 days before the company starts  its research program. Since you are entirely new to the field  you decided to get help from ChatGPT. Write a prompt to  get ChatGPT(LLM) doing the work for you",
	},
	
];

function ChatBox() {

	

	const [currentAnswer, setCurrentAnswer] = useState(null);
	const [responseNum,setResponseNum]  = useState(null)
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [textValue, setTextValue] = useState('');
	const handleNext = () => {
		if (currentQuestion < problems.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
			const ans = bestAns[currentQuestion]
			setResponseNum(null);
		}
	};
	const handleTextareaChange = (event:any) => {
		setTextValue(event.target.value);
	  };
	const handlePrev = () => {
		if (currentQuestion > 0) {
			setCurrentQuestion(currentQuestion - 1);
			setResponseNum(null);
		}
	};

	// Different functions for different scenarios
	const handleBestAnsSubmit = (input1:any, input2:any) => {
		// Make API call for BestAns scenario
		// Implement the logic as needed
		console.log("Method Handle Best Ans")
		fetch(`http://127.0.0.1:8000/ml/model?inp1=${input1}&inp2=${input2}`, {
		  method: 'GET',
		  headers: {
			'Accept': 'application/json',
			// Add any additional headers if needed
		  },
		  // You can add a body if you are making a POST request
		  // body: JSON.stringify({ inp1: input1, inp2: input2 }),
		})
		  .then(response => response.json())
		  .then(data => {
			// Handle the response data here
			console.log(data);
			// Set the responseNum state based on the API response
			setResponseNum(data.result.toString().substring(0, 4)); // Replace "responseNum" with the actual key in your API response
		  })
		  .catch(error => {
			// Handle errors here
			console.error('Error:', error);
			// Set the responseNum state to indicate an error
			setResponseNum(null);
		  });
	  };
	
	  
	
	//   const handleBardAISubmit = (input1:any, input2:any) => {
	// 	// Make API call for BardAI scenario
	// 	// Implement the logic as needed
	// 	console.log("Method Handle BardAI Ans")
	//   };


// open ai calls
const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true
});

const handleChatGptSubmit = async (input1: any, input2: any) => {
	console.log("handle chat Gpt response")
	console.log("Best Answer", input1 );
	console.log("text Area",input2);
	try {
	  // Assuming input1 and input2 are used to construct the request payload
	  console.log("Processing Response to ChatGpt");

	  const message1 = `Design ${input1}`;
	  const response1 = await openai.chat.completions.create({
		model: "gpt-3.5-turbo",
		messages: [{ role: "user", content: message1 }],
		temperature: 0,
		max_tokens: 1000,
	  });
	  // Implement logic to handle the response data as needed
	  const message2 = `Design ${input2}`;
	  const response2 = await openai.chat.completions.create({
		model: "gpt-3.5-turbo",
		messages: [{ role: "user", content: message2 }],
		temperature: 0,
		max_tokens: 1000,
	  });
	  console.log("ChatGpt Response1:", response1);
	  console.log("ChatGpt Response2:", response2);


	  handleBestAnsSubmit( response1.choices[0].message.content, response2.choices[0].message.content);
	} catch (err:any) {
	  console.error('Error in handleChatGptSubmit:', err.message);
	}
  };


	const handleSubmit = () => {
		// setResponseNum(1);

		// Make an API call using fetch

		// manage inputs to be sent to the backend
		const input1 = bestAns[currentQuestion].problem;
		const input2 = textValue;

		// Call the appropriate function based on the selected value
		switch (selectedValue) {
			case 'BestAns':
			  handleBestAnsSubmit(input1, input2);
			  break;
			case 'ChatGpt':
				// input1 : as problem statemnet 
				// input 2 as user statement 
				// input 3 as bestan
				// problem statement , our value 
			  handleChatGptSubmit(bestAns[currentQuestion].problem, input2);
			  break;
			case 'BardAI':
				handleBestAnsSubmit(input1, input2);
			  break;
			default:
				handleBestAnsSubmit(input1, input2);
		  }
	  
		
	  };


	//   Dropdown 
	const [selectedValue, setSelectedValue] = useState('');
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
	const toggleDropdown = () => {
	  setIsDropdownOpen(!isDropdownOpen);
	};
  
	const handleSelection = (value:any) => {
	  setSelectedValue(value);
	  toggleDropdown();
	};
	  
	return (
		<div className="h-screen w-5/6 mx-auto flex flex-col justify-center">
			<div>
				<button
					onClick={handlePrev}
					disabled={currentQuestion === 0}
					className={`border-[2px] border-zinc-700 rounded-xl px-8 hover:${currentQuestion === 0 ? "" : "text-indigo-400"
						} py-2 ${currentQuestion === 0 ? "text-zinc-600" : "text-white"}`}
				>

					Prev
				</button>

				<button
					onClick={handleNext}
					disabled={currentQuestion === problems.length - 1}
					className={`relative inline-flex items-center justify-center p-0.5 ml-3 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-md group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 ${currentQuestion === problems.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
				>
					<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
					&nbsp;	Next  &nbsp;
					</span>
				</button>


				<div className="grid grid-cols-5 grid-rows-2 gap-5 mt-5 h-[720px]">
					<div className="border-[2px] border-zinc-700 row-span-2 col-span-2 rounded-xl p-2">
						<p className="p-4 font-bold text-white question-text">
							Problem Statement : <span>{problems[currentQuestion].id}</span>
						</p>
						<div className="flex flex-col justify-center h-5/6 bg-zinc-700 rounded-xl overflow-y-auto text-white ">
							<p className="w-full h-full p-4 text-2xl ">
								{problems[currentQuestion].problem}
							</p>
						</div>
					</div>
					
					<div className={`border-[2px] border-zinc-700 ${responseNum === null ? 'row-span-2 col-span-3' : 'col-span-3 col-span-2'} rounded-xl p-2`}>
					<div className="flex justify-between items-center">
  {/* Left side */}
  <div className="flex items-center">
    <p className="font-bold pt-2 pl-4 mt-2 magic-text">Write your prompt here!</p>
  </div>

  {/* Right side */}
  <div className="flex items-center">
    {/* Submit button */}
    <button
      onClick={handleSubmit}
      className="relative inline-flex items-center justify-center p-0.5 mr-3 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Submit
      </span>
    </button>

	<div className="relative inline-block text-left">
		<button
		  id="dropdownDefaultButton"
		  onClick={toggleDropdown}
		  className="text-white bg-black-700 hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-black-600 dark:hover:bg-black-700 dark:focus:ring-blue-800 border-2 border-sky-100"
		  type="button"
		>
		  {selectedValue || 'Judge'}
		  <svg
			className={`w-2.5 h-2.5 ms-3 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 10 6"
		  >
			<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
		  </svg>
		</button>
  
		{/* Dropdown menu */}
		{isDropdownOpen && (
		  <div id="dropdown" className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
			<ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
			  <li>
				<a
				  href="#"
				  onClick={() => handleSelection('BestAns')}
				  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
				>
				  Best Answer
				</a>
			  </li>
			  <li>
				<a
				  href="#"
				  onClick={() => handleSelection('ChatGpt')}
				  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
				>
				  ChatGpt
				</a>
			  </li>
			  {/* <li>
				<a
				  href="#"
				  onClick={() => handleSelection('BardAI')}
				  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
				>
				  Bard AI
				</a>
			  </li> */}
			</ul>
		  </div>
		)}
  
		{/* Display selected value
		{selectedValue && (
		  <div className="mt-2 text-sm text-gray-700 dark:text-gray-200">
			Selected: {selectedValue}
		  </div>
		)} */}
	  </div>
  </div>
</div>
						
						<textarea
							className="w-full h-5/6 p-4 text-xl mt-2 bg-zinc-700 rounded-xl text-xl text-white"
							placeholder="Type something..."
							onChange={handleTextareaChange}
							value={textValue}
						>

						</textarea>
					</div>

					{responseNum && <div className="border-[2px] border-zinc-700 rounded-xl
					p-2 text-transparent duration-1 cursor-default text-edge-outline animate-div">
						<p className="p-4 text-center font-bold  text-white
						">Response <br/> (% matched)</p>
						<div className="flex flex-col justify-center items-center h-5/6">
							<p className="text-5xl font-bold text-center magic-text">{responseNum+ "%"}</p>
						</div>
					</div>}
					{responseNum && <div className="border-[2px] border-zinc-700 rounded-xl p-2 col-span-2 ">
						<p className="p-4 font-bold answer-text">Ideal Prompt</p>
						<p className="p-4 overflow-y-auto h-5/6 text-md bg-zinc-700 rounded-xl">
							{currentAnswer ? currentAnswer : bestAns[currentQuestion].problem}
						</p>
					</div>}
				</div>
			</div>
		</div>
	);
}



export default function Example() {
	return (
		<>
			<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
				<Navigation />
				<ChatBox />

			</div>
		</>
	);
}
