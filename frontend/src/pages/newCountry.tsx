import { ChangeEvent, FormEvent, useState } from "react";

import { useRouter } from "next/router";
import { useMutationMutation, useQueryQuery } from "@/graphql/generated/schema";

export default function NewAd() {
  type Continent = {
    id: number;
    name: string;
  };

  const { data } = useQueryQuery();
  const [createCountry] = useMutationMutation();
  const continents: Continent[] = data?.continents || [];
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formJSON: any = Object.fromEntries(formData.entries());
    formJSON.continent = { id: parseInt(formJSON.continent) };
    const res = await createCountry({ variables: { data: { ...formJSON } } });
    router.push(`/countries/${res.data?.addCountry.id}`);
  };

  return (
    <div>
      <h1 className="pt-6 pb-6 text-2xl">Creer un pays</h1>

      <form onSubmit={handleSubmit} className="pb-12">
        <div className="flex flex-wrap gap-6 mb-3">
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="title">
              <span className="label-text">Nom</span>
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              placeholder="france"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="picture">
              <span className="label-text">Code</span>
            </label>
            <input
              type="text"
              name="code"
              id="code"
              required
              placeholder="FR"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="flex flex-wrap gap-6 mb-3">
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="location">
                <span className="label-text">Emoji</span>
              </label>
              <input
                type="text"
                name="emoji"
                id="emoji"
                required
                placeholder="🇫🇷"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 mb-3 mt-6">
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="category">
              <span className="label-text">Catégorie</span>
            </label>
            <select
              className="select select-bordered"
              id="continent"
              name="continent"
              required
            >
              {continents.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button className="btn btn-primary text-black mt-12 w-full">
          Envoyer
        </button>
      </form>
    </div>
  );
}
