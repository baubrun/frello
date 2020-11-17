import styled from "styled-components"

export const AddItemButton = styled.button `
background-color: #fffff3d;
border: none;
border-radius: 3px;
color: ${props => (props.dark? "#000" : "#fff")};
cursor: pointer;
max-width: 300px;
padding: 10px 12px;
text-align: left;
transition: background 85ms ease-in;
width: 100%;
&:hover {
    background-color: #ffffff52;
}
`

export const AppContainer = styled.div `

align-items: flex-start;
background-color: #3179ba;
display: flex;
flex-direction: row;
flex-wrap: wrap;
height: 100%;
padding: 20px;
width: 100%;
`

export const CardContainer = styled.div `
background-color: #fff;
border-radius: 3px;
box-shadow: #091e4240 0px 1px 0px 0px;
cursor: pointer;
margin-bottom: 8px;
max-width: 300px;
padding: 8px 16px;
`

export const ColumnContainer = styled.div`
background-color: #ebecf0;
border-radius: 3px;
flex-grow: 0;
margin-right: 20px;
min-height: 40px;
padding: 8px 8px;
width: 300px;
`

export const ColumnTitle = styled.div `
padding: 6px 16px 12px;
font-weight: bold;
`
export const CustomDragLayerContainer = styled.div `
height: 100%;
left: 0;
pointer-events: none;
position: fixed;
top: 0;
width: 100%;
z-index: 100;
`

export const NewItemButton = styled.button `
background-color: #5aac44;
border: none;
border-radius: 3px;
box-shadow: none;
color: #fff;
padding: 6px 12px;
text-align: center
`

export const NewItemInput = styled.input `
border: none;
border-radius: 3px;
box-shadow: #091e4240 0px 1px 0px 0px;
margin-bottom: 8px;
padding: 8px 16px;
width: 100%;
`

export const NewItemFormContainer = styled.div `
`