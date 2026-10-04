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

  // await prisma.project.deleteMany();
  // await prisma.skill.deleteMany();

  await prisma.project.createMany({
    data: [
      {
        title: "Taskel",
        description:
          "Taskel is a modern, full-stack task management application built with Next.js and TypeScript. It provides secure user authentication with credentials and Google OAuth, protected user-specific task management, complete task CRUD operations, status tracking, responsive navigation, and a bilingual English/Arabic interface with full RTL/LTR support. The application is built with a production-oriented architecture using Prisma, PostgreSQL, React Hook Form, Zod, and reusable UI components.",
        images: [
          "https://res.cloudinary.com/dysofuufi/image/upload/v1791080160/3-taskel_krl7tz.png",
          "https://res.cloudinary.com/dysofuufi/image/upload/v1791080160/1-taskel_jzxndy.png",
          "https://res.cloudinary.com/dysofuufi/image/upload/v1791080160/2-taskel_csbfdc.png",
          "https://res.cloudinary.com/dysofuufi/image/upload/v1791080161/4-taskel_h0ukia.png",
          "https://res.cloudinary.com/dysofuufi/image/upload/v1791080161/5-taskel_ti6vzx.png",
          "https://res.cloudinary.com/dysofuufi/image/upload/v1791080160/6-taskel_y1mvfy.png",
          "https://res.cloudinary.com/dysofuufi/image/upload/v1791080161/7-taskel_tmsoix.png",
          "https://res.cloudinary.com/dysofuufi/image/upload/v1791080161/8-taskel_wzslbo.png",
          "https://res.cloudinary.com/dysofuufi/image/upload/v1791080161/9-taskel_nzunbr.png",
          "https://res.cloudinary.com/dysofuufi/image/upload/v1791080161/10-taskel_njppwp.png",
        ],
        tags: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Prisma",
          "PostgreSQL",
          "Auth.js",
          "Next-intl",
          "React Hook Form",
          "Zod",
          "shadcn/ui",
        ],
        demoLink: "https://taskel-rosy.vercel.app/",
        githubLink: "https://github.com/yousiefaz/taskel",
        publishedAt: "2026-09-05",
        isResponsive: true,
      },
      // {
      //   title: "",
      //   description: "",
      //   images: ["", ""],
      //   tags: ["", ""],
      //   demoLink: "",
      //   githubLink: "",
      //   publishedAt: "yyyy-mm-dd",
      //   isResponsive: true,
      // },
    ],
  });

  await prisma.skill.createMany({
    data: [
      // // ================= FRONTEND =================
      // { label: "React.js", value: 85, category: "frontend" },
      // { label: "Next.js", value: 85, category: "frontend" },
      // { label: "JavaScript", value: 85, category: "frontend" },
      // { label: "TypeScript", value: 80, category: "frontend" },
      // //
      // { label: "Tailwind CSS", value: 85, category: "frontend" },
      // { label: "Shadcn UI", value: 80, category: "frontend" },
      // //
      // { label: "React Hook Form", value: 80, category: "frontend" },
      // { label: "Zod", value: 75, category: "frontend" },
      // { label: "TanStack Query", value: 75, category: "frontend" },
      // { label: "REST APIs Integration", value: 80, category: "frontend" },
      // //
      // { label: "App Router", value: 70, category: "frontend" },
      // { label: "Responsive Design", value: 90, category: "frontend" },
      // { label: "SEO Optimization", value: 70, category: "frontend" },
      // { label: "Performance Optimization", value: 70, category: "frontend" },
      // // ================= BACKEND =================
      // { label: "Node.js", value: 65, category: "backend" },
      // //
      // {
      //   label: "Authentication & Authorization",
      //   value: 70,
      //   category: "backend",
      // },
      // { label: "Auth.js", value: 70, category: "backend" },
      // { label: "Session & JWT Authentication", value: 70, category: "backend" },
      // { label: "API Routes", value: 75, category: "backend" },
      // //
      // { label: "Prisma ORM", value: 70, category: "backend" },
      // { label: "PostgreSQL", value: 65, category: "backend" },
      // { label: "Neon Database", value: 70, category: "backend" },
      // // ================= TOOLS =================
      // { label: "Git & GitHub", value: 80, category: "tools" },
      // { label: "Vercel", value: 80, category: "tools" },
      // //
      // { label: "VS Code", value: 80, category: "tools" },
      // { label: "Postman", value: 70, category: "tools" },
      // //
      // { label: "Figma", value: 70, category: "tools" },
      // { label: "Adobe Illustrator", value: 80, category: "tools" },
      // { label: "Adobe Photoshop", value: 80, category: "tools" },
      // { label: "Adobe After Effects", value: 70, category: "tools" },
      // { label: "Canva", value: 70, category: "tools" },
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
