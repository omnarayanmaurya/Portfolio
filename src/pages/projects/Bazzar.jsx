import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ShoppingBag,
  Package,
  Search,
  ShoppingCart,
  ShieldCheck,
  Upload,
  Database,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CreditCard,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";

// Add four screenshots to public/projects/bazzar/ using these exact filenames.
const projectImages = [
  { src: "/projects/bazzar/home.png", alt: "Bazzar e-commerce home page", title: "Home Page" },
  { src: "/projects/bazzar/collection.png", alt: "Bazzar product collection", title: "Product Collection" },
  { src: "/projects/bazzar/product-details.png", alt: "Bazzar product details page", title: "Product Details" },
  { src: "/projects/bazzar/cart.png", alt: "Bazzar shopping cart and checkout", title: "Cart & Checkout" },
];

// Add your URLs here when ready. Buttons appear automatically once a URL is added.
const liveDemoUrl = "";
const githubUrl = "";

const features = [
  { icon: Package, title: "Product Listings", description: "Browse products through a structured catalog with product information and images." },
  { icon: Search, title: "Category-Based Filtering", description: "Explore the catalog by category to make finding relevant products easier." },
  { icon: ShoppingBag, title: "Product Details", description: "View individual product information on dedicated product detail pages." },
  { icon: ShoppingCart, title: "Shopping Cart", description: "Manage selected products and quantities before proceeding to checkout." },
  { icon: ShieldCheck, title: "User Authentication", description: "Use JWT-based authentication and bcrypt password hashing for account security." },
  { icon: Upload, title: "Product Image Uploads", description: "Handle product image uploads through Multer in the backend." },
  { icon: CreditCard, title: "Checkout Flow", description: "Provide a checkout flow that brings the cart experience together." },
  { icon: Database, title: "MongoDB Data Models", description: "Store product and user information using structured MongoDB schemas." },
];

const technologies = ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs", "JWT", "bcrypt", "Multer"];

const highlights = [
  "Developed a full-stack e-commerce application using the MERN stack.",
  "Built RESTful APIs for product management and user authentication.",
  "Designed MongoDB schemas for product and user data.",
  "Implemented image upload handling with Multer.",
  "Developed cart management and checkout functionality.",
];

export default function Bazzar() {
  const [activeImage, setActiveImage] = useState(0);

  const previousImage = () => {
    setActiveImage((current) => current === 0 ? projectImages.length - 1 : current - 1);
  };

  const nextImage = () => {
    setActiveImage((current) => current === projectImages.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="bazzar-page relative min-h-screen overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="bazzar-orb bazzar-orb-one absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-primary/15 blur-[110px]" />
        <div className="bazzar-orb bazzar-orb-two absolute -right-40 top-[20%] h-[28rem] w-[28rem] rounded-full bg-purple-600/15 blur-[120px]" />
        <div className="bazzar-orb bazzar-orb-three absolute -bottom-40 left-[25%] h-[30rem] w-[30rem] rounded-full bg-highlight/10 blur-[120px]" />
        <div className="bazzar-grid absolute inset-0 opacity-20" />
      </div>

      <style>{`
        .bazzar-page { isolation: isolate; background: var(--color-background); }
        .bazzar-orb { will-change: transform; animation: bazzar-float 18s ease-in-out infinite alternate; }
        .bazzar-orb-two { animation-duration: 23s; animation-delay: -6s; }
        .bazzar-orb-three { animation-duration: 26s; animation-delay: -10s; }
        .bazzar-grid {
          background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 55px 55px;
          mask-image: linear-gradient(to bottom, black, transparent 85%);
        }
        @keyframes bazzar-float {
          0% { transform: translate3d(-2%, -2%, 0) scale(1); }
          50% { transform: translate3d(4%, 5%, 0) scale(1.08); }
          100% { transform: translate3d(-3%, 8%, 0) scale(0.96); }
        }
        @media (prefers-reduced-motion: reduce) { .bazzar-orb { animation: none; } }
      `}</style>

      <Navbar />

      <main className="relative z-10 pb-20 pt-20">
        <div className="container relative z-10 mx-auto px-6">
          <Link to="/#projects" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>

          <section className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
                <ShoppingBag className="h-4 w-4" /> MERN Stack E-Commerce Platform
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
                Bazzar
                <span className="mt-2 block font-serif font-normal italic text-primary">Your online shopping experience.</span>
              </h1>
              <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
                Bazzar is a full-stack e-commerce platform built with the MERN stack. It brings together product listings, category-based filtering, product details, user authentication, image uploads, cart management, and checkout functionality in one application.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                {liveDemoUrl && (
                  <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-1">
                    Live Demo <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {githubUrl && (
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 font-medium transition-colors hover:border-primary hover:text-primary">
                    <FaGithub className="h-4 w-4" /> Source Code
                  </a>
                )}
                {!liveDemoUrl && !githubUrl && (
                  <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm text-muted-foreground">
                    Project links coming soon
                  </span>
                )}
              </div>
            </div>

            <div className="glass overflow-hidden rounded-2xl p-3">
              <div className="relative overflow-hidden rounded-xl bg-black/20">
                <img key={projectImages[activeImage].src} src={projectImages[activeImage].src} alt={projectImages[activeImage].alt} className="aspect-video w-full object-contain" />
                <button type="button" onClick={previousImage} aria-label="Previous screenshot" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/65 p-2 text-white transition hover:bg-primary">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button type="button" onClick={nextImage} aria-label="Next screenshot" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/65 p-2 text-white transition hover:bg-primary">
                  <ChevronRight className="h-5 w-5" />
                </button>
                <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs text-white">{activeImage + 1} / {projectImages.length}</span>
              </div>
              <div className="py-3 text-center">
                <h2 className="text-sm font-medium text-muted-foreground">{projectImages[activeImage].title}</h2>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {projectImages.map((image, index) => (
                  <button key={image.src} type="button" onClick={() => setActiveImage(index)} aria-label={`View ${image.title}`} aria-pressed={activeImage === index} className={`overflow-hidden rounded-lg border-2 transition ${activeImage === index ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"}`}>
                    <img src={image.src} alt="" className="aspect-video w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-20">
            <div className="mb-10">
              <span className="text-sm font-medium uppercase tracking-widest text-primary">What it offers</span>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Key Features</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">Core shopping and backend features designed to provide a straightforward online shopping experience.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.title} className="glass rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-6 w-6" /></div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="mt-20 grid gap-10 lg:grid-cols-2">
            <div>
              <span className="text-sm font-medium uppercase tracking-widest text-primary">Under the hood</span>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Technology Stack</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Bazzar uses React for the frontend, Express and Node.js for backend APIs, and MongoDB for storing application data. Tailwind CSS is used to style the interface.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <span key={technology} className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground">{technology}</span>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold">Technical Highlights</h2>
              <ul className="mt-6 space-y-4">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" /><span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-20 rounded-3xl border border-border bg-surface/60 px-6 py-12 text-center backdrop-blur-md md:px-12">
            <ShoppingBag className="mx-auto h-10 w-10 text-primary" />
            <h2 className="mt-5 text-3xl font-bold">Explore Bazzar</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Project links will be added here once the live demo and source repository are ready to share.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {liveDemoUrl && (
                <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-1">
                  Open Application <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-medium transition-colors hover:border-primary hover:text-primary">
                  <FaGithub className="h-4 w-4" /> View GitHub
                </a>
              )}
              {!liveDemoUrl && !githubUrl && (
                <span className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm text-muted-foreground">Links will be available soon</span>
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
