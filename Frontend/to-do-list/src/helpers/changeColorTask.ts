import { Dispatch, SetStateAction } from "react"
import { ITask } from "../interfaces/app.interface"

export const changeColorTask = (visibilityTask:boolean, isChecked:boolean, taskList:ITask, setClassTask:Dispatch<SetStateAction<string>>) => {
    if (visibilityTask == false && !isChecked) {
      if (taskList?.status.includes("Home")) {
        setClassTask("Task taskGreen taskNotVisible")
      } else if (taskList?.status.includes("Work")) {
        setClassTask("Task taskRed taskNotVisible")
      } else {
        setClassTask("Task taskYellow taskNotVisible")
      }
    } else {
      if (taskList?.status.includes("Home")) {
        setClassTask("Task taskGreen taskVisible")
      } else if (taskList?.status.includes("Work")) {
        setClassTask("Task taskRed taskVisible")
      } else {
        setClassTask("Task taskYellow taskVisible")
      }
    }
  }