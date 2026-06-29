export const identity = {
  name: 'Seyun Jeong',
  title: 'Computer Science Researcher & Engineer',
  bio: "I'm a computer science researcher with a focus on machine learning systems, distributed computing, and human-computer interaction. I build tools that bridge the gap between theoretical research and practical engineering—from high-performance inference pipelines to accessible developer tooling. Currently pursuing graduate studies and open to research collaborations and engineering roles.",
  email: 'seyun.jeong@example.edu',
  github: 'https://github.com/seyunjeong',
  linkedin: 'https://linkedin.com/in/seyunjeong',
};

export const projects = [
  {
    id: 1,
    name: 'NeuralFlow',
    stack: ['C++', 'CUDA', 'Python', 'PyTorch'],
    description:
      'Lightweight inference runtime achieving 3× throughput improvement via kernel fusion and KV-cache management. Designed for production deployment of large transformer models at reduced cost.',
    year: '2024',
    category: 'Systems / ML',
  },
  {
    id: 2,
    name: 'DataPilot',
    stack: ['TypeScript', 'React', 'FastAPI', 'GPT-4o', 'PostgreSQL'],
    description:
      'AI-assisted data wrangling tool that translates natural language queries into executable Pandas and SQL transformations. Reduces exploratory data analysis time by an order of magnitude.',
    year: '2024',
    category: 'AI / Developer Tools',
  },
  {
    id: 3,
    name: 'MeshSync',
    stack: ['TypeScript', 'WebRTC', 'IndexedDB'],
    description:
      'Peer-to-peer state synchronization library using CRDTs and a gossip protocol. Enables conflict-free collaborative editing without a central server, with offline-first guarantees.',
    year: '2023',
    category: 'Distributed Systems',
  },
  {
    id: 4,
    name: 'CodeLens',
    stack: ['Python', 'Tree-sitter', 'TypeScript', 'LSP'],
    description:
      'VS Code extension surfacing real-time complexity metrics and AI-powered refactoring suggestions. Integrates directly with the Language Server Protocol for zero-configuration setup.',
    year: '2023',
    category: 'Developer Tools',
  },
];

export const publications = [
  {
    id: 1,
    title: 'Adaptive KV-Cache Eviction for Long-Context Transformer Inference',
    venue: 'NeurIPS',
    year: '2024',
    description:
      'Proposes a dynamic eviction policy for key-value caches in transformer inference, enabling 2× context length at fixed memory with less than 1% accuracy degradation.',
  },
  {
    id: 2,
    title:
      'Conflict-Free Replicated Data Types for Real-Time Collaborative Coding Environments',
    venue: 'UIST',
    year: '2023',
    description:
      'Formalizes a CRDT composition model for structured program ASTs, enabling real-time multi-user code editing with guaranteed convergence and semantic validity.',
  },
  {
    id: 3,
    title:
      'Profiling and Optimizing Data Wrangling Pipelines with LLM-Guided Rewrites',
    venue: 'VLDB',
    year: '2023',
    description:
      'Introduces an LLM-in-the-loop approach to automatically identify and rewrite bottlenecks in Python data pipelines, achieving 3–8× speedups on benchmark corpora.',
  },
];

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'C++', 'TypeScript', 'JavaScript', 'Rust', 'SQL'],
  },
  {
    category: 'ML',
    items: [
      'PyTorch',
      'CUDA',
      'Transformers',
      'Hugging Face',
      'scikit-learn',
      'Triton',
    ],
  },
  {
    category: 'Systems & Infra',
    items: ['Linux', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'gRPC'],
  },
  {
    category: 'Web & Tooling',
    items: ['React', 'FastAPI', 'Node.js', 'WebRTC', 'LSP', 'Tree-sitter'],
  },
  {
    category: 'Research Methods',
    items: [
      'Ablation Studies',
      'Benchmarking',
      'User Studies',
      'Static Analysis',
      'Profiling',
    ],
  },
];

export const philosophy = {
  motto: 'Build things that outlast the deadline.',
  statement:
    'Good engineering is an act of care—for users who will depend on it, for colleagues who will maintain it, and for the future self who returns to it six months later. I believe in writing code that explains itself, systems that fail gracefully, and research that ships.',
};
