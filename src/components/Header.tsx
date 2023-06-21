import Link from 'next/link';
import { Nav, Navbar } from 'reactstrap';

const Header = () => (
  <Navbar container="md" color="dark" dark>
    <Link className="navbar-brand" href="/">
      Início
    </Link>
    <Nav className="flex-row" navbar>
      <Link className="nav-link me-2" href="/products">
        Produtos
      </Link>
      <Link className="nav-link" href="/cart">
        Carrinho
      </Link>
    </Nav>
  </Navbar>
);

export default Header;
