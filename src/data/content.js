export const identity = {
  name: 'Seyun Jeong',
  title: 'AI & Bioinformatics Researcher',
  bio: `AI and bioinformatics researcher with hands-on experience in Python/R data pipelines, GPU-accelerated single-cell analysis, HPC benchmarking, and healthcare-data engineering. At SLU's BioHPC Lab, I benchmark matched CPU and GPU scRNA-seq workflows on H100 hardware, quantifying where implementations agree and diverge. Co-author, SC Workshops 2025 (Best Paper Runner-Up). At MedReveal, a healthcare price-transparency startup I co-founded, I contributed to Python/Go data-processing components and PostgreSQL pipelines joining insurer machine-readable files with NPI registry data, reducing duplicate pricing records by 17.1%. M.S. in Artificial Intelligence, Saint Louis University (GPA 3.86, expected July 2026).`,
  email: 'seyun.jeong@slu.edu',
  github: 'https://github.com/Seyun-Jeong',
  linkedin: 'https://www.linkedin.com/in/jeongseyun7/',
  currently: {
    line1: 'Completing M.S. in Artificial Intelligence (thesis track) at Saint Louis University. Degree expected July 2026.',
    line2: 'Graduate Research Student, BioHPC Lab. Supervised by Dr. Tae-Hyuk Ahn.',
  },
};

export const projects = [
  {
    id: 1,
    name: 'scRNA-seq CPU vs GPU Validation Framework',
    stack: ['RAPIDS', 'Scanpy', 'Seurat', 'ScaleSC', 'Python', 'R', 'SLURM'],
    description:
      'Benchmarked matched CPU and GPU scRNA-seq workflows on SLU HPC, including a 1.3M-cell mouse brain (E18) dataset from 10x Genomics. GPUs achieved 10×+ end-to-end acceleration in the published study, with moderate clustering concordance (ARI near 0.50 across the evaluated sample sizes). Found that platform-dependent implementation choices can substantially alter cluster assignments, while additional biological-signal metrics are required to determine whether those differences change downstream interpretation. Public repo: reproducible PBMC3k Scanpy pipeline; CPU/GPU benchmarking and thesis-scale experiments ran on SLU HPC and are not yet in that repository.',
    year: '2025',
    category: 'Research',
    link: 'https://github.com/Seyun-Jeong/scrna-benchmark',
  },
  {
    id: 2,
    name: 'MedReveal',
    stack: ['Python', 'PostgreSQL', 'Go'],
    description:
      'Co-founded a five-person healthcare price-transparency startup and led development of Python/Go data-processing components for insurer machine-readable files. Contributed to PostgreSQL data modeling joining in-network rate files with NPI registry and taxonomy data. Reduced duplicate negotiated-rate records by 17.1% (185,540 → 153,785). Private codebase — architecture overview available on request.',
    year: '2024',
    category: 'Systems',
  },
  {
    id: 3,
    name: 'Pi4Micronaut',
    stack: ['Java', 'Micronaut', 'Pi4j', 'Raspberry Pi'],
    description:
      'Open-source Java library bridging the Micronaut framework with Raspberry Pi hardware via Pi4j. Implemented hardware drivers for Ultrasonic Sensor (distance measurement), Servo Motor (actuation), and RGBLED (GPIO output). Part of the OSS SLU initiative for IoT development.',
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
    description:
      'Benchmarked CPU and GPU scRNA-seq workflows on a 1.3M-cell mouse brain (E18) dataset from 10x Genomics. GPUs achieved 10×+ end-to-end speedup with moderate clustering concordance (ARI near 0.50 across the evaluated sample sizes). Platform choice affects cluster assignments; biological preservation requires metrics beyond ARI alone. Published at SC 2025 in St. Louis, MO.',
    link: 'https://doi.org/10.1145/3731599.3767378',
  },
];

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'R', 'SQL', 'bash', 'Java', 'C++'],
  },
  {
    category: 'GPU & HPC',
    items: ['RAPIDS-singlecell', 'SLURM / sbatch', 'CUDA-accelerated workflows'],
  },
  {
    category: 'Bioinformatics',
    items: ['Scanpy', 'Seurat', 'ScaleSC'],
  },
  {
    category: 'Data & Systems',
    items: ['PostgreSQL', 'Docker', 'Go (projects)', 'Pi4j'],
  },
  {
    category: 'Learning',
    items: ['AWS', 'Rust', 'React'],
  },
];

export const philosophy = {
  motto: 'Every action you take is a vote for the type of person you wish to become.',
  attribution: '— James Clear',
  statement:
    'Consistency compounds. I log what I built, what broke, and what I learned. Not for performance reviews. Because progress only becomes visible in retrospect. Team first.',
};
