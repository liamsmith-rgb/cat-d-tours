import Image from "next/image";
import Link from "next/link";

export default function OurStoryPage() {
  return (
    <div className="px-5 py-10 md:px-10 md:py-14 max-w-3xl mx-auto">
      <p className="text-[10px] tracking-[0.25em] text-catd-subtle uppercase mb-2">About</p>
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Our story</h1>
      <p className="text-sm text-catd-muted mb-10">How a joke about an insurance write-off became a crew, a community, and a passport.</p>

      <div className="space-y-6 text-sm text-catd-muted leading-8">
        <p>
          Ten lads on big bikes riding the Trans Euro Trail across Europe. Coming unstuck more times than anyone cares to count. Bikes dropped in rivers, panniers cable-tied back together, coolant topped up with a bamboo tube.
        </p>
        <p>
          Someone looked at the wreckage after a particularly brutal day in the Alps and said{" "}
          <span className="text-catd-orange font-semibold">&ldquo;Cat D that — I&rsquo;ll give you a tenner for it.&rdquo;</span>{" "}
          The name stuck. Cat D Tours was born.
        </p>

        <Image
          src="/images/gallery/alps-group.jpg"
          alt="The crew in the Alps"
          width={1200}
          height={800}
          className="rounded-lg w-full my-4"
          sizes="(max-width: 768px) 100vw, 720px"
        />

        <p>
          Now it&apos;s a crew, a community, and a passport that gets stamped every time you survive another tour. Neil navigates — 50 years of riding experience and over 100,000 miles across Europe. Liam sorts the hotels and the logistics. The rest of us try to keep up.
        </p>

        <div className="border-l-[3px] border-catd-orange pl-5 py-2 my-6">
          <p className="text-base text-catd-text font-semibold leading-relaxed italic">
            &ldquo;We ride long days with an element of surprise — always the potential for the unknown.&rdquo;
          </p>
        </div>

        <p>
          We sometimes go with the wind. If the weather is bad west, we go east. That&apos;s what makes a Cat D tour a Cat D tour. Nothing is locked in stone.
        </p>
        <p>
          A Cat D tour is a true adventure. We cover decent distances and prefer to have open variables — let the unknown, the adversity, the curiosity bud and seed and develop, because that creates real tour memories. The running out of fuel, the punctures, the little offs on the TET, filling bike coolant with bamboo — it all builds something unforgettable.
        </p>

        <Image
          src="/images/gallery/spain-tet-group.jpg"
          alt="The crew on the Spanish TET"
          width={1200}
          height={800}
          className="rounded-lg w-full my-4"
          sizes="(max-width: 768px) 100vw, 720px"
        />

        <p>
          Members come and go, but the core crew keeps riding. Every rider who joins gets their own Cat D Tours passport on their first tour — stamped at each destination, each country, each tour. It fills up quicker than you&apos;d think.
        </p>
        <p>
          Cat D Tours is all about the routes we&apos;ve ridden over the years. It became a joke because every time we went away, we were all on big bikes riding the TET and came unstuck several times. A few crashes here and there. Someone would look at a battered bike and say &ldquo;Cat D that — not worth fixing, I&rsquo;ll give you a tenner.&rdquo; And somehow, that joke became a name, and the name became a crew that&apos;s ridden across most of Europe together.
        </p>
      </div>

      <div className="mt-12 flex gap-3 flex-wrap">
        <Link href="/riders" className="px-5 py-2.5 bg-catd-orange text-catd-dark text-sm font-bold rounded-sm hover:bg-[#d06c30] transition-colors">
          Meet the riders
        </Link>
        <Link href="/tours" className="px-5 py-2.5 border border-[#333] text-catd-text text-sm font-semibold rounded-sm hover:border-catd-subtle transition-colors">
          See our tours
        </Link>
      </div>
    </div>
  );
}
