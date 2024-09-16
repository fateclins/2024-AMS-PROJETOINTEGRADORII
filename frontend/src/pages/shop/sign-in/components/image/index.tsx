import React from 'react'

import background from '@/assets/sign-in.jpeg'

export const Image: React.FC = function () {
  return <img className="h-[1024px] bg-cover" src={background} />
}
