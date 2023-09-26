"use client"

import superjson from "superjson"
import { Input } from "~/components/ui/input"
import useQueryParams from "~/modules/Shared/hooks/use-query-params"

export default function Home() {
  const { queryParams, setQueryParams } = useQueryParams<{
    q?: string
  }>()

  const q = queryParams?.get("q")
  const object = q ? superjson.parse<{ name: string }>(q) : { name: "" }

  return (
    <main className="flex flex-col">
      <div className="container flex flex-col justify-center gap-12 px-4">
        <h1 className="text-2xl font-bold">Pet card</h1>
        <Input
          placeholder="Pet name"
          onChange={(e) => {
            const jsonString = superjson.stringify({ name: e.target.value })
            setQueryParams({ q: jsonString })
          }}
          value={object.name ?? ""}
        />
      </div>
      <p>Result: {object.name}</p>
    </main>
  )
}
