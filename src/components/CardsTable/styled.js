import styled from 'styled-components';

export const Table = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 40px 40px 40px;
    height: 100%;
`;

export const Column = styled.div`
    height: 100%;
    min-width: 300px;
    padding: 10px;
    
    &:nth-child(even) {
        background: #eee;
    }
`;

export const Title = styled.div`
    text-align: center;
    padding: 30px 0;
`;

export const Content = styled.div``;
