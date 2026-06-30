export const posts = [
        {
          slug: 'eli5-day1-what-is-a-gene',
          title: 'What Is a Gene?',
          date: '2026-06-30',
          tags: ['ELI5', 'scRNA-seq', 'Basics'],
          excerpt: 'A gene is a segment of DNA — a recipe. scRNA-seq does not read the recipe. It reads what the cell is currently cooking.',
          sections: [
            {
              heading: null,
              body: 'Before today I thought a gene was just another word for DNA.'
            },
            {
              heading: 'What a gene actually is',
              body: `A gene is a specific segment of DNA that contains instructions for making a protein.
      Every human cell has about 20,000 genes — the same 20,000 in every cell.
      But not every gene is active at the same time.
      
      A gene is like one recipe in a cookbook. Every cell has the full cookbook, but each cell only cooks certain recipes.`
            },
            {
              heading: 'The step I was missing: DNA → RNA → Protein',
              body: `When a gene is "on", it makes RNA first, then the RNA makes the protein. scRNA-seq captures the RNA — not the gene itself. That is the whole point of the R in scRNA-seq.`
            },
            {
              heading: 'Why it matters in the notebook',
              code: `adata.var_names  # gene names: CD3E, CD19, MT-CO1, ...
      # adata.X counts how much RNA was detected per gene per cell`,
              body: `One count means one RNA molecule was detected from that gene in that cell.`
            },
            {
              heading: 'Source',
              body: `MedlinePlus Genetics — What is a gene?
      https://medlineplus.gov/genetics/understanding/basics/gene/
      
      MedlinePlus Genetics — How do genes direct protein production?
      https://medlineplus.gov/genetics/understanding/howgeneswork/makingprotein/`
            }
          ]
        },
      ];