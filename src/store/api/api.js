const baseURL = 'https://task-manager-app.pockethost.io/api/collections/tasks/records/'

const apiCall = async (endpoint, method = 'GET', body = null) => {
    const options = {
        method,
        headers: method !== 'GET' ? { 'Content-Type': 'application/json' } : {},
        body: method !== 'GET' ? JSON.stringify(body) : null
    }

    const response = await fetch(baseURL + endpoint, options)
    let data
    if (method !== 'DELETE') {
        data = await response.json()
    }
    else {
        data = response
        console.log(data)
    }
    if (data.code) {
        throw new Error(data.message)
    }
    return data
}


const api = {
    fetchTasks: async (page, perPage) => {
        return apiCall(`?page=${page}&perPage=${perPage}`)
    },
    createTask: async (task) => {
        return apiCall('', 'POST', task)
    },
    updateTask: async (task) => {
        return apiCall(task.id, 'PATCH', task)
    },
    deleteTask: async (id) => {
        return apiCall(id, 'DELETE')
    },
    fetchTaskById: async (id) => {
        return apiCall(id)
    }
}

export default api