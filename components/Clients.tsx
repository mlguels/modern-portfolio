import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

export default function Clients() {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-purple">Collaborators</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}
