'use client'
import Link from "next/link";

export default function App() {
  return <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Bienvenue sur consoles exclus</h1>
        <p className="py-6">
          Ce site référence l&apos;ensemble des exclusivités des différentes consoles afin d&apos;entretenir la guerre des consoles.
        </p>
        <p className="py-6">Les générations de consoles sont determinés par rapport à l&apos;article <Link href={`https://fr.wikipedia.org/wiki/Histoire_des_consoles_de_jeux_vid%C3%A9o`}>Wikipedia</Link> </p>
        <Link href={'/chart/9'}><button className="btn btn-primary">Génération actuelle</button></Link>
      </div>
    </div>
  </div>
}


