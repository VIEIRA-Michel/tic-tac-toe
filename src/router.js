import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Game from './components/Game/Game';
import GameMultiplayer from './components/Game/GameMultiplayer';
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
                path: '/solo',
                element: <Game />,
            },
            {
                path: '/multiplayer',
                element: <GameMultiplayer />,
            },
        ],
    },
]);