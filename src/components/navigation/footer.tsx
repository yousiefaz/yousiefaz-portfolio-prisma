import { socialLinks } from "@/constants/social-links";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="container border-t pt-4 pb-24 md:pb-4 z-50">
      <div className="flex flex-col md:flex-row items-center justify-between gap-y-4">
        <p className="capitalize text-sm">
          {`© ${currentYear} Yousiefaz — by `}
          <span
            className="font-bold text-primary cursor-default"
            title="it's me"
          >
            Yaz
          </span>
        </p>

        <div className="flex items-center gap-2">
          {socialLinks.map((link, index) => {
            const { href, icon: Icon } = link;
            return (
              <a
                key={index}
                href={href}
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  "rounded-full"
                )}
              >
                <Icon className="size-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
