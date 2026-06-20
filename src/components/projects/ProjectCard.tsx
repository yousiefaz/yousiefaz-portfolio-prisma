import Image from "next/image";
import { FC } from "react";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ imageUrl, title }) => {
  return (
    <article className="relative group border rounded-md shadow-sm cursor-pointer overflow-hidden">
      <figure className="absolute size-full top-0 left-0 bg-linear-to-t from-background/70 to-transparent" />
      <Image
        src={imageUrl}
        alt={title}
        width={480}
        height={480}
        className="size-full rounded-sm group-hover:scale-105 transition duration-300 ease-in-out"
      />
      <h3 className="absolute bottom-2 inset-s-2 capitalize text-foreground truncate group-hover:text-primary">
        {title}
      </h3>
    </article>
  );
};

export default ProjectCard;
