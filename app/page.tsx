"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-md space-y-4">
        <div className="flex justify-center mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250105_173613-jTwGDdm4m9zYjtW6GkrAXjqlnvvF5C.png"
            alt="DragX Logo"
            width={80}
            height={80}
            className="drop-shadow-xl"
          />
        </div>

        <Card className="border-none shadow-lg">
          <CardHeader className="space-y-1">
            <h2 className="text-2xl font-bold text-center text-red-800">DragX</h2>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="login" className="data-[state=active]:bg-red-800 data-[state=active]:text-white">
                  Login
                </TabsTrigger>
                <TabsTrigger value="register" className="data-[state=active]:bg-red-800 data-[state=active]:text-white">
                  Register
                </TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="border-gray-200"
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    className="border-gray-200"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-red-800 hover:bg-red-900"
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Sign In"}
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="register">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Username"
                    className="border-gray-200"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="border-gray-200"
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    className="border-gray-200"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-red-800 hover:bg-red-900"
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Create Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

