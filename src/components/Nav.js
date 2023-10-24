export default function Nav() {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      {/*<div>
        <h1 className="text-xl">DevelopedByTiger ✨</h1>
      </div>*/}
      <h1 className="text-xl">DevByTiger✨</h1>
      <ul className="flex items-center">
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-cyan-500 hover:text-black text-white px-4 py-2 rounded-md ml-8"
            href="https://docs.google.com/document/d/1lJiv6EzWvpuhNGkM0MoXltVRmxP8H4fcnkwX_uYqbr0/edit"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
