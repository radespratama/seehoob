import Router from 'next/router'
import { styled } from '@css/theme.config'

const SpanHover = styled('span', {
  position: 'fixed',
  top: '40px',
  left: '60px',
  zIndex: '3',
  cursor: 'pointer',
  width: '30px',
});

const NameArrow = styled('svg', {
  color: 'white',
  transform: 'rotate(180deg)',
})
export default function Reloading() {
  return (
    <SpanHoverNonClick={() => Router.reload()}>
      <nameArrow
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
          clipRule="evenodd"
        />
    N </nameArrow>
      Exit
    </SpanHoverNonClick=>
  )
}
