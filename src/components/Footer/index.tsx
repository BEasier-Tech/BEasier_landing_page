import { Container } from "./styles.ts"

type props = {}

export default function Footer ({}: props) {
    return (
        <Container>
            <div className="link">
                <a href="/terms">Termos de uso</a>
                <a href="/privacy">Politica de privacidade</a>
            </div>
            <div className="logo">
                <img src="/beasier-1-1-1@2x.png" alt="" />
                <div>BEasier</div>
            </div>
            <div className="copyright">Beasier@ todos direitos reservados</div>
        </Container>
    )
}