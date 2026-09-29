import { FiUserPlus } from "react-icons/fi";
import Container from "../common/Container";

import { creator } from "../../data/creators";

const ProfileHeader = () => {
  return (
    <section className="bg-blue-grid pt-28 md:pt-32 pb-12 md:pb-16">
      <Container>
        <div className="flex items-start gap-5">
          <img
            src={creator.avatar}
            alt={creator.name}
            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover shrink-0"
          />

          <div className="min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-h-xs sm:text-h-s md:text-h-m font-heading font-semibold text-white leading-tight">
                {creator.name}
              </h1>
              <span className="rounded-full bg-secondary-400 text-neutral-950 px-3 py-1 text-b-xs font-semibold">
                {creator.badge}
              </span>
            </div>

            <p className="text-b-s md:text-b-m text-white/80 mt-2">
              {creator.tagline}
            </p>
          </div>
        </div>

        <div className="mt-8 max-w-3xl space-y-4">
          {creator.bio.split("\n\n").map((para, i) => (
            <p key={i} className="text-b-s text-white/75 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-white text-neutral-900 px-5 py-2 text-b-s font-medium">
              {creator.productsCount} Products
            </span>
            <span className="rounded-full bg-white text-neutral-900 px-5 py-2 text-b-s font-medium">
              {creator.followersCount} Followers
            </span>
          </div>

          <button className="inline-flex items-center gap-2 rounded-full bg-secondary-400 text-neutral-950 px-6 py-2.5 text-b-s font-medium hover:bg-secondary-300 transition-colors cursor-pointer">
            <FiUserPlus size={16} />
            Follow
          </button>
        </div>
      </Container>
    </section>
  );
};

export default ProfileHeader;