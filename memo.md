domain
  - Cell
    - state
      - blank
      - black
      - white

  - Board
    - data: Cell[][];

  - Othello
    - board: Board;
    - gameStatus
    - userTurn

    - updateBoard: ([number, number]) => Board;
    - getScore: () => [number, number];

store
  - OthelloStore

repository
  - OthelloRepository
