import React from 'react';
import Link from "next/link";
import Head from "next/head";

interface IChildrenTypes {
    children: any;
    title: string;
}

const MainLayout = ({ children, title }: IChildrenTypes) => {
    return (
        <>
            <Head>
                <title>{title} | Test NextJS</title>
                <meta name="keywords" content="next, javascript, react" />
                <meta name="description" content="This is description" />
                <meta charSet="utf-8" />
            </Head>
            <nav>
                <Link href={"/"}><a>Home</a></Link>
                <Link href={"/about"}><a>About</a></Link>
                <Link href={"/posts"}><a>Posts</a></Link>
            </nav>
            <main>
                { children }
            </main>
        </>
    );
};

export default MainLayout;
