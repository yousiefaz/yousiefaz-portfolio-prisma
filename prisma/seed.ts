import "dotenv/config";

import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log("🌱 Seeding database...");

  await prisma.skill.deleteMany();
  await prisma.project.deleteMany();

  await prisma.project.createMany({
    data: [
      {
        title: "Blueprint.",
        description:
          "A modern and responsive CRM landing page built with Next.js, React, Tailwind CSS, and TypeScript. Designed to showcase features, testimonials, and real-time insights with clean UI and optimized performance. Powered by Node.js for scalability.",
        images: [
          "https://res.cloudinary.com/dysofuufi/image/upload/v1781913486/0-blueprint_y3e94t.png",
          "https://res.cloudinary.com/dysofuufi/image/upload/v1781913487/1-blueprint_fg59ur.png",
          "https://res.cloudinary.com/dysofuufi/image/upload/v1781913488/2-blueprint_cshhoe.png",
          "https://res.cloudinary.com/dysofuufi/image/upload/v1781913489/3-blueprint_u2cavx.png",
          "https://res.cloudinary.com/dysofuufi/image/upload/v1781913490/4-blueprint_pou7q1.png",
          "https://res.cloudinary.com/dysofuufi/image/upload/v1781913491/5-blueprint_vtqsnx.png",
        ],
        tags: ["Next.js", "React.js", "TypeScript", "HTML", "CSS", "Tailwind"],
        demoLink: "https://blueprint-lime.vercel.app/",
        githubLink: "https://github.com/yousiefaz/blueprint-frontend.git",
        publishedAt: new Date(),
        isResponsive: true,
      },
    ],
  });

  await prisma.skill.createMany({
    data: [
      { label: "CSS3", value: 90, category: "frontend" },
      { label: "HTML5", value: 90, category: "frontend" },
      { label: "JavaScript", value: 70, category: "frontend" },
      { label: "React.js", value: 70, category: "frontend" },
      { label: "Next.js", value: 70, category: "frontend" },
      { label: "TypeScript", value: 60, category: "frontend" },
      { label: "Tailwind CSS", value: 80, category: "frontend" },

      { label: "Node.js", value: 70, category: "backend" },
      { label: "REST APIs", value: 75, category: "backend" },
      { label: "Prisma ORM", value: 75, category: "backend" },
      { label: "PostgreSQL", value: 65, category: "backend" },

      { label: "Adobe Illustrator", value: 80, category: "tools" },
      { label: "Adobe Photoshop", value: 60, category: "tools" },
      { label: "Figma", value: 70, category: "tools" },
      { label: "Git & GitHub", value: 70, category: "tools" },
      { label: "OpenAI Tools", value: 80, category: "tools" },
      { label: "VS Code", value: 80, category: "tools" },
      { label: "Vercel", value: 70, category: "tools" },
    ],
  });

  console.log("✅ Database seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
