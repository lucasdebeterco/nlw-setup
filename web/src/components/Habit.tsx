interface HabitProps {
    completed: number
}

export function Habit({completed}: HabitProps) {
    return (
        <p className="bg-zinc-900">Habit {completed}</p>
    )
}