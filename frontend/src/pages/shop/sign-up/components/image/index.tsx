import React from 'react'

import background from '@/assets/sign-up.jpeg'

export const Image: React.FC = function () {
  return <img className="h-[1024px] bg-cover" src={background} />
}
