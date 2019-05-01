window.onload = function () {

    let counter, boardTitle;
    fetchBoards();

    function fetchBoards() {
        fetch('/boards', {method: 'GET'})
            .then(function(response) {
                if(response.ok) return response.json();
                throw new Error('Request failed.');
            })
            .then(function(data) {
                console.log(data);
                counter = data.length;
                let arr = Object.keys(data).map(function(k) { return data[k] });
                let trueArr = [];
                for (let i = 0; i < arr.length; i++){
                    trueArr.push(arr[i]);
                }

                if (data.length === 0) {
                    counter = 0;
                }
                counter = data.length;
                fillBoard(data);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    //fetchBoards();

    const container = document.getElementById('boards-container');
    const createBoardBtn = document.getElementById('create-board-btn');

    function createBoard (){
        counter++;
        const boardWrapper = document.createElement('div');
        boardWrapper.className = 'board-wrapper';

        const boardName = document.createElement('p');
        boardName.className = 'board-name';
        boardTitle = `Board ${counter}`;
        boardName.appendChild(document.createTextNode(boardTitle));

        const board = document.createElement('div');
        board.className = 'board';

        const taskCreatorWrapper = document.createElement('div');
        taskCreatorWrapper.className = 'task-creator-wrapper';

        const taskCreator = document.createElement('div');
        taskCreator.className = 'task-creator';

        const inputButton = document.createElement('input');
        inputButton.className = 'add-task-btn';
        inputButton.setAttribute('type', 'button');
        inputButton.setAttribute('value', '+');

        const inputText = document.createElement('input');
        inputText.className = 'task-value';
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('value', '');

        const tasksListWrapper = document.createElement('div');
        tasksListWrapper.className = 'tasks-list-wrapper';

        const tasksList = document.createElement('div');
        tasksList.className = 'tasks-list';

        tasksListWrapper.appendChild(tasksList);
        taskCreatorWrapper.appendChild(inputText);
        taskCreatorWrapper.insertBefore(inputButton, inputText);
        board.appendChild(tasksListWrapper);
        board.insertBefore(taskCreatorWrapper, tasksListWrapper);

        boardWrapper.appendChild(board);
        boardWrapper.insertBefore(boardName, board);

        boardWrapper.addEventListener('click', function(event){
            let btns = document.getElementsByClassName('add-task-btn');
            let tasksValues = document.getElementsByClassName('task-value');
            let currentButton =  event.target;
            let currentBoard = this;

            for (let i = 0; i < btns.length; i++) {
                if (btns[i] === currentButton && tasksValues[i].value.length) {
                    let task = document.createElement('p');
                    task.className = 'task';
                    task.appendChild(document.createTextNode(tasksValues[i].value));
                    currentBoard.appendChild(task);
                    tasksValues[i].value = '';
                }
            }
        });

        container.appendChild(boardWrapper);
        createBoardBtn.removeEventListener('click', function () {
            createBoard();
        });
    };
    function fillBoard(data){
        const quantity = data.length;

        for (let i = 0; i < quantity; i++) {
            const boardWrapper = document.createElement('div');
            boardWrapper.className = 'board-wrapper';

            const boardName = document.createElement('p');
            boardName.className = 'board-name';
            boardTitle = `${data[i].title}`;
            boardName.appendChild(document.createTextNode(boardTitle));

            const board = document.createElement('div');
            board.className = 'board';

            const taskCreatorWrapper = document.createElement('div');
            taskCreatorWrapper.className = 'task-creator-wrapper';

            const taskCreator = document.createElement('div');
            taskCreator.className = 'task-creator';

            const inputButton = document.createElement('input');
            inputButton.className = 'add-task-btn';
            inputButton.setAttribute('type', 'button');
            inputButton.setAttribute('value', '+');

            const inputText = document.createElement('input');
            inputText.className = 'task-value';
            inputText.setAttribute('type', 'text');
            inputText.setAttribute('value', '');

            const tasksListWrapper = document.createElement('div');
            tasksListWrapper.className = 'tasks-list-wrapper';

            const tasksList = document.createElement('div');
            tasksList.className = 'tasks-list';

            tasksListWrapper.appendChild(tasksList);
            taskCreatorWrapper.appendChild(inputText);
            taskCreatorWrapper.insertBefore(inputButton, inputText);
            board.appendChild(tasksListWrapper);
            board.insertBefore(taskCreatorWrapper, tasksListWrapper);

            boardWrapper.appendChild(board);
            boardWrapper.insertBefore(boardName, board);

            boardWrapper.addEventListener('click', function(event){
                let btns = document.getElementsByClassName('add-task-btn');
                let tasksValues = document.getElementsByClassName('task-value');
                let currentButton =  event.target;
                let currentBoard = this;

                for (let i = 0; i < btns.length; i++) {
                    if (btns[i] === currentButton && tasksValues[i].value.length) {
                        let task = document.createElement('p');
                        task.className = 'task';
                        task.appendChild(document.createTextNode(tasksValues[i].value));
                        currentBoard.appendChild(task);
                        tasksValues[i].value = '';
                    }
                }
            });

            container.appendChild(boardWrapper);
            createBoardBtn.removeEventListener('click', function () {
                createBoard();
            });
        }
    };
    createBoardBtn.addEventListener('click', function() {
        createBoard(counter);
        const boardItem = { id: counter, title: boardTitle };
        const options = {
            method: 'POST',
            body: JSON.stringify(boardItem),
            headers: {
                'content-type': 'application/json',
            },
        };


        fetch('/create-board', options)
            .then(function(response) {
                if(response.ok) {
                    console.log('click was recorded');
                    return;
                }
                throw new Error('Request failed.');
            })
            .catch(function(error) {
                console.log(error);
            });
    });
}
