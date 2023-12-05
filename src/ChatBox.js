import React, { useState } from "react";
import { problems } from "./Problems";

function ChatBox() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNext = () => {
    if (currentQuestion < problems.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="h-screen w-5/6 mx-auto flex flex-col justify-center">
      <div>
        <button
          onClick={handlePrev}
          disabled={currentQuestion === 0}
          className={`border-[2px] border-zinc-700 rounded-xl px-8 hover:${
            currentQuestion === 0 ? "" : "text-indigo-400"
          } py-2 ${currentQuestion === 0 ? "text-zinc-600" : "text-white"}`}
        >
          Prev
        </button>

        <button
          onClick={handleNext}
          disabled={currentQuestion === problems.length - 1}
          className={`border-[2px] border-zinc-700 rounded-xl px-8 ml-5 hover:${
            currentQuestion === problems.length - 1 ? "" : "text-indigo-400"
          } py-2 ${
            currentQuestion === problems.length - 1
              ? "text-zinc-600"
              : "text-white"
          }`}
        >
          Next
        </button>

        <div className="grid grid-cols-5 grid-rows-2 gap-5 mt-5 h-[720px]">
          <div className="border-[2px] border-zinc-700 row-span-2 col-span-2 rounded-xl p-2">
            <p className="p-4 font-bold">
              Problem Statement : <span>{problems[currentQuestion].id}</span>
            </p>
            <div className="flex flex-col justify-center h-5/6 bg-zinc-700 rounded-xl overflow-y-auto">
              <p className="w-full p-4 text-2xl ">
                {problems[currentQuestion].problem}
              </p>
            </div>
          </div>
          <div className="border-[2px] border-zinc-700 col-span-3 col-span-2 rounded-xl p-2">
            <div className="flex justify-between">
              <p className="font-bold pt-2 pl-4">Write your prompt here!</p>
              <button className="border-[2px] border-zinc-700 rounded-xl px-8 hover:text-indigo-400 py-2">
                SUBMIT
              </button>
            </div>
            <textarea
              className="w-full h-5/6 p-4 text-xl mt-2 bg-zinc-700 rounded-xl text-xl"
              placeholder="Type something..."
            ></textarea>
          </div>

          <div className="border-[2px] border-zinc-700 rounded-xl p-2">
            <p className="p-4 text-center font-bold">Response (% matched)</p>
            <div className="flex flex-col justify-center items-center h-5/6">
              <p className="text-5xl font-bold text-center">72.5 %</p>
            </div>
          </div>
          <div className="border-[2px] border-zinc-700 rounded-xl p-2 col-span-2">
            <p className="p-4 font-bold">Prompt Answer</p>
            <p className="p-4 overflow-y-auto h-5/6 text-md bg-zinc-700 rounded-xl">
              Understand the Fundamentals: aCertainly! Here's a concise
              paragraph summarizing the steps to learn machine learning:
              Learning machine learning involves mastering programming in
              Python, understanding fundamental mathematical concepts like
              linear algebra and calculus, and gaining proficiency in statistics
              and probability theory. You'll need to become skilled at
              preprocessing data, explore various machine learning algorithms,
              and learn how to evaluate model performance. Building practical
              projects, delving into deep learning, and exploring specialized
              areas like NLP or computer vision are important milestones.
              Staying updated with research papers, joining online communities,
              and attending relevant events can keep you on the cutting edge of
              this rapidly evolving field. Ultimately, patience and persistence
              are key, as machine learning is a challenging but highly rewarding
              journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
