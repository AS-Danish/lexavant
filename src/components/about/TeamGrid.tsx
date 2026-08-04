import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { Link } from "react-router-dom";

const teamGroups = [
  {
    category: "Litigation Counsel",
    link: "/practice-areas/litigation-and-dispute-resolution",
    members: [
      { name: "Adv. Ajay Talhar", title: "Litigation", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
      { name: "Adv. Chaitanya Talhar", title: "Litigation", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
      { name: "Adv. Pramod Gaikwad", title: "Litigation", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop" },
      { name: "Adv. Tushar Daware", title: "Litigation", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
      { name: "Adv. Darshan Sahuji", title: "Litigation", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
      { name: "Adv. Yashwant Chaudhary", title: "Litigation", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  {
    category: "Data Privacy Counsel",
    link: "/practice-areas/data-privacy",
    members: [
      { name: "Adv. Apurva Doshi", title: "Data Privacy", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  {
    category: "TMEG Counsel",
    link: "/practice-areas/technology-media-entertainment-gaming",
    members: [
      { name: "Adv. Raashi Vaishya", title: "TMEG", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  {
    category: "Corporate Team Counsel",
    link: "/practice-areas/corporate-ma-private-client-securities-law",
    members: [
      { name: "Adv. Prakshit Baid", title: "Corporate", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" }
    ]
  }
];

const TeamCard = ({ member, index, link }: { member: any, index: number, link: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Link to={link} className="block w-full h-full">
      <motion.div 
      ref={ref}
      className="relative aspect-[3/4] overflow-hidden group cursor-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" },
        visible: { 
          clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
          transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: index * 0.15 }
        }
      }}
    >
      <motion.img 
        src={member.image} 
        alt={member.name}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
        whileHover={{ scale: 1.05 }}
      />
      <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent transition-colors duration-500" />
      
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent">
        <h3 className="font-serif text-2xl text-bone mb-1">{member.name}</h3>
        <p className="font-mono text-xs uppercase tracking-widest text-gold">{member.title}</p>
      </div>

      <motion.div
        className="absolute pointer-events-none flex items-center justify-center bg-bone text-ink font-mono text-[10px] uppercase tracking-widest rounded-full z-50 whitespace-nowrap px-4 py-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.5,
          x: mousePos.x,
          y: mousePos.y
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        style={{ translateX: "-50%", translateY: "-50%" }}
      >
        View Profile
      </motion.div>
      </motion.div>
    </Link>
  );
};

export const TeamGrid = () => {
  return (
    <section data-theme="light" className="bg-bone py-32 md:py-48">
      <div className="container px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60 mb-6">
            <span className="h-px w-8 bg-gold" /> Our People
          </div>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] text-ink mb-6">
            Specialist Counsel
          </h2>
          <p className="text-ink/70 leading-relaxed text-lg font-light">
            Our team comprises advocates with standing before the constitutional courts and specialist tribunals; transactional lawyers trained at leading Indian and international firms; technology and regulatory advisors with sector-specific expertise.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {teamGroups.map((group, groupIdx) => (
            <div key={groupIdx}>
              <div className="flex items-center justify-between mb-8 border-b border-ink/10 pb-4">
                 <h3 className="font-serif text-3xl text-ink">{group.category}</h3>
                 <Link to={group.link} className="font-mono text-xs uppercase tracking-widest text-gold hover:text-ink transition-colors flex items-center gap-2">
                   View Practice <span className="text-lg leading-none">&rarr;</span>
                 </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {group.members.map((member, idx) => (
                  <TeamCard key={idx} member={member} index={idx} link={group.link} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
