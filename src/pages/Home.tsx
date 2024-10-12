import React, { useState } from "react";
import {
  Cloud,
  Database,
  Phone,
  Cog,
  Activity,
  ArrowRight,
  Waves,
  Brain,
  User,
  Headphones,
  Server,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface IconWrapperProps {
  children: React.ReactNode;
  color: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children, color }) => (
  <div className={`p-2 rounded-full ${color} text-white`}>{children}</div>
);

interface WorkflowStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({
  icon,
  title,
  description,
  isActive,
  onClick,
}) => (
  <div
    className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${
      isActive ? "bg-blue-100 scale-105" : "hover:bg-gray-100"
    } cursor-pointer`}
    onClick={onClick}
  >
    <IconWrapper color="bg-blue-500">{icon}</IconWrapper>
    <h4 className="mt-2 font-semibold text-center">{title}</h4>
    {isActive && (
      <p className="text-sm text-gray-600 text-center mt-2">{description}</p>
    )}
  </div>
);

interface ArchitectureSectionProps {
  title: string;
  icon: React.ReactNode;
  content: string[];
}

const ArchitectureSection: React.FC<ArchitectureSectionProps> = ({
  title,
  icon,
  content,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full px-4 py-5 sm:p-6 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <IconWrapper color="bg-indigo-500">{icon}</IconWrapper>
          <h3 className="ml-3 text-lg leading-6 font-medium text-gray-900">
            {title}
          </h3>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-5 sm:px-6 sm:pb-6">
          <ul className="list-disc pl-5 space-y-2">
            {content.map((item, index) => (
              <li key={index} className="text-sm text-gray-500">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default function Component() {
  const [activeStep, setActiveStep] = useState(0);

  const sections: ArchitectureSectionProps[] = [
    {
      title: "User-Facing Components",
      icon: <Phone className="w-6 h-6" />,
      content: [
        "Cochlear Implant Device: Advanced audio capture with noise filtering",
        "Mobile Application (React Native): Intuitive UI for real-time implant control",
        "Web Dashboard (React): Comprehensive analytics and remote tuning interface",
      ],
    },
    {
      title: "Backend Services",
      icon: <Server className="w-6 h-6" />,
      content: [
        "Node.js API Server: High-performance RESTful endpoints with Express.js",
        "Python AI/ML Microservices: Scalable inference engine with Flask",
        "Real-time Communication Server: Bidirectional updates via Socket.io",
      ],
    },
    {
      title: "Data Storage",
      icon: <Database className="w-6 h-6" />,
      content: [
        "PostgreSQL: Robust relational database for user and device data",
        "Redis: Ultra-fast caching and real-time data stream management",
        "Amazon S3: Scalable object storage for audio data and ML artifacts",
      ],
    },
    {
      title: "AI/ML Pipeline",
      icon: <Brain className="w-6 h-6" />,
      content: [
        "Model Training: Advanced deep learning with TensorFlow and Scikit-learn",
        "Model Serving: High-throughput API with optimized Flask endpoints",
        "Real-time Inference: Low-latency processing with ONNX Runtime",
      ],
    },
    {
      title: "Cloud Infrastructure",
      icon: <Cloud className="w-6 h-6" />,
      content: [
        "AWS EC2: Auto-scaling compute instances for dynamic workloads",
        "AWS SageMaker: Managed ML platform for model training and deployment",
        "AWS Lambda: Serverless functions for event-driven processing",
      ],
    },
    {
      title: "DevOps and Monitoring",
      icon: <Activity className="w-6 h-6" />,
      content: [
        "Docker & Kubernetes: Containerized microservices with orchestration",
        "GitHub Actions: Automated CI/CD pipelines for rapid deployment",
        "New Relic & Sentry: Real-time performance monitoring and error tracking",
      ],
    },
  ];

  const workflowSteps: WorkflowStepProps[] = [
    {
      icon: <Waves className="w-6 h-6" />,
      title: "Audio Capture",
      description:
        "High-fidelity audio captured by the cochlear implant's advanced microphone array",
      isActive: false,
      onClick: () => {},
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Local Processing",
      description:
        "Initial noise reduction and signal enhancement performed on the implant",
      isActive: false,
      onClick: () => {},
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Data Transmission",
      description:
        "Processed audio data securely sent to the mobile app via Bluetooth LE",
      isActive: false,
      onClick: () => {},
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Upload",
      description:
        "Encrypted data transmitted to cloud servers for advanced processing",
      isActive: false,
      onClick: () => {},
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Analysis",
      description:
        "Deep learning models analyze and optimize audio for the user's specific needs",
      isActive: false,
      onClick: () => {},
    },
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: "Real-time Feedback",
      description:
        "Optimized audio instructions sent back to the implant for stimulation",
      isActive: false,
      onClick: () => {},
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "User Experience",
      description:
        "User hears enhanced audio, providing feedback for continuous improvement",
      isActive: false,
      onClick: () => {},
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Continuous Learning",
      description:
        "AI models updated based on aggregated user feedback and experiences",
      isActive: false,
      onClick: () => {},
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-6">
          Audiva - Bringing Sound to life
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Next-generation hearing enhancement powered by advanced AI and cloud
          technology
        </p>

        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden mb-12">
          <div className="px-6 py-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Interactive Workflow Diagram
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {workflowSteps.map((step, index) => (
                <WorkflowStep
                  key={index}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  isActive={activeStep === index}
                  onClick={() => setActiveStep(index)}
                />
              ))}
            </div>
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-lg text-blue-800 mb-2">
                Current Step: {workflowSteps[activeStep].title}
              </h3>
              <p className="text-blue-600">
                {workflowSteps[activeStep].description}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden mb-12">
          <div className="px-6 py-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              System Architecture
            </h2>
            {sections.map((section, index) => (
              <ArchitectureSection
                key={index}
                title={section.title}
                icon={section.icon}
                content={section.content}
              />
            ))}
          </div>
        </div>

        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Key Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "React  Native",
                  description: "Cross-platform mobile development",
                },
                {
                  name: "Node.js & Express.js",
                  description: "Scalable backend API",
                },
                {
                  name: "TensorFlow & Scikit-learn",
                  description: "Advanced AI model development",
                },
                {
                  name: "ONNX Runtime",
                  description: "Efficient on-device inference",
                },
                {
                  name: "PostgreSQL & Prisma",
                  description: "Robust data persistence",
                },
                {
                  name: "Redis",
                  description: "High-speed caching and real-time data",
                },
                {
                  name: "AWS (EC2, SageMaker, Lambda)",
                  description: "Cloud infrastructure and ML ops",
                },
                {
                  name: "Docker & Kubernetes",
                  description: "Containerization and orchestration",
                },
                {
                  name: "Socket.io",
                  description: "Real-time bidirectional communication",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
                >
                  <h3 className="font-semibold text-lg text-gray-900">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Product brainstromed by Srividya Davuluri and Tarin Agarwal
          </p>
        </div>
      </div>
    </div>
  );
}
