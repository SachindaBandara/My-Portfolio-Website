import { Safari } from "./ui/WebBrowser";

const Browser = () => {
  return (
    <div className="relative mb-20">
      <Safari
        url="github.com"
        className="size-full"
        src="../public/githubProfile.PNG"
      />
    </div>
  )
}

export default Browser

