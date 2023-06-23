import { useSession } from "next-auth/react"
import AuthBtn from './AuthBtn';
import { Navbar, Button } from "flowbite-react"
import { APP_NAME } from "../../consts"


const Header = () => {
  const { data: session } = useSession()
  let className = "fixed w-full z-20 top-0 left-0"
  if (session) {
    className += " border-b border-gray-200 dark:border-gray-600"
  }
  return (
    <Navbar
      className={className}
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          {APP_NAME}
        </span>
      </Navbar.Brand>
      <div className="flex">
        {/* <Navbar.Toggle />*/}
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#">
        {
          !session && (
            <AuthBtn
              text="Login"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            />
          ) 
        }
        <AuthBtn
          text="Sign up"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        />
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;
