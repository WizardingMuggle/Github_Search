import { useContext } from "react"
import AlertContext from "../../Context/alert/AlertContext"

function Alert() {
  const {alert} = useContext(AlertContext)

  return alert !== null && (
    <p className="flex items-start mb-4 space-x-2">
        {alert.type ==='error' && (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12" y2="16" />
          </svg>
        )}
        <p className="flex-1 text-base font-semibold leading-7">
            <strong>
                {alert.msg}
            </strong>
        </p>
    </p>
  )
}

export default Alert
