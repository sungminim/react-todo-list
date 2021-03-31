import React from 'react'
import styled from 'styled-components'

const TodoTemplateBlock = styled.div`
    position: relative;
    display:flex;
    flex-direction: column;
    width: 512px;
    height: 768px;
    margin:0 auto;
    margin-top:96px;
    margin-bottom:32px;
    background: #fff;
    border-radius:16px;
    box-shadow:0 0 8px rgba(0,0,0,0.04)
`

function TodoTemplate({ children }){
    return (
        <TodoTemplateBlock>{ children }</TodoTemplateBlock>
    )
}

export default TodoTemplate