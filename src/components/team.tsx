import { Button } from "./ui/button"
import teamMember1 from "/public/team-member-1.png"
import Image from "next/image"
const Team = () => {
  return (
    <div className="py-20">
      <div className="container">
        <div className="flex items-stretch justify-center gap-24 flex-col-reverse sm:flex-row">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 h-full">
            {[teamMember1, teamMember1, teamMember1, teamMember1, teamMember1, teamMember1].map((member, i) => (
              <div
                key={i}
                className="rounded-3xl [&:nth-child(3)]:rounded-full [&:nth-child(4)]:rounded-full overflow-hidden"
              >
                <Image className="sm:h-36 sm:w-36" src={member} alt={"member"} />
              </div>
            ))}
          </div>

          <div className="flex flex-col h-auto py-4 items-start sm:w-5/12">
            <div className="flex-1">
              <h2>Meet Our Team</h2>
              <p className="pt-2 pb-5 text-muted-foreground">
                Discover the brilliance behind Embrace. Our team blends innovations and artistry to craft digital
                wonders that capativate
              </p>
            </div>

            <Button className="w-36 h-12">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
