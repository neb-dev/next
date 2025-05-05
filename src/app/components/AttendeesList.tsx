'use client'
import { useState, useEffect } from 'react'

export default function AttendeesList() {
  const [attendees, setAttendees] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<boolean | null>(null)

  useEffect(() => {
    fetchAttendees()
  }, [])

  const fetchAttendees = async () => {
    const res = await fetch('http://localhost:4000/', {
      method: 'GET',
    })
    if (!res.ok) {
      setError(true)
    }
    const data = await res.json()
    setAttendees(data.attendees)
    setLoading(false)
  }

  return (
    <div>
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">Error fetching attendees</p>}
      {!loading && !error && (
        <ul>
          {attendees.map((attendee, index) => (
            <li className="text-sm text-green-400" key={index}>
              {attendee}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
