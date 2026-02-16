import { SignOutButton } from "@clerk/nextjs";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";


const HomePage = () => {
  return (
  <div>
    HomePage

    <SignedOut>
      <SignInButton />
    </SignedOut>

    <SignedIn>
      <SignOutButton />
    </SignedIn>
  </div>
  );  
};
export default HomePage; 