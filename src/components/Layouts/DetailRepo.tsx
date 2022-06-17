import { GitHub } from "react-feather";
import Link from "next/link";
import ImageReus from "@component/ImageReus";
import RepoCard from "@component/RepoCard";

interface DetailRepoProps {
  avatar: string;
  name: string;
  bio: string;
  followers?: number;
  following?: number;
  accountUrl: string;
  topRepos: any;
}

export default function DetailRepo({
  avatar,
  name,
  bio,
  followers,
  following,
  accountUrl,
  topRepos,
}: DetailRepoProps) {
  return (
    <article className="flex flex-col min-h-screen">
      <section className="container mx-auto pt-16 pb-10 border-b border-gray-700">
        <div className="flex items-center justify-center space-x-6 md:space-x-8">
          <ImageReus
            src={
              avatar || "https://avatars.githubusercontent.com/u/56097757?v=4"
            }
            alt={`Profile ${name || "Dude"}`}
            size="h-[80px] w-[80px] md:h-[120px] md:w-[120px] hidden md:inline"
            imgClass="rounded-full"
          />
          <div className="text-content flex flex-col">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tighter">
              Hi, {name || "Dude"}
            </h1>
            <p className="text-left text-base max-w-md my-3 text-gray-400">
              {bio || "Bio"}
            </p>
            <div className="flex items-center space-x-3 tracking-tight">
              <Link href={accountUrl || "https://github.com"} passHref>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:rotate-12"
                >
                  <GitHub className="h-5 w-5" />
                </a>
              </Link>
              <p>{followers || 0} Followers</p>
              <p>{following || 0} Following</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container flex items-center flex-col mx-auto py-4">
        <RepoCard topRepos={topRepos} />
      </section>
    </article>
  );
}
