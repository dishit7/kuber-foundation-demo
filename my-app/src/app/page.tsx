import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import logo from "../public/images/WhatsApp Image 2024-10-01 at 11.46.32_bb78f348.jpg"
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-amber-100 via-yellow-200 to-amber-300 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmMTAiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iIzk3NzIwMjEwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')]">
      <header className="px-4 lg:px-6 h-20 flex items-center border-b border-amber-600 bg-gradient-to-r from-amber-200 to-yellow-400 shadow-md">
        <h1 className="text-3xl font-bold text-amber-900 drop-shadow-sm">Kuber Foundation</h1>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-amber-900 hover:text-amber-700 font-medium hover:underline underline-offset-4" href="#about">
            About
          </a>
          <a className="text-amber-900 hover:text-amber-700 font-medium hover:underline underline-offset-4" href="#initiatives">
            Initiatives
          </a>
          <a className="text-amber-900 hover:text-amber-700 font-medium hover:underline underline-offset-4" href="#donate">
            Donate
          </a>
          <a className="text-amber-900 hover:text-amber-700 font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-amber-900 drop-shadow-sm">
                  Prosperity for All, Under the Watchful Eye of Kuber
                </h1>
                <p className="mx-auto max-w-[700px] text-amber-800 md:text-xl font-medium">
                  Empowering communities, nurturing lives, and fostering hope through compassionate action.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white hover:from-amber-700 hover:to-yellow-700 shadow-lg">
                  Learn More
                </Button>
                <Button variant="outline" className="border-2 border-amber-600 text-amber-800 hover:bg-amber-100 shadow-lg">
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-100 to-yellow-200">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <Image
                alt="Foundation member feeding monkeys"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-xl border-4 border-amber-300"
                height="310"
                src={logo}
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900 drop-shadow-sm">
                  Our Mission
                </h2>
                <p className="max-w-[600px] text-amber-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Kuber Foundation, we believe in creating a world where prosperity is shared by all. Our dedicated
                  team works tirelessly to support those in need, care for animals, and build stronger communities.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="initiatives" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-yellow-200 to-amber-200">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-amber-900 drop-shadow-sm">
              Our Initiatives
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-gradient-to-br from-amber-100 to-yellow-200 border-2 border-amber-400 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-amber-900">Fund Generation</h3>
                  <p className="text-amber-800">
                    We actively raise funds to support various causes and individuals in dire need of financial
                    assistance.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-amber-100 to-yellow-200 border-2 border-amber-400 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-amber-900">Animal Welfare</h3>
                  <p className="text-amber-800">
                    Our weekly feeding programs ensure that animals like cows, monkeys, and bulls are well-nourished and
                    cared for.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-amber-100 to-yellow-200 border-2 border-amber-400 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-amber-900">Donation Drives</h3>
                  <p className="text-amber-800">
                    We organize regular food and necessity donation drives to support communities in need.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="donate" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-amber-900 drop-shadow-sm">
              Support Our Cause
            </h2>
            <p className="mx-auto max-w-[600px] text-amber-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8 font-medium">
              Your contribution can make a significant difference in the lives of many. Join us in our mission to spread
              prosperity and kindness.
            </p>
            <Button className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white hover:from-amber-700 hover:to-yellow-700 shadow-lg text-lg px-8 py-3">
              Donate Now
            </Button>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-amber-400 bg-gradient-to-r from-amber-200 to-yellow-300">
        <p className="text-sm text-amber-900">© 2024 Kuber Foundation. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm hover:underline underline-offset-4 text-amber-900 hover:text-amber-700" href="#">
            Terms of Service
          </a>
          <a className="text-sm hover:underline underline-offset-4 text-amber-900 hover:text-amber-700" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}