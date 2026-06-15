const SOCIAIS = [
  { href: 'https://www.linkedin.com/in/anderson-silva-597b78167/', icone: 'fa-brands fa-linkedin-in', rotulo: 'LinkedIn' },
  { href: 'https://github.com/Anderson-S-Silva', icone: 'fa-brands fa-github', rotulo: 'GitHub' },
  { href: 'https://www.credly.com/badges/d355edcf-0101-4b8e-8603-456dfa6ff2e0/linked_in_profile', icone: 'fa-brands fa-microsoft', rotulo: 'Certificação Microsoft' },
];

export default function Footer() {
  return (
    <footer>
      <ul className="footer-sociais" aria-label="Redes sociais">
        {SOCIAIS.map((social) => (
          <li key={social.rotulo}>
            <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.rotulo}>
              <i className={social.icone} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
      <p>© {new Date().getFullYear()} Anderson Silva — Todos os direitos reservados.</p>
    </footer>
  );
}
