'use client';
import React, { useState } from 'react';
import { Check, Share2, Mail, ArrowRight, MapPin, Sparkles, Send, Twitter, MessageSquare, Loader2 } from 'lucide-react';

// Quiz Data based on previous generation
const QUIZ_DATA = {
  questions: [
    {
      id: 1,
      question: "How do you prefer to start your productive morning?",
      options: [
        { text: "Sleek, high-rise coworking space with a city view.", weights: { Gangnam: 5, Hannam: 1, Seongsu: 1 } },
        { text: "Specialty coffee in a converted industrial warehouse.", weights: { Seongsu: 5, Euljiro: 3, Hongdae: 1 } },
        { text: "A quiet walk through a sophisticated, hilly village.", weights: { Hannam: 5, Gangnam: 2, Seongsu: 1 } },
        { text: "Vibrant cafe surrounded by students and street art.", weights: { Hongdae: 5, Seongsu: 1, Euljiro: 1 } }
      ]
    },
    {
      id: 2,
      question: "What kind of 'after-work' vibe are you looking for?",
      options: [
        { text: "Exploring hidden 'Newtro' bars in narrow alleys.", weights: { Euljiro: 5, Seongsu: 2, Hongdae: 2 } },
        { text: "World-class dining or a wine bar with expats.", weights: { Hannam: 5, Gangnam: 3, Seongsu: 1 } },
        { text: "Live indie music and affordable street drinks.", weights: { Hongdae: 5, Euljiro: 1, Seongsu: 1 } },
        { text: "High-end shopping and luxury gym sessions.", weights: { Gangnam: 5, Hannam: 2 } }
      ]
    },
    {
      id: 3,
      question: "Which aesthetic inspires your creativity the most?",
      options: [
        { text: "Raw concrete, exposed brick, and craftsmanship.", weights: { Seongsu: 5, Euljiro: 3, Hongdae: 2 } },
        { text: "Polished glass, neon lights, and futuristic tech.", weights: { Gangnam: 5, Hannam: 1, Hongdae: 1 } },
        { text: "Minimalist luxury, art galleries, and quiet greenery.", weights: { Hannam: 5, Gangnam: 2, Seongsu: 2 } },
        { text: "DIY posters, murals, and quirky vintage shops.", weights: { Hongdae: 5, Euljiro: 2, Seongsu: 2 } }
      ]
    },
    {
        id: 4,
        question: "Pick your ideal 'Nomad Fuel' lunch:",
        options: [
          { text: "Healthy grain bowl in a minimalist cafe.", weights: { Hannam: 5, Seongsu: 4, Gangnam: 3 } },
          { text: "Classic Korean street food on a budget.", weights: { Hongdae: 5, Euljiro: 4, Seongsu: 1 } },
          { text: "Quick, efficient meal at a high-end salad bar.", weights: { Gangnam: 5, Hannam: 2 } },
          { text: "Steaming noodles in a gritty traditional market.", weights: { Euljiro: 5, Hongdae: 2, Seongsu: 2 } }
        ]
    }
  ],
  results: {
    Seongsu: {
      title: "Seongsu-dong",
      vibe: "The Brooklyn of Seoul",
      desc: "You thrive in creative, industrial spaces where old-school grit meets high-tech innovation.",
      color: "bg-red-400"
    },
    Hannam: {
      title: "Hannam-dong",
      vibe: "The Global Village",
      desc: "You appreciate the finer things: art galleries, international vibes, and quiet hilltop luxury.",
      color: "bg-blue-400"
    },
    Hongdae: {
      title: "Hongdae",
      vibe: "The Indie Heartbeat",
      desc: "You are fueled by youth culture, street art, and the non-stop energy of the underground scene.",
      color: "bg-yellow-400"
    },
    Euljiro: {
      title: "Euljiro",
      vibe: "The Hipjiro Legend",
      desc: "You love the 'Newtro' aesthetic—finding hidden gems in the gritty, authentic alleys of old Seoul.",
      color: "bg-green-400"
    },
    Gangnam: {
      title: "Gangnam",
      vibe: "The Modern Metropolis",
      desc: "You belong in the fast lane. Sleek, efficient, and professional is your way of life.",
      color: "bg-purple-400"
    }
  }
};

const NeoButton = ({ children, onClick, active, className = "" }) => (
  <button
    onClick={onClick}
    className={`w-full text-left p-4 mb-4 border-4 border-black font-bold transition-all transform hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${
      active ? 'bg-yellow-300' : 'bg-white'
    } ${className}`}
  >
    {children}
  </button>
);

