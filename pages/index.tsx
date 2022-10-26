import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { FadeContainer, popUp } from "utils/framerMotionVariants";
import { opacityVariant } from "content/FramerMotionVariants";

const Home: NextPage = () => {
  return (
    <>
      <div className="relative dark:bg-darkPrimary dark:text-gray-100 2xl:max-w-5xl 3xl:max-w-7xl mx-auto">
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={FadeContainer}
          viewport={{ once: true }}
          className="grid place-content-center py-20  min-h-screen"
        >
          <div className="w-full relative mx-auto flex flex-col items-center gap-10">
            <motion.div
              variants={popUp}
              className="relative w-44 h-44 xs:w-52 xs:h-52 flex justify-center items-center rounded-full p-3 before:absolute before:inset-0 before:border-t-4 before:border-b-4 before:border-black before:dark:border-white before:rounded-full before:animate-photo-spin"
            >
              <Image
                src={"/me2.png"}
                className="rounded-full shadow filter saturate-0"
                width={400}
                height={400}
                alt="cover Profile Image"
                quality={75}
                priority={true}
              />
            </motion.div>

            <div className="w-full flex flex-col p-5 gap-3 select-none text-center ">
              <div className="flex flex-col gap-1">
                <motion.h1
                  variants={opacityVariant}
                  className="text-5xl lg:text-6xl font-bold font-sarina"
                >
                  Ricardo Sequeira
                </motion.h1>
                <motion.p
                  variants={opacityVariant}
                  className="font-medium text-xs md:text-sm lg:text-lg text-gray-500"
                >
                  Fullstack Developer
                </motion.p>
              </div>

              <motion.p
                variants={opacityVariant}
                className=" text-slate-500 dark:text-gray-300 font-medium text-sm md:text-base text-center"
              >
                Iam Computer Engineer
              </motion.p>
            </div>

            {/* <motion.div className="rounded-md overflow-hidden" variants={popUp}>
              <Ripples className="w-full" color="rgba(0, 0, 0, 0.5)">
                <button
                  className="flex items-center gap-2 px-5 py-2 border rounded-md border-gray-500 dark:border-gray-400 select-none  hover:bg-gray-100 dark:hover:bg-neutral-800 outline-none"
                  onClick={() => window.open("/resume")}
                >
                  <FiDownload />
                  <p>Resume</p>
                </button>
              </Ripples>
            </motion.div> */}
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Home;

// return (
//   <div className={styles.container}>
//     <Head>
//       <title>Create Next App</title>
//       <meta name="description" content="Generated by create next app" />
//       <link rel="icon" href="/favicon.ico" />
//     </Head>
//   </div>
// );
