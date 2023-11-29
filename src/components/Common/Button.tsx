import { cn } from '../../lib/utils'

export default function Button({
    variant = 'primary',
}: {
    variant?: 'primary' | 'mono'
}) {
    const defaultClasses =
        'px-5 py-3 lg:px-7 lg:py-4 rounded-xl text-sm w-full lg:w-auto font-medium'
    const usedClasses = cn(
        {
            'bg-primary-600 text-white': variant === 'primary',
        },
        {
            'bg-white text-gray-700 border border-gray-300 shadow-xs': variant === 'mono',
        },
        defaultClasses
    )
    return <button className={usedClasses}>Sign up</button>
}
