# modal-reactjs-tailwindcss

The modal-reactjs-tailwindcss component provides a flexible and accessible modal window, ideal for displaying messages or confirming actions.
It includes customizable icons, manages focus for better accessibility, and allows you to close the modal by clicking outside it.
Perfect for use cases like confirming a successful action or presenting important information.

## Github

[github.com/Vanda89/modal-reactjs-tailwindcss](https://github.com/Vanda89/modal-reactjs-tailwindcss)

## Installation

To use this component in your project, run the following command:

```bash
npm i modal-reactjs-tailwindcss
```

## Usage

```javascript
import React from 'react'
import Modal from '@your-org/modal'
import { FaInfoIcon } from 'react-icons/fa'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const customActions = [
    {
      label: 'Custom Action 1',
      bgColor: 'bg-blue-500',
      borderColor: 'border-blue-600',
      hoverBgColor: 'hover:bg-blue-700',
      onClick: () => console.log('Custom Action 1 clicked'),
    },
  ]

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <button onClick={closeModal}>Close Modal</button>

      <Modal
        isOpen={isOpen}
        isHidden={true}
        onClose={closeModal}
        actions={customActions}
        infoIcon={FaInfoIcon}
        infoContainerColor="bg-green-100"
      />
    </div>
  )
}

export default App
```

## Tailwind CSS

This project utilizes Tailwind CSS for styling. Tailwind CSS is a utility-first CSS framework for rapidly building custom designs. If you are not familiar with Tailwind CSS, you can learn more about it on the [Tailwind CSS website](https://tailwindcss.com/).

To customize the styles of the modal component, you can leverage the utility classes provided by Tailwind CSS. Tailwind CSS allows you to quickly style your components by applying pre-defined classes directly in your HTML or JSX.

Feel free to explore the Tailwind CSS documentation to discover the full range of utility classes available for styling your components.

## Props

### `isOpen` (Boolean, required)

- Description: Controls the visibility of the modal.
- Default: `false`

### `isHidden` (Boolean, optional)

- Description: Determines if the modal is hidden.
- Default: `false`

### `onClose` (Function, required)

- Description: Function called when the user closes the modal.

### `closeIcon` (ReactNode, optional)

- Description: The close icon of the modal.

### `infoIcon` (ReactNode, optional)

- Description: The information icon to display in the modal.

### `infoIconColor` (String, optional)

- Description: The color of the information icon.

### `infoIconSize` (String, optional)

- Description: The size of the information icon.

### `infoContainerColor` (String, optional)

- Description: The color of the information container in the modal.

### `actions` (Array, optional)

- Description: An array of action objects that define the actions to be displayed in the modal.
- Default: `[]`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
