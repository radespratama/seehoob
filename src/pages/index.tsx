import { useState, useEffect } from "react";

import Layout from "@component/Layouts/Layout";
import Intro from "@component/Layouts/Intro";

interface repo {
  name: string;
  stargazers_count: number;
  forks_count: string;
  language: string;
  html_url: string;
  description: string;
  fork: boolean;
}

interface Data {
  name: string;
  login: string;
  bio: string;
  followers: string;
  following: string;
  public_repos: string;
  avatar_url: string;
  html_url: string;
  blog: string;
  twitter_username: string;
  company: string;
  location: string;
}

export default function Home() {
  const [name, setName] = useState(" ");
  const [bio, setBio] = useState(" ");
  const [avatar, setAvatar] = useState(" ");
  const [url, setUrl] = useState(" ");

  const [blog, setBlog] = useState(" ");
  const [twitter, setTwitter] = useState(" ");

  const [topRepos, setTopRepos] = useState([]);

  const [userInput, setUserInput] = useState(" ");
  const [error, setError] = useState(" ");

  const [firstTime, setFirstTime] = useState(true);

  const setData = ({
    name,
    bio,
    avatar_url,
    html_url,
    blog,
    twitter_username,
  }: Data) => {
    setName(name);
    setBio(bio);
    setAvatar(avatar_url);
    setUrl(html_url);
    setBlog(blog);
    setTwitter(twitter_username);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(`https://api.github.com/users/${userInput}/repos?per_page=50`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) setError(data.message);
        else {
          const mostStarred = data
            .filter((repo: repo) => !repo.fork)
            .sort((a: repo, b: repo) => b.stargazers_count - a.stargazers_count)
            .slice(0, 20);

          setTopRepos(mostStarred);
          setError("");
          setFirstTime(false);
        }
      });

    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) setError(data.message);
        else {
          setData(data);
          setError("");
          setFirstTime(false);
        }
      });
  };

  useEffect(() => {
    setFirstTime(true);
  }, []);

  return (
    <Layout title="Seehoob">
      <Intro
        handleSubmitFunction={handleSubmit}
        handleSearchFunction={handleSearch}
      />
    </Layout>
  );
}
