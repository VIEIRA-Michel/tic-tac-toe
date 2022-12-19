import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Game from './components/Game/Game';
import Menu from './components/Menu/Menu';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Menu />,
            },
            {
                path: '/game',
                element: <Game />,
            },
        ],
    },
]);