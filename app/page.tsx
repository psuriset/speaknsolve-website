'use client';

import Image from 'next/image';
import {
  Award,
  Bell,
  BookOpen,
  CalendarCheck,
  Check,
  ChevronRight,
  ClipboardCheck,
  CreditCard,
  Download,
  FileText,
  GraduationCap,
  Mail,
  MessageCircle,
  Mic,
  MonitorUp,
  PenLine,
  PlayCircle,
  Presentation,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Star,
  UserCheck,
  Video,
} from 'lucide-react';

const navItems = [
  'Courses',
  'Login',
  'Live Classes',
  'Workshops',
  'Resources',
  'Admin',
];

const whatsappUrl =
  "https://wa.me/919880964672?text=Hello%20SpeakNSolve%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20courses.";

const courses = [
  {
    name: 'Confident Speaking',
    group: 'Grades 2-5',
    duration: '12 weeks',
    timing: 'Tue & Thu, 5 PM',
    price: '$149 / month',
    skills: ['Voice clarity', 'Storytelling', 'Stage confidence'],
    mode: 'Group or 1-to-1',
  },
  {
    name: 'Creative Writing Lab',
    group: 'Grades 4-8',
    duration: '10 weeks',
    timing: 'Sat, 10 AM',
    price: '$129 / month',
    skills: ['Plots', 'Prompts', 'Editing'],
    mode: 'Small group',
  },
  {
    name: 'Reasoning & Vocabulary',
    group: 'Ages 8-13',
    duration: '8 weeks',
    timing: 'Mon & Wed, 6 PM',
    price: '$119 / month',
    skills: ['Logic', 'Word power', 'Comprehension'],
    mode: 'Group or 1-to-1',
  },
];

const portalStats = [
  ['92%', 'Attendance'],
  ['8', 'Upcoming classes'],
  ['14', 'Resources unlocked'],
  ['3', 'Certificates'],
];

const classes = [
  ['Today', 'Speaking Fluency', '5:00 PM', 'Join Class'],
  ['Fri', 'Creative Writing', '6:30 PM', 'View Link'],
  ['Sat', 'Workshop: Debate Basics', '10:00 AM', 'Register'],
];

const teacherTasks = [
  'Start class and mark attendance',
  'Upload worksheets and class recordings',
  'Send feedback to parent and student',
  'Set availability for demos and batches',
];

const adminItems = [
  'Students & parents',
  'Teachers',
  'Courses',
  'Batches & timings',
  'Classes',
  'Demo sessions',
  'Workshops',
  'Payments',
  'Assignments/resources',
  'Testimonials',
  'Certificates',
  'Pop-ups/banners',
  'Notifications/emails',
];

const resources = [
  ['Worksheets', 'PDF grammar, speaking and reasoning practice'],
  ['Speaking activities', 'Warm-ups, debate cards and show-and-tell prompts'],
  ['Creative writing prompts', 'Story starters, editing drills and rubrics'],
  ['Vocabulary activities', 'Word maps, idioms and weekly challenges'],
];

const testimonials = [
  {
    quote:
      'My daughter went from whispering answers to leading her school assembly practice. The teacher feedback is wonderfully specific.',
    name: 'Ananya R.',
    role: 'Parent, Grade 4',
  },
  {
    quote:
      'I like the class games and certificates. Now I can make stories faster and explain my ideas without getting stuck.',
    name: 'Vihaan S.',
    role: 'Student, Grade 5',
  },
  {
    quote:
      'The dashboard makes it easy to track assignments, class links, attendance and payments in one place.',
    name: 'Meera K.',
    role: 'Parent, Grade 7',
  },
];

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-coral">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-ink md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
        {text}
      </p>
    </div>
  );
}

