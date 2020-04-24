import styled from 'styled-components';

export const Postioner = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
`

export const ListHeader = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;

    h2 {
        font-size: 20px;
        font-weight: bold;
    }

    div {
        display: flex;
        align-items: center;
        cursor: pointer;

        svg {
            width: 20px;
            height: 15px;
        }

        span {
            margin-right: 10px;
            font-size: 16px;
            font-weight: bold;
        }
    }
`

export const ListContent = styled.div`
    flex: 3;
    display: flex;
    padding: 30px 30px 27px;
    display: grid;
    grid-template-rows: repeat(2, 50px);
    row-gap: 15px;

`