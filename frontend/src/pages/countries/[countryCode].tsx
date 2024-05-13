import { useRouter } from "next/router";
import Link from "next/link";
import { useCountryQuery } from "@/graphql/generated/schema";

export default function CountryDetails() {
  const router = useRouter();
  const { countryCode } = router.query;
  console.log(countryCode);
  if (typeof countryCode !== "string") {
    return <p>Code de pays invalide</p>;
  }
  const { data, loading, error } = useCountryQuery({
    variables: {
      code: countryCode,
    },
  });
  const country = data?.country;
  console.log(country);
  return (
    <div>
      {typeof country === "undefined" ? (
        "Chargement..."
      ) : (
        <>
          <div> {country.name}</div>
          <div> {country.code}</div>
          <div> {country.emoji}</div>
          <div> {country.continent?.name}</div>
        </>
      )}
    </div>
  );
}
