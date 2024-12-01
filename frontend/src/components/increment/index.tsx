import { Minus, Plus } from '@phosphor-icons/react'
import React, { useState } from 'react'

import { Input } from '@/components/ui/input'

export const Increment: React.FC = function () {
  const [count, setCount] = useState(1)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <div className="flex w-24 px-2 items-center rounded-lg border">
      <Minus
        size={16}
        weight="regular"
        onClick={() => decrement()}
        className="hover:cursor-pointer"
      />
      <Input
        className="mx-[2px] h-[35px] w-[30px] border-none p-0 text-center text-lg"
        value={count}
        readOnly
      />
      <Plus
        size={16}
        weight="regular"
        onClick={() => increment()}
        className="hover:cursor-pointer"
      />
    </div>
  )
}
