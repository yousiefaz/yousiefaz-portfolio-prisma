import SectionTitle from "@/components/SectionTitle";
import SkillsContainer from "@/components/skills/SkillsContainer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabItems } from "@/constants/tab-items";
import { prisma } from "@/lib/prisma";

const SkillsSection = async () => {
  const skills = await prisma.skill.findMany();

  const frontendSkills = skills.filter(
    (skill) => skill.category === "frontend",
  );

  const backendSkills = skills.filter((skill) => skill.category === "backend");

  const toolsSkills = skills.filter((skill) => skill.category === "tools");

  return (
    <section id="skills" className="relative container space-y-6">
      <SectionTitle
        title="skills"
        description="my core technical expertise and tools."
      />

      <Tabs defaultValue={TabItems[0].value}>
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {/* tabs list */}
          <TabsList className="grid grid-cols-3 md:grid-cols-1 gap-2 w-full h-fit">
            {TabItems.map((item) => {
              const { value, label, icon: Icon } = item;

              return (
                <TabsTrigger key={value} value={value} className="w-full gap-2">
                  <Icon className="size-4" />
                  <span className="capitalize">{label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* tabs content */}
          <div className="md:col-span-2 rounded-md bg-background/50">
            <TabsContent value="frontend">
              <SkillsContainer data={frontendSkills} label="frontend" />
            </TabsContent>

            <TabsContent value="backend">
              <SkillsContainer data={backendSkills} label="backend" />
            </TabsContent>

            <TabsContent value="tools">
              <SkillsContainer data={toolsSkills} label="tools" />
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </section>
  );
};

export default SkillsSection;