function ActionButton({
  children,
  variant = 'primary',
  href = '#demo',
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'light' | 'outline';
  href?: string;
}) {
  const isExternal = href.startsWith('https://');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition ${
        variant === 'primary'
          ? 'bg-ink text-white shadow-[0_12px_30px_rgba(17,24,39,0.22)] hover:bg-slate-800'
          : variant === 'light'
            ? 'bg-white text-ink hover:bg-amber-50'
            : 'border border-ink/15 bg-white/70 text-ink hover:bg-white'
      }`}
    >
      {children}
      <ChevronRight className="size-4" />
    </a>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof BookOpen;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex size-11 items-center justify-center rounded-md bg-teal/10 text-teal">
        <Icon className="size-5" />
      </div>
      <h3 className="text-lg font-black text-ink">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-slate-600">{children}</div>
    </article>
  );
}

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-cream text-slate-900">
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/92 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="SpeakNSolve home">
            <span className="flex size-11 items-center justify-center rounded-md bg-ink text-white">
              <Mic className="size-5" />
            </span>
            <span>
              <span className="block text-xl font-black tracking-tight text-ink">
                SpeakNSolve
              </span>
              <span className="block text-xs font-semibold text-slate-500">
                Speak. Create. Reason.
              </span>
            </span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden size-11 items-center justify-center rounded-md border border-teal/30 bg-white text-teal sm:flex"
              aria-label="WhatsApp SpeakNSolve"
            >
              <MessageCircle className="size-5" />
            </a>
            <ActionButton>Book Demo</ActionButton>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-bold text-ink shadow-sm">
              <Sparkles className="size-4 text-coral" />
              New batches open this week
            </div>
            <h1 className="max-w-2xl text-5xl font-black leading-[0.98] tracking-tight text-ink md:text-7xl">
              SpeakNSolve
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-8 text-slate-650">
              Online classes that help children speak clearly, write creatively,
              build vocabulary and solve reasoning questions with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionButton>Enroll Now</ActionButton>
              <ActionButton variant="outline">Explore Courses</ActionButton>
            </div>
            <div className="mt-8 grid max-w-lg grid-cols-3 gap-3">
              {[
                ['1:1', 'coach options'],
                ['Live', 'class links'],
                ['PDFs', 'free resources'],
              ].map(([big, small]) => (
                <div key={big} className="rounded-lg bg-white p-4 shadow-sm">
                  <p className="text-2xl font-black text-ink">{big}</p>
                  <p className="text-xs font-semibold text-slate-500">{small}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src="/speaknsolve-hero.png"
              width={1680}
              height={945}
              priority
              alt="Online learning desk with class screen and speaking activity cards"
              className="aspect-[16/10] w-full rounded-lg object-cover shadow-[0_28px_80px_rgba(15,23,42,0.22)]"
            />
            <div className="absolute bottom-4 left-4 right-4 grid gap-3 rounded-lg bg-white/94 p-4 shadow-lg backdrop-blur sm:grid-cols-3">
              {['Demo confirmed', 'Class reminder sent', 'Certificate ready'].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-bold text-ink">
                    <Check className="size-4 text-teal" />
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Courses"
            title="Programs for speaking, writing and reasoning"
            text="Every course includes clear grade bands, skills, duration, timing, pricing, resources and enrollment paths."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.name}
                className="flex flex-col rounded-lg border border-slate-200 bg-cream p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-coral">{course.group}</p>
                    <h3 className="mt-2 text-2xl font-black text-ink">{course.name}</h3>
                  </div>
                  <BookOpen className="size-7 text-teal" />
                </div>
                <div className="mt-5 grid gap-2 text-sm text-slate-600">
                  <p>
                    <strong className="text-ink">Duration:</strong> {course.duration}
                  </p>
                  <p>
                    <strong className="text-ink">Timings:</strong> {course.timing}
                  </p>
                  <p>
                    <strong className="text-ink">Pricing:</strong> {course.price}
                  </p>
                  <p>
                    <strong className="text-ink">Format:</strong> {course.mode}
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {course.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-white px-3 py-1 text-xs font-bold text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-2">
                  <ActionButton>Enroll</ActionButton>
                  <ActionButton variant="outline">Book Demo</ActionButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why SpeakNSolve"
            title="A complete learning loop, not scattered links"
            text="Parents, students, teachers and admins get the pieces they need to keep live learning organized."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <InfoCard icon={Video} title="Live classes">
              Direct join links, reminders, attendance, recordings, screen sharing
              and whiteboard-ready online sessions.
            </InfoCard>
            <InfoCard icon={ClipboardCheck} title="Progress tracking">
              Assignments, submissions, assessments, feedback, attendance and
              certificates in one student profile.
            </InfoCard>
            <InfoCard icon={CreditCard} title="Payments">
              Course and workshop payments with plans, coupons, confirmations,
              receipts and payment history.
            </InfoCard>
            <InfoCard icon={Bell} title="Notifications">
              Class, demo, workshop, assignment, enrollment and payment emails
              for families and teachers.
            </InfoCard>
          </div>
        </div>
      </section>

      <section id="login" className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Portal"
            title="Parent, student and teacher dashboards"
            text="Role-based login areas are mapped out with the key class, assignment, feedback and payment workflows."
          />
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-lg bg-white p-5 text-ink shadow-2xl">
              <div className="grid gap-3 sm:grid-cols-4">
                {portalStats.map(([value, label]) => (
                  <div key={label} className="rounded-lg bg-cream p-4">
                    <p className="text-2xl font-black">{value}</p>
                    <p className="text-xs font-bold text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-lg border border-slate-200">
                {classes.map(([day, topic, time, action]) => (
                  <div
                    key={topic}
                    className="grid grid-cols-[70px_1fr_auto] items-center gap-4 border-b border-slate-100 p-4 last:border-b-0"
                  >
                    <span className="rounded-md bg-teal/10 px-3 py-2 text-center text-sm font-black text-teal">
                      {day}
                    </span>
                    <div>
                      <p className="font-black">{topic}</p>
                      <p className="text-sm text-slate-500">{time} online</p>
                    </div>
                    <button className="rounded-md bg-coral px-3 py-2 text-xs font-black text-white">
                      {action}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              <InfoCard icon={UserCheck} title="Parent / student login">
                Registration, profile, enrolled courses, calendars, previous
                classes, attendance, assignments, certificates and payments.
              </InfoCard>
              <InfoCard icon={GraduationCap} title="Teacher panel">
                Assigned students, schedule, notes, feedback, uploads, parent
                email and teacher availability.
              </InfoCard>
            </div>
          </div>
        </div>
      </section>

      <section id="live-classes" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-coral">
              Live Classes
            </p>
            <h2 className="mt-3 text-4xl font-black text-ink">
              Join, learn, record and follow up
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Class pages hold online links, attendance, screen sharing notes,
              whiteboard prompts, recordings and reminder status.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                [PlayCircle, 'Direct Join Class'],
                [MonitorUp, 'Screen sharing'],
                [Presentation, 'Whiteboard prompts'],
                [Bell, 'Class reminders'],
              ].map(([Icon, label]) => (
                <div key={label as string} className="flex items-center gap-3 rounded-lg bg-cream p-4">
                  <Icon className="size-5 text-teal" />
                  <span className="font-bold text-ink">{label as string}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-cream p-6">
            <h3 className="text-xl font-black text-ink">Today&apos;s teacher checklist</h3>
            <div className="mt-5 space-y-3">
              {teacherTasks.map((task) => (
                <div key={task} className="flex items-center gap-3 rounded-lg bg-white p-4">
                  <Check className="size-5 text-teal" />
                  <span className="font-semibold text-slate-700">{task}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-lg bg-coral shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 text-white md:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.18em]">
                Demo Sessions
              </p>
              <h2 className="mt-3 text-4xl font-black">Book a demo session</h2>
              <p className="mt-4 text-lg leading-8 text-white/90">
                Collect parent and student details, course selection, preferred
                date/time, confirmation, reminders and admin demo management.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ActionButton variant="light">Confirm Demo</ActionButton>
                <ActionButton variant="outline" href={whatsappUrl}>
                  WhatsApp Us
                </ActionButton>
              </div>
            </div>
            <form className="grid gap-4 bg-white p-6 md:grid-cols-2 md:p-8">
              {['Parent name', 'Student name', 'Grade / age', 'Email or phone'].map(
                (field) => (
                  <label key={field} className="grid gap-2 text-sm font-bold text-ink">
                    {field}
                    <input
                      className="h-11 rounded-md border border-slate-200 px-3 font-medium outline-none focus:border-teal"
                      placeholder={field}
                    />
                  </label>
                ),
              )}
              <label className="grid gap-2 text-sm font-bold text-ink">
                Course
                <select className="h-11 rounded-md border border-slate-200 px-3 font-medium outline-none focus:border-teal">
                  {courses.map((course) => (
                    <option key={course.name}>{course.name}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-ink">
                Preferred date & time
                <input
                  className="h-11 rounded-md border border-slate-200 px-3 font-medium outline-none focus:border-teal"
                  placeholder="Saturday, 11 AM"
                />
              </label>
            </form>
          </div>
        </div>
      </section>

      <section id="workshops" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Workshops"
            title="Short-format events with registration and certificates"
            text="Publish upcoming workshops with dates, fees, online payment, reminders, attendance and downloadable certificates."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {['Debate Sprint', 'Story Builder Camp', 'Vocabulary Games Day'].map(
              (name, index) => (
                <article key={name} className="rounded-lg border border-slate-200 p-6">
                  <CalendarCheck className="size-7 text-coral" />
                  <h3 className="mt-4 text-xl font-black text-ink">{name}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {['Jun 22, 10 AM', 'Jun 29, 4 PM', 'Jul 6, 11 AM'][index]} ·
                    {' '}${[29, 39, 19][index]}
                  </p>
                  <button className="mt-5 inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-bold text-white">
                    Register <ChevronRight className="size-4" />
                  </button>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section id="resources" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Free Resources"
            title="Practice materials for learning between classes"
            text="Organized worksheets, speaking tasks, prompts, vocabulary work and logical reasoning PDFs."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {resources.map(([title, text]) => (
              <div key={title} className="flex gap-4 rounded-lg bg-white p-5 shadow-sm">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-yellow/30 text-ink">
                  <Download className="size-5" />
                </div>
                <div>
                  <h3 className="font-black text-ink">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Assignments & Progress"
            title="From upload to feedback to certificate"
            text="Teachers can upload assignments and worksheets; students submit work; families see attendance, assessments and reports."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [FileText, 'Assignment uploaded', 'Creative writing worksheet due Friday'],
              [PenLine, 'Student submission', 'Draft story submitted with notes'],
              [Award, 'Certificate issued', 'Speaking confidence milestone complete'],
            ].map(([Icon, title, text]) => (
              <InfoCard key={title as string} icon={Icon as typeof FileText} title={title as string}>
                {text as string}
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      <section id="payments" className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-coral">
              Payments
            </p>
            <h2 className="mt-3 text-4xl font-black text-ink">
              Plans, coupons, receipts and history
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Course and workshop payments support monthly or 3-month plans,
              discounts, confirmation emails, receipts and parent-facing history.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            {[
              ['Monthly Course Plan', '$149', 'Paid · Receipt #SN-1042'],
              ['3-Month Bundle', '$399', 'Coupon SPEAK10 applied'],
              ['Workshop Registration', '$29', 'Payment confirmation sent'],
            ].map(([title, amount, status]) => (
              <div
                key={title}
                className="flex items-center justify-between gap-4 border-b border-slate-100 py-4 last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <ReceiptText className="size-5 text-teal" />
                  <div>
                    <p className="font-black text-ink">{title}</p>
                    <p className="text-sm text-slate-500">{status}</p>
                  </div>
                </div>
                <p className="text-xl font-black text-ink">{amount}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="Parent and student stories"
            text="Written and video testimonials can be managed by the admin team alongside student achievements."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-lg border border-slate-200 p-6">
                <div className="mb-4 flex gap-1 text-yellow">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-6 text-slate-700">
                  &quot;{item.quote}&quot;
                </p>
                <p className="mt-5 font-black text-ink">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="admin" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Admin Panel"
            title="Control center for the whole academy"
            text="A single operational view for website content, people, classes, payments, demos, workshops and communication."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {adminItems.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                <ShieldCheck className="size-5 text-teal" />
                <span className="text-sm font-bold text-ink">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-black">Ready to start speaking stronger?</h2>
            <p className="mt-2 text-white/70">
              Book a demo, enroll in a course or ask us about upcoming workshops.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ActionButton variant="light">Book Demo</ActionButton>
            <a
              href="mailto:hello@speaknsolve.com"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-bold text-white"
            >
              <Mail className="size-4" />
              Contact
            </a>
          </div>
        </div>
      </section>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact SpeakNSolve on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-teal text-white shadow-2xl"
      >
        <MessageCircle className="size-6" />
      </a>
    </main>
  );
}
