import styled from 'styled-components';
import { Canvas } from 'react-three-fiber';


//divide the grid into 3 autofit columns and 2 rows on desktop, and 1 column and 1 row on mobile
const HomeGrid = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1rem;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`;

export default HomeGrid;
