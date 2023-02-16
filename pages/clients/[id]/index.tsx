import { useRouter } from "next/router";

function ClientsProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    // Navigating to an other page
    // router.push("/clients/max/projecta");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
    // Replace current page with this one (can't go back)
    // router.replace("/clients/max/projecta");
  }

  return (
    <div>
      <h1>The projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  );
}

export default ClientsProjectsPage;
