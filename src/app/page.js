import SignupContext from "./context/signup-context";
import SignUpWrapper from "./signup/SignUpWrapper";

export default function Home() {
  return (
    <SignupContext>
      <SignUpWrapper />
    </SignupContext>
  );
}
