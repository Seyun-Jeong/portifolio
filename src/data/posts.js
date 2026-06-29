export const posts = [
  {
    slug: 'anndata-scrnaseq-data-structure',
    title: 'AnnData: The Data Structure Behind Single-Cell RNA Sequencing',
    date: '2026-06-29',
    tags: ['Bioinformatics', 'Python', 'scRNA-seq'],
    excerpt:
      "Before you run a single analysis in scRNA-seq, you need to understand how your data is structured. A regular pandas DataFrame won't cut it — you're dealing with thousands of cells, thousands of genes, and multiple layers of metadata all at once. That's where AnnData comes in.",
    sections: [
      {
        heading: null,
        body: `Before you run a single analysis in single-cell RNA sequencing (scRNA-seq), you need to understand how your data is structured. A regular pandas DataFrame won't cut it — you're dealing with thousands of cells, thousands of genes, and multiple layers of metadata all at once. That's where AnnData comes in.

This post walks through the core AnnData concepts using a minimal example. All code is available in my scrna-benchmark repository on GitHub.

Note: This post closely follows the official AnnData getting-started tutorial by Adam Gayoso and Alex Wolf. My additions include a reusable generate_names() helper function and annotations explaining each concept in the context of the PBMC68k benchmarking project.`,
      },
      {
        heading: 'Setup',
        code: `import numpy as np
import pandas as pd
import anndata as ad
from scipy.sparse import csr_matrix
from importlib.metadata import version

version('anndata')  # '0.12.16'`,
        body: `AnnData is a Python package from the scverse ecosystem — the standard data container for single-cell analysis tools like Scanpy, scVI, and Squidpy. Think of it as a specialised matrix with named rows (cells) and columns (genes), plus dedicated slots for every kind of metadata you'll accumulate during an analysis.`,
      },
      {
        heading: 'Creating an AnnData object',
        code: `counts = csr_matrix(np.random.poisson(1, size=(100, 2000)), dtype=np.float32)
adata = ad.AnnData(counts)
# AnnData object with n_obs × n_vars = 100 × 2000`,
        body: `n_obs = 100 cells (observations). n_vars = 2000 genes (variables).

Why csr_matrix? Real scRNA-seq data is roughly 90% zeros — most genes are not detected in any given cell. Compressed Sparse Row format stores only the non-zero values, which cuts memory usage dramatically when you scale to 68,000 cells.

Why Poisson? Gene counts follow a Poisson distribution in real biology. The mean and variance of expression are coupled. This matters when you choose normalisation and statistical models later.`,
      },
      {
        heading: 'The count matrix (adata.X)',
        code: `adata.X
# <Compressed Sparse Row sparse matrix of dtype 'float32'
#   with 126465 stored elements and shape (100, 2000)>`,
        body: `adata.X is your raw count matrix. It stores how many times each gene was detected in each cell. float32 instead of float64 halves memory usage — important when your matrix grows to 68,000 cells × 33,000 genes.`,
      },
      {
        heading: 'Naming cells and genes',
        code: `def generate_names(prefix, count):
    return [f"{prefix}_{i}" for i in range(count)]

adata.obs_names = generate_names("Cell", adata.n_obs)
adata.var_names = generate_names("Gene", adata.n_vars)

print(adata.obs_names[:10], adata.var_names[:10], sep="\\n")`,
        body: `obs_names are cell barcodes in real data — unique identifiers like ACGTACGT-1 assigned during sequencing. var_names are gene names like CD3E or CD19.

Naming them properly is essential for two reasons: slicing by name is much safer than slicing by integer index, and when you merge multiple datasets the names are what AnnData uses to align observations and variables.

The generate_names() function is a small convenience helper. In real data you'd read these names directly from a Cell Ranger output or an h5ad file.`,
      },
      {
        heading: 'Slicing: Views, not copies',
        code: `adata[["Cell_1", "Cell_10"], ["Gene_5", "Gene_1900"]]
# View of AnnData object with n_obs × n_vars = 2 × 2`,
        body: `AnnData slicing returns a View, not a copy. The underlying data is not duplicated in memory — the view just holds a reference with index offsets. This is critical when working with 68,000 cells: a naive copy-on-slice approach like pandas would exhaust RAM in seconds.

If you need a true independent copy (for example before modifying a subset), call .copy() explicitly.`,
      },
      {
        heading: 'Cell metadata (adata.obs)',
        code: `ct = np.random.choice(["B", "T", "Monocyte"], size=(adata.n_obs,))
adata.obs["cell_type"] = pd.Categorical(ct)
adata.obs`,
        body: `adata.obs is a pandas DataFrame where each row is a cell. You can store any per-cell annotation here: cell type labels, sample batch, QC metrics, cluster assignments.

Why pd.Categorical and not a plain string column? Categorical uses integer codes under the hood — faster groupby operations, lower memory, and downstream tools like Scanpy expect it. Any column you'll use for colouring a UMAP or splitting a violin plot should be Categorical.`,
      },
      {
        heading: 'What comes next',
        body: `This notebook only scratches the surface. The next posts in this series will cover:

adata.var for gene-level metadata (highly variable gene flags, mean expression, dispersion). adata.obsm for storing low-dimensional embeddings like PCA and UMAP coordinates. Saving and loading .h5ad files — the standard interchange format for single-cell data. All of this builds toward the full PBMC68k benchmarking pipeline.

References: Gayoso, A. & Wolf, A. (2024). AnnData getting-started tutorial. scverse. anndata.scverse.org`,
      },
    ],
  },
  // {
  //   slug: 'your-next-post',
  //   title: '',
  //   date: 'YYYY-MM-DD',
  //   tags: [],
  //   excerpt: '',
  //   sections: [
  //     { heading: null, body: '' },
  //     { heading: '', code: '', body: '' },
  //   ],
  // },
];
