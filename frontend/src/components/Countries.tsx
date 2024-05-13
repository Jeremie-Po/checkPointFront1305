import { useCountriesQuery } from "../graphql/generated/schema";
import CountryCard from "./CountryCard";

export type Country = {
  id: number;
  code: string;
  name: string;
  emoji: string;
};

export default function Countries() {
  const { loading, data, error } = useCountriesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const countries = data?.countries || [];

  return (
    <div className="pt-6">
      <h2 className="text-2xl mb-6">Liste des pays</h2>

      <table className="table-auto">
        <thead>
          <tr>
            <th>pays</th>
            <th>code</th>
            <th>emoji</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <CountryCard
              key={country.id}
              country={country}
              link={`/countries/${country.code}`}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
