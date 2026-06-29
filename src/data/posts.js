export const posts = [
  {
    slug: 'why-i-built-neuralflow',
    title: 'Why I Built NeuralFlow: Notes on Transformer Inference',
    date: '2024-11-12',
    tags: ['ML Systems', 'CUDA', 'Performance'],
    excerpt:
      'Running large transformer models in production is expensive. Here is what I learned building a custom inference runtime that cuts costs by 3×.',
    sections: [
      {
        heading: 'The problem with naive PyTorch serving',
        body: `Most teams deploy transformer models the same way they train them: wrap the model in a FastAPI endpoint, call model.generate(), ship it. This works fine at low traffic, but the moment you need to serve hundreds of requests per second, you run into a wall.

The two biggest killers are memory bandwidth and kernel launch overhead. A naive forward pass launches dozens of small CUDA kernels, each with significant launch latency. Between requests, the KV cache is rebuilt from scratch even when it does not need to be. The GPU spends more time waiting than computing.`,
      },
      {
        heading: 'Kernel fusion: the core idea',
        body: `The insight behind NeuralFlow is straightforward: if you know the computation graph ahead of time (and for a fixed-architecture transformer you do), you can fuse adjacent operations into a single kernel. The attention QKV projection, the softmax, and the output projection can be written as one CUDA kernel that never writes intermediate results to global memory.

This is not a new idea — FlashAttention pioneered it — but generalizing it to arbitrary fusion patterns and wiring it into a production serving framework requires a surprising amount of engineering work.`,
      },
      {
        heading: 'KV-cache management at scale',
        body: `The second major win came from persistent KV caches. Instead of discarding the key-value pairs from the attention layers after each generation, NeuralFlow keeps a bounded cache keyed by the prefix hash of the prompt. For chat-style workloads where many requests share a system prompt, cache hit rates above 60% are common.

The tricky part is eviction policy. A naive LRU evicts large caches that happen to be old even if they are frequently reused. We use a cost-aware eviction policy that weights by recomputation cost, not just recency.`,
      },
      {
        heading: 'Results and open questions',
        body: `On a fleet of A100 GPUs serving a 7B parameter model, NeuralFlow achieves roughly 3× higher throughput than a baseline PyTorch serving stack at the same latency SLO. Memory savings from cache reuse are highly workload-dependent — anywhere from 20% to 60%.

What I did not solve: dynamic batching across variable-length sequences remains messy, and the fusion compiler does not yet handle MoE layers. Both are active areas of work.`,
      },
    ],
  },
  {
    slug: 'crdts-in-practice',
    title: 'CRDTs in Practice: What the Papers Do Not Tell You',
    date: '2023-09-04',
    tags: ['Distributed Systems', 'CRDTs', 'WebRTC'],
    excerpt:
      'Building MeshSync forced me to learn the gap between CRDT theory and a working collaborative editor. Here is what surprised me.',
    sections: [
      {
        heading: 'Why CRDTs look easy on paper',
        body: `A Conflict-free Replicated Data Type is an elegant idea: design your data structure so that any two replicas can always be merged without conflicts. The math is clean — you need a lattice with a join operation that is commutative, associative, and idempotent. Read the original Shapiro et al. paper and you come away thinking this is solved.

Then you try to build something with it.`,
      },
      {
        heading: 'The tombstone problem',
        body: `Deletions are where CRDT implementations earn their complexity. When a character is deleted in a collaborative editor, you cannot simply remove it from your local state — another peer might concurrently insert after that character, and if you delete it first you lose the insertion context. So you mark it as a tombstone: present in the data structure, invisible in the rendered output.

Over time, tombstones accumulate. A document with thousands of edits over weeks of collaboration can have a tombstone-to-visible-character ratio of 10:1 or worse. Garbage-collecting them requires coordination that partially defeats the point of CRDTs.`,
      },
      {
        heading: 'What I actually shipped',
        body: `MeshSync uses a sequence CRDT based on Logoot with some pragmatic compromises. Tombstone GC runs only when all peers are online and explicitly agree to compact — rare in practice but safe when it happens. The gossip protocol handles message delivery over WebRTC data channels, with a simple sequence number scheme for deduplication.

For most real workloads — small files, small teams, short sessions — it works well. The failure modes are predictable and the implementation is auditable. Sometimes that matters more than theoretical optimality.`,
      },
    ],
  },
  {
    slug: 'on-reading-papers',
    title: 'On Reading Papers Effectively',
    date: '2023-03-20',
    tags: ['Research', 'Craft'],
    excerpt:
      'A method I developed over two years of reading ML papers that cut my reading time in half while doubling retention.',
    sections: [
      {
        heading: 'The trap of sequential reading',
        body: `Most people read papers the way they read novels: start at the abstract, proceed linearly to the conclusion. This is a reasonable strategy for fiction. For research papers it is inefficient.

A paper is an argument, not a narrative. Its structure is designed to convince reviewers, not to communicate ideas efficiently. The most important information — what was built, what was measured, whether it worked — is scattered across the abstract, the results section, and the conclusion. The related work and method sections are necessary but rarely where insights live.`,
      },
      {
        heading: 'Three-pass reading',
        body: `I use a three-pass approach adapted from Keshav's classic guide. On the first pass I read only the title, abstract, introduction, section headings, and conclusion. This takes five minutes and answers one question: is this paper worth my time?

On the second pass I read figures and tables before the prose that describes them. A good paper's results are legible from its plots alone. If I cannot understand what was measured and how from the figures, the paper usually has a clarity problem.

The third pass — careful end-to-end reading — I reserve for papers I intend to build on or critique. Most papers do not make it here.`,
      },
      {
        heading: 'Taking notes that outlast the paper',
        body: `The note format that has worked best for me is a single document per paper with four sections: the core claim in one sentence, the key evidence for that claim, the limitations the authors acknowledge, and the limitations they do not.

That last section — limitations the authors do not acknowledge — is where the most interesting research directions tend to hide. If a method requires careful hyperparameter tuning to reproduce, the authors often mention this only in passing. If the evaluation is on a benchmark that favors the proposed method, it is rarely flagged. Reading critically, not just receptively, is a practiced skill.`,
      },
    ],
  },
];
