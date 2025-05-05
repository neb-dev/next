import AttendeesList from './components/AttendeesList'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen p-4">
      <h1 className="text-2xl mb-2 text-purple-400">Attendees</h1>
      <AttendeesList />
    </div>
  )
}
