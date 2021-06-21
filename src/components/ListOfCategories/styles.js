import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
`

export const Items = styled.li`
  padding: 0 8px;
`
