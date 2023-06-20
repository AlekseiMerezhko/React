import { createContext, useContext, useState } from "react";

const TasksContext = createContext(null);

const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
    const [theme, setTheme] = useState("black");

    return (
        <TasksContext.Provider value={{theme, setTheme}}>
                {children}
        </TasksContext.Provider>
    );
}

export function useTasks() {
    return useContext(TasksContext);
}
