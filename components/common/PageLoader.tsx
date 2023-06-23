import { Spinner } from "flowbite-react"
import Auth from './Auth'

const PageLoader = () => {
  return (
    <Auth>
      <div className="grid h-screen place-items-center">
        <Spinner
          size="xl"
          light={true}
        />
      </div>
    </Auth>
  )
}
export default PageLoader;
