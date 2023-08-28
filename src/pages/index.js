import { Roboto_Condensed } from "next/font/google";

const posts = [
  {
    title: "Find gamer teammates web app",
    url: "www.dachi.lol/",
  },
  {
    title: "Ethereum transaction crawler",
    url: "https://ethereum-transaction-crawler-beta.vercel.app/",
  },
  {
    title: "MicroJava compiler",
    url: "https://github.com/brkagithub/micro-java-compiler",
  },
  {
    title: "Operating system simplified kernel",
    url: "https://github.com/brkagithub/operatingSystemKernel",
  },
  {
    title: "Django educational web app",
    url: "https://github.com/brkagithub/PSIlearnopedia",
  },
  {
    title: "Web shop Dockerized API",
    url: "https://github.com/brkagithub/shopAPIdocker",
  },
  {
    title:
      "Bachelor thesis - Development of type safe web applications in TypeScript",
    url: "https://www.linkedin.com/in/marko-brkic-82b29498/overlay/1635537940401/single-media-viewer/?profileId=ACoAABSv0KMBGbnxV1i5wA2E_T27F4uTF1o0XsA",
  },
];

const random = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/marko-brkic-82b29498/",
  },
  {
    title: "GitHub",
    url: "https://github.com/brkagithub",
  },
  {
    title: "Twitch",
    url: "https://www.twitch.tv/brka1",
  },
  {
    title: "OP.GG",
    url: "https://www.op.gg/summoners/euw/nomarkspotify",
  },
  {
    title: "Discord username: brka",
    url: "#",
    target: "_self",
  },
];

const roboto = Roboto_Condensed({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div
      className={
        "max-w-6xl mx-auto mt-4 flex flex-col text-lg " + roboto.className
      }
    >
      <div className="text-xl">Projects:</div>
      <div className="p-2"></div>
      {posts.map((post, index) => (
        <a
          className="flex pb-2 flex-grow-0 self-start underline underline-offset-4"
          key={index}
          href={post.url}
          target="_blank"
        >
          {post.title}
        </a>
      ))}
      <div className="p-4"></div>
      <div>
        Currently working at{" "}
        <a
          className="text-purple-600 underline underline-offset-4"
          href="https://origintrail.io/"
          target="_blank"
        >
          OriginTrail
        </a>
        , mainly focused on NodeJS, AI, blockchain and working on our{" "}
        <a
          className="underline underline-offset-4"
          href="https://github.com/OriginTrail"
          target="_blank"
        >
          open source projects
        </a>
        . Very interested in AI and planning to combine it along with my biggest
        hobby - gaming 🎮 for a side project very soon.
      </div>
      <div className="p-4"></div>
      <div className="text-xl">Some random links:</div>
      <div className="p-2"></div>
      {random.map((random_thingy, index) => (
        <a
          className="flex pb-2 flex-grow-0 self-start underline underline-offset-4"
          key={index}
          href={random_thingy.url}
          target={random_thingy.target || "_blank"}
        >
          {random_thingy.title}
        </a>
      ))}
      <div className="p-2"></div>
    </div>
  );
}
