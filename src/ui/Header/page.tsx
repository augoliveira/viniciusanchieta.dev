'use client';
import Image from 'next/image';
import Link from 'next/link';
import { List, X } from 'phosphor-react';
import { useState } from 'react';
import { HeaderContainer, MobileIcon, NavMenu } from './styles';
import Logo from '/public/assets/logo.png';
function Header() {
  const [click, setClick] = useState(false);

  const handleOpen = () => {
    setClick(!click);
  };

  return (
    <HeaderContainer style={{ position: 'fixed' }}>
      <div className='mobile-content'>
        <Link href={'/'}>
          <span>
            <Image
              src={Logo}
              alt={''}
              placeholder='blur'
              width={186}
              height={51}
              style={{
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </span>
        </Link>
        <MobileIcon onClick={handleOpen}>
          {click ? (
            <X size={24} weight='bold' />
          ) : (
            <List size={24} weight='bold' />
          )}
        </MobileIcon>
      </div>

      <NavMenu onClick={handleOpen} click={click}>
        <ul>
          <li>
            <Link href={'/'}>
              <span>Início</span>
            </Link>
          </li>

          <li>
            <Link href={'#service'} scroll={false}>
              <span>Seviço</span>
            </Link>
          </li>

          <li>
            <Link href={'#skills'} scroll={false}>
              <span>Habilidades</span>
            </Link>
          </li>

          <li>
            <Link href={'#projects'} scroll={false}>
              <span>Projetos</span>
            </Link>
          </li>

          <li>
            <Link href={'#contact'} scroll={false}>
              <span>Contato</span>
            </Link>
          </li>
        </ul>
      </NavMenu>
    </HeaderContainer>
  );
}
export default Header;
