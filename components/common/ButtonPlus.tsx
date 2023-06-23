import { Button, Spinner } from "flowbite-react"

const ButtonPlus = function ({text="", loading=false, loadingText='Loading...', ...props}) {
  return (
    <Button disabled={loading} {...props}>
      {
        loading ? (
          <>
            <div className="mr-3">
              <Spinner
                size="sm"
                light={true}
              />
            </div>
            <span>{loadingText}</span>
          </>
        ) : text
      }
    </Button>
  )
}

export default ButtonPlus
