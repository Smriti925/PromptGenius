"use client"
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { useRouter } from "next/navigation";

const navigation = [
  { name: "Questions", href: "/projects" },
  { name: "Practice", href: "/practice" },
];


const AiPromptGenerator = () => {
  return (
    <section className="lclIuZ">
      <p>
        Are you struggling to come up with fresh ideas for your projects? Look no further! Whether you’re a writer, blogger, or student, an AI prompt generator will help spark your creativity with powerful prompts for tools like ChatGPT.
      </p>

      <p>
        With our AI prompt generator, you can generate an endless stream of prompts that are tailored to your specific needs and preferences. Simply type your desired criteria, such as genre, tone, or topic, and our algorithm will generate a unique AI output that matches your criteria.
      </p>

      <p>Here’s everything you need to know to get started.</p>

      <h2 className="wp-block-heading">What Is an AI Prompt Generator</h2>

      <p>
        An AI prompt generator is a tool that uses natural language processing and machine learning algorithms to generate prompts for AI tools like ChatGPT developed by OpenAI. A prompt is simply a starting point or an idea that helps kickstart your project. It can be a word, a phrase, or a question that inspires you to create something unique with the help of artificial intelligence.
      </p>

      <p>
        The AI prompt generator can create prompts based on different criteria, such as the type of the project, genre, tone, style, length, or even specific keywords or concepts. For example, if you’re working on a business project and need to generate some marketing copy, you could input your target audience, product features, and desired tone into the AI prompt generator.
      </p>

      <h2 className="wp-block-heading">Why Use a Prompt Generator?</h2>

      <p>
        There are several reasons why someone might choose to use an AI prompt generator for their projects. An AI prompt generator responses can provide a starting point or idea that may help overcome creative blocks or inspire new ideas. This is particularly useful for writers, artists, or anyone working in a creative field, as it can be difficult to come up with fresh ideas on a regular basis.
      </p>

      <p>
        The AI prompt generator can help to save time and increase productivity. Instead of spending hours brainstorming ideas or researching topics, a user can input their desired criteria into the AI prompt generator and generate multiple effective prompts in a matter of seconds. This can help to streamline the creative process and allow more time for actual creation and refinement. You can generate:
      </p>

      <ul>
        <li>Prompts for personal growth, self-reflection, or self-improvement</li>
        <li>Complex prompts for problem-solving, critical thinking, or decision-making</li>
        <li>Prompts for marketing, advertising, or branding</li>
        <li>Prompts for product development, innovation, or design</li>
        <li>Concise prompts for social media content, blog posts, or articles</li>
        <li>Prompts for speech recognition, sentiment analysis, or chatbots</li>
        <li>Prompts for image recognition, object detection, or classification</li>
        <li>Prompts for music composition, art creation, or graphic design</li>
        <li>Prompts for education, training, or teaching</li>
        <li>Prompts for research, analysis, or experimentation</li>
        <li>Prompts for entertainment, gaming, or storytelling</li>
        <li>And much more!</li>
      </ul>
    </section>
  );
};

export default function Home() {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/practice");
  };
  return (
    <>
  
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
       
        </ul>
        
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Prompt Genius
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <br/>
      <br/>
      <button className="gklAha" onClick={handleButtonClick}>Try it Out ! </button>
      <br/>  
      <div className="my-13 text-center animate-fade-in">
        <h1 className="text-sm text-zinc-500 ">
        Your ultimate prompt engineering playground...
        </h1>
      </div>
      <br/>  

    
      <iframe
     title="Template Preview"
     className=""
     frameBorder="no"
     src="https://www.taskade.com/embed/y4PAWJFBBZBvrLLr?as=list&share=view&view=y7mzddjL9dCYRfe4&theme=dark&coverImageType=background"
     loading="lazy"
     style={
       {
         width: '90%',
         height: '70vh',
         borderRadius: '20px',
         margin: '0px auto',
         maxHeight: '700px',
       } as any
     }
   ></iframe>
    </div>
      {/* Call to the iframe component */}
  
   
      {/* Call to the about the project from the page  */}
      <AiPromptGenerator />
    </>
  );
}
