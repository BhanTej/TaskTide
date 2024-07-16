document.getElementById('addProject').addEventListener('click', function() {
    const projectName = document.getElementById('projectName').value;
    if (projectName) {
        addProject(projectName);
        document.getElementById('projectName').value = '';
    }
});

document.getElementById('addTask').addEventListener('click', function() {
    const taskName = document.getElementById('taskName').value;
    const projectName = document.getElementById('projectSelect').value;
    if (taskName && projectName) {
        addTask(projectName, taskName);
        document.getElementById('taskName').value = '';
    }
});

function addProject(name) {
    const projectList = document.getElementById('projects');
    const projectSelect = document.getElementById('projectSelect');
    const projectItem = document.createElement('li');
    projectItem.innerText = name;
    projectItem.setAttribute('data-project', name);
    projectList.appendChild(projectItem);

    const projectOption = document.createElement('option');
    projectOption.value = name;
    projectOption.innerText = name;
    projectSelect.appendChild(projectOption);
}

function addTask(projectName, taskName) {
    const projectItems = document.querySelectorAll(`[data-project="${projectName}"]`);
    projectItems.forEach(item => {
        const taskList = item.querySelector('ul') || document.createElement('ul');
        if (!item.contains(taskList)) {
            item.appendChild(taskList);
        }
        const taskItem = document.createElement('li');
        taskItem.innerText = taskName;
        taskList.appendChild(taskItem);
    });
}
