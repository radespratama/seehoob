import React from 'react'

import * as S from './User.style'
import * as Icons from 'react-feather'

import LanguageColours from '@lib/LanguageColours'

type repo = {
  name: string
  stargazers_count: string
  forks_count: string
  language: string
  html_url: string
  description: string
  size: number
}

const Repos: React.FC<{ topRepos: repo[] }> = ({ topRepos }) => {
  return (
    <S.ReposContainer>
      <S.ReposGrid>
        {topRepos.map((repo: repo, index: number) => (
          <S.RepoBox key={index} href={repo.html_url} target="_blank">
            <S.RepoName>{repo.name}</S.RepoName>
            <S.RepoDesc>{repo.description}</S.RepoDesc>
            <S.RepoInfoContainer>
              <S.RepoInfo>
                <Icons.Star />
                {repo.stargazers_count}
              </S.RepoInfo>
              <S.RepoInfo>
                <Icons.GitPullRequest />
                {repo.forks_count}
              </S.RepoInfo>
              <S.RepoInfo>{repo.size.toLocaleString('en-IN')} KB</S.RepoInfo>
              {repo.language === null ? (
                ''
              ) : (
                <S.RepoInfo right>
                  <S.LanguageColour
                    style={{
                      backgroundColor: LanguageColours[repo.language],
                    }}
                  />
                  {repo.language}
                </S.RepoInfo>
              )}
            </S.RepoInfoContainer>
          </S.RepoBox>
        ))}
      </S.ReposGrid>
    </S.ReposContainer>
  )
}

export default Repos
