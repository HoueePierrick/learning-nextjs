import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();
  // Displays the path to get to this component
  // Is portfolio/[projectid]
  console.log(router.pathname);
  // Projectid being in the brackets
  // {projectid: 'filename'}
  console.log(router.query);

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}

export default PortfolioProjectPage;
