import Image from "next/image";
import Button from "./Button";
import Link from "./Link";

export default function Home() {
  return (
    <div>
      <div className="introComponent h-[400px] md:h-[800px] flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl p-4 md:p-8">DeckBuilder 9000</h1>
        <span>
          <Link text="Login" to="/login"  />
          <Link text="Signup" to="/signup"  />
        </span>
        <button>Build Your Deck</button>
      </div>
      <div className="explainerComponent">
        <h2>
          Craft the most hilarious, absurd, and unique decks for Cards Against
          Humanity.
        </h2>
      </div>
      <div className="getStartedComponent">
        <h1>Get the party started.</h1>
        <button>Build Your Deck</button>
      </div>
      <div className="aboutTheAuthorComponent">
        <h2>Wait... Who made this?</h2>
        <p>
          Hi! I'm Katie. I'm a Full Stack dev with 2+ years of experience. Hire
          me!
        </p>
        <span>
          <button>Portfolio</button>
          <button>Github</button>
          <button>Linkedin</button>
        </span>
      </div>
    </div>
  );
}
