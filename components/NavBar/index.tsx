import { useDarkMode } from "@/hooks/useDarkMode";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { popUp } from "utils/framerMotionVariants";
import { HamBurger } from "./HamButton";
import { navigationRoutes } from "./helpers";
import { FiMoon, FiSun } from "react-icons/fi";
import { NavMenu } from "./NavMenu";
import { MobileMenu } from "./MobileMenu";

export const TopNavbar = () => {
  const navRef: any = useRef(null);

  /*  Using to control animation as I'll show the name to the mobile navbar when you scroll a bit
   * demo: https://i.imgur.com/5LKI5DY.gif
   */
  const control = useAnimation();
  const [navOpen, setNavOpen] = useState(false);
  const { isDarkMode, changeDarkMode } = useDarkMode();

  // Adding Shadow, backdrop to the navbar as user scroll the screen
  const addShadowToNavbar = useCallback(() => {
    if (window.pageYOffset > 10) {
      navRef.current.classList.add(
        ...[
          "shadow",
          "backdrop-blur-xl",
          "bg-white/70",
          "dark:bg-darkSecondary",
        ]
      );

      control.start("visible");
    } else {
      navRef.current.classList.remove(
        ...[
          "shadow",
          "backdrop-blur-xl",
          "bg-white/70",
          "dark:bg-darkSecondary",
        ]
      );
      control.start("hidden");
    }
  }, [control]);

  // to lock the scroll when mobile is open
  const lockScroll = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.toggle("lock-scroll"); // class is define in the global.css
  };

  /* To Lock  the Scroll when user visit the mobile nav page */
  const handleClick = () => {
    lockScroll();
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", addShadowToNavbar);
    return () => {
      window.removeEventListener("scroll", addShadowToNavbar);
    };
  }, [addShadowToNavbar]);

  return (
    <div
      className="fixed w-full dark:text-white top-0 flex items-center justify-between px-4 py-[10px] sm:p-4 sm:px-6 z-50 print:hidden"
      ref={navRef}
    >
      {/* Mobile Navigation Hamburger and MobileMenu */}
      <HamBurger open={navOpen} handleClick={handleClick} />

      <AnimatePresence>
        {navOpen && (
          <MobileMenu links={navigationRoutes} handleClick={handleClick} />
        )}
      </AnimatePresence>

      <Link href="/" passHref>
        <div className="flex gap-2 items-center cursor-pointer z-50">
          <motion.a
            initial="hidden"
            animate="visible"
            variants={popUp}
            className="relative hidden sm:inline-flex mr-3"
          >
            <h1 className="font-sarina text-xl">JS</h1>
          </motion.a>
          <motion.p
            initial="hidden"
            animate={control}
            variants={{
              hidden: { opacity: 0, scale: 1, display: "none" },
              visible: { opacity: 1, scale: 1, display: "inline-flex" },
            }}
            className="absolute sm:!hidden w-fit left-0 right-0 mx-auto flex justify-center  text-base font-sarina"
          >
            Ricardo Sequeira
          </motion.p>
        </div>
      </Link>

      {/* Top Nav list */}
      <NavMenu />

      {/* DarkMode Container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={popUp}
        className="cursor-pointer rounded-full z-30 transition active:scale-75"
        title="Toggle Theme"
        onClick={() => changeDarkMode(!isDarkMode)}
      >
        {isDarkMode ? (
          <FiMoon className="h-6 w-6 sm:h-7 sm:w-7 select-none transition active:scale-75" />
        ) : (
          <FiSun className="h-6 w-6 sm:h-7 sm:w-7 select-none transition active:scale-75" />
        )}
      </motion.div>
    </div>
  );
};
