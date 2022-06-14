import React from "react";
import Link from "next/link";

import { Star, GitPullRequest, MoreHorizontal } from "react-feather";

import LanguageColour from "@lib/LanguageColours";

type repo = {
  name: string;
  stargazers_count: string;
  forks_count: string;
  language: string;
  html_url: string;
  description: string;
  size: number;
};

const RepoCard: React.FC<{ topRepos: repo[] }> = ({ topRepos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {topRepos.map((repo: repo, index: number) => (
        <Link key={`repo-${index}`} href={repo?.html_url}>
          <a className="bg-gray-900 relative overflow-hidden rounded-lg px-4 py-3 min-h-[300px]" target="_blank">
            <div className="relative flex items-center justify-between">
              {repo.language === null ? (
                ""
              ) : (
                <span
                  style={{
                    backgroundColor: LanguageColour[repo.language],
                    color: repo.language === "JavaScript" ? "#111111" : "#fff",
                  }}
                  className="text-sm tracking-tight rounded-md py-[2px] px-2 cursor-default"
                >
                  {repo.language}
                </span>
              )}
              <button type="button">
                <MoreHorizontal className="w-6 h-6" />
              </button>
            </div>

            <div className="card-body">
              <h3 className="text-3xl tracking-tight font-bold mt-4 mb-2">
                {repo?.name}
              </h3>
              <p className="text-sm font-medium text-gray-600 text-left leading-6">
                {repo?.description}
              </p>
            </div>

            <div className="absolute w-full px-2 bottom-0 left-0 flex items-center space-x-3 border-t border-gray-800">
              <p className="my-2 font-medium text-yellow-200 inline-flex items-center">
                <Star className="h-5 w-5 mr-1" />
                {repo?.stargazers_count}
              </p>
              <p className="my-2 font-medium text-blue-400 inline-flex items-center">
                <GitPullRequest className="h-5 w-5 mr-1" />
                {repo?.forks_count}
              </p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default RepoCard;
