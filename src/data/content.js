export const identity = {
  name: 'Seyun Jeong',
  title: 'AI Researcher',
  bio: `Python-based AI research and data pipeline development. M.S. in Artificial Intelligence candidate at Saint Louis University (expected August 2026). Validated performance and reproducibility of large-scale analysis workflows on NVIDIA H100 and L40S environments; co-author of a full paper at the SC25 DRBSD-11 Workshop (Best Paper Runner-up Award). On Videre, contributed to an assistive-navigation prototype combining multimodal AI APIs, sensor data processing, and Supabase logging. At MedReveal, contributed to Python/Go data processing and PostgreSQL data modeling. Seeking to apply Python-based data analysis, reproducible model evaluation, and healthcare research experience to machine-learning research involving physiological and wearable-device data.`,
  email: 'suj7109@gmail.com',
  github: 'https://github.com/Seyun-Jeong',
  linkedin: 'https://www.linkedin.com/in/jeongseyun7/',
  currently: {
    line1: 'Completing M.S. in Artificial Intelligence (thesis track) at Saint Louis University. Degree expected August 2026.',
    line2: 'Graduate Research Student, BioHPC Lab. Supervised by Dr. Tae-Hyuk Ahn.',
  },
};

export const projects = [
  {
    id: 1,
    name: 'scRNA-seq CPU vs GPU Validation Framework',
    stack: ['Python', 'R', 'Scanpy', 'RAPIDS', 'SLURM'],
    description:
      'Benchmarked matched CPU and GPU scRNA-seq workflows on SLU HPC, including a 1.3M-cell mouse brain (E18) dataset from 10x Genomics. GPUs achieved 10×+ end-to-end acceleration in the published study, with moderate clustering concordance (ARI near 0.50 across the evaluated sample sizes). Found that platform-dependent implementation choices can substantially alter cluster assignments, while additional biological-signal metrics are required to determine whether those differences change downstream interpretation. Public repo: reproducible PBMC3k Scanpy pipeline; CPU/GPU benchmarking and thesis-scale experiments ran on SLU HPC and are not yet in that repository.',
    year: '2025',
    category: 'Research',
    link: 'https://github.com/Seyun-Jeong/scrna-benchmark',
  },
  {
    id: 2,
    name: 'Sleep and Academic Performance Modeling',
    stack: ['Python', 'pandas', 'scikit-learn'],
    description:
      'Course project for HDS 5330 Predictive Modeling & Health ML, Saint Louis University. Analyzed sleep-pattern and academic-performance data using linear and logistic regression, KNN, Naive Bayes, SVM, and Random Forest. Compared model performance, examined class imbalance, and used genetic-algorithm-based hyperparameter optimization. Implemented in Python with pandas and scikit-learn.',
    year: '2026',
    category: 'Health ML',
  },
  {
    id: 3,
    name: 'Videre — Assistive Vision and Sensor-Fusion Prototype',
    stack: ['Python', 'Multimodal AI API', 'Supabase', 'Distance Sensing'],
    description:
      'Contributed to an assistive-navigation prototype combining distance sensing, camera-based scene understanding, and user-alert logic. Implemented Python-based sensor processing and obstacle-alert behavior and contributed to Supabase backend logging. The project used an existing multimodal AI service rather than a custom-trained object-detection model. Awarded Best in Innovation Track at DevFest WashU.',
    year: '2026',
    category: 'Applied AI',
  },
  {
    id: 4,
    name: 'MedReveal',
    stack: ['Python', 'PostgreSQL', 'Go'],
    description:
      'Co-founded a five-person healthcare price-transparency startup and contributed to Python/Go data-processing components for insurer machine-readable files and PostgreSQL data modeling. Reduced duplicate negotiated-rate records by 17.1% (185,540 → 153,785). Private codebase — architecture overview available on request.',
    year: '2024',
    category: 'Systems',
  },
  {
    id: 5,
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
    venue: 'SC25 DRBSD-11 Workshop',
    year: '2025',
    award: 'Best Paper Runner-up Award',
    description:
      'Co-authored full paper benchmarking CPU and GPU scRNA-seq workflows on a 1.3M-cell mouse brain (E18) dataset from 10x Genomics. GPUs achieved 10×+ end-to-end speedup with moderate clustering concordance (ARI near 0.50 across the evaluated sample sizes). Platform choice affects cluster assignments; biological preservation requires metrics beyond ARI alone. Co-authored paper presented by the first author at the SC25 DRBSD-11 Workshop, St. Louis, MO.',
    link: 'https://doi.org/10.1145/3731599.3767378',
  },
];

export const skills = [
  {
    category: 'Core',
    items: ['Python', 'R', 'SQL', 'PostgreSQL', 'Git', 'Linux'],
  },
  {
    category: 'AI & Data',
    items: ['scikit-learn', 'pandas', 'RAPIDS-singlecell', 'Scanpy', 'Seurat'],
  },
  {
    category: 'Project Experience',
    items: ['Go (data extraction)', 'Supabase'],
  },
  {
    category: 'Research & Dev',
    items: ['SLURM', 'H100 / L40S GPU', 'CUDA'],
  },
  {
    category: 'Learning',
    items: ['Docker', 'TypeScript', 'React', 'AWS', 'Rust'],
  },
];

export const philosophy = {
  motto: 'Every action you take is a vote for the type of person you wish to become.',
  attribution: '— James Clear',
  statement:
    'Consistency compounds. I believe the present moment matters most because today\'s choices shape future growth. I aim to keep learning, improving, and becoming more capable through consistent action.',
};
