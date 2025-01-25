import React, { ReactNode } from 'react'
import { CardWrapper } from './styled'

export interface CardProps {
    children: ReactNode
}

export const Card = ({ children }: CardProps) => {
    return (
        <CardWrapper>{children}</CardWrapper>
    )
}
