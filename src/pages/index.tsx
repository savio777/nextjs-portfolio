import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sobre mim | sávio dev</title>
      </Head>

      <main>
        <h1>iae</h1>
        <Link href="contatos">Contatos</Link>
      </main>
    </>
  )
}
