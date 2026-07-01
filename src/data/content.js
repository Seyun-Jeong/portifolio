export const identity = {
  name: 'Seyun Jeong',
  title: 'AI Researcher',
  bio: 'During my M.S. thesis I found that the same algorithm, run on CPU versus GPU, produced different cell clusters from identical data. The Adjusted Rand Index was approximately 0.5. Both results were internally consistent. Neither was wrong. That question sits at the core of everything I build: which platform is the ground truth? I measured it on servers. I want to solve it on the edge.',
  email: 'seyun.jeong@slu.edu',
  github: 'https://github.com/Seyun-Jeong',
  linkedin: 'https://www.linkedin.com/in/jeongseyun7/',
  currently: {
    line1: 'Completing M.S. in Artificial Intelligence (thesis track) at Saint Louis University. Graduating July 25, 2026.',
    line2: 'Graduate Research Student, BioHPC Lab. Supervised by Dr. Tae-Hyuk Ahn.',
  },
};

export const projects = [
  {
    id: 1,
    name: 'scRNA-seq CPU vs GPU Validation Framework',
    stack: ['RAPIDS', 'CUDA', 'Scanpy', 'Seurat', 'ScaleSC', 'Python', 'R'],
    description: 'Benchmarked matched CPU and GPU scRNA-seq pipelines on a 1.3-million-cell PBMC dataset. GPU delivered 10x+ end-to-end speedup but with systematic clustering differences from CPU (ARI ~0.50 across all sample sizes). Found that platform-specific algorithmic choices, not sample size, are the primary driver of biological interpretation variance.',
    year: '2025',
    category: 'Research',
    link: 'https://github.com/Seyun-Jeong/scrna-benchmark',
  },
  {
    id: 2,
    name: 'MedReveal',
    stack: ['Python', 'PostgreSQL', 'Go', 'Rust'],
    description: 'Co-founded a healthcare price transparency startup. Built a data pipeline joining hospital in-network files with NPI registry and taxonomy data at TB scale using PostgreSQL. Reduced duplicate insurance claim records from 185,540 to 153,785. Implemented extraction acceleration in Go and Rust for performance-critical paths.',
    year: '2024',
    category: 'Systems',
    link: 'https://github.com/Seyun-Jeong/price-transparency-in-healthcare',
  },
  {
    id: 3,
    name: 'Pi4Micronaut',
    stack: ['Java', 'Micronaut', 'Pi4j', 'Raspberry Pi'],
    description: 'Open-source Java library bridging the Micronaut framework with Raspberry Pi hardware via Pi4j. Implemented hardware drivers for Ultrasonic Sensor (distance measurement), Servo Motor (actuation), and RGBLED (GPIO output). Part of the OSS SLU initiative for IoT development.',
    year: '2025',
    category: 'Systems',
    link: 'https://github.com/oss-slu/Pi4Micronaut',
  },
];

export const publications = [
  {
    id: 1,
    title: 'Evaluating Accuracy and Performance Tradeoffs in GPU Accelerated Single Cell RNA-seq Analysis',
    venue: 'DRBSD-11, SC Workshops 2025',
    year: '2025',
    award: 'Best Paper Runner-Up',
    description: 'Benchmarked CPU and GPU scRNA-seq pipelines on a 1.3M-cell dataset. GPUs achieved 10x+ speedup but with moderate clustering concordance (ARI ~0.50), showing that computational platform choice is a critical variable in biological interpretation. Published at SC 2025 in St. Louis, MO.',
    link: 'https://doi.org/10.1145/3731599.3767378',
  },
];

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'C++', 'bash', 'SQL', 'Java', 'R'],
  },
  {
    category: 'GPU & HPC',
    items: ['CUDA', 'RAPIDS', 'PyTorch', 'SLURM / sbatch'],
  },
  {
    category: 'Bioinformatics',
    items: ['Scanpy', 'Seurat', 'ScaleSC'],
  },
  {
    category: 'Data & Systems',
    items: ['PostgreSQL', 'Docker', 'Pi4j'],
  },
  {
    category: 'Learning',
    items: ['AWS', 'Go', 'Rust'],
  },
];

export const philosophy = {
  motto: 'Great things will happen for you by spoiling others.',
  statement: 'Consistency compounds. I log what I built, what broke, and what I learned. Not for performance reviews. Because progress only becomes visible in retrospect. Team first.',
};
