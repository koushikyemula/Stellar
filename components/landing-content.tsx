"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Teja",
    avatar: "A",
    title: "Software Engineer",
    description: "This is the best web application I've ever used!"
  },
  {
    name: "Bhupesh",
    avatar: "B",
    title: "Artist",
    description: "This application makes everything easy for me."
  },
  {
    name: "Nihal",
    avatar: "C",
    title: "Student",
    description: "The UI looks sick!! The landing page is my favourite."
  },
  {
    name: "Luffy",
    avatar: "D",
    title: "King of the pirates",
    description: "My go to web application for AI Generation."
  },
]

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-col-1 sm:grid-cols-2 mb:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}