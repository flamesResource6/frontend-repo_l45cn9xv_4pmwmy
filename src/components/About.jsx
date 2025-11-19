function About() {
  return (
    <section id="about" className="relative py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <p className="mt-4 text-blue-100/80 leading-relaxed">
              I'm an AI and Data Science undergraduate passionate about machine learning,
              deep learning, and building data products that solve real problems. I enjoy
              blending research with practical engineering, from model training and MLOps
              to crafting clean, user-friendly interfaces for insights.
            </p>
            <ul className="mt-6 space-y-2 text-blue-100/80">
              <li>• Machine Learning, Deep Learning, NLP</li>
              <li>• Python, PyTorch, scikit-learn, FastAPI</li>
              <li>• Data viz: Matplotlib, Seaborn, Plotly</li>
              <li>• MLOps basics: versioning, experiments, deployment</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-blue-400/30" />
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-blue-500/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
