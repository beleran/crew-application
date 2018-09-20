import styled from 'styled-components';

export const Card = styled.div`
    padding: 20px 0;
    position: relative;
    min-height: 100px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background: #fff;
`;

export const InfoWrapper = styled.div`
    display: flex;
    padding: 0 20px;
    align-items: center;
`;

export const Avatar = styled.div`
    margin-right: 20px;
`;

export const IconWrapper = styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 20px;
    cursor: pointer;
    ${ props => props.left ? 'left: 20px;' : 'right: 20px;' }
`;

export const Icon = styled.div`
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    ${ props => props.left ? 'border-right: 10px solid #000;' : 'border-left: 10px solid #000;' }
`;
