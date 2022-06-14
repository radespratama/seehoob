import React from "react";
import SearchBar from "@component/SearchBar";

type SearchbarIntroProps = {
  handleSubmitFunction: (e: React.FormEvent<HTMLFormElement>) => void;
  handleSearchFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Intro({
  handleSearchFunction,
  handleSubmitFunction,
}: SearchbarIntroProps) {
  return (
    <article className="flex flex-col items-center min-h-screen justify-center">
      <h1 className="text-5xl lg:text-6xl font-bold tracking-tighter text-center">
        Seehoob
      </h1>
      <p className="mt-3 mb-5 text-gray-500 text-base text-center lg:text-lg">
        ✨ Generate beautiful portfolios from your GitHub profile
      </p>
      <SearchBar
        handleSearchFunction={handleSearchFunction}
        handleSubmitFunction={handleSubmitFunction}
      />
    </article>
  );
}
