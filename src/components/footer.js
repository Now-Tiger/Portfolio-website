import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="text-5xl flex justify-center gap-16 py-2">
      <Link href="https://twitter.com/Swxpnil">
        <AiFillTwitterCircle className="text-blue-500" />
      </Link>
      <Link href="https://www.linkedin.com/in/now-tiger">
        <AiFillLinkedin className="text-blue-700" />
      </Link>
      <Link href="https://www.github.com/Now-Tiger">
        <AiFillGithub href="google.com" />
      </Link>
    </div>
  );
}
