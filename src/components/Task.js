import React from 'react';
import {ListGroup, Badge, Button} from 'react-bootstrap';
import {TbBellRinging} from "react-icons/tb";

function Task(props) {
    var task = props.task;

    function getPriorityColor(priority) {
        if (priority === 'HIGH') return '#EB5757';
        if (priority === 'MEDIUM') return '#F2C94C';
        return '#2F80ED';
    }

    function formatDate(dateString) {
        const options = { month: 'short', day: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    return (
        <ListGroup.Item className="flex justify-content-between align-items-center">
            <div className="flex flex-wrap">
                <TbBellRinging
                    style={{backgroundColor: getPriorityColor(task.priority), marginRight: '10px', color: "white"}}
                    className="text-[20px] p-1 rounded"/>
                <span className="text-[14px] w-50 truncate">{task.todo}</span>
                <div className="absolute right-5 text-[12px]">
                    {task.completed === false && <Badge className="ms-2 bg-[#F2C94C1A]" bg={"#F2C94C1A"}
                                                        style={{color: '#F2C94C'}}>In-Progress</Badge>}
                    {task.completed === true &&
                        <Badge bg={"#E8F5E9"} style={{color: '#219653'}} className="ms-2 bg-[#E8F5E9]">Done</Badge>}
                    <span className="ms-3">{formatDate(task.createdAt)}</span>
                </div>
            </div>

            <div className="text-[12px]">
                {task.completed === false &&
                    <Button variant="link" style={{color: '#BC006D', fontSize:'12px'}} className="text-decoration-none ml-4">Mark as
                        done</Button>}
            </div>
        </ListGroup.Item>
    );
}

export default Task;
