import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";


export default async function ProjectsPage() {
 
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

  
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Questions
          </h2>
          <p className="mt-4 text-zinc-400">
            To Practice your Prompting
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          {problems.map((problem) => (
            <Link key={problem.id} href={`/projects/${problem.id}`}>
              <Card>
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      {/* Any additional information you want to display */}
                    </div>
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      {/* Any additional information you want to display */}
                    </span>
                  </div>

                  <h2
                    id={`problem-${problem.id}`}
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    {problem.id}
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {problem.problem}
                  </p>
                  <br />
                  <div className="absolute bottom-4 md:bottom-8">
                    <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                      Read more <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div>
                </article>
              </Card>
            </Link>
          ))}
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          {/* Additional content, if needed */}
        </div>
      </div>
    </div>
  );
}