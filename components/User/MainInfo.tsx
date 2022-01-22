import React from 'react'

import * as S from './User.style'
import * as Icons from 'react-feather'

type MainInfo = {
  avatar: string
  name: string
  url: string
  bio: string
  blog: string
  twitter: string
}

const MainInfo: React.FC<MainInfo> = (props: MainInfo) => {
  return (
    <S.Wrapper>
      <S.UserWrapper>
        <S.Avatar src={props.avatar} />
        <S.SocialsWrapper>
          <S.SocialLink href={props.url} target="__blank">
            <Icons.GitHub />
          </S.SocialLink>
          {props.blog === '' ? (
            ''
          ) : (
            <S.SocialLink
              href={
                props.blog.startsWith('http')
                  ? props.blog
                  : `https://${props.blog}`
              }
              target="_blank"
            >
              <Icons.Paperclip />
            </S.SocialLink>
          )}
          {props.twitter === null ? (
            ''
          ) : (
            <S.SocialLink
              href={`https://twitter.com/${props.twitter}`}
              target="_blank"
            >
              <Icons.Twitter />
            </S.SocialLink>
          )}
        </S.SocialsWrapper>
      </S.UserWrapper>
      <S.InfoWrapper>
        <S.Name>{props.name}</S.Name>
        <S.Bio>{props.bio}</S.Bio>
      </S.InfoWrapper>
    </S.Wrapper>
  )
}

export default MainInfo
