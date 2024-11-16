"use client";

import { useEffect, useState } from "react";
import { Dino } from "./types";
import Link from "next/link";

export default function Home() {
  const [dinosaurs, setDinosaurs] = useState<Dino[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/dinosaurs");
      const allDinos = (await res.json()) as Dino[];
      setDinosaurs(allDinos);
    })();
  }, []);

  return (
    <main className="text-center">
      <h1>Welcome to the Dinosaur app</h1>
      <p>Click on a dinosaur below to learn more.</p>
      <ul>
        {dinosaurs.map((dinosaur: Dino) => {
          return (
            <li key={dinosaur.name}>
              <Link href={`/${dinosaur.name.toLocaleLowerCase()}`}>
                {dinosaur.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
