import { motion } from "framer-motion";
import { Router } from "next/router";
import { navigationRoutes } from "./helpers";
import { NavItem } from "./NavItem";

export const NavMenu = () => {
  return (
    <motion.nav className="hidden sm:flex z-10 md:absolute md:inset-0 md:justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        className="flex items-center md:gap-2"
      >
        {navigationRoutes.slice(0, 7).map((link, index) => {
          return (
            <NavItem
              key={index}
              href={`/${link}`}
              text={link}
              router={Router}
            />
          );
        })}
      </motion.div>
    </motion.nav>
  );
};