export default function SeoulSoulQuiz() {
  const [step, setStep] = useState(0); // 0: Start, 1: Quiz, 2: Result
  const [currentIdx, setCurrentIdx] = useState(0);
  const [scores, setScores] = useState({ Seongsu: 0, Hannam: 0, Hongdae: 0, Euljiro: 0, Gangnam: 0 });
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitEmail = async () => {
    if (!email) return;
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, result_neighborhood: result.title }),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error("Failed to submit email:", errorData.error || "Unknown error");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAnswer = (weights) => {
    const newScores = { ...scores };
    Object.keys(weights).forEach(key => {
      newScores[key] += weights[key];
    });
    setScores(newScores);

    if (currentIdx < QUIZ_DATA.questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      calculateResult(newScores);
    }
  };

  const calculateResult = (finalScores) => {
    const winner = Object.keys(finalScores).reduce((a, b) => finalScores[a] > finalScores[b] ? a : b);
    setResult(QUIZ_DATA.results[winner]);
    setStep(2);
  };

  const progress = ((currentIdx + 1) / QUIZ_DATA.questions.length) * 100;

  if (step === 0) {
    return (
      <div className="min-h-screen bg-orange-50 p-6 flex items-center justify-center font-mono">
        <div className="max-w-md w-full border-4 border-black bg-white p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-5xl font-black mb-4 leading-none italic uppercase tracking-tighter">
            Seoul <span className="text-orange-500">Soul</span> Match
          </h1>
          <p className="text-xl font-bold mb-8 border-b-4 border-black pb-4">
            Find your perfect Seoul neighborhood for deep work and high vibes.
          </p>
          <NeoButton onClick={() => setStep(1)} className="bg-yellow-400 text-2xl py-6 flex items-center justify-center gap-2">
            START TEST <ArrowRight size={28} strokeWidth={3} />
          </NeoButton>
        </div>
      </div>
    );
  }

  if (step === 1) {
    const q = QUIZ_DATA.questions[currentIdx];
    return (
      <div className="min-h-screen bg-blue-50 p-6 flex flex-col items-center justify-center font-mono">
        <div className="max-w-2xl w-full">
          {/* Progress Bar */}
          <div className="w-full h-8 bg-white border-4 border-black mb-8 relative overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div 
              className="h-full bg-green-400 border-r-4 border-black transition-all duration-500" 
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="border-4 border-black bg-white p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <span className="bg-black text-white px-3 py-1 font-bold text-sm mb-4 inline-block">
              QUESTION {currentIdx + 1} / {QUIZ_DATA.questions.length}
            </span>
            <h2 className="text-3xl font-black mb-8 leading-tight">
              {q.question}
            </h2>
            <div className="space-y-4">
              {q.options.map((opt, i) => (
                <NeoButton key={i} onClick={() => handleAnswer(opt.weights)}>
                  <div className="flex items-center gap-4">
                    <span className="bg-black text-white w-8 h-8 flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + i)}
                    </span>
                    {opt.text}
                  </div>
                </NeoButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${result.color} p-6 flex flex-col items-center justify-center font-mono transition-colors duration-700`}>
      <div className="max-w-xl w-full border-8 border-black bg-white p-10 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        <div className="absolute top-4 right-4 animate-bounce">
            <Sparkles size={48} className="text-yellow-400" strokeWidth={3} />
        </div>
        
        <h3 className="text-xl font-black uppercase mb-2 tracking-widest">Your Match:</h3>
        <h1 className="text-6xl font-black mb-4 leading-none border-b-8 border-black pb-4 uppercase">
          {result.title}
        </h1>
        
        <div className="flex items-center gap-2 mb-6">
          <MapPin fill="black" />
          <span className="text-2xl font-black italic">{result.vibe}</span>
        </div>

        <p className="text-xl font-bold mb-8 leading-relaxed">
          {result.desc}
        </p>

        {/* Email Capture */}
        <div className="border-4 border-black p-6 mb-8 bg-pink-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {submitted ? (
            <div className="text-center py-4">
              <p className="text-2xl font-black text-green-600 mb-2">YOU'RE IN!</p>
              <p className="font-bold">Check your inbox for the guide soon.</p>
            </div>
          ) : (
            <>
              <p className="font-black mb-4 text-lg">WANT THE FULL NEIGHBORHOOD GUIDE?</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="YOUR@EMAIL.COM" 
                  className="flex-1 border-4 border-black p-3 font-bold placeholder:text-gray-400 focus:outline-none focus:ring-4 ring-yellow-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
                <button 
                  onClick={handleSubmitEmail}
                  disabled={isSubmitting}
                  className="bg-black text-white px-6 py-3 font-black hover:bg-gray-800 disabled:bg-gray-400 flex items-center justify-center gap-2 min-w-[140px]"
                >
                  {isSubmitting ? (
                    <>
                      SAVING... <Loader2 size={20} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      SEND ME <Send size={20} />
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>

        {/* Social Share */}
        <div className="flex flex-wrap gap-4">
          <button className="flex-1 border-4 border-black bg-white py-4 font-black flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
            <Twitter fill="black" /> SHARE TO X
          </button>
          <button className="flex-1 border-4 border-black bg-white py-4 font-black flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
            <MessageSquare fill="black" /> REDDIT
          </button>
        </div>

        <button 
          onClick={() => { setStep(0); setCurrentIdx(0); setScores({ Seongsu: 0, Hannam: 0, Hongdae: 0, Euljiro: 0, Gangnam: 0 }); }}
          className="w-full mt-8 underline font-black text-center"
        >
          RETAKE THE QUIZ
        </button>
      </div>
    </div>
  );
}
