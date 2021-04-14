import React, {FC} from 'react'

const Filter = ({
  name,
  setName,
}: React.PropsWithChildren<{
  name: string
  setName: (name: string) => void
}>) => {
  return (
    <div>
      Filter
      <br />
      <input
        type="text"
        defaultValue={name}
        onChange={event => {
          console.log('event', event.target.value)
          setName(event.target.value)
        }}
      />
    </div>
  )
}

export default Filter
