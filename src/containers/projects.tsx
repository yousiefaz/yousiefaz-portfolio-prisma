import ProjectItem from "@/components/projects/ProjectItem";
import SectionTitle from "@/components/SectionTitle";
import { Effect } from "@/components/ui/effects";
import { prisma } from "@/lib/prisma";
import { Project } from "@prisma/client";

const ProjectsSection = async () => {
  const projects: Project[] = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <section id="projects" className="relative container space-y-6">
      <Effect
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-3"
        animateIn={false}
        opacity={0.5}
      />

      <SectionTitle title="projects" description="some of my recent works" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
