"use client"

import Link from "next/link"
import { Button } from "~/components/ui/button"
import { MyDrawer } from "~/components/ui/drawer"
import { api } from "~/utils/api"

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" })

  return (
    <main className="flex flex-col items-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Pet card
        </h1>

        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl ">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
          <Button asChild>
            <Link href="/new-pet">Create a new pet</Link>
          </Button>
          <MyDrawer />
        </div>
      </div>
    </main>
  )
}
