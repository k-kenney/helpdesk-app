"use client"

import { experimental_useFormStatus as UseFromStatus } from "react-dom"

export default function SubmitButton() {
    const { pending } = UseFromStatus()
    return (
        <button disabled={pending} className="btn-primary">
            {pending && <span>Submitting...</span>}
            {!pending && <span>Submit</span>}
        </button>
    )
}

