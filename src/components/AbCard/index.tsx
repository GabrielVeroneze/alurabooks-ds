import React, { ReactNode } from 'react'
import { CardWrapper } from './styled'

export interface AbCardProps {
    children: ReactNode
}

export const AbCard = ({ children }: AbCardProps) => {
    return (
        <CardWrapper>{children}</CardWrapper>
    )
}
