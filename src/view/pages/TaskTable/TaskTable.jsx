import {useEffect, useState} from "react";
import {ListGroup} from "react-bootstrap";
import axios from "axios";
import Task from "../../../components/Task";
import ReactPaginate from "react-paginate";

export function TaskTable(props) {
    const [tasks, setTasks] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;

    useEffect(function() {
        function fetchTasks() {
            axios.get('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do')
                .then(function(response) {
                    setTasks(response.data);
                })
                .catch(function(error) {
                    console.error("Error fetching tasks", error);
                });
        }

        fetchTasks();
    }, []);

    const handlePageClick = function(data) {
        setCurrentPage(data.selected);
    };

    const indexOfLastTask = (currentPage + 1) * itemsPerPage;
    const indexOfFirstTask = indexOfLastTask - itemsPerPage;
    const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

    return (
        <div className="w-7/12 p-2">
            <h1 className="bg-[#FFFFFF] font-medium mb-0 text-[16px] p-3 border-1 border-[#E4E7EC] rounded-top-2">Tasks</h1>
            <ListGroup className="mb-4">
                {currentTasks.map(function(task, index) {
                    return <Task key={index} task={task} />;
                })}
            </ListGroup>
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                pageCount={Math.ceil(tasks.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </div>
    );
}
