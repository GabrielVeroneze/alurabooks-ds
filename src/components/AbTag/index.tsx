import React from 'react'
import { TagWrapper } from './styled'

export interface AbTagProps {
    texto: string
}

export const AbTag = ({ texto }: AbTagProps) => {
    return (
        <TagWrapper>{texto}</TagWrapper>
    )
}
