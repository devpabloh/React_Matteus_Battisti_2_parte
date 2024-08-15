import React from 'react'

interface Props  {
    title: string
    content: string
    comentsQty: number
    tags: string[]

    // 8 - enum
    category: Category
}

export enum Category {
    js = "Javascript",
    ts = "typeScript",
    p = "phyton",
}

const Desctructuring = ({title, content, comentsQty, tags, category}: Props) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Quantidade de comentários: {comentsQty}</p>
        <div>
            {tags.map(tag =>(
                <span>#{tag}</span>
            ))}
        </div>
        <h4>Categoria: {category}</h4>
    </div>
  )
}

export default Desctructuring