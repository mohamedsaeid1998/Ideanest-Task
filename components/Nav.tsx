import SignOut from "./SignOut";

const Nav = () => {
  return (
    <>
      <header className="mt-2 mb-4">
        <nav className="flex justify-end items-center">
          <SignOut />
        </nav>
      </header>
    </>
  );
};

export default Nav;
