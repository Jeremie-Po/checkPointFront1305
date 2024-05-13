import Link from "next/link";
import { Country } from "./Countries";

type CountryCardProps = {
  country: Country;
  link: string;
};
export default function CountryCard({
  country: { code, name, emoji },
  link,
}: CountryCardProps) {
  return (
    <tr>
      <td>
        <Link href={link}>{name}</Link>
      </td>
      <td>{code}</td>
      <td>{emoji}</td>
    </tr>
  );
}
