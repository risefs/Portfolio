import { motion } from "framer-motion";
import Link from "next/link";
import {
  hamFastFadeContainer,
  mobileNavItemSideways,
} from "utils/framerMotionVariants";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface IMobileMenu {
  links: string[];
  handleClick: () => void;
}

// Mobile navigation menu
export const MobileMenu = ({ links, handleClick }: IMobileMenu) => {
  return (
    <motion.div
      className="absolute font-normal bg-white dark:bg-darkPrimary w-screen h-screen top-0 left-0 z-10 sm:hidden"
      variants={hamFastFadeContainer}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.nav className="mt-28 mx-8 flex flex-col">
        {links.map((link: string, index: number) => {
          const navlink =
            link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`;
          return (
            <Link href={navlink} key={`mobileNav-${index}`} passHref>
              <motion.a
                href={navlink}
                className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 font-semibold flex w-auto py-4 capitalize text-base cursor-pointer"
                variants={mobileNavItemSideways}
                onClick={handleClick}
              >
                {link === "rss" ? link.toUpperCase() : link}
              </motion.a>
            </Link>
          );
        })}
      </motion.nav>
    </motion.div>
  );
};
