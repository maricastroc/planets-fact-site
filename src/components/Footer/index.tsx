import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <p>
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io/home"
          target="_blank"
          rel="noreferrer"
          aria-label="Go to frontend mentor site"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://github.com/maricastroc"
          target="_blank"
          rel="noreferrer"
          aria-label="Go to author's GitHub"
        >
          Mariana Castro.
        </a>
      </p>
    </FooterContainer>
  )
}
