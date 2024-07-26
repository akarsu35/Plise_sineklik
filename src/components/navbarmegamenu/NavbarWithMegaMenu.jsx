import React, { useEffect, useState } from 'react'

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  useSelect,
} from '@material-tailwind/react'
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import { Link } from 'react-router-dom'
import implementations from '../../datas/implementations'



function NavListMenu({ setOpenNav }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const renderItems = implementations.map(
    (
      { title, path },
      key //dropdown menu
    ) => (
      <Link to={path} key={key} onClick={() => setOpenNav(false)}>
        <a href={path} key={key}>
          <MenuItem className="flex items-center gap-3 rounded-lg w-24 h-16">
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="flex items-center text-sm font-bold"
              >
                {title}
              </Typography>
              {/* <Typography
                variant="paragraph"
                className="text-xs !font-medium text-blue-gray-500"
              >
                {description}
              </Typography> */}
            </div>
          </MenuItem>
        </a>
      </Link>
    )
  )

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-bold">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 text-gray-900 font-bold text-lg"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              UYGULAMALARIMIZ
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  )
}

function NavList({ setOpenNav }) {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href='#'
        variant="small"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-lg">
          <Link to="/" onClick={() => setOpenNav(false)}>
            ANASAYFA
          </Link>
        </ListItem>
      </Typography>

      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-lg">
          <Link to="/hakkımızda" onClick={() => setOpenNav(false)}>
            HAKKIMIZDA
          </Link>
        </ListItem>
      </Typography>

      {/* dropdown menu */}
      <NavListMenu setOpenNav={setOpenNav} />

      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-lg">
          <Link to="/kampanyalar" onClick={() => setOpenNav(false)}>
            {' '}
            KAMPANYALAR
          </Link>
        </ListItem>
      </Typography>
      {/* <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">S.S.S</ListItem>
      </Typography> */}
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-lg">
          <Link to="/iletişim" onClick={() => setOpenNav(false)}>
            {' '}
            İLETİŞİM
          </Link>
        </ListItem>
      </Typography>
    </List>
  )
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      // console.log(offset)
      if (offset > -1) {
        // Adjust the value as per your requirement
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  //navbar main
  return (
    <div
      className={`${
        isSticky ? 'sticky top-0 left-0 right-0 z-50  bg-white shadow-md' : ''
      }w-full`}
    >
      <Navbar fullWidth={true} className="mx-auto px-4 py-2">
        <div className="flex items-center justify-between text-blue-gray-900 h-8">
          <Link to="/" className="flex justify-center items-center">
            <img
              src="./images/logo.jpeg"
              className="custom-logo h-8 md:w-14 md:h-12 "
              alt="Antalya Plise sineklik"
              decoding="async"
              sizes="(max-width: 80px) 100vw, 80px"
            ></img>

            <h2 className="font-bold text-sm ml-1 text-[#58E2EB] md:text-2xl ">
              Antalya Plise Sineklik
            </h2>
          </Link>

          <div className="hidden lg:block">
            <NavList setOpenNav={setOpenNav} />
          </div>

          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList setOpenNav={setOpenNav} />
        </Collapse>
      </Navbar>
    </div>
  )
}
