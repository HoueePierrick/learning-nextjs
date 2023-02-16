// import styles from "../styles/Home.module.css";
// import React from "react";

// export default function Home() {
//   return (
//     <>
//       <h1>Hello Next World</h1>
//     </>
//   );
// }

import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>The Home page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
