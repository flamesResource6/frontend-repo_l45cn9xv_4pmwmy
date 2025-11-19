import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      // Placeholder - ready to wire to backend later
      await new Promise((r) => setTimeout(r, 800));
      setStatus("sent");
      e.currentTarget.reset();
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Contact</h2>
        <p className="mt-3 text-blue-100/80 text-center">
          Let's collaborate. Drop me a message and I'll get back.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="rounded-xl bg-slate-900 border border-blue-400/20 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
            <input name="email" type="email" required placeholder="Email" className="rounded-xl bg-slate-900 border border-blue-400/20 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
          </div>
          <input name="subject" placeholder="Subject" className="w-full rounded-xl bg-slate-900 border border-blue-400/20 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
          <textarea name="message" required rows="5" placeholder="Your message" className="w-full rounded-xl bg-slate-900 border border-blue-400/20 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
          <button disabled={status!=="idle"} className="inline-flex items-center rounded-xl bg-blue-500 px-6 py-3 text-white disabled:opacity-60">
            {status === "idle" && "Send message"}
            {status === "sending" && "Sending..."}
            {status === "sent" && "Sent!"}
            {status === "error" && "Something went wrong"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
