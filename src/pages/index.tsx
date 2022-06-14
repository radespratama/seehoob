import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import Layout from "@component/Layouts/Layout";
import Intro from "@component/Layouts/Intro";
import DetailRepo from "@component/Layouts/DetailRepo";

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
  followers: number;
  following: number;
  public_repos: string;
  avatar_url: string;
  html_url: string;
  blog: string;
  twitter_username: string;
  company: string;
  location: string;
}

export default function Home() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");
  const [accountUrl, setAccountUrl] = useState("");
  const [following, setFollowing] = useState(0);
  const [follower, setFollower] = useState(0);

  const [topRepos, setTopRepos] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [firstTime, setFirstTime] = useState(true);

  const [error, setError] = useState("");

  const setData = ({
    name,
    bio,
    avatar_url,
    html_url,
    followers,
    following,
  }: Data) => {
    setName(name);
    setBio(bio);
    setAvatar(avatar_url);
    setAccountUrl(html_url);
    setFollower(followers);
    setFollowing(following);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(
      `${process.env.NEXT_PUBLIC_GITHUB_URL}/${userInput}/repos?per_page=50`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          toast.error(data.message, {
            duration: 3000,
            position: "top-right",
          });
          setError(data.message);
        } else {
          const mostStarred = data
            .filter((repo: repo) => !repo.fork)
            .sort((a: repo, b: repo) => b.stargazers_count - a.stargazers_count)
            .slice(0, 20);
          setFirstTime(false);
          setTopRepos(mostStarred);
        }
      });

    fetch(`${process.env.NEXT_PUBLIC_GITHUB_URL}/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          toast.error(data.message, {
            duration: 3000,
            position: "top-right",
          });
        } else {
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
    <Layout title="Seehoob App">
      {firstTime ? (
        <Intro
          handleSubmitFunction={handleSubmit}
          handleSearchFunction={handleSearch}
        />
      ) : (
        ""
      )}
      {error || firstTime ? (
        ""
      ) : (
        <DetailRepo
          avatar={avatar}
          name={name}
          bio={bio}
          followers={follower}
          following={following}
          accountUrl={accountUrl}
          topRepos={topRepos}
        />
      )}
      <Toaster />
    </Layout>
  );
}
