import { useEffect, useState } from "react";

const demoProjects = [
  {
    title: "Tweet Sentiment Classifier",
    description: "Fine-tuned transformer that classifies tweet sentiment with a lightweight FastAPI service.",
    tags: ["NLP", "Transformers", "FastAPI"],
    link: "#",
  },
  {
    title: "Tabular AutoML Pipeline",
    description: "Feature store + model selection notebook turned into a reproducible pipeline.",
    tags: ["AutoML", "scikit-learn", "EDA"],
    link: "#",
  },
  {
    title: "Computer Vision Notebook",
    description: "CNN for defect detection with experiment tracking and visualizations.",
    tags: ["Vision", "PyTorch", "MLFlow"],
    link: "#",
  },
];

function Projects() {
  const [projects, setProjects] = useState(demoProjects);

  useEffect(() => {
    // Ready for future backend: fetch(`${import.meta.env.VITE_BACKEND_URL}/projects`)
    // For now we keep demo data.
  }, []);

  return (
    <section id="projects" className="py-20 bg-slate-950/80">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Projects</h2>
        <p className="mt-3 text-blue-100/80 text-center max-w-2xl mx-auto">
          A selection of work spanning ML, data engineering, and interactive analytics.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="group rounded-2xl border border-blue-400/20 bg-slate-900/60 p-6 hover:border-blue-400/40 transition">
              <div className="h-36 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20" />
              <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-blue-200">
                {p.title}
              </h3>
              <p className="mt-2 text-blue-100/80 text-sm">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-200 border border-blue-400/20">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
