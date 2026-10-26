import {
Mail,
Phone,
MapPin,
Send,
CheckCircle,
AlertCircle,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
{
icon: Mail,
label: "Email",
value: "omnarayanmaurya01122003@gmail.com",
href: "mailto:YOUR_EMAIL@example.com",
},
{
icon: Phone,
label: "Phone",
value: "7896050218",
href: "tel:YOUR_PHONE_NUMBER",
},
{
icon: MapPin,
label: "Location",
value: "Lucknow, Uttar Pradesh, India",
href: "https://maps.google.com/?q=Lucknow,Uttar+Pradesh,India",
},
];

export const Contact = () => {
const [formData, setFormData] = useState({
name: "",
email: "",
message: "",
});

const [isLoading, setIsLoading] = useState(false);

const [submitStatus, setSubmitStatus] = useState({
type: null,
message: "",
});

const handleSubmit = async (e) => {
e.preventDefault();


setIsLoading(true);
setSubmitStatus({ type: null, message: "" });

try {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS configuration is missing. Please check your environment variables."
    );
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    },
    publicKey
  );

  setSubmitStatus({
    type: "success",
    message:
      "Message sent successfully! Thank you for reaching out. I'll get back to you soon.",
  });

  setFormData({
    name: "",
    email: "",
    message: "",
  });
} catch (err) {
  console.error("EmailJS error:", err);

  setSubmitStatus({
    type: "error",
    message:
      err.text ||
      err.message ||
      "Failed to send your message. Please try again later.",
  });
} finally {
  setIsLoading(false);
}


};

return ( <section id="contact" className="py-32 relative overflow-hidden">
{/* Background Effects */} <div className="absolute inset-0 pointer-events-none"> <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" /> <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" /> </div>


  <div className="container mx-auto px-6 relative z-10">
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
        Get In Touch
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
        Let's connect{" "}
        <span className="font-serif italic font-normal text-white">
          and build something.
        </span>
      </h2>

      <p className="text-muted-foreground animate-fade-in animation-delay-200">
        I'm Om Narayan Maurya, a Computer Science Engineering student
        focused on full-stack development with the MERN stack and exploring
        the PERN stack. I'm also developing my skills in Python, backend
        development, computer vision, and AI. Have an opportunity, project
        idea, or just want to connect? Feel free to reach out.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
      {/* Contact Form */}
      <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
        <h3 className="text-xl font-semibold mb-2">
          Send Me a Message
        </h3>

        <p className="text-sm text-muted-foreground mb-8">
          Have a project or opportunity in mind? I'd love to hear from you.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2"
            >
              Your Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
            >
              Your Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2"
            >
              Your Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Tell me about your project or opportunity..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            className="w-full"
            type="submit"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <>Sending...</>
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5" />
              </>
            )}
          </Button>

          {/* Submission Status */}
          {submitStatus.type && (
            <div
              role="status"
              aria-live="polite"
              className={`flex items-center gap-3 p-4 rounded-xl ${
                submitStatus.type === "success"
                  ? "bg-green-500/10 border border-green-500/20 text-green-400"
                  : "bg-red-500/10 border border-red-500/20 text-red-400"
              }`}
            >
              {submitStatus.type === "success" ? (
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
              )}

              <p className="text-sm">{submitStatus.message}</p>
            </div>
          )}
        </form>
      </div>

      {/* Right Column */}
      <div className="space-y-6 animate-fade-in animation-delay-400">
        {/* Contact Information */}
        <div className="glass rounded-3xl p-8">
          <h3 className="text-xl font-semibold mb-2">
            Contact Information
          </h3>

          <p className="text-sm text-muted-foreground mb-6">
            Reach out to discuss professional opportunities and
            collaborations.
          </p>

          <div className="space-y-4">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={
                  item.label === "Location" ? "_blank" : undefined
                }
                rel={
                  item.label === "Location"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>

                <div className="min-w-0">
                  <div className="text-sm text-muted-foreground">
                    {item.label}
                  </div>

                  <div className="font-medium break-words">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="glass rounded-3xl p-8">
          <h3 className="text-xl font-semibold mb-2">
            Find Me Online
          </h3>

          <p className="text-sm text-muted-foreground mb-6">
            Explore my projects and connect with me professionally.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://github.com/omnarayanmaurya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-surface transition-all group"
            >
              <FaGithub className="w-6 h-6 text-primary flex-shrink-0" />

              <div>
                <div className="font-medium">GitHub</div>
                <div className="text-xs text-muted-foreground">
                  My projects and code
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-surface transition-all group"
            >
              <FaLinkedin className="w-6 h-6 text-primary flex-shrink-0" />

              <div>
                <div className="font-medium">LinkedIn</div>
                <div className="text-xs text-muted-foreground">
                  Connect professionally
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Availability Card */}
        <div className="glass rounded-3xl p-8 border border-primary/30">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

            <span className="font-medium">
              Open to Opportunities
            </span>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            I'm interested in software development opportunities,
            full-stack projects, internships, and collaborations involving
            web development or AI-powered applications. If you have
            something interesting in mind, let's connect.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


);
};
