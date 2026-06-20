// import { getSkills } from "@/lib/skills";
import { Statistics } from "@/types/interfaces";
import { prisma } from "@/lib/prisma";

export async function getStatistics() {
  // const frontendSkills = await getSkills("frontend");
  // const backendSkills = await getSkills("backend");
  // const tools = await getSkills("tools");

  // const totalSkills =
  //   frontendSkills.length + backendSkills.length + tools.length;

  const projectsCount = await prisma.project.count();

  const statistics: Statistics[] = [
    {
      label: "Years of experience",
      value: new Date().getFullYear() - 2023,
    },
    {
      label: "Completed projects",
      value: projectsCount + 4,
    },
  ];

  return { statistics };
}
