import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, jest } from '@jest/globals'
import Modal from './Modal.jsx'

describe('Modal rendering', () => {
  it('renders modal when isOpen is true', () => {
    const handleClose = jest.fn()
    render(<Modal isOpen={true} onClose={handleClose} />)

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('does not render modal when isOpen is false', () => {
    const handleClose = jest.fn()
    render(<Modal isOpen={false} onClose={handleClose} />)

    expect(screen.queryByRole('dialog')).toBeNull()
  })
})

describe('Modal accessibility', () => {
  it('modal has appropriate aria attributes when open', () => {
    render(<Modal isOpen={true} onClose={jest.fn()} />)
    const dialog = screen.getByRole('dialog')

    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title')
  })
})

describe('Modal keyboard interaction', () => {
  it('closes modal when escape key is pressed', () => {
    const handleClose = jest.fn()
    render(<Modal isOpen={true} onClose={handleClose} />)

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(handleClose).toHaveBeenCalled()
  })
})

describe('Modal overlay interaction', () => {
  it('closes modal when clicking on overlay', () => {
    const handleClose = jest.fn()
    render(<Modal isOpen={true} onClose={handleClose} />)

    fireEvent.click(screen.getByText(/modal-overlay/i))

    expect(handleClose).toHaveBeenCalled()
  })
})

describe('Modal icons and actions', () => {
  it('calls onClose when close icon is clicked', () => {
    const handleClose = jest.fn()
    render(<Modal isOpen={true} onClose={handleClose} />)

    fireEvent.click(screen.getByLabelText(/Close modal/i))

    expect(handleClose).toHaveBeenCalled()
  })

  it('renders actions and responds to button click', () => {
    const actionHandler = jest.fn()
    const actions = [
      {
        label: 'Action',
        onClick: actionHandler,
      },
    ]
    render(<Modal isOpen={true} actions={actions} />)

    fireEvent.click(screen.getByText(/Action/i))

    expect(actionHandler).toHaveBeenCalled()
  })
})

describe('Modal focus management', () => {
  it('focuses on modal when opened', () => {
    render(<Modal isOpen={true} onClose={jest.fn()} />)

    expect(screen.getByRole('dialog')).toHaveFocus()
  })
})
