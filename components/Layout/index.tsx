import { TopNavbar } from "../NavBar";

interface ILayout {
  children: JSX.Element;
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <TopNavbar />
      <main>{children}</main>
    </>
  );
}
