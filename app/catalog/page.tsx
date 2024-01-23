import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function Catalog({ searchText }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div>
      <Navbar />
      <h1>Rechercher</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchText}
          placeholder="Entrez votre recherche"
        />
        <Button type="submit">Rechercher</Button>
      </form>
    </div>
  );
}
