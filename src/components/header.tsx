import MobileNav from "./mobile-nav"
import { Button } from "./ui/button"
const Header = () => {
  return (
    <header className=" py-3 shadow">
      <div className="container flex items-center justify-between">
        <div className="flex items-center justify-center gap-1">
          <div className="flex items-center justify-center gap-0 w-fit ">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9.5" cy="9.5" r="9.5" fill="#3461FF" />
            </svg>

            <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.5192 9.63622C17.1807 10.0221 17.1807 10.9779 16.5192 11.3638L1.50387 20.1227C0.837211 20.5116 -8.75572e-07 20.0308 -8.41836e-07 19.259L-7.61032e-08 1.74104C-4.23671e-08 0.969246 0.837213 0.488374 1.50387 0.877257L9 5.25L16.5192 9.63622Z"
                fill="#3461FF"
              />
            </svg>
          </div>
          <div className="font-bold text-xl">Embrace</div>
        </div>

        <nav className="hidden sm:block">
          <ul className="flex items-center justify-center gap-10 font-medium ">
            <li>How It Works</li>
            <li>Our Work</li>
            <li>Pricing</li>
            <li>About Us</li>
          </ul>
        </nav>

        <Button className="hidden sm:block">Book A Call</Button>

        <MobileNav />
      </div>
    </header>
  )
}

export default Header
