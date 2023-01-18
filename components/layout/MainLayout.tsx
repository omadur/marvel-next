import Head from "next/head";
import { FC, PropsWithChildren } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Marvel Hero</title>
        <meta name="author" content="Omar Duran" />
        <meta
          name="description"
          content="Pagina informative de superheroes de marvel"
        />
        <meta name="keywords" content="superheroes, marvel, comics" />
        <meta name="robots" content="index,nofollow"></meta>
      </Head>

      <main style={{ marginLeft: "30px", marginRight: "30px" }}>{children}</main>
    </>
  );
};

export default MainLayout;
