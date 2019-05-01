window.onload = function () {

    let counter, boardTitle;

    fetchAllData();

    function fetchAllData() {
        fetchBoards();
        fetchTasks();
    };

     function fetchBoards(){
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

    function fetchTasks(){
        fetch('/tasks', {method: 'GET'})
            .then(function(response) {
                if(response.ok) return response.json();
                throw new Error('Request failed.');
            })
            .then(function(tasks) {
                let arr = Object.keys(tasks).map(function(k) { return tasks[k] });
                let trueArr = [];
                for (let i = 0; i < arr.length; i++){
                    trueArr.push(arr[i]);
                }
                let tasksCounter = tasks.length;
                console.log('tasks', tasksCounter);

                let boards = document.getElementsByClassName('board');

                if (boards.length) {
                    for (let i = 0; i < boards.length; i++) {
                        if (tasks.length) {

                            const tasksListWrapper = document.getElementsByClassName('tasks-list-wrapper');
                            const tasksList = document.getElementsByClassName('tasks-list');

                            for (let j = 0; j < tasks.length; j++) {
                                const task = document.createElement('p');
                                task.className = 'task';
                                if (i === tasks[j].id) {
                                    task.appendChild(document.createTextNode(tasks[j].title));
                                    tasksList[i].appendChild(task);
                                    tasksListWrapper[i].appendChild(tasksList[i]);
                                }
                                boards[i].appendChild(tasksListWrapper[i]);
                            }
                        }

                    }
                }

                console.log('boards quantity', boards.length);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

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

                        // create task item with credentials
                        const taskItem = { id: i, title: tasksValues[i].value };
                        const options = {
                            method: 'POST',
                            body: JSON.stringify(taskItem),
                            headers: {
                                'content-type': 'application/json',
                            },
                        };

                        fetch('/create-task', options)
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
