import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/clerk-react"
import toast from "react-hot-toast"


function HomePage() {
  return (
    <div>
        <button className="btn btn-secondary" onClick={() => toast.success("This is a success toast")}>
           Click me
        </button>

        <SignedOut>
            <SignInButton mode="modal" >
                <button>Login</button>
            </SignInButton>
        </SignedOut>

        <SignedIn>
            <SignOutButton />
        </SignedIn>
    </div>
  )
}

export default HomePage