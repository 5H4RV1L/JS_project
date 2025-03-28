window.onload = function() {
    let board = ['', '', '', '', '', '', '', '', ''];
        let currentPlayer = 'X';
        let gameActive = true;

        const statusDisplay = document.querySelector('.header');

        function handleCellClick(clickedCell, clickedCellIndex) {
            if (board[clickedCellIndex] !== '' || !gameActive) {
                return;
            }

            board[clickedCellIndex] = currentPlayer;
            clickedCell.innerHTML = currentPlayer;

            checkResult();
        }

        function checkResult() {
            const winningConditions = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];

            let roundWon = false;
            for (let i = 0; i < winningConditions.length; i++) {
                const [a, b, c] = winningConditions[i];
                if (board[a] === '' || board[b] === '' || board[c] === '') {
                    continue;
                }
                if (board[a] === board[b] && board[a] === board[c]) {
                    roundWon = true;
                    break;
                }
            }

            if (roundWon) {
                statusDisplay.innerHTML = `Player ${currentPlayer} has won!`;
                gameActive = false;
                return;
            }

            if (!board.includes('')) {
                statusDisplay.innerHTML = 'Game ended in a draw!';
                gameActive = false;
                return;
            }

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }

        function restartGame() {
            gameActive = true;
            currentPlayer = 'X';
            board = ['', '', '', '', '', '', '', '', ''];
            statusDisplay.innerHTML = 'TIC TAC TOE';
            document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = '');
        }

        document.querySelectorAll('.cell').forEach((cell, index) => {
            cell.addEventListener('click', () => handleCellClick(cell, index));
        });

        document.getElementById('restart').addEventListener('click', restartGame);
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}