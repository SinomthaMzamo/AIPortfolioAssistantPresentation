import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  ExternalLink,
  CheckCircle2,
  Zap,
  Users,
  Code,
  Database,
  Cpu,
  Lightbulb,
  Target,
  Rocket,
  BookOpen,
} from "lucide-react";

export default function Presentation() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const sections = [
    "hero",
    "problem",
    "solution",
    "requirements",
    "techstack",
    "workflow",
    "demo",
    "agile",
    "challenges",
    "reflections",
    "next",
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isAnimating) return;

      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        navigateSection("next");
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        navigateSection("prev");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, isAnimating]);

  const navigateSection = (direction) => {
    setIsAnimating(true);
    if (direction === "next" && currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else if (direction === "prev" && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSection = (index) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSection(index);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === index
                ? "bg-blue-600 scale-125"
                : "bg-blue-300 hover:bg-blue-400"
            }`}
          />
        ))}
      </div>

      <div className="fixed top-0 left-0 w-full h-1 bg-blue-100 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-600"
          style={{
            width: `${((currentSection + 1) / sections.length) * 100}%`,
          }}
        />
      </div>

      <div
        className="h-full transition-transform duration-600 ease-in-out"
        style={{ transform: `translateY(-${currentSection * 100}vh)` }}
      >
        <section className="h-screen flex items-center justify-center p-8">
          <div className="text-center space-y-8">
            <div className="inline-block px-6 py-2 bg-blue-100 rounded-full border border-blue-300 mb-4">
              <span className="text-blue-700 text-sm font-semibold">
                Week 1 Project
              </span>
            </div>
            <h1 className="text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Ctrl Alt Elite
              </span>
            </h1>
            <h2 className="text-4xl text-gray-800 font-light mb-6">
              AI Portfolio Assistant
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Empowering professionals to tell their story with AI-powered
              content generation
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <a
                href="https://ai-profile-assistant.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition-colors shadow-lg"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
              <a
                href="https://github.com/SinomthaMzamo/ai-bio-bot"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg flex items-center gap-2 transition-colors shadow-lg"
              >
                <Github size={20} />
                Repository
              </a>
            </div>
            <button
              onClick={() => navigateSection("next")}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-blue-400 hover:text-blue-600"
            >
              <ChevronDown size={40} />
            </button>
          </div>
        </section>

        <section className="h-screen flex items-center justify-center p-8 bg-white">
          <div className="max-w-4xl space-y-8">
            <h2 className="text-5xl font-bold text-gray-800 mb-8">
              The Problem
            </h2>
            <div className="grid gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-md">
                <p className="text-2xl text-gray-800 leading-relaxed">
                  Students and early-career professionals struggle to write
                  about themselves in a{" "}
                  <span className="text-blue-600 font-semibold">
                    polished, consistent way
                  </span>
                  .
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-md">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Whether it is a LinkedIn bio, project summary, or learning
                  reflection — it takes{" "}
                  <span className="text-blue-600 font-semibold">
                    time and effort
                  </span>{" "}
                  to make it sound professional.
                </p>
              </div>
              <div className="bg-blue-600 border border-blue-700 rounded-xl p-6 shadow-md">
                <p className="text-xl text-white font-semibold">
                  💡 We needed a solution that makes self-presentation
                  effortless.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-5xl space-y-8">
            <h2 className="text-5xl font-bold text-gray-800 mb-8">
              Our Solution
            </h2>
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 shadow-xl">
              <p className="text-2xl text-gray-800 mb-8 leading-relaxed">
                The{" "}
                <span className="text-blue-600 font-bold">
                  AI Portfolio Assistant
                </span>{" "}
                transforms short user inputs into structured, professional
                content using Generative AI.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-300 shadow-md">
                  <BookOpen className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Professional Bios
                  </h3>
                  <p className="text-gray-600">
                    Generate compelling About Me sections that highlight your
                    unique value
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-300 shadow-md">
                  <Target className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Project Summaries
                  </h3>
                  <p className="text-gray-600">
                    Create clear, concise descriptions of your work and
                    achievements
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-300 shadow-md">
                  <Lightbulb className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Learning Reflections
                  </h3>
                  <p className="text-gray-600">
                    Articulate your growth and insights in a structured format
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen flex items-center justify-center p-8 bg-white">
          <div className="max-w-5xl space-y-8">
            <h2 className="text-5xl font-bold text-gray-800 mb-8">
              Core Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <CheckCircle2
                    className="text-blue-600 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Technical Setup
                    </h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>✓ Selected our tech stack</li>
                      <li>✓ Set up Lovable workspace and shared with team</li>
                      <li>
                        ✓ Integrated workspace with github repo and projects
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <CheckCircle2
                    className="text-blue-600 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Agile Workflow
                    </h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>✓ Kanban board on GitHub Projects</li>
                      <li>✓ Defined and implemented user stories</li>
                      <li>✓ Iterative development approach</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <CheckCircle2
                    className="text-blue-600 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Generative AI Integration
                    </h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>✓ Lovable AI API implementation</li>
                      <li>✓ Effective prompt engineering</li>
                      <li>✓ Multiple content types supported</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <CheckCircle2
                    className="text-blue-600 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Documentation
                    </h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>✓ Comprehensive README.md</li>
                      <li>✓ Documented the user stories</li>
                      <li>✓ Comprehensive documentation of prompts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-5xl space-y-8">
            <h2 className="text-5xl font-bold text-gray-800 mb-8">
              Tech Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border-2 border-blue-300 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <Code className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">React</h3>
                <p className="text-gray-600 text-sm">
                  Modern UI with TypeScript
                </p>
              </div>
              <div className="bg-white border-2 border-blue-300 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <Database className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Supabase
                </h3>
                <p className="text-gray-600 text-sm">Backend and data</p>
              </div>
              <div className="bg-white border-2 border-blue-300 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <Code className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  TypeScript
                </h3>
                <p className="text-gray-600 text-sm">Type-safe code</p>
              </div>
              <div className="bg-white border-2 border-blue-300 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <Cpu className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Lovable AI
                </h3>
                <p className="text-gray-600 text-sm">AI generation</p>
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen flex items-center justify-center p-8 bg-white">
          <div className="max-w-5xl space-y-8">
            <h2 className="text-5xl font-bold text-gray-800 mb-8">
              Tools and Workflow
            </h2>
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-md">
                <p className="text-xl text-gray-800 leading-relaxed mb-4">
                  We built the project in{" "}
                  <span className="text-blue-600 font-semibold">Lovable</span>,
                  enabling real-time collaboration and rapid iteration.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  While GitHub hosted our repository, Lovable's shared workspace
                  allowed us to work together seamlessly.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <a
                  href="https://ai-profile-assistant.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white border-2 border-blue-700 rounded-xl p-6 hover:scale-105 transition-transform shadow-lg"
                >
                  <ExternalLink className="mb-2" size={24} />
                  <h3 className="text-lg font-semibold mb-1">Deployment</h3>
                  <p className="text-blue-100 text-sm">Live application</p>
                </a>
                <a
                  href="https://github.com/SinomthaMzamo/ai-bio-bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-blue-300 rounded-xl p-6 hover:scale-105 transition-transform shadow-lg"
                >
                  <Github className="text-blue-600 mb-2" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Repository
                  </h3>
                  <p className="text-gray-600 text-sm">Source code</p>
                </a>
                <a
                  href="https://github.com/users/SinomthaMzamo/projects/8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-blue-300 rounded-xl p-6 hover:scale-105 transition-transform shadow-lg"
                >
                  <Target className="text-blue-600 mb-2" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Kanban Board
                  </h3>
                  <p className="text-gray-600 text-sm">GitHub Projects</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-5xl space-y-8">
            <h2 className="text-5xl font-bold text-gray-800 mb-8">
              How It Works
            </h2>
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 shadow-xl">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-600">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Select Type
                  </h3>
                  <p className="text-gray-600">Bio, Summary, or Reflection</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-600">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Select Mode
                  </h3>
                  <p className="text-gray-600">Chat mode and form mode</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-600">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Input Details
                  </h3>
                  <p className="text-gray-600">Enter skills and achievements</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-600">
                    <span className="text-2xl font-bold text-blue-600">4</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    AI Generation
                  </h3>
                  <p className="text-gray-600">Get professional content</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <a
                  href="https://ai-profile-assistant.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition-all shadow-lg"
                >
                  <Zap size={24} />
                  Try Live Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen flex items-center justify-center p-8 bg-white">
          <div className="max-w-5xl space-y-8">
            <h2 className="text-5xl font-bold text-gray-800 mb-8">
              Agile Approach
            </h2>
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <Users
                    className="text-blue-600 flex-shrink-0 mt-1"
                    size={32}
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      Collaborative Development
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We followed Agile principles by breaking work into small
                      tasks and prioritizing iterative progress.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-blue-300 rounded-xl p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Key Tasks
                  </h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Designing effective prompts</li>
                    <li>• Integrating Lovable AI API</li>
                    <li>• Building UI components</li>
                    <li>• Testing user experience</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-blue-300 rounded-xl p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Our Process
                  </h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Continuous delivery focus</li>
                    <li>• Quick feedback loops</li>
                    <li>• Real-time collaboration</li>
                    <li>• Kanban board tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-5xl space-y-8">
            <h2 className="text-5xl font-bold text-gray-800 mb-8">
              Challenges and Learnings
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-red-300 rounded-xl p-6 shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Challenges
                </h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Understanding project requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Collaborating effectively with low code tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Designing consistent and comprehensive prompts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Maintaining context in betweeen requests to the genAI API</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Balancing tone and length of generated content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Team coordination and team rules</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white border-2 border-blue-300 rounded-xl p-6 shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Key Learnings
                </h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>
                      Regularly seeking feedback and refining requirements
                      ensures project goals are clear and achievable
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>
                      Low-code and AI tools can accelerate development, but
                      require thoughtful collaboration strategies
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>
                      Prompt wording and structure directly impact the quality
                      of AI-generated content
                    </span>
                  </li>
                  {/* <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>AI tools accelerate development</span>
                  </li> */}
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>
                      Agile methodologies can be applied effectively even in
                      low-code environments
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>
                      Establishing a team agreement helps streamline
                      coordination and ensures everyone is aligned
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen flex items-center justify-center p-8 bg-white">
          <div className="max-w-5xl space-y-8">
            <h2 className="text-5xl font-bold text-gray-800 mb-8">
              Team Reflections
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 border-2 border-blue-600">
                  <Users className="text-blue-600" size={24} />
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  I learned how much wording matters in prompt design
                </p>
              </div>
              <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 border-2 border-blue-600">
                  <Zap className="text-blue-600" size={24} />
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  Lovable taught me how AI tools speed up development
                </p>
              </div>
              <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 border-2 border-blue-600">
                  <Target className="text-blue-600" size={24} />
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  First time applying agile in low-code
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-5xl space-y-12 text-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-800 mb-8">
                Next Steps
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white border-2 border-blue-300 rounded-xl p-6 shadow-md">
                  <Rocket className="text-blue-600 mx-auto mb-3" size={32} />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Personalization
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Tone and format options
                  </p>
                </div>
                <div className="bg-white border-2 border-blue-300 rounded-xl p-6 shadow-md">
                  <BookOpen className="text-blue-600 mx-auto mb-3" size={32} />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    More Content Types
                  </h3>
                  <p className="text-gray-600 text-sm">
                    LinkedIn posts and cover letters
                  </p>
                </div>
                {/* <div className="bg-white border-2 border-blue-300 rounded-xl p-6 shadow-md">
                  <Database className="text-blue-600 mx-auto mb-3" size={32} />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Storage
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Save generated content
                  </p>
                </div> */}
              </div>
            </div>
            <div className="bg-blue-600 rounded-2xl p-12 shadow-xl">
              <h3 className="text-4xl font-bold text-white mb-4">
                Ctrl Alt Elite
              </h3>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Helping professionals tell their story clearly, confidently, and
                with the power of AI
              </p>
              <div className="mt-8 text-blue-200 text-sm">
                Use arrow keys or dots to navigate
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
