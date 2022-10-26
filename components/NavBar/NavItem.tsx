import Link from "next/link";
import { motion } from "framer-motion";
import { popUp } from "utils/framerMotionVariants";

export const NavItem = ({ href, text, router }) => {
  const isActive = router.asPath === (href === "/home" ? "/" : href);
  return (
    <Link href={href === "/home" ? "/" : href} passHref>
      <motion.a
        variants={popUp}
        className={`${
          isActive
            ? "font-bold text-gray-800 dark:text-gray-100"
            : " text-gray-600 dark:text-gray-300"
        } sm:inline-block transition-all text-[17px] hidden px-2 md:px-3 py-[3px] hover:bg-gray-100 dark:hover:bg-neutral-700/50 rounded-md`}
      >
        <span className="capitalize">{text}</span>
      </motion.a>
    </Link>
  );
};
