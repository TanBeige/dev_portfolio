import { CalendarIcon, ClockIcon, MailIcon, UserGroupIcon } from "@heroicons/react/solid";

const contactOptions = [
  {
    title: "Email",
    description: "Fastest reply — typically within one business day.",
    actionLabel: "Email Tan",
    href: "mailto:tanarindev@gmail.com",
    icon: MailIcon,
  },
  {
    title: "LinkedIn",
    description: "Connect or DM for collaborations and speaking.",
    actionLabel: "Message on LinkedIn",
    href: "https://www.linkedin.com/in/tanarin12",
    icon: UserGroupIcon,
  }
];

const trustedBy = [
  "DeepVest",
  "Kora Labs",
  "GRIFFIN Solutions",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="rounded-2xl border border-white/5 bg-gradient-to-br from-gray-900/60 to-gray-900/20 p-8 shadow-lg shadow-blue-500/5"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-white">
            Ready to build your next launch together
          </h2>
          <p className="mt-3 text-base text-gray-300">
            I partner with product leaders to architect and ship user experiences that convert. Send a note with the problem you are solving, your timeline, and the kind of impact you expect — I will reply within a business day.
          </p>
          <div className="mt-4 inline-flex items-center rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
            <ClockIcon className="mr-2 h-4 w-4 text-blue-300" />
            Replies within 24 hours
          </div>
        </div>
        <div className="grid w-full max-w-lg gap-4 sm:grid-cols-2">
          {contactOptions.map(({ title, description, actionLabel, href, icon: Icon }) => (
            <div
              key={title}
              className="flex flex-col justify-between rounded-xl border border-white/5 bg-white/5 p-4"
            >
              <div>
                <Icon className="h-6 w-6 text-blue-300" />
                <h3 className="mt-3 text-base font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm text-gray-400">{description}</p>
              </div>
              <a
                href={href}
                className="mt-4 inline-flex items-center text-sm font-semibold text-blue-300 hover:text-blue-200"
              >
                {actionLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 border-t border-white/5 pt-6">
        <p className="text-xs uppercase tracking-wide text-gray-500">
          Trusted by teams at
        </p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold text-gray-300">
          {trustedBy.map((name) => (
            <span
              key={name}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
