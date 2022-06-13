import React from "react";

type SearchbarProps = {
  handleSubmitFunction: (e: React.FormEvent<HTMLFormElement>) => void;
  handleSearchFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({
  handleSubmitFunction,
  handleSearchFunction,
}: SearchbarProps) {
  return (
    <form onSubmit={handleSubmitFunction} className="flex relative justify-center mt-8">
      <input
        className="searchBar"
        type="text"
        placeholder="GitHub username"
        onChange={handleSearchFunction}
      />
      <div className="border-search" />
    </form>
  );
}
