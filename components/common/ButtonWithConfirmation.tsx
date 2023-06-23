import { Label, Button, Modal, TextInput } from "flowbite-react"
import { useState } from 'react'
import React from 'react'


export default function ButtonWithConfirmation (props: any) {
  const {
    text,
    confirmationText="",
    confirmText = "Yes",
    rejectText = "No, cancel",
    onConfirm = () => {},
    onReject = () => {},
    ...otherProps
  } = props

  const [show, setShow] = useState(false)

  const _onReject = () => {
    setShow(false)
    onReject()
  }

  return <React.Fragment>
    <Button onClick={() => setShow(true)} {...otherProps}>{text}</Button>
    <Modal
      show={show}
      size="md"
      popup={true}
      onClose={() => setShow(false)}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>

          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {confirmationText || `Are you sure you want to ${text.toLowerCase()}`}
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              color="failure"
              onClick={onConfirm}
            >
              { confirmText }
            </Button>
            <Button
              color="gray"
              onClick={_onReject}
            >
              { rejectText }
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  </React.Fragment>
}
